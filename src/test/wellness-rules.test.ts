import { describe, expect, it } from 'vitest';
import { categories, contact, whatsappUrl } from '../lib/wellness-config';
import { enquirySchema } from '../lib/wellness-schema';
const valid = { fullName: 'Test Visitor', email: 'visitor@gmail.com', company: 'Example Company', phone: '+92 334 8230456', topic: 'Stress management', consent: true };
describe('Corporate wellness rules', () => {
  it('has exactly six categories', () => expect(categories).toHaveLength(6));
  it('allows Gmail work emails', () => expect(enquirySchema.safeParse(valid).success).toBe(true));
  it('requires affirmative consent', () => expect(enquirySchema.safeParse({ ...valid, consent: false }).success).toBe(false));
  it('requires full name', () => expect(enquirySchema.safeParse({ ...valid, fullName: '' }).success).toBe(false));
  it('requires company', () => expect(enquirySchema.safeParse({ ...valid, company: '' }).success).toBe(false));
  it('requires phone', () => expect(enquirySchema.safeParse({ ...valid, phone: '' }).success).toBe(false));
  it('requires topic', () => expect(enquirySchema.safeParse({ ...valid, topic: '' }).success).toBe(false));
  it('allows custom topic', () => expect(enquirySchema.safeParse({ ...valid, topic: 'Custom topic' }).success).toBe(true));
  it('rejects honeypot submissions', () => expect(enquirySchema.safeParse({ ...valid, website: 'spam' }).success).toBe(false));
  it('routes WhatsApp to the supplied number with topic text', () => { const url = new URL(whatsappUrl('Stress management')); expect(url.pathname).toBe('/923348230456'); expect(url.searchParams.get('text')).toContain('Stress management'); });
  it('uses the approved email recipient', () => expect(contact.email).toBe('info@ezeeinsure.com'));
});