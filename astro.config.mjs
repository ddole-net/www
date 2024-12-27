// @ts-check
import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'My Website',
            description: 'My personal blog and wiki',
            social: {
                github: 'https://github.com/ddole-net',
                linkedin: 'https://linkedin.com',
                email: 'mailto:contact@ddole.net'
            },
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 3
            },
            sidebar: [
                {
                    label: 'Projects',
                    autogenerate: {directory: 'projects'},
                },
                {
                    label: 'Posts',
                    autogenerate: {directory: 'posts'},
                },
                {
                    label: 'Guides',
                    autogenerate: {directory: 'guides'},
                    // items: [
                    // 	// Each item here is one entry in the navigation menu.
                    // 	{ label: 'Example Guide', slug: 'guides/example' },
                    // ],
                },
                {
                    label: 'Reference',
                    autogenerate: {directory: 'reference'},
                },
            ],
        }),
    ],
});
