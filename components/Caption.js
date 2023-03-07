export default function Caption({ children }) {

    return(
        <p className='
            font-sans 
            font-medium
            text-xs
            uppercase 
            inline
            tracking-widest
        '>
            {children}
        </p>
    )
}