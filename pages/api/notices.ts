import type { NextApiRequest, NextApiResponse } from 'next';
import cheerio from 'cheerio';
import { Notice } from '../../structs/notices';

const urls = [
  {
    tab: '우왁굳',
    url: 'https://cafe.naver.com/ArticleList.nhn?search.clubid=27842958&search.menuid=346&search.boardtype=L'
  },
  {
    tab: '전체',
    url: 'https://cafe.naver.com/steamindiegame?iframe_url=/ArticleList.nhn%3Fsearch.clubid=27842958%26search.menuid=345%26search.boardtype=L'
  },
  {
    tab: '아이네',
    url: 'https://cafe.naver.com/steamindiegame?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=27842958%26search.menuid=345%26search.media=0%26search.searchdate=all%26search.defaultValue=1%26userDisplay=15%26search.option=0%26search.sortBy=date%26search.searchBy=0%26search.query=%BE%C6%C0%CC%B3%D7%26search.viewtype=title'
  },
  {
    tab: '징버거',
    url: 'https://cafe.naver.com/steamindiegame?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=27842958%26search.menuid=345%26search.media=0%26search.searchdate=all%26search.defaultValue=1%26userDisplay=15%26search.option=0%26search.sortBy=date%26search.searchBy=3%26search.query=%C2%A1%B9%F6%B0%C5%26search.viewtype=title'
  },
  {
    tab: 'lilpa',
    url: 'https://cafe.naver.com/steamindiegame?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=27842958%26search.menuid=345%26search.media=0%26search.searchdate=all%26search.defaultValue=1%26userDisplay=15%26search.option=0%26search.sortBy=date%26search.searchBy=3%26search.query=lilpa%26search.viewtype=title'
  },
  {
    tab: '주르르',
    url: 'https://cafe.naver.com/steamindiegame?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=27842958%26search.menuid=345%26search.media=0%26search.searchdate=all%26search.defaultValue=1%26userDisplay=15%26search.option=0%26search.sortBy=date%26search.searchBy=3%26search.query=%C1%D6%B8%A3%B8%A3%26search.viewtype=title'
  },
  {
    tab: '고세구',
    url: 'https://cafe.naver.com/steamindiegame?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=27842958%26search.menuid=345%26search.media=0%26search.searchdate=all%26search.defaultValue=1%26userDisplay=15%26search.option=0%26search.sortBy=date%26search.searchBy=3%26search.query=%B0%ED%BC%BC%B1%B8%26search.viewtype=title'
  },
  {
    tab: '비챤',
    url: 'https://cafe.naver.com/steamindiegame?iframe_url=/ArticleSearchList.nhn%3Fsearch.clubid=27842958%26search.menuid=345%26search.media=0%26search.searchdate=all%26search.defaultValue=1%26userDisplay=15%26search.option=0%26search.sortBy=date%26search.searchBy=3%26search.query=%BA%F1%C3%AE%26search.viewtype=title'
  }
];


const NumberOnly = /[0-9]+/g;

const getPage = async (page = 1, tab: string) => {

  const boardURL = urls.find((url) => url.tab === tab)!.url;

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
    const tab = req.query['tab'].toString();
    const nm = typeof p === 'string' && p.match(NumberOnly);

    let page = 1;
    if (typeof p !== 'undefined' && nm && nm[0] === p && !isNaN(Number(p))) {
      page = Number(p);
    }

    const result = await getPage(page || 1, tab);

    res.setHeader('Cache-Control', 's-maxage=300');

    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
};
