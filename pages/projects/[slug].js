import Caption from '@/components/Caption';
import CONTAINER_STYLES from '@/components/Container';
import Gallery from '@/components/Gallery';
import Heading from '@/components/Heading';
import ImageComp from '@/components/ImageComp';
import Layout from '@/components/Layout';
import SkillTag from '@/components/SkillTag';
import ImageBlock from '@/studio/schemas/imageBlock';
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
            <section className={`${CONTAINER_STYLES} md:w-2/5`}>
                <Heading size='h1'>{title}</Heading>
                <Caption>{caption}</Caption>
                <div className='my-7'>
                    <PortableText value={body} />
                </div>
                <article className='py-5 flex flex-wrap w-4/5'>
                    {
                        tags?.map(tag => <SkillTag>{tag}</SkillTag>)
                    }
                </article>
            </section>
            <Gallery data={gallery} />
        </Layout>
    )
};

export async function getStaticProps(context) {

    const id = context.params.slug;
    const data = await client.fetch(`*[_id == '${id}'][0]{
        title,
        body,
        caption,
        gallery[]{
            _key,
            altText,
            'url': asset->url
        },
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