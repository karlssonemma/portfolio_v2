import Link from 'next/link';
import Caption from './Caption';

export default function Navigation() {

    return(
        <nav className='
                flex flex-col md:flex-row 
                justify-between md:items-center items-start
                w-full h-full 
                pl-2 
        '>
            <div className='flex flex-col md:flex-row'>
                <NavLink href='/about'>About</NavLink>
                <NavLink href='/projects'>Projects</NavLink>
                <NavLink href='/contact'>Contact</NavLink>
            </div>
            <a href='mailto:karlssonemma93@gmail.com'>
                <Caption>karlssonemma93@gmail.com</Caption>
            </a>
        </nav>
    )
};

const NavLink = ({ children, href }) => {
    return(
        <Link href={href} className='pr-4'>
            <Caption>
                {children}
            </Caption>
        </Link>
    )
};