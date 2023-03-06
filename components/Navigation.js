import Link from 'next/link';

export default function Navigation() {

    return(
        <nav className=''>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/projects'>Projects</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
        </nav>
    )
};

const NavLink = ({ children, href }) => {
    return(
        <Link href={href} className='ml-2'>
            {children}
        </Link>
    )
};