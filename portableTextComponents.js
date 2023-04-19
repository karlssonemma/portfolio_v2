import Text from './components/Text';
import { CAPTION_CLASSES } from './components/Caption';
import Arrow from './components/Arrow';
import ExternalLink from './components/ExternalLink';

const components = {
    block: {
      normal: ({children}) => <Text>{children}</Text>,
      h4: ({children}) => <p className={`${CAPTION_CLASSES} mb-3`}>{children}</p>,
      h2: ({children}) => <Text classes='text-xl'>{children}</Text>
    },
    marks: {
      link: ({children, value}) => 
      <ExternalLink href={value?.href}>{children}</ExternalLink>
    },
    list: {
      bullet: ({children}) => <ul>{children}</ul>
    },
    listItem: {
      bullet: ({children}) => <li><Text>{children}</Text></li>
    }
};

export default components;