import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { motion as m } from 'framer-motion'

import Navigation from './Navigation';
import Caption from './Caption';
import Drawer from './Drawer';
import Overlay from './Overlay';

const DEFAULT_STYLES = 'w-full fixed top-0 left-0 justify-between items-center z-10';

const VARIANT_STYLES = {
    mobile: 'flex md:hidden',
    desktop: 'hidden md:flex'
}

const Header = ({ height }) => {

    const [isOpen, setOpenDrawer] = useState(false);

    const openDrawer = () => setOpenDrawer(true)
    const closeDrawer = () => setOpenDrawer(false)

    return(
        <>
            <AnimatePresence>
            {isOpen && (
                <>
                    <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
                    <Overlay closeDrawer={closeDrawer} /> 
                </>
            )}
            </AnimatePresence>
            <DesktopHeader height={height} />
            <MobileHeader 
                height={height}
                // openDrawer={openDrawer}
                // closeDrawer={closeDrawer}
                setOpenDrawer={setOpenDrawer}
                isOpen={isOpen}
            />
        </>
    )
};

const DesktopHeader = ({ height }) => {

    return(
        <header className={`${height} ${DEFAULT_STYLES} ${VARIANT_STYLES.desktop}`}>
            <HomeLink />
            <Navigation />
        </header>
    )
};

const MobileHeader = ({ height, setOpenDrawer, isOpen }) => {
    return(
        <header className={`${height} ${DEFAULT_STYLES} ${VARIANT_STYLES.mobile}`}>
            <HomeLink />
            <button onClick={() => setOpenDrawer(prev => (!prev))}>
                <Burger isOpen={isOpen} />
            </button>
        </header>
    )
};

const HomeLink = () => {
    return(
        <Link href='/' className='font-serif text-sm min-w-max mr-16 mb-[6px] tracking-wider'>Emma Karlsson</Link>
    )
}

const Burger = ({ isOpen }) => {

    return(
        <m.ul className='w-6 h-4 flex flex-col justify-between'>
            <m.li 
                className='w-1/2 h-[1px] bg-black' 
                animate={{ 
                    rotate: isOpen ? 45 : 0, 
                    originY: 1, 
                    translateX: isOpen ? 2 : 0, 
                    translateY: isOpen ? 3 : 0 
                }}
            />
            <m.li 
                className='w-full h-[1px] bg-black' 
                animate={{ 
                    rotate: isOpen ? -45 : 0, 
                    originY: 1 
                }} 
                />
            <m.li 
                className='w-1/2 h-[1px] bg-black self-end' 
                animate={{ 
                    rotate: isOpen ? 45 : 0, 
                    originX: 1, 
                    translateX: isOpen ? -3 : 0, 
                    translateY: isOpen ? 1 : 0 
                }} 
            />
        </m.ul>
    )
}


export default Header;