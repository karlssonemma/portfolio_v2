import { motion as m } from 'framer-motion';

const Overlay = ({ closeDrawer }) => {

    return(
        <m.div 
            onClick={() => closeDrawer()} 
            className={`bg-black/20 fixed z-10 top-0 right-0 w-screen h-screen`} 
            key='overlay'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        />
    )
}

export default Overlay;