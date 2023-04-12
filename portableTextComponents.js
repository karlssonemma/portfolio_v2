import Text from './components/Text';
import Caption from './components/Caption';
import Arrow from './components/Arrow';

const components = {
    block: {
      normal: ({children}) => <Text>{children}</Text>,
      h4: ({children}) => <Caption>{children}</Caption>,
      h2: ({children}) => <Text classes='text-xl'>{children}</Text>
    },
    marks: {
      link: ({children, value}) => <a href={value?.href} target='_blank' className='font-mono text-xs tracking-[.2em] uppercase pl-[0.15em] transition border-b border-solid border-black'>{children}<Arrow /></a>
    }
};

export default components;