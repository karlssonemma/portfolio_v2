export default {
    name: 'richText',
    title: 'Rich Text',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Body', value: 'normal' },
                { title: 'Subtitle', value: 'h4' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ]
            },
            lists: []

        }
    ]
}