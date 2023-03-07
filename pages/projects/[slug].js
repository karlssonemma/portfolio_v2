import Caption from '@/components/Caption';
import CONTAINER_STYLES from '@/components/Container';
import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import SkillTag from '@/components/SkillTag';
import { PortableText } from '@portabletext/react';

import { useRouter } from 'next/router';
import client from '../../client';

export default function ProjectsPage({ data, hasError }) {

    const { 
        title,
        body,
        caption,
        gallery,
        githubLink,
        projectLink,
        tags,
        _id
    } = data;

    console.log('DATA', data)
    const router = useRouter();

    if (hasError) {
        return <h1>Error</h1>
    }

    if (router.isFallback) {
        return <h1>No parameter</h1>
    }

    return(
        <Layout>
            <section className={`${CONTAINER_STYLES}`}>
                <Heading size='h2'>{title}</Heading>
                <Caption>{caption}</Caption>
                <PortableText value={body} />
                <article className='py-5'>
                    {tags.map(tag => <SkillTag>{tag}</SkillTag>)}
                </article>
            </section>
            <section className={`${CONTAINER_STYLES}`}>
                
            </section>
        </Layout>
    )
};

export async function getStaticProps(context) {

    const id = context.params.slug;
    const data = await client.fetch(`*[_id == '${id}'][0]{
        title,
        body,
        caption,
        gallery,
        githubLink,
        projectLink,
        tags,
        _id
    }`);
  
    if (!data) {
        return {
            props: { hasError: true },
        }
    }

    return {
      props: {
          data
      }
    }
  
};

export async function getStaticPaths() {

    const data = await client.fetch(`*[_type == 'projects']`);
    const pathsWithParams = data.map(project => ({ params: { slug: project._id } }));
    
    return {
        paths: pathsWithParams,
        fallback: true
    }
};