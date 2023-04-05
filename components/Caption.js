export default function Caption({ children }) {

    return(
        <p className='
            font-mono 
            font-medium
            text-xs
            uppercase 
            tracking-[.2em]
            mb-1
        '>
            {children}
        </p>
    )
}

export const CAPTION_CLASSES = 'font-mono font-medium text-xs uppercase tracking-[.2em] mb-1';