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
                { title: 'Big Text', value: 'h2' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ]
            },
            lists: [
                { title: 'Bullet', value: 'bullet' }
            ]

        }
    ]
}