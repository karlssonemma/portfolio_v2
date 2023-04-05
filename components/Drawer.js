import { AnimatePresence, motion as m } from 'framer-motion';
import Navigation from './Navigation';

const Drawer = ({ isOpen, closeDrawer }) => {

    const open = isOpen ? 'block' : 'hidden';

    return(

        <m.div 
            className={`w-4/5 h-screen bg-teal fixed top-0 left-0 z-20 p-mobile`}
            key='drawer'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
        >
            <Navigation closeDrawer={closeDrawer} isOpen={isOpen} />
        </m.div>
    )
};

export default Drawer;