import { NextPage } from 'next';
import WakEnterHeader from '../components/wakenter/WakEnterHeader';
import IsedolHeader from '../components/isedol/IsedolHeader';
// import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return <div className='main'>
    <WakEnterHeader></WakEnterHeader>
  </div>;
};

export default Home;
