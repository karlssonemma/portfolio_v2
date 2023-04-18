import Image from 'next/image';

export default function ImageComp({ data, round }) {

    return(
        <Image 
            className={`w-full object-contain ${round && 'rounded-[100%]'}`}
            src={data.url}
            width={800}
            height={800}
            alt={data.altText}
        />
    )
}