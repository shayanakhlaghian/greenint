import Nav from './components/Nav';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <div className='mt-20'>{children}</div>
    </>
  );
};
export default Layout;
