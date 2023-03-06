import Heading from '@/components/Heading';
import Layout from '@/components/Layout';

import { useRouter } from 'next/router';
import client from '../../client';

export default function ProjectsPage({ data, hasError }) {

    const { caption, tags, title } = data;
    const router = useRouter();

    if (hasError) {
        return <h1>Error</h1>
    }

    if (router.isFallback) {
        return <h1>No parameter</h1>
    }

    return(
        <Layout>
            <section>
                <Heading size='h2'>{title}</Heading>
            </section>
        </Layout>
    )
};

export async function getStaticProps(context) {

    const id = context.params.slug;
    const data = await client.fetch(`*[_id == '${id}'][0]`);
  
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