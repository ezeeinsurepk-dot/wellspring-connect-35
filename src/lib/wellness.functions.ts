import { createServerFn } from '@tanstack/react-start';
import { enquirySchema } from './wellness-schema';

export const submitEnquiry = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    // Public intake only: validated write, no reads or user-controlled recipients.
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('wellness_enquiries').insert({
      full_name: data.fullName, email: data.email, company: data.company,
      phone: data.phone, topic: data.topic, attendees: data.attendees,
      format: data.format, city: data.city, timing: data.timing, notes: data.notes,
      source: data.source, consent_at: new Date().toISOString(),
    });
    if (error) {
      console.error('Wellness enquiry storage failed:', error.code);
      throw new Error('Your request could not be saved. Please try again or contact us on WhatsApp.');
    }
    return { saved: true };
  });