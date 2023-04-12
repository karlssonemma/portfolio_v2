import Caption, { CAPTION_CLASSES } from '@/components/Caption';
import CONTAINER_CLASSES from '@/components/Container';
import Gallery from '@/components/Gallery';
import Heading from '@/components/Heading';
import ImageComp from '@/components/ImageComp';
import Layout from '@/components/Layout';
import SkillTag from '@/components/SkillTag';
import ImageBlock from '@/studio/schemas/imageBlock';
import { PortableText } from '@portabletext/react';
import Text from '@/components/Text';
import components from '@/portableTextComponents';

import { useRouter } from 'next/router';
import Link from 'next/link';
import client from '../../client';
import { motion as m } from 'framer-motion';
import { scaleUp } from '@/animation';
import Arrow from '@/components/Arrow';
import { useEffect, useState } from 'react';

export default function ProjectsPage({ data, hasError, context, paths }) {

    const { 
        title,
        body,
        caption,
        gallery,
        githubLink,
        projectLink,
        tags,
        _id
    } = data.project;

    console.log('tags', tags)

    const slugs = data.slugs;
    const router = useRouter();

    let colors = ['bg-[#CACACC]', 'bg-[#98A683]', 'bg-[#A2ABB2]'];
    const [bgColor, setBgColor] = useState('bg-[#818F97]')
    
    useEffect(() => {
        let i = slugs.findIndex((slug) => slug._id === _id);
        setBgColor(colors[i]);
    }, [])
    

    if (hasError) {
        return <h1>Error</h1>
    }

    if (router.isFallback) {
        return <h1>No parameter</h1>
    }


    return(
        <Layout bgColor={`${bgColor}`}>
            <section className={`${CONTAINER_CLASSES} md:w-2/5`}>
                <Heading size='h1'>{title}</Heading>
                <p className={`${CAPTION_CLASSES}`}>{caption}</p>
                <div className='my-7'>
                    <PortableText value={body} components={components} />
                </div>
                <div>
                    {githubLink && (
                        <a href={githubLink} target='_blank' className={`mr-4 w-max pl-[0.15em] transition border-b border-solid border-black ${CAPTION_CLASSES}`}>
                            Github<Arrow />
                        </a>
                    )}
                    {projectLink && (
                        <a href={projectLink} target='_blank' className={` w-max pl-[0.15em] transition border-b border-solid border-black ${CAPTION_CLASSES}`}>
                        Live<Arrow />
                    </a>
                    )}
                </div>
                <article className='py-7 flex flex-wrap w-4/5'>
                    {
                        tags?.map(tag => <SkillTag key={tag}>{tag}</SkillTag>)
                    }
                </article>
                <NextLink slugs={slugs} currentSlug={_id} />
            </section>
            <Gallery data={gallery} />
        </Layout>
    )
};

const NextLink = ({ slugs, currentSlug }) => {

    let nextProject;
    let currentProjectIndex = slugs.findIndex((slug) => slug._id === currentSlug)

    if (currentProjectIndex == (slugs.length - 1)) {
        nextProject = slugs[0];
    } else {
        let i = currentProjectIndex + 1;
        nextProject = slugs[i];
    }

    return(
        <Link href={`/projects/${nextProject._id}`} className='font-serif text-lg tracking-wider transition border-b-2 border-dotted border-transparent hover:border-black'>
            <Caption>{`${nextProject.title} >>`}</Caption>
        </Link>
    )
}

export async function getStaticProps(context) {

    const id = context.params.slug;
    const data = await client.fetch(`{
        'project': *[_id == '${id}'][0]{
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
        fallback: false,
    }
};