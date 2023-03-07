import client from '../client';
import { PortableText } from '@portabletext/react';

import Layout from '@/components/Layout';
import Heading from '@/components/Heading';
import Caption from '@/components/Caption';
import Text from '@/components/Text';
import ImageComp from '@/components/ImageComp';

export default function About({ data }) {

  const { body, title, image } = data;

  console.log('ABOut', data)


  return (
    <>
      <Layout>
        <section className='md:w-2/5 min-h-screen flex flex-col items-start'>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} components={components} />
        </section>
        <section className='w-full md:w-3/5 min-h-screen flex items-start'>
          <ImageComp data={image} />
        </section>
      </Layout>
    </>
  )
};

const components = {
  block: {
    normal: ({children}) => <Text>{children}</Text>,
    h4: ({children}) => <Caption>{children}</Caption>,
    h2: ({children}) => <Text classes='text-xl'>{children}</Text>
  }
}

export async function getStaticProps() {
  const data = await client.fetch(`
  *[_type == "aboutPage"][0]{
    title,
    body,
    'image': {
      'altText': image.altText,
      'url': image.asset->url
    }
  }`);

  return {
    props: {
        data
    }
  }

};