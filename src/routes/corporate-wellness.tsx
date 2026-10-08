import { createFileRoute } from '@tanstack/react-router';
import { WellnessPage } from '@/components/wellness-page';
import { metadata } from '@/lib/wellness-config';
export const Route = createFileRoute('/corporate-wellness')({
  head: () => ({ meta: [
    { title: metadata.title }, { name: 'description', content: metadata.description },
    { property: 'og:title', content: metadata.title }, { property: 'og:description', content: metadata.description },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: WellnessPage,
});