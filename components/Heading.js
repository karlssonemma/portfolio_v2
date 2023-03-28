
function Heading({ size, children, as }) {

    const DEFAULT_CLASSES = 'font-medium mb-7 font-serif';

    switch (size) {
        case 'h1':
            return (
                <h1 
                    as={as}
                    className={`
                    ${DEFAULT_CLASSES} 
                    text-7xl
                `}>
                    {children}
                </h1>
            );
            break;
        case 'h2':
        default:
            return (
                <h2 
                    as={as}
                    className={`
                    ${DEFAULT_CLASSES} 
                    text-6xl
                `}>
                    {children}
                </h2>
            );
    }
}

export default Heading;