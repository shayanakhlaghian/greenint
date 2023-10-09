const SubmitButton = ({
  children,
  disabled,
  form,
}: {
  children: React.ReactNode;
  disabled: boolean;
  form: string;
}) => {
  return (
    <button
      type='submit'
      form={form}
      className='border-2 rounded-full border-secondary text-secondary px-4 py-1 hover:bg-secondary hover:text-primary disabled:cursor-not-allowed hover:disabled:border-gray-500 hover:disabled:bg-gray-500'
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default SubmitButton;
