import client from '../client';
import { PortableText } from '@portabletext/react';

import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import Text from '@/components/Text';
import Caption from '@/components/Caption';

export default function About({ data }) {

  const { body, title } = data;

  return (
    <>
      <Layout>
        <section>
          <Heading size='h1'>{title}</Heading>
          <PortableText value={body} components={components} />
        </section>
        <section>
          
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
  *[_type == "aboutPage"][0]`);

  return {
    props: {
        data
    }
  }

};