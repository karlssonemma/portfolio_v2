import Link from 'next/link';
import Caption from './Caption';

export default function Navigation({ closeDrawer, isOpen }) {

    const routes = [
        { href: '/about', label: 'about' },
        { href: '/projects', label: 'projects' },
        { href: '/contact', label: 'contact' }
    ];

    return(
        <nav className='
                flex flex-col md:flex-row 
                justify-between items-start md:items-center
                w-full h-full 
                pl-2
        '>
            <div className='flex flex-col md:flex-row'>
                {routes.map(route => 
                    <NavLink href={route.href} closeDrawer={closeDrawer} isOpen={isOpen}>
                        {route.label}
                    </NavLink>
                )}
            </div>
            <a href='mailto:karlssonemma93@gmail.com' className=''>
                <Caption>karlssonemma93@gmail.com</Caption>
            </a>
        </nav>
    )
};

const NavLink = ({ children, href, closeDrawer, isOpen }) => {
    return(
        <Link href={href} onClick={isOpen ? () => closeDrawer() : ''} className='pr-4 mb-4 md:mb-0'>
            <Caption>
                {children}
            </Caption>
        </Link>
    )
};