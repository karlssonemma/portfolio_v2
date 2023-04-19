import { CAPTION_CLASSES } from './Caption';
import Link from 'next/link';

const InternalLink = ({ href, children }) => {

    return(
        <Link 
            href={href}
            className='block w-max transition border-b-2 border-dotted border-transparent hover:border-black mb-3'
        >
        <p className={`${CAPTION_CLASSES}`}>{children} »</p>
      </Link>
    )
}

export default InternalLink;