import client from '../../client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { motion as m } from 'framer-motion';

import Heading, { HEADER_CLASSES, SUBTITLE_CLASSES } from '@/components/Heading';
import Layout from '@/components/Layout';
import Caption, { CAPTION_CLASSES } from '@/components/Caption';
import CONTAINER_CLASSES from '@/components/Container';
import { container, animatedItem } from '/animation';
import { slideUp, blurIn } from '@/animation';
import components from '@/portableTextComponents';

export default function Projects({ data }) {

  const { pageData, slugs } = data;
  const { body, title } = pageData;

  console.log('projects', data)

  return (
    <>
      <Layout bgColor='bg-bgProjects' title={title}>
        <section className={`${CONTAINER_CLASSES} md:w-2/5`}>
          <Heading size='h1'>{title}</Heading>
          <div className='overflow-hidden'>
            <m.div
              variants={slideUp}
              animate='visible'
              initial='hidden'
            >
              <PortableText value={body} components={components} />
            </m.div>
          </div>
        </section>
        <m.ul 
          className={`${CONTAINER_CLASSES} md:w-2/5`} 
          variants={blurIn} 
          initial='hidden' 
          animate='visible'
          custom={6}
        >
          {slugs.map(item => (
              <ProjectLink item={item} key={item._id} />
          ))}
        </m.ul>
      </Layout>
    </>
  )
};
 
const ProjectLink = ({ item }) => {
  return(
    <m.li className='mb-12'>
      <Link href={`projects/${item.slug.current}`}>
        <m.h2 
          className={`${SUBTITLE_CLASSES} w-auto hover:italic border-b-2 border-black border-dotted`}
          whileHover={{ x: 3 }}
          initial={{ x: 0 }}
          transition={{ ease: 'easeInOut', duration: .2 }}
        >
          {item.title}
        </m.h2>
        <p className={`${CAPTION_CLASSES}`}>{item.caption}</p>
      </Link>
    </m.li>
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
        slug
      }
    }
  `);

  return {
    props: {
        data
    }
  }

};