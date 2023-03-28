import Header from './Header';
import { motion as m, AnimatePresence } from 'framer-motion';


let px = 'px-8 lg:px-32'
let headerHeight = 'h-16';
let top = 'top-16';

function Layout({ children, path }) {

    return(
        <>
            <Header 
                height={headerHeight}
                px={px}
            />
            <AnimatedFrame>
                <main className={`
                    bg-white
                    relative ${top}
                    min-h-[calc(100vh-4rem)]
                    min-w-screen
                    flex
                    flex-col md:flex-row 
                    justify-between
                    gap-32
                    py-24
                `}>
                    {children}
                </main>
            </AnimatedFrame>
        </>
    )
};

const AnimatedFrame = ({ children }) => {
    return(
        <m.div 
            className='absolute top-0 left-0 w-full h-full'
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            exit={{ opacity: 1 }}
        >
            {children}
        </m.div>
    )
}


export default Layout;