'use client';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Cookies from 'universal-cookie';
import axios from 'axios';

import SubmitButton from './SubmitButton';

interface Inputs {
  username: string;
  password: string;
}

const Form = () => {
  const { push } = useRouter();
  const { register, handleSubmit, formState } = useForm<Inputs>();

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async ({ username, password }: Inputs) =>
      axios.post('http://shserver.top:8080/test/users/login', {
        uname: username,
        pass: password,
      }),
    onSuccess: (data) => {
      push('/get/data');

      localStorage.setItem('ticket', data.data.ticket);
      const cookies = new Cookies();
      cookies.set('ticket', data.data.ticket);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) =>
    loginMutation.mutate({ username, password });

  return (
    <form
      id='login-form'
      className='p-3 flex flex-col [&>*]:mb-5 md:[&>*]:mb-8 border-2 border-secondary rounded-md md:px-10'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='text-center'>
        <h2 className='text-xl md:text-2xl'>Login</h2>
      </div>
      <div className='flex flex-col'>
        <label htmlFor='username'>Username:</label>
        <input
          id='username'
          type='text'
          placeholder='Username'
          className='py-1 px-3 rounded-sm text-black'
          {...register('username', { required: true })}
        />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='password'>Password: </label>
        <input
          id='password'
          type='password'
          placeholder='Password'
          className='py-1 px-3 rounded-sm text-black'
          {...register('password', { required: true })}
        />
      </div>
      <div>
        <SubmitButton
          disabled={!formState.isValid || loginMutation.isLoading}
          form='login-form'
        >
          {loginMutation.isLoading ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </div>
      {loginMutation.isError && (
        <p className='text-xs text-red-500 md:text-base'>
          {/* @ts-ignore */}
          {loginMutation.error && loginMutation.error.response.data.message}
        </p>
      )}
    </form>
  );
};
export default Form;
