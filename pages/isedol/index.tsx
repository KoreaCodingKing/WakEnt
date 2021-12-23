import { NextPage } from 'next';
import { useState } from 'react';
import IsedolHeader from '../../components/isedol/IsedolHeader';

const IsedolPage: NextPage = (): JSX.Element => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return <div className='main'>
    <IsedolHeader isOpenMenu={isOpenMenu}></IsedolHeader>
  </div>;
};

export default IsedolPage;
