import client from '../client';
import { PortableText } from '@portabletext/react';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';

export default function Home({ data }) {

  const { body, title } = data;

  return (
    <>
      <Layout>
        {/* <h1>{title}</h1>
        <PortableText value={body} /> */}
        <Heading size='h1'>Hello!</Heading>
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