'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// http://shserver.top:8080/test/users/getCode
// Write me a chrome extension code

const message = 'Write me a chrome extension code';

const Code = () => {
  const codeMutation = useMutation({
    mutationKey: ['get', 'code'],
    mutationFn: () => {
      const ticket = localStorage.getItem('ticket');

      return axios.post(
        'http://shserver.top:8080/test/users/getCode',
        {
          message,
        },
        {
          headers: {
            Authorization: `Bearer ${ticket}`,
          },
        }
      );
    },
  });

  return (
    <div>
      <button onClick={() => codeMutation.mutate()}>Get Code</button>
    </div>
  );
};
export default Code;
