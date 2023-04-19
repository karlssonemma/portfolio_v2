import { motion as m } from 'framer-motion';


import { blurIn, slideUp } from '@/animation';
import Heading from '@/components/Heading';
import Layout from '@/components/Layout';
import InternalLink from '@/components/InternalLink';
import Text from '@/components/Text';

export default function NotFound() {

  return (
      <Layout bgColor='bg-bgNotFound' title='404'>
        <section>
            <Heading size='h1'>404 - Not found</Heading>
            <Text>We couldn't find the page you were looking for. Try one of these links instead:</Text>
            <div className='mt-8'>
                <InternalLink href='/about'>About me</InternalLink>
                <InternalLink href='/projects'>Work</InternalLink>
            </div>
        </section>
      </Layout>
  )
};
