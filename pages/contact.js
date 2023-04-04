import client from '../client';
import { PortableText } from '@portabletext/react';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import CONTAINER_CLASSES from '@/components/Container';
import Text from '@/components/Text';
import Caption from '@/components/Caption';

export default function Contact({ data }) {

  const { body, title } = data;

  return (
    <>
      <Layout bgColor='bg-[#FEFAE0]'>
        <section className={`${CONTAINER_CLASSES}`}>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} components={components} />
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
  *[_type == "contactPage"][0]`);

  return {
    props: {
        data
    }
  }

};