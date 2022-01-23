import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio';
import { Notice } from '../../structs/notices';

export const NoticeSources = [
  {
    name: 'ISEGYE IDOL',
    url: 'https://cafe.naver.com/ArticleList.nhn?search.clubid=27842958&search.menuid=346&search.boardtype=L',
  },
  {
    name: 'ALL MEMBERS',
    url: 'https://cafe.naver.com/ArticleList.nhn?search.clubid=27842958&search.menuid=345&search.boardtype=L',
  },
  {
    name: '아이네',
    url: 'https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=27842958&search.menuid=345&search.media=0&search.searchdate=all&search.defaultValue=1&userDisplay=15&search.option=0&search.sortBy=date&search.searchBy=0&search.query=%BE%C6%C0%CC%B3%D7&search.viewtype=title',
  },
  {
    name: '징버거',
    url: 'https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=27842958&search.menuid=345&search.media=0&search.searchdate=all&search.defaultValue=1&userDisplay=15&search.option=0&search.sortBy=date&search.searchBy=3&search.query=%C2%A1%B9%F6%B0%C5&search.viewtype=title',
  },
  {
    name: '릴파',
    url: 'https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=27842958&search.menuid=345&search.media=0&search.searchdate=all&search.defaultValue=1&userDisplay=15&search.option=0&search.sortBy=date&search.searchBy=3&search.query=%B8%B1%C6%C4&search.viewtype=title',
  },
  {
    name: '주르르',
    url: 'https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=27842958&search.menuid=345&search.media=0&search.searchdate=all&search.defaultValue=1&userDisplay=15&search.option=0&search.sortBy=date&search.searchBy=3&search.query=%C1%D6%B8%A3%B8%A3&search.viewtype=title',
  },
  {
    name: '고세구',
    url: 'https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=27842958&search.menuid=345&search.media=0&search.searchdate=all&search.defaultValue=1&userDisplay=15&search.option=0&search.sortBy=date&search.searchBy=3&search.query=%B0%ED%BC%BC%B1%B8&search.viewtype=title',
  },
  {
    name: '비챤',
    url: 'https://cafe.naver.com/ArticleSearchList.nhn?search.clubid=27842958&search.menuid=345&search.media=0&search.searchdate=all&search.defaultValue=1&userDisplay=15&search.option=0&search.sortBy=date&search.searchBy=3&search.query=%BA%F1%C3%AE&search.viewtype=title',
  },
];

const NumberOnly = /[0-9]+/g;

const getPage = async (page = 1, tab: number) => {
  const boardURL = NoticeSources[tab].url;

  if (!boardURL) {
    throw new Error('올바르지 않은 데이터입니다.');
  }

  const data = await fetch(boardURL + `&search.page=${page}`)
    .then((v) => v.arrayBuffer())
    .then((v) => new TextDecoder('euc-kr').decode(v));

  const $ = cheerio.load(data);

  if (!$.text().trim().length) {
    throw new Error('서버에서 빈 페이지를 반환했습니다. 네이버에서 차단당했을 가능성이 있으니 나중에 다시 시도하세요.');
  }

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

      if (!title) {
        return;
      }

      const comments = Number(
        nel
          .find('.inner_list a.cmt')
          .text()
          .trim()
          .replace(/(\[|\])/g, '')
      );

      const id = Number(nel.find('.inner_number').text());
      const date = nel.find('.td_date').text();
      const view = Number(nel.find('.td_view').text());
      const likes = nel.find('.td_likes').text();
      const writer = nel.find('.p-nick').text();

      const data: Notice = {
        id,
        title,
        comments,
        date,
        view,
        likes: likes.length ? Number(likes) : undefined,
        writer,
      };

      list.push(data);
    });

  const result = {
    list,
    page: currentPage,
    pages,
    next: nextExist,
    previous: previousExist,
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

    let tab = 0;
    const tabMatch =
      typeof req.query['tab'] === 'string' && req.query['tab'].match(NumberOnly);

    if (
      typeof req.query['tab'] !== 'undefined' &&
      tabMatch &&
      tabMatch[0] === req.query['tab'] &&
      !isNaN(Number(req.query['tab']))
    ) {
      tab = Number(req.query['tab']);
    }

    const result = await getPage(page || 1, tab);

    res.setHeader('Cache-Control', 's-maxage=300');

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
};
