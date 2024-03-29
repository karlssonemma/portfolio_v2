

export default function SkillTag({ children }) {
    return(
        <p className='
            w-max
            py-3
            px-6
            mr-5
            my-2 
            bg-transparent 
            font-mono
            text-xs
            font-light 
            rounded-[30px]
            border
            border-black
        '>
            {children}
        </p>
    )
}