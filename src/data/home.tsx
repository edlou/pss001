import { ReactNode } from 'react';

export type SiteKey = 'pss001' | 'client001' | 'efx';

export interface TestimonialData {
  quote: string;
  author: string;
  date: string;
}

export interface SiteContent {
  businessName: string;
  street1: string;
  locality: string;
  region: string;
  postalCode: string;
  phone: string;
  email: string;
  headerName: ReactNode;
  footerEntityName: string;
  googleMap: ReactNode;
  testimonials: TestimonialData[];
}

export const siteContent: Record<SiteKey, SiteContent> = {
  pss001: {
    businessName: "Phan's Smog Station",
    street1: '6938 Thornton Ave,',
    locality: 'Newark',
    region: 'CA',
    postalCode: '94560',
    phone: '5107940384',
    email: 'info@phan-smog.com',
    headerName: (
      <>
        Phan&apos;s <span>Smog Station</span>
      </>
    ),
    footerEntityName: "Phan's Smog Station",
    googleMap: (
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0407352322018!2d-122.0387420876875!3d37.53053702607344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf1dd7f0cb75%3A0x5dd5b9f492d542bf!2sPhan%27s%20Smog%20Station!5e0!3m2!1sen!2sus!4v1756924872552!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    testimonials: [
      {
        quote:
          'Fast, great customer service, and Nate even kept his shop open an extra 15 minutes because I was running late',
        author: 'Manpreet K.',
        date: '2025',
      },
      {
        quote:
          'Have been here for flat tires, replacements, smog...they do everything well and with a smile.',
        author: 'Nick L.',
        date: '2025',
      },
      {
        quote:
          'I was helped by Tri, he was super friendly and the service was QUICK, and affordable and the information was sent directly to the DMV!',
        author: 'Cynthia C.',
        date: '2025',
      },
    ],
  },
  client001: {
    businessName: 'Client Smog Station',
    street1: '38888 Fremont Blvd,',
    locality: 'Fremont',
    region: 'CA',
    postalCode: '94536',
    phone: '5105551212',
    email: 'info@client-smog.com',
    headerName: <>Client Smog Station</>,
    footerEntityName: 'Client Smog Station',
    googleMap: (
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.06189507033383!2d-122.12478061906623!3d37.66753065444798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f91011379e58f%3A0xa19b86d37ce341e0!2s18010%20Incline%20Rd%2C%20Hayward%2C%20CA%2094541!5e0!3m2!1sen!2sus!4v1757572025481!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    testimonials: [
      { quote: 'Insert quote 1', author: 'Insert author 1', date: '2025' },
      { quote: 'Insert quote 2', author: 'Insert author 2', date: '2025' },
      { quote: 'Insert quote 3', author: 'Insert author 3', date: '2025' },
    ],
  },
  efx: {
    businessName: 'EFX Design',
    street1: '123 ABC Street,',
    locality: 'San Francisco',
    region: 'CA',
    postalCode: '94123',
    phone: '4155551212',
    email: 'info@efx-design.com',
    headerName: <>EFX Design Template</>,
    footerEntityName: 'EFX Design Template',
    googleMap: (
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0407352322018!2d-122.0387420876875!3d37.53053702607344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf1dd7f0cb75%3A0x5dd5b9f492d542bf!2sPhan%27s%20Smog%20Station!5e0!3m2!1sen!2sus!4v1756924872552!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    ),
    testimonials: [
      { quote: 'Insert quote 1', author: 'Insert author 1', date: '2025' },
      { quote: 'Insert quote 2', author: 'Insert author 2', date: '2025' },
      { quote: 'Insert quote 3', author: 'Insert author 3', date: '2025' },
    ],
  },
};
