import { PortableText } from '@portabletext/react';
import { motion as m } from 'framer-motion';
import Link from 'next/link';
import client from '../client';

import { blurIn, slideUp } from '@/animation';
import Caption from '@/components/Caption';
import Heading from '@/components/Heading';
import ImageComp from '@/components/ImageComp';
import Layout from '@/components/Layout';
import components from '@/portableTextComponents';

export default function Home({ data }) {

  const { body, title, image } = data;

  console.log('homepage', data)

  return (
    <>
      <Layout bgColor='bg-bgLanding'>
        <section className='max-h-screen w-full md:w-1/2 lg:w-2/5 h-full md:self-center'>
          <Heading size='h1'>{title}</Heading>
          <m.div className='h-max overflow-hidden'>
            <m.div
              variants={slideUp}
              animate='visible'
              initial='hidden'
              custom={9}
            >
             <PortableText value={body} components={components} />
             <div className='mt-10'>
              <CtaLink href='/about'>About me »</CtaLink>
              <CtaLink href='/about'>My work »</CtaLink>
             </div>
            </m.div>
          </m.div>
        </section>
        <section className='lg:w-1/3 md:mr-10'>
          <div className='overflow-hidden'>
            <m.div
              variants={blurIn}
              animate='visible'
              initial='hidden'
              custom={6}
            >
             <ImageComp data={image} round={true} />
            </m.div>
          </div>
        </section>
      </Layout>
    </>
  )
};

const CtaLink = ({ href, children }) => {
  return(
    <Link 
      href={href}
      className='block w-max transition border-b-2 border-dotted border-transparent hover:border-black mb-2'
    >
      <Caption>{children}</Caption>
    </Link>
  )
}

export async function getStaticProps() {
  const data = await client.fetch(`
  *[_type == "landingPage" && _id == "landingPage"][0]{
    title,
    body,
    'image': {
      'altText': image.altText,
      'url': image.asset->url
    }
  }`);

  return {
    props: {
        data
    }
  }

};