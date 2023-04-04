export default function Caption({ children }) {

    return(
        <p className='
            font-sans 
            font-medium
            text-xs
            uppercase 
            tracking-[.2em]
            mb-2
        '>
            {children}
        </p>
    )
}