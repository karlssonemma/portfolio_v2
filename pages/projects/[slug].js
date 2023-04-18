import { CAPTION_CLASSES } from '@/components/Caption';
import CONTAINER_CLASSES from '@/components/Container';
import Gallery from '@/components/Gallery';
import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import SkillTag from '@/components/SkillTag';
import { PortableText } from '@portabletext/react';
import components from '@/portableTextComponents';

import { useRouter } from 'next/router';
import Link from 'next/link';
import client from '../../client';
import { motion as m } from 'framer-motion';
import Arrow from '@/components/Arrow';
import InternalLink from '@/components/InternalLink';

export default function ProjectsPage({ data, hasError }) {

    const { 
        title,
        body,
        caption,
        gallery,
        githubLink,
        liveLink,
        tags,
        _id
    } = data.project;

    console.log('tags', data)

    const slugs = data.slugs;
    const router = useRouter();

    // let colors = ['bg-[#CACACC]', 'bg-[#98A683]', 'bg-[#A2ABB2]'];
    // const [bgColor, setBgColor] = useState('bg-[#818F97]')
    
    // useEffect(() => {
    //     let i = slugs.findIndex((slug) => slug._id === _id);
    //     setBgColor(colors[i]);
    // }, [])
    

    if (hasError) {
        return <h1>Error</h1>
    }

    if (router.isFallback) {
        return <h1>No parameter</h1>
    }


    return(
        <Layout bgColor={`bg-[#A2ABB2]`}>
            <section className={`${CONTAINER_CLASSES} md:w-2/5`}>
                <Heading size='h1'>{title}</Heading>
                <p className={`${CAPTION_CLASSES}`}>{caption}</p>
                <div className='my-7'>
                    <PortableText value={body} components={components} />
                </div>
                {(githubLink || liveLink) &&
                    <div className='mb-7'>
                        {githubLink && <ProjectLinks href={githubLink} label='github' />}
                        {liveLink && <ProjectLinks href={liveLink} label='live' />}
                    </div>
                }
                {tags && 
                    <article className='flex flex-wrap w-4/5 md:w-full items-center mb-14'>
                        {tags?.map(tag => <SkillTag key={tag}>{tag}</SkillTag>)}
                    </article>
                }
                <NextLink slugs={slugs} currentSlug={_id} />
            </section>
            <Gallery data={gallery} />
        </Layout>
    )
};

const ProjectLinks = ({ href, label }) => {
    return(
        <a 
            href={href} 
            target='_blank' 
            className={`mr-4 w-max pl-[0.15em] transition border-b border-solid border-black ${CAPTION_CLASSES}`}
        >
            {label}
            <Arrow />
        </a>
    )
}

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
        <InternalLink href={`/projects/${nextProject.slug.current}`}>
            {`${nextProject.title} »`}
        </InternalLink>
    )
}

export async function getStaticProps(context) {

    const id = context.params.slug;
    const data = await client.fetch(`{
        'project': *[slug.current == '${id}'][0]{
            title,
            body,
            caption,
            gallery[]{
                _key,
                altText,
                'url': asset->url
            },
            githubLink,
            liveLink,
            tags,
            _id,
            slug
        },
        'slugs':  *[_type == 'projects']{
            title,
            caption,
            _id,
            slug
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
    const pathsWithParams = data.map(project => ({ params: { slug: project.slug.current } }));
    
    return {
        paths: pathsWithParams,
        fallback: false,
    }
};