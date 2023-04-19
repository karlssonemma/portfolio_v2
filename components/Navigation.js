import Link from 'next/link';
import Caption, { CAPTION_CLASSES } from './Caption';
import { useRouter } from 'next/router';
import ExternalLink from './ExternalLink';

export default function Navigation({ closeDrawer, isOpen }) {

    const routes = [
        { href: '/about', label: 'about' },
        { href: '/projects', label: 'work' },
        { href: '/contact', label: 'contact' }
    ];

    return(
        <nav className='
                flex flex-col md:flex-row 
                justify-between items-start md:items-center
                w-full h-full 
                pl-2
                text-black
        '>
            <div className='flex flex-col md:flex-row'>
                {routes.map(route => 
                    <NavLink key={route.label} href={route.href} closeDrawer={closeDrawer} isOpen={isOpen}>
                        {route.label}
                    </NavLink>
                )}
            </div>
            <ExternalLink href='mailto:karlssonemma93@gmail.com'>karlssonemma93@gmail.com</ExternalLink>
        </nav>
    )
};

const NavLink = ({ children, href, closeDrawer, isOpen }) => {

    const { pathname } = useRouter();

    return(
        <Link href={href} onClick={isOpen ? () => closeDrawer() : ''} className={`w-max mr-4 mb-4 md:mb-0 pl-[0.15em] transition border-b-2 border-dotted ${pathname === href ? 'border-black' : 'border-transparent'} hover:border-black`}>
            <p className={`${CAPTION_CLASSES}`}>
                {children}
            </p>
        </Link>
    )
};