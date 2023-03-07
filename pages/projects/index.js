import client from '../../client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import Caption from '@/components/Caption';
import CONTAINER_STYLES from '@/components/Container';

export default function Projects({ data }) {

  const { pageData, slugs } = data;
  const { body, title } = pageData;

  console.log('projects', data)

  return (
    <>
      <Layout>
        <section className={`${CONTAINER_STYLES} md:w-2/5`}>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} />
        </section>
        <ul className={`${CONTAINER_STYLES} md:w-3/5`}>
          {slugs.map(item => (
              <ProjectLink item={item} />
          ))}
        </ul>
      </Layout>
    </>
  )
};

const ProjectLink = ({ item }) => {
  return(
    <li key={item._id} className='mb-12'>
      <Link href={`projects/${item._id}`}>
        <Heading size='h2'>{item.title}</Heading>
        <Caption>{item.caption}</Caption>
      </Link>
    </li>
  );
};

export async function getStaticProps() {
  const data = await client.fetch(`
    {
      'pageData': *[_type == 'projectsPage'][0]{
        title,
        body
      },
      'slugs':  *[_type == 'projects']{
        title,
        caption,
        _id,
      }
    }
  `);

  return {
    props: {
        data
    }
  }

};