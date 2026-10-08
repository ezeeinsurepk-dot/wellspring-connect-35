import { z } from 'zod';
import { allTopics } from './wellness-config';
const optionalText = (max: number) => z.string().trim().max(max).optional().default('');
export const enquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.').max(100),
  email: z.string().trim().email('Please enter a valid email address.').max(255),
  company: z.string().trim().min(2, 'Please enter your company name.').max(150),
  phone: z.string().trim().regex(/^\+?[\d\s()\-]{7,25}$/, 'Please enter a valid phone number with country code.').refine(v => v.replace(/\D/g, '').length >= 7 && v.replace(/\D/g, '').length <= 15, 'Please enter a valid phone number.'),
  topic: z.string().refine(v => allTopics.includes(v), 'Please choose a wellness topic.'),
  attendees: z.enum(['', 'Under 25', '25–50', '51–100', '100+', 'Not sure']).default(''),
  format: z.enum(['', 'Online', 'Onsite', 'Either']).default(''),
  city: optionalText(100), timing: optionalText(200), notes: optionalText(2000),
  consent: z.boolean().refine(v => v, 'Please agree to the privacy policy to continue.'),
  website: z.string().max(0, 'Unable to send this request.').default(''),
  source: z.record(z.string().max(500)).default({}),
});
export type Enquiry = z.infer<typeof enquirySchema>;