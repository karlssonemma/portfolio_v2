import { HomeIcon } from '@sanity/icons';

export default {
    title: 'Landing Page',
    name: 'landingPage',
    type: 'document',
    icon: HomeIcon,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Body',
            name: 'body',
            type: 'richText'
        }
    ]
}