import {defineField, defineType} from 'sanity';
import { HeartFilledIcon } from '@sanity/icons';

export default {
    title: 'Projects',
    name: 'projects',
    type: 'document',
    icon: HeartFilledIcon,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'Caption',
            name: 'caption',
            type: 'string'
        },
        {
            title: 'Body',
            name: 'body',
            type: 'richText'
        },
        {
            title: 'Live Link',
            name: 'liveLink',
            type: 'url',
        },
        {
            title: 'Github Link',
            name: 'githubLink',
            type: 'url',
        },
        {
            title: 'Gallery',
            name: 'gallery',
            type: 'array',
            of: [{type: 'imageBlock'}]
        },
        {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: (doc) => doc.title,
                maxLength: 200
            }
        },
        {
            title: 'Background Color',
            name: 'backgroundColor',
            type: 'color',
        }
        
    ]
}