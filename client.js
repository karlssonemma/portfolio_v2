import { createClient } from '@sanity/client';

const client = createClient({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    useCdn: true,
    apiVersion: '2023-02-28'
});

export default client;