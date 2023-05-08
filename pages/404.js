import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import InternalLink from '@/components/InternalLink';
import Text from '@/components/Text';

export default function NotFound() {

  return (
      <Layout bgColor='bg-bgNotFound' title='404'>
        <section>
            <Heading size='h1'>404 - Not found</Heading>
            <Text>The page you were looking for was not found. Try one of these links instead:</Text>
            <div className='mt-8'>
                <InternalLink href='/about'>About me</InternalLink>
                <InternalLink href='/projects'>Work</InternalLink>
            </div>
        </section>
      </Layout>
  )
};
