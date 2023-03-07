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
        <section className='flex flex-col md:w-2/5 bg-white'>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} />
        </section>
        <ul className='flex flex-col md:w-3/5 bg-white'>
          {slugs.map(slug => (
            <li key={slug._id}>
              <Link href={`projects/${slug._id}`}>{slug.title}</Link>
            </li>
          )
          )}
        </ul>
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