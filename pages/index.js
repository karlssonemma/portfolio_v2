import { PortableText } from '@portabletext/react';
import { motion as m } from 'framer-motion';
import client from '../client';

import { blurIn, slideUp } from '@/animation';
import Heading from '@/components/Heading';
import ImageComp from '@/components/ImageComp';
import Layout from '@/components/Layout';
import components from '@/portableTextComponents';
import InternalLink from '@/components/InternalLink';

export default function Home({ data }) {

  const { body, title, image } = data;

  return (
    <>
      <Layout bgColor='bg-bgLanding' title={title}>
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
              <InternalLink href='/about'>Get to know me</InternalLink>
              <InternalLink href='/projects'>My work</InternalLink>
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