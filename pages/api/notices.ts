import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio';
import { Notice } from '../../structs/notices';

const boardURL =
  'https://cafe.naver.com/ArticleList.nhn?search.clubid=27842958&search.menuid=346&search.boardtype=L';

const NumberOnly = /[0-9]+/g;

const getPage = async (page = 1) => {
  const data = await fetch(boardURL + `&search.page=${page}`)
    .then((v) => v.arrayBuffer())
    .then((v) => new TextDecoder('euc-kr').decode(v));

  const $ = cheerio.load(data);

  const pagination = $('.prev-next').find('a');

  let currentPage = -1;
  let nextExist = false;
  let previousExist = false;

  const pages: number[] = [];

  pagination.each((_, el) => {
    const nel = $(el);

    const pageNum = nel.text();
    const nm = pageNum.match(NumberOnly);

    if (nm && nm[0] === pageNum) {
      pages.push(Number(pageNum));

      if (nel.hasClass('on')) {
        currentPage = Number(pageNum);
      }

      return;
    }

    if (nel.hasClass('pgR')) {
      nextExist = true;
    } else if (nel.hasClass('pgL')) {
      previousExist = true;
    }
  });

  const list: Notice[] = [];

  $('.article-board:not(#upperArticleList) tbody')
    .find('tr')
    .each((i, el) => {
      const nel = $(el);

      const title = nel.find('.inner_list a:first-child').text().trim();
      const comments = Number(
        nel
          .find('.inner_list a:last-child')
          .text()
          .trim()
          .replace(/(\[|\])/g, '')
      );

      const id = Number(nel.find('.inner_number').text());
      const date = nel.find('.td_date').text();
      const view = Number(nel.find('.td_view').text());
      const likes = Number(nel.find('.td_likes').text());
      const writer = nel.find('.p-nick').text();

      if (!title) {
        return;
      }

      const data: Notice = {
        id,
        title,
        comments,
        date,
        view,
        likes,
        writer
      };

      list.push(data);
    });

  const result = {
    list,
    page: currentPage,
    pages,
    next: nextExist,
    previous: previousExist
  };

  return result;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const p = req.query['page'];
    const nm = typeof p === 'string' && p.match(NumberOnly);

    let page = 1;
    if (typeof p !== 'undefined' && nm && nm[0] === p && !isNaN(Number(p))) {
      page = Number(p);
    }

    const result = await getPage(page || 1);

    res.setHeader('Cache-Control', 's-maxage=300');

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
};
