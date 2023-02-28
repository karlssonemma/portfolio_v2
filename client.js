import { createClient } from '@sanity/client';

const client = createClient({
    projectId: '3pnqik0t',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-02-28'
});

export default client;