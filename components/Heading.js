import { slideUp } from '@/animation';
import { motion as m } from 'framer-motion';


function Heading({ size, children, as }) {

    const DEFAULT_CLASSES = 'font-medium mb-7 font-serif h-max';

    switch (size) {
        case 'h1':
            return (
                <div className='overflow-hidden'>
                    <m.h1 
                        as={as}
                        className={`${DEFAULT_CLASSES} text-7xl`}
                        variants={slideUp}
                        animate='visible'
                        initial='hidden'
                        custom={8}
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