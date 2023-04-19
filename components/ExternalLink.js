import { CAPTION_CLASSES } from './Caption';
import Arrow from './Arrow';


const ExternalLink = ({ href, children }) => {

    return(
        <a href={href} target='_blank' className={`${CAPTION_CLASSES} transition border-b border-solid border-black`}>
            {children}<Arrow />
        </a>
    )
}

export default ExternalLink;