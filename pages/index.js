import client from '../client';
import { PortableText } from '@portabletext/react';

export default function Home({ data }) {

  const { body, title } = data;

  return (
    <>
      <h1>{title}</h1>
      <PortableText value={body} />
    </>
  )
};

export async function getStaticProps() {
  const data = await client.fetch(`
  *[_type == "landingPage"][0]`);

return {
  props: {
      data
  }
}

};