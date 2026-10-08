export const contact = {
  email: 'info@ezeeinsure.com',
  phone: '+92 334 8230456',
  whatsapp: '923348230456',
  privacy: 'https://ezeeinsure.com/privacy-policy',
};
export function whatsappUrl(topic?: string) {
  const message = topic ? `Hi Ezee Insure, I'd like to enquire about a corporate wellness session on ${topic}. My query is: ` : `Hi Ezee Insure, I'd like to enquire about corporate wellness sessions for our team. My query is: `;
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
export const categories = [
  { id: 'mental', title: 'Mental & emotional wellbeing', description: 'A healthier mind. A more resilient team.', icon: 'brain', tone: 'teal', topics: ['Stress management', 'Burnout prevention', 'Anxiety awareness', 'Resilience', 'Managing workplace pressure', 'Psychological safety', 'Healthy boundaries'] },
  { id: 'heart', title: 'Heart, diabetes & chronic health', description: 'Awareness today. Healthier choices tomorrow.', icon: 'heart', tone: 'coral', topics: ['Heart health', 'Blood pressure', 'Cholesterol', 'Stroke awareness', 'Diabetes prevention', 'Living with diabetes', 'Obesity and metabolic health'] },
  { id: 'nutrition', title: 'Nutrition, fitness & lifestyle', description: 'Everyday habits that make a real difference.', icon: 'apple', tone: 'green', topics: ['Practical nutrition', 'Healthy office eating', 'Weight management', 'Physical activity', 'Sleep quality', 'Fatigue and recovery', 'Smoking cessation'] },
  { id: 'personal', title: "Women's & men's health", description: 'Inclusive conversations. Informed decisions.', icon: 'people', tone: 'sky', topics: ['PCOS', 'Menstrual wellbeing', 'Breast health awareness', 'Menopause', 'Reproductive health education', 'Prostate awareness', "Men's preventive health"] },
  { id: 'prevention', title: 'Prevention, screening & safety', description: 'Be informed. Be prepared. Stay a step ahead.', icon: 'shield', tone: 'orange', topics: ['Preventive checkups', 'Cancer awareness', 'Vaccination awareness', 'Liver and gut health', 'Infectious-disease prevention', 'First aid and CPR awareness'] },
  { id: 'workplace', title: 'Workplace health & productivity', description: 'Better workdays start with better wellbeing.', icon: 'desk', tone: 'blue', topics: ['Ergonomics and posture', 'Back and neck pain', 'Eye strain', 'Sedentary work', 'Shift-worker health', 'Work-life balance', 'Workplace health culture'] },
] as const;
export const allTopics = [...categories.flatMap(c => [c.title, ...c.topics]), 'Custom topic'];
export const formats = [
  { title: 'Online talk', text: 'Bring your team together, wherever they work.', icon: 'video' },
  { title: 'Onsite awareness session', text: 'Health conversations at your workplace.', icon: 'building' },
  { title: 'Interactive workshop', text: 'Make room for questions and participation.', icon: 'messages' },
  { title: 'Recurring programme', text: 'Explore an ongoing approach to team wellbeing.', icon: 'calendar' },
] as const;
export const faqs = [
  { question: 'What is a corporate wellness session?', answer: 'A corporate wellness session is an educational talk or workshop that helps employees understand health topics and make informed everyday choices. It is not individual diagnosis or treatment.' },
  { question: 'Can sessions be held onsite or online?', answer: 'You can request an online session or an onsite session at your workplace. Tell us your city and preferred format; our team will discuss delivery options and expert availability.' },
  { question: 'Who are these sessions for?', answer: 'Sessions can be planned for employees, managers and leadership teams. Share your approximate audience size and team needs so we can discuss a suitable approach.' },
  { question: 'Can we request a custom topic?', answer: 'Yes. Select Custom topic in the form and describe what your team would like to explore. We will review the request and discuss an appropriate session.' },
  { question: 'How are experts selected?', answer: 'We match the subject with an appropriate expert. Specialised subjects require relevant qualifications. Expert suitability and availability are discussed before a session is confirmed.' },
  { question: 'How are fees and timing confirmed?', answer: 'Fees depend on the topic, audience, format and expert requirements. Our team will discuss commercial terms and your preferred timing with you. Submitting a request does not confirm a booking.' },
];
export const metadata = {
  title: 'Corporate Wellness Sessions in Pakistan | Ezee Insure',
  description: 'Plan corporate wellness talks and workshops with health experts. Explore mental health, diabetes, nutrition and more. Request a session with Ezee Insure.',
};