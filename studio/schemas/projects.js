import {defineField, defineType} from 'sanity';

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'string',
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{type: 'projectImage'}]
        }), 
    ]
})