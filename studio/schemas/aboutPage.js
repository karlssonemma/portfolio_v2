export default {
    name: 'aboutPage',
    type: 'document',
    title: 'About Page',
    fields: [
        {
            name: 'title',
            type: 'string', 
            title: 'Title',
            validation: Rule => Rule.required()
        },
        {
            name: 'body',
            type: 'richText',
            title: 'Body'
        }
    ]
}