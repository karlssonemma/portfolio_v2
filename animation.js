export const blurIn = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        blur: '100px',
        filter: 'blur(0px)',
        transition: {
            delay: 0.5,
            ease: 'easeOut'
        }
    }
}

export const slideUp = {
    hidden: { y: '120%' },
    visible: { 
        y: '0%',
        transition: {
            delay: 0.7, 
            type: 'spring',
            stiffness: 70,
            damping: 18
        }
    }
}

export const scaleUp = {
    hidden: { scale: 0 },
    visible: { 
        scale: 1,
        transition: { 
            delay: 0.2,
            duration: 0.2,
            type: 'spring',
            stiffness: 140,
            damping: 20
        }
    }
}

// export const animatedItem = {
//     hidden: { y: '150%' },
//     show: { y: '0%', transition: { duration: 0.4, ease: 'easeOut' } }
// }