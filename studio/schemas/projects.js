import {defineField, defineType} from 'sanity';
import { HeartFilledIcon } from '@sanity/icons';

export default defineType({
    title: 'Projects',
    name: 'projects',
    type: 'document',
    icon: HeartFilledIcon,
    fields: [
        defineField({
            title: 'Title',
            name: 'title',
            type: 'string'
        }),
        defineField({
            title: 'Caption',
            name: 'caption',
            type: 'string'
        }),
        defineField({
            title: 'Body',
            name: 'body',
            type: 'richText'
        }),
        defineField({
            title: 'Live Link',
            name: 'liveLink',
            type: 'url',
        }),
        defineField({
            title: 'Github Link',
            name: 'githubLink',
            type: 'url',
        }),
        defineField({
            title: 'Gallery',
            name: 'gallery',
            type: 'array',
            of: [{type: 'imageBlock'}]
        }),
        defineField({
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}]
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: (doc) => doc.title,
                maxLength: 200
            }
    })
        
    ]
})