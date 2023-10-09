import Link from 'next/link';

const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className='py-1 px-3 hover:bg-secondary rounded-full hover:text-primary duration-100 cursor-pointer text-sm md:text-base'>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavItem;
