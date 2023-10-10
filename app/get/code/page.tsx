'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = 'http://shserver.top:8080/test/users/getCode';
const message = 'Write me a chrome extension code';

// try {
//   const response = await fetch(endpoint, {
//     method: 'POST',
//     body: JSON.stringify({ message }),
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${ticket}`,
//     },
//   });
//   if (!response.ok || !response.body) throw response.statusText;

//   const reader = response.body.getReader();
//   const decoder = new TextDecoder();

//   while (true) {
//     const { value, done } = await reader.read();
//     if (done) break;

//     const decodedChunk = decoder.decode(value, { stream: true });
//     console.log(decodedChunk.split('data:'));

//     setData((prevData) => `${prevData}${decodedChunk}`);
//   }
// } catch (err) {
//   console.log('Error', err);
// }

const Code = () => {
  const [data, setData] = useState('');

  const handleFetch = async () => {
    try {
      const ticket = localStorage.getItem('ticket');

      const response = await axios.post(
        endpoint,
        { message },
        { headers: { Authorization: `Bearer ${ticket}` } }
      );

      response.data.split('\n\n').forEach((val: string) => {
        if (!val) return;

        let str = val;
        str = str.substring(5);
        const obj = JSON.parse(str);
        setData((prevData) => `${prevData}${obj.content}`);
      });
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <div className='flex flex-col items-center mt-32'>
      {!data && (
        <button
          className='bg-blue-500 px-6 py-2 rounded-sm'
          onClick={handleFetch}
        >
          Fetch
        </button>
      )}
      <div className='w-full mt-10 px-10'>
        {data &&
          data.split('```').map((chunk, index) => (
            <p key={index} className='border-2 border-white p-2'>
              {chunk}
            </p>
          ))}
      </div>
    </div>
  );
};
export default Code;
