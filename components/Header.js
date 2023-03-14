import { useState } from 'react';

import Navigation from './Navigation';
import Caption from './Caption';
import Drawer from './Drawer';

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
            <Drawer isOpen={isOpen} closeDrawer={closeDrawer} />
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
            <Caption>Emma Karlsson</Caption>
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