import { Mail, MapPin, Phone } from "lucide-react";

export const contactData = {
  heading: "Let's Work Together",
  subheading: "Ready to bring your vision to life? We'd love to hear from you.",
  form: {
    title: "Send us a message",
    fields: [
      { id: "firstName", label: "First Name", type: "input" },
      { id: "lastName", label: "Last Name", type: "input" },
      { id: "email", label: "Email", type: "email" },
      { id: "message", label: "Message", type: "textarea" },
    ],
    buttonText: "Send Message",
  },
  contactInfo: {
    title: "Get in touch",
    items: [
      {
        icon: <Mail className="h-6 w-6 text-[var(--white)]" />,
        title: "Email",
        value: "hello@abccompany.com",
      },
      {
        icon: <Phone className="h-6 w-6 text-[var(--white)]" />,
        title: "Phone",
        value: "+1 (555) 123-4567",
      },
      {
        icon: <MapPin className="h-6 w-6 text-[var(--white)]" />,
        title: "Office",
        value: "123 Design Street\nCreative District, NY 10001",
      },
    ],
  },
  whyChooseUs: {
    title: "Why choose us?",
    benefits: [
      "Clean, thoughtful design approach",
      "Modern technology solutions",
      "Dedicated support team",
      "Transparent communication",
    ],
  },
};
