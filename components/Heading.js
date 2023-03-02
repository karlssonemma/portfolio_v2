

function Heading({ size, children }) {

    switch (size) {
        case 'h1':
            return (
                <h1 className='m-32'>{children}</h1>
            );
            break;
        case 'h2':
        default:
            return (
                <h2>{children}</h2>
            );
    }
}

export default Heading;