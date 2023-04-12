import client from '../client';
import { PortableText } from '@portabletext/react';
import { motion as m } from 'framer-motion';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import components from '@/portableTextComponents';
import { slideUp } from '@/animation';

export default function Home({ data }) {

  const { body, title } = data;

  return (
    <>
      <Layout bgColor='bg-bgLanding'>
        <section className='mx-0 my-auto w-full h-full text-center'>
          <Heading size='h1'>{title}</Heading>
          <m.div className='h-max overflow-hidden'>
            <m.div
              variants={slideUp}
              animate='visible'
              initial='hidden'
              custom={9}
            >
             <PortableText value={body} components={components} />
            </m.div>
          </m.div>
        </section>
      </Layout>
    </>
  )
};

export async function getStaticProps() {
  const data = await client.fetch(`
  *[_type == "landingPage"][0]`);

  return {
    props: {
        data
    }
  }

};