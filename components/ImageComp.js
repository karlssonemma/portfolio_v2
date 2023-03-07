import Image from 'next/image';

export default function ImageComp({ data }) {

    return(
        <Image 
            className='w-full object-contain'
            src={data.url}
            width={800}
            height={800}
            alt={data.altText}
        />
    )
}