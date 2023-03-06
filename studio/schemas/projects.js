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
        // defineField({
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'string',
        // }),
        defineField({
            title: 'Live Link',
            name: 'projectLink',
            type: 'url',
        }),
        defineField({
            title: 'Github Link',
            name: 'githubLink',
            type: 'url',
        }),
        // not sure if neccessary with fieldsets here? coming back.
        // defineField({
        //     name: 'websiteLinks',
        //     type: 'object',
        //     fieldsets: [
        //         {
        //             name: 'links', 
        //             title: 'Website Links',
        //             options: {
        //                 collapsable: true
        //             }
        //         }
        //     ],
        //     fields: [
        //         {
        //             title: 'Live Link',
        //             name: 'liveLink',
        //             type: 'url',
        //             fieldset: 'links'
        //         },
        //         {
        //             title: 'Github Link',
        //             name: 'githubLink',
        //             type: 'url',
        //             fieldset: 'links'
        //         },
        //     ]
        // }),
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
        })
        
    ]
})