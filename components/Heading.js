import { motion as m } from 'framer-motion';


function Heading({ size, children, as }) {

    const DEFAULT_CLASSES = 'font-medium mb-7 font-serif';

    switch (size) {
        case 'h1':
            return (
                <div className='overflow-hidden'>
                    <m.h1 
                        as={as}
                        className={`${DEFAULT_CLASSES} text-7xl`}
                        animate={{ y: '0%' }}
                        initial={{ y: '120%' }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {children}
                    </m.h1>
                </div>
            );
            break;
        case 'h2':
        default:
            return (
                <h2 
                    as={as}
                    className={`${DEFAULT_CLASSES} text-6xl`}
                >
                    {children}
                </h2>
            );
    }
}

export default Heading;