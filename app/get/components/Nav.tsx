import NavItem from './NavItem';

const Nav = () => {
  return (
    <nav className='w-5/6 md:w-1/3 border-2 bg-primary rounded-full fixed top-5 left-1/2 translate-x-[-50%] py-1 px-2'>
      <ul className='flex justify-around items-center'>
        <NavItem href='/get/data'>Get Data</NavItem>
        <NavItem href='/get/code'>Get Code</NavItem>
      </ul>
    </nav>
  );
};
export default Nav;
