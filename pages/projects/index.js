import client from '../../client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';

export default function Projects({ data }) {

  const { pageData, slugs } = data;
  const { body, title } = pageData;

  console.log('pageData', slugs)

  return (
    <>
      <Layout>
        <section>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} />
        </section>
        <section>
          {slugs.map(slug => 
            <Link href={`projects/${slug._id}`}>{slug.title}</Link>
          )}
        </section>
      </Layout>
    </>
  )
};

export async function getStaticProps() {
  const data = await client.fetch(`
    {
      'pageData': *[_type == 'projectsPage'][0],
      'slugs':  *[_type == 'projects']
    }
  `);

  return {
    props: {
        data
    }
  }

};