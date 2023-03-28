import client from '../client';
import { PortableText } from '@portabletext/react';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';

export default function Home({ data }) {

  const { body, title } = data;

  return (
    <>
      <Layout>
        <section className='mx-0 my-auto w-full h-full text-center'>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} />
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