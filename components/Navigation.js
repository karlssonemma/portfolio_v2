import Link from 'next/link';
import Caption from './Caption';

export default function Navigation({ closeDrawer }) {

    return(
        <nav className='
                flex flex-col md:flex-row 
                justify-between items-start md:items-center
                w-full h-full 
                pl-2
                
        '>
            <div className='flex flex-col md:flex-row'>
                <NavLink href='/about' closeDrawer={closeDrawer}>About</NavLink>
                <NavLink href='/projects' closeDrawer={closeDrawer}>Projects</NavLink>
                <NavLink href='/contact' closeDrawer={closeDrawer}>Contact</NavLink>
            </div>
            <a href='mailto:karlssonemma93@gmail.com'>
                <Caption>karlssonemma93@gmail.com</Caption>
            </a>
        </nav>
    )
};

const NavLink = ({ children, href, closeDrawer }) => {
    return(
        <Link href={href} onClick={() => closeDrawer()} className='pr-4 mb-4 md:mb-0'>
            <Caption>
                {children}
            </Caption>
        </Link>
    )
};