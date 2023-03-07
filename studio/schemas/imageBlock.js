export default {
    name: 'imageBlock',
    type: 'image',
    title: 'Project Image',
    fields: [
        {
            name: 'altText',
            type: 'string', 
            title: 'Alternative text',
            validation: Rule => Rule.required()
        },
    ]
} 