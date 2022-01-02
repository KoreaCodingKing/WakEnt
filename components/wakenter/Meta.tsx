import Head from "next/head";

interface WakEnterMetadataProps {
  title: string
}

export const WakEnterMetadata = ({ title }: WakEnterMetadataProps) => {
  return (
    <>
      <Head>
        <title>{title} - WAK Entertainment</title>
        <meta
          name='description'
          content='WAKTAVERSE, 왁타버스의 고유 콘텐츠를 통해 왁타버스 만의 세상을 만들어 갑니다. No.1 Entertainment in Metaverse.'
        ></meta>
        <meta
          name='tags'
          content='왁 엔터테인먼트,메타버스,왁타버스,Metaverse,우왁굳,이세계 아이돌,ISEGYE IDOL,고정 멤버'
        ></meta>
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://wak-entertainment.vercel.app/'
        />
        <meta property='og:title' content='WAK Entertainment' />
        <meta
          property='og:description'
          content='WAKTAVERSE, 왁타버스의 고유 콘텐츠를 통해 왁타버스 만의 세상을 만들어 갑니다. No.1 Entertainment in Metaverse.'
        />
        <meta
          property='og:image'
          content='https://wak-entertainment.vercel.app/images/landing.png'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://wak-entertainment.vercel.app/'
        />
        <meta property='twitter:title' content='WAK Entertainment' />
        <meta
          property='twitter:description'
          content='WAKTAVERSE, 왁타버스의 고유 콘텐츠를 통해 왁타버스 만의 세상을 만들어 갑니다. No.1 Entertainment in Metaverse.'
        />
        <meta
          property='twitter:image'
          content='https://wak-entertainment.vercel.app/images/landing.png'
        />
      </Head>
    </>
  );
};

export default WakEnterMetadata;