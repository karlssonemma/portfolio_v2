import { useState } from 'react';
import Link from 'next/link';

import Navigation from './Navigation';
import Caption from './Caption';
import Drawer from './Drawer';
import { AnimatePresence } from 'framer-motion';

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
                <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
            )}
            </AnimatePresence>
            <DesktopHeader height={height} />
            <MobileHeader 
                height={height}
                // openDrawer={openDrawer}
                // closeDrawer={closeDrawer}
                setOpenDrawer={setOpenDrawer}
            />
        </>
    )
};

const DesktopHeader = ({ height }) => {
    return(
        <header className={`${height} ${DEFAULT_STYLES} ${VARIANT_STYLES.desktop}`}>
            <Link href='/' className='font-mono text-sm min-w-max mr-8 mb-2 uppercase'>Emma Karlsson</Link>
            <Navigation />
        </header>
    )
};

const MobileHeader = ({ height, setOpenDrawer }) => {
    return(
        <header className={`${height} ${DEFAULT_STYLES} ${VARIANT_STYLES.mobile}`}>
            <Caption>Emma Karlsson</Caption>
            <button onClick={() => setOpenDrawer((prev) => !prev)}>menu</button>
        </header>
    )
};


export default Header;