export const blurIn = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: (custom) => ({
        opacity: 1,
        blur: '100px',
        filter: 'blur(0px)',
        transition: {
            delay: custom * 0.2,
            ease: 'easeOut'
        }
    })
}

export const slideUp = {
    hidden: { y: '130%' },
    visible: (custom) => ({ 
        y: '0%',
        transition: {
            duration: 0.5,
            delay: custom * 0.2,
            ease: [0, 0.71, 0.2, 1.01]
        }
    })
}

export const scaleUp = {
    hidden: { scale: 0 },
    visible: (custom) => ({ 
        scale: 1,
        transition: { 
            delay: custom * 0.2,
            duration: 0.2,
            type: 'spring',
            stiffness: 140,
            damping: 20
        }
    })
}

// export const animatedItem = {
//     hidden: { y: '150%' },
//     show: { y: '0%', transition: { duration: 0.4, ease: 'easeOut' } }
// }