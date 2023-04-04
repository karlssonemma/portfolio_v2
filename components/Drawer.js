import { AnimatePresence, motion as m } from 'framer-motion';
import Navigation from './Navigation';

const Drawer = ({ isOpen, closeDrawer }) => {

    const open = isOpen ? 'block' : 'hidden';

    return(
        <>
        <m.div 
            className={`w-4/5 h-screen bg-teal fixed top-0 left-0 z-20 p-mobile`}
            key='drawer'
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
        >
            <Navigation closeDrawer={closeDrawer} />
        </m.div>
        {isOpen && (
            <m.div 
                onClick={() => closeDrawer()} 
                className={`bg-black/20 absolute z-10 top-0 right-0 w-screen h-screen`} 
                key='overlay'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
            />
        )}
        </>
    )
};

export default Drawer;