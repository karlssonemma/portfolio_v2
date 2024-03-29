import Head from 'next/head';
import Header from './Header';
import { motion as m } from 'framer-motion';


let px = 'px-8 lg:px-32'
let headerHeight = 'h-16';
let top = 'top-16';

function Layout({ children, bgColor, title }) {

    return(
        <>
            <Head>
                <title>Emma Karlsson · {title}</title>
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon.png' />

            </Head>
            <Header height={headerHeight} px={px} />
            <AnimatedFrame>
                <main className={`
                    ${bgColor}
                    absolute top-0 left-0 right-0
                    min-h-screen
                    min-w-screen
                    flex
                    flex-col md:flex-row 
                    justify-between
                    gap-32
                    pt-44
                    pb-12
                `} style={{ backgroundColor: `${bgColor}` }}>
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
            animate={{ y: 0 }}
            transition={{ 
                duration: 1,
                ease: [.93,.01,.59,.99]
            }}
            exit={{ y: 0 }}
        >
            {children}
        </m.div>
    )
}


export default Layout;