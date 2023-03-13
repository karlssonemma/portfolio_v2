import client from '../client';
import { PortableText } from '@portabletext/react';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import CONTAINER_STYLES from '@/components/Container';

export default function Contact({ data }) {

  const { body, title } = data;

  return (
    <>
      <Layout>
        <section className={`${CONTAINER_STYLES}`}>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} />
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