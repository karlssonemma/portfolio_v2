import client from '../client';
import { PortableText } from '@portabletext/react';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import CONTAINER_CLASSES from '@/components/Container';
import components from '@/portableTextComponents';

export default function Contact({ data }) {

  const { body, title } = data;

  return (
    <>
      <Layout bgColor='bg-bgContact'>
        <section className={`${CONTAINER_CLASSES}`}>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} components={components} />
        </section>
      </Layout>
    </>
  )
};



export async function getStaticProps() {
  const data = await client.fetch(`
  *[_type == "contactPage"][0]`);

  return {
    props: {
        data
    }
  }

};