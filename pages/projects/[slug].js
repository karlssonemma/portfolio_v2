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
import Link from 'next/link';
import client from '../../client';

export default function ProjectsPage({ data, hasError, context }) {

    const { 
        title,
        body,
        caption,
        gallery,
        githubLink,
        projectLink,
        tags,
        _id
    } = data.data;

    const slugs = data.slugs;

    const router = useRouter();
    console.log('DATA', slugs)

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
                <NextLink slugs={slugs} currentId={_id} />
            </section>
            <Gallery data={gallery} />
        </Layout>
    )
};

const NextLink = ({ slugs, currentId }) => {

    let newSlug;
    let lastIndex = slugs.length - 1;
    let currentPageIndex = slugs.findIndex((slug) => slug._id === currentId)

    if (currentPageIndex == lastIndex) {
        newSlug = slugs[0]._id;
    } else {
        let i = currentPageIndex + 1;
        newSlug = slugs[i]._id;
    }

    console.log('length', currentPageIndex)

    return(
        <Link href={`/projects/${newSlug}`}>Next</Link>
    )
}

export async function getStaticProps(context) {

    const id = context.params.slug;
    const data = await client.fetch(`{
        'data': *[_id == '${id}'][0]{
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
        },
        'slugs':  *[_type == 'projects']{
            title,
            caption,
            _id,
        }
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
        fallback: true,
    }
};