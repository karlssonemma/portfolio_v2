export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 1.2,
            staggerChildren: 0.1,
            
        }
    }
}

export const animatedItem = {
    hidden: { y: '150%' },
    show: { y: '0%', transition: { duration: 0.4, ease: 'easeOut' } }
}