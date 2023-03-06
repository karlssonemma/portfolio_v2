export default {
    name: 'projectsPage',
    type: 'document',
    title: 'Projects Page',
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