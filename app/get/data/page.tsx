import { cookies } from 'next/headers';
import axios from 'axios';

const Data = async () => {
  const nextCookies = cookies();
  const ticket = nextCookies.get('ticket')?.value;

  let html: string | undefined;
  try {
    const res = await axios.get('http://shserver.top:8080/test/users/getData', {
      headers: {
        Authorization: `Bearer ${ticket}`,
      },
    });

    html = res.data.result;
  } catch (err) {
    console.log('Error', err);
  }

  const matcher = html?.match(/<i>(.*?)<\/i>/)?.[0];
  const newHtml = html?.replace(/<i>(.*?)<\/i>/, '');

  return (
    <div className='mt-32 mx-auto w-full md:w-1/2 text-center [&>*]:mb-5'>
      <div dangerouslySetInnerHTML={{ __html: newHtml || <span></span> }} />
      {matcher}
    </div>
  );
};
export default Data;
