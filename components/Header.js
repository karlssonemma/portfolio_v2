import { useState } from 'react';

import Navigation from './Navigation';
import Caption from './Caption';

const DEFAULT_STYLES = 'bg-gradient-to-b from-white to-transparent w-full fixed top-0 left-0 justify-between items-center z-10';

const VARIANT_STYLES = {
    mobile: 'flex lg:hidden',
    desktop: 'hidden lg:flex'
}

const Header = ({ height }) => {

    const [isOpen, setOpenDrawer] = useState(false);

    const openDrawer = () => setOpenDrawer(true)
    const closeDrawer = () => setOpenDrawer(false)

    return(
        <>
        <Drawer 
            isOpen={isOpen}
        />
        <DesktopHeader 
            height={height}
        />
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
            <Caption>Emma Karlsson</Caption>
            <Navigation />
        </header>
    )
};

const MobileHeader = ({ height, setOpenDrawer }) => {
    return(
        <header className={`${height} ${DEFAULT_STYLES} ${VARIANT_STYLES.mobile}`}>
            <Caption>Emma Karlsson</Caption>
            <button onClick={() => setOpenDrawer((previous) => !previous)}>menu</button>
        </header>
    )
};

const Drawer = ({ isOpen }) => {

    const open = isOpen ? '' : '-translate-x-full';

    return(
        <div className={`w-4/5 h-screen bg-teal absolute transition ease-in-out duration-500 z-20 ${open}`}>
            <Navigation />
        </div>
    )
};


export default Header;