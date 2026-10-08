import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/')({
  beforeLoad: () => { throw redirect({ to: '/corporate-wellness', replace: true }); },
  head: () => ({ meta: [
    { title: 'Team Wellbeing | Ezee Insure' },
    { name: 'description', content: 'Explore Ezee Insure corporate wellness for your team.' },
    { property: 'og:title', content: 'Team Wellbeing | Ezee Insure' },
    { property: 'og:description', content: 'Explore Ezee Insure corporate wellness for your team.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
});
