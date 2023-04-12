import CONTAINER_CLASSES from './Container'
import ImageComp from './ImageComp'

import { motion as m } from 'framer-motion';
import { blurIn, scaleUp, slideUp } from '@/animation';

export default function Gallery({ data }) {

    return(
        <section className={`
                ${CONTAINER_CLASSES} 
                md:w-3/5
                md:h-screen
                md:-translate-y-40
                md:overflow-scroll
                hide-scrollbar
                `}>
            <div className='md:pt-36'>
            {data?.map(img => 
                <m.div 
                    className='snap-start w-full h-auto pb-10'
                    variants={blurIn}
                    animate='visible'
                    initial='hidden'
                    custom={5}
                    key={img._key}
                >
                    <ImageComp data={img} />
                </m.div>
            )}
            </div>
        </section>
    )
}