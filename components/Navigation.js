import Link from 'next/link';
import Caption from './Caption';

export default function Navigation() {

    return(
        <nav className='flex flex-col lg:flex-row'>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/projects'>Projects</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
        </nav>
    )
};

const NavLink = ({ children, href }) => {
    return(
        <Link href={href} className='ml-2'>
            <Caption>
                {children}
            </Caption>
        </Link>
    )
};