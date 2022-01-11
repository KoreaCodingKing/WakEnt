import Head from 'next/head';
import { ReactNode } from 'react';

interface WakEnterMetadataProps {
  title: string
  description?: string
  url?: string
  scope?: string
  image?: string,
  children?: ReactNode
}

export const WakEnterMetadata = ({
  title,
  url = 'https://wak-entertainment.vercel.app/',
  description = 'WAKTAVERSE, 왁타버스의 고유 콘텐츠를 통해 왁타버스 만의 세상을 만들어 갑니다. No.1 Entertainment in Metaverse.',
  scope = 'WAK Entertainment',
  image = '/images/landing.png',
  children
}: WakEnterMetadataProps) => {
  const visibleTitle = !scope ? title : `${title} - ${scope}`;

  return (
    <>
      <Head>
        <title>
          {visibleTitle}
        </title>
        <meta name='description' content={description}></meta>
        <meta
          name='tags'
          content='왁 엔터테인먼트,메타버스,왁타버스,Metaverse,우왁굳,이세계 아이돌,ISEGYE IDOL,고정 멤버'
        ></meta>
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={url}
        />
        <meta property='og:title' content={visibleTitle} />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='og:image'
          content={'https://wak-entertainment.vercel.app' + image}
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://wak-entertainment.vercel.app'
        />
        <meta property='twitter:title' content={visibleTitle} />
        <meta
          property='twitter:description'
          content={description}
        />
        <meta
          property='twitter:image'
          content={'https://wak-entertainment.vercel.app' + image}
        />
        {
          children
        }
      </Head>
    </>
  );
};

export default WakEnterMetadata;
