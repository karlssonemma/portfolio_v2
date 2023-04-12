import client from '../client';
import { PortableText } from '@portabletext/react';
import { motion as m } from 'framer-motion';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import ImageComp from '@/components/ImageComp';
import components from '@/portableTextComponents';

import CONTAINER_CLASSES from '@/components/Container';
import { blurIn, scaleUp, slideUp } from '@/animation';
import { HEADER_CLASSES } from '@/components/Heading';

export default function About({ data }) {

  const { body, title, image } = data;

  console.log('ABOut', data)
  const router = useRouter()
  console.log('ROUTWR', router)


  return (
    <>
      <Layout bgColor='bg-bgAbout'>
        <section className={`${CONTAINER_CLASSES} md:w-2/5`}>
          <Heading size='h1'>{title}</Heading>
          <m.div>
            <PortableText value={body} components={components} />
          </m.div>
        </section>
          <m.section 
            className={`${CONTAINER_CLASSES} md:w-2/5`}
            variants={scaleUp}
            custom={5}
            initial='hidden' 
            animate='visible'
          >
          <ImageComp data={image} />
        </m.section>
      </Layout>
    </>
  )
};

export async function getStaticProps() {
  const data = await client.fetch(`
  *[_type == "aboutPage"][0]{
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