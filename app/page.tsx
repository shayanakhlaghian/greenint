'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Form from './components/Form';

const Home = () => {
  const { replace } = useRouter();

  useEffect(() => {
    if (localStorage.getItem('ticket')) {
      replace('/get/data');
    }
  }, []);

  return (
    <div className='mx-auto w-[90%] md:w-1/3 mt-10'>
      <Form />
    </div>
  );
};

export default Home;
