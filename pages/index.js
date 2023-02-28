import client from '../client';

export default function Home({ project }) {

  console.log('about', project)
  return (
    <>
      <p>Jello</p>
    </>
  )
};

export async function getStaticProps() {
  const project = await client.fetch(`
  *[_type == "about"]`);

return {
  props: {
      project
  }
}

};