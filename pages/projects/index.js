import client from '../../client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { motion as m } from 'framer-motion';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import Caption from '@/components/Caption';
import CONTAINER_STYLES from '@/components/Container';
import { container, animatedItem } from '/animation';
import { slideUp, blurIn } from '@/animation';

export default function Projects({ data }) {

  const { pageData, slugs } = data;
  const { body, title } = pageData;

  console.log('projects', data)

  return (
    <>
      <Layout bgColor='bg-[#CCD5AE]'>
        <section className={`${CONTAINER_STYLES} md:w-2/5`}>
          <Heading size='h1'>{title}</Heading>
          <div className='overflow-hidden'>
            <m.div
              variants={slideUp}
              animate='visible'
              initial='hidden'
            >
              <PortableText value={body} />
            </m.div>
          </div>
        </section>
        <m.ul 
          className={`${CONTAINER_STYLES} md:w-2/5`} 
          variants={blurIn} 
          initial='hidden' 
          animate='visible'
        >
          {slugs.map(item => (
              <ProjectLink item={item} />
          ))}
        </m.ul>
      </Layout>
    </>
  )
};

const ProjectLink = ({ item }) => {
  return(
    <div className='overflow-hidden'>
      <m.li key={item._id} className='mb-12'>
        <Link href={`projects/${item._id}`}>
          <Heading size='h2'>{item.title}</Heading>
          <Caption>{item.caption}</Caption>
        </Link>
      </m.li>
    </div>
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