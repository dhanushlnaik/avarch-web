// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://avarch.org',
  // Keep links from the previous (v3) site working.
  redirects: {
    '/about.html': '/about',
    '/aboutfounder.html': '/founder',
    '/projects.html': '/projects',
    '/etherworld.html': '/projects/etherworld',
    '/blockaction.html': '/projects/blockaction',
    '/associate-partner.html': '/partners',
    '/contact.html': '/contact',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
