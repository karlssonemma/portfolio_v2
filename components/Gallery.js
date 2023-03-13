import CONTAINER_STYLES from './Container'
import ImageComp from './ImageComp'

export default function Gallery({ data }) {

    return(
        <section className={`
                ${CONTAINER_STYLES} 
                md:w-3/5
                md:h-screen
                md:-translate-y-40
                md:overflow-scroll
                hide-scrollbar
                `}>
            <div className='md:pt-36'>
            {data?.map(img => 
                <div className='snap-start w-full h-auto pb-10'>
                    <ImageComp data={img} />
                </div>
            )}
            </div>
        </section>
    )
}