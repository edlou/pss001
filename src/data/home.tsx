import { ReactNode } from 'react';

export type SiteKey =
  | 'pss001' // Phan's Smog Station
  | 'mst001' // Mission Smog Test Only Center
  | 'fnc001' // Fast N Cheap Smog Station
  | 'jus001' // Just Smog
  | 'wse001' // Winton Smog Express
  | 'jst001' // Jackson Smog Test Only Centre, Inc
  | 'wqs001' // Whipple Quality Smog
  | 'bas001' // Bay Area Star Smog
  | 'client001' // Client Template
  | 'efx'; // EFX Template

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
  mst001: {
    businessName: 'Mission Smog Test Only Center',
    street1: '27159 Mission Blvd ,',
    locality: 'Hayward',
    region: 'CA',
    postalCode: '94544',
    phone: '5105388627',
    email: 'info@client-smog.com',
    headerName: <>Mission Smog Test Only Center</>,
    footerEntityName: 'Mission Smog Test Only Center',
    googleMap: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d295.98126341791396!2d-122.06170047259127!3d37.64336705486582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f940d4b12a71d%3A0x39596e7647fe0dd0!2sMission%20Smog%20Test%20Only!5e0!3m2!1sen!2sus!4v1757970256893!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    testimonials: [
      {
        quote:
          'Great experience coming here.Very good customer service. Very quick and reasonable price',
        author: 'Krunal Rathod',
        date: '2025',
      },
      {
        quote:
          'Been a loyal customer for 10 years. Always top notch quality service. Very honest. Great business.',
        author: 'Carl Douglas',
        date: '2025',
      },
      {
        quote:
          'I came in for a smog test. They were super quick and actually went above and beyond to actually help me get my registration figured out as well. I would definitely go to them and refer all my friends and family to them',
        author: 'Sai Devana',
        date: '2025',
      },
    ],
  },
  fnc001: {
    businessName: 'Fast N Cheap Smog Station',
    street1: '727 Industrial Pkwy W Ste N1,',
    locality: 'Hayward',
    region: 'CA',
    postalCode: '94544',
    phone: '5107285064',
    email: 'info@client-smog.com',
    headerName: <>Fast N Cheap Smog Station</>,
    footerEntityName: 'Fast N Cheap Smog Station',
    googleMap: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3160.136146472805!2d-122.05933832296711!3d37.62248517202418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f951a3c24d141%3A0xf923bc7c8d44019f!2sFast%20n%20cheap%20smog!5e0!3m2!1sen!2sus!4v1757971229470!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    testimonials: [
      {
        quote:
          'One of the best smog shops in the bay. Very knowledgeable and service is amazing, they go above and beyond. Great value for smog too!',
        author: 'JB',
        date: '2025',
      },
      {
        quote:
          'Technician made the effort to complete the work as soon as he could and was very friendly to customers.',
        author: 'Joseph M',
        date: '2025',
      },
      {
        quote:
          'Like the name says, it was fast n cheap. Had the best price nearby and good service. Would recommend.',
        author: 'Faisal A',
        date: '2025',
      },
    ],
  },
  jus001: {
    businessName: 'Just Smog',
    street1: '909 W A St, ',
    locality: 'Hayward',
    region: 'CA',
    postalCode: '94541',
    phone: '5102939801',
    email: 'info@client-smog.com',
    headerName: <> Just Smog </>,
    footerEntityName: 'Just Smog',
    googleMap: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.2775529862439!2d-122.11684517798768!3d37.66610616319876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f910f9cad52c7%3A0x62878828bbd483bd!2sJust%20Smog!5e0!3m2!1sen!2sus!4v1757972309886!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    testimonials: [
      {
        quote:
          'Located on A Street, easy to miss if you arent from the area. Fast and easy service.., I came on a Friday, 1 person ahead of me. def take ur car here smog test. great pricing too.',
        author: 'Lyndah T',
        date: '2025',
      },
      {
        quote:
          'My dad brought our old 1989 grand marquis here when I was a kid. Now I get to bring my cars here. No nonsense. Just smog.',
        author: 'Antonio G',
        date: '2025',
      },
      {
        quote:
          'Lightning fast service. Technician was very friendly and personable. The smog check was very reasonably priced. Will come back again in the future.',
        author: 'Sandy D',
        date: '2025',
      },
    ],
  },
  wse001: {
    businessName: 'Winton Smog Express',
    street1: '1418 W Winton Ave, ',
    locality: 'Hayward',
    region: 'CA',
    postalCode: '94545',
    phone: '5108877555',
    email: 'info@client-smog.com',
    headerName: <> Winton Smog Express </>,
    footerEntityName: 'Winton Smog Express',
    googleMap: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.07501508703!2d-122.12158889863728!3d37.653213351327665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9122bbf2341b%3A0xe585e14a3660c8a8!2sWinton%20Smog%20Express!5e0!3m2!1sen!2sus!4v1757973058481!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    testimonials: [
      {
        quote:
          "I needed a smog check for a private party vehicle purchase, and came here. Very fast and friendly sevice, clean waiting area, and good price. This store is head and shoulders above other operations I've used in Hayward.",
        author: 'Kurt B',
        date: '2025',
      },
      {
        quote:
          'Great service and friendly atmosphere! SMOG check was reasonably priced and done quickly.',
        author: 'Jerome B.',
        date: '2025',
      },
      {
        quote:
          "Brought my sister's car here and he took care of it instantly and with great explanation for some other minor issues as well. Great guy and great service.",
        author: 'Hamid A.',
        date: '2025',
      },
    ],
  },
  jst001: {
    businessName: 'Jackson Smog Test Only Centre, Inc',
    street1: '402 Jackson St , ',
    locality: 'Hayward',
    region: 'CA',
    postalCode: '94544',
    phone: '5105828715',
    email: 'info@client-smog.com',
    headerName: <> Jackson Smog Test Only Centre, Inc </>,
    footerEntityName: 'Jackson Smog Test Only Centre, Inc',
    googleMap: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1579.2221662141378!2d-122.084557320243!3d37.66226585221319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f915f9a8e0859%3A0x701e702a844f28df!2sJackson%20Test%20Only%20Center%20Inc!5e0!3m2!1sen!2sus!4v1757974564158!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    testimonials: [
      {
        quote:
          "Great service..super fast and easy. He definitely treats you well and I haven't been elsewhere for all my smogs he honest and price is very fair",
        author: 'Nikki S.',
        date: '2025',
      },
      {
        quote:
          "Good Service and very honest. For the service I received, the price very reasonable. I had issue where the model 2019 Honda Odyssey didn't pass the Smog check because we had change battery one time but need special way to reset. Some people said to drive on freeway for 20-30 min at 55-65 miles per hour to have the system reset, but I tired so many time and didn't work. Left the car for him. Just one night he was able to pass the Smog check for me. It's best to call him to be sure he is there and not too busy. He is one man show and need to take care his mom so please contact him before arrival. I really recommend this place. He is very polite and honest. You won't be disappointed!",
        author: 'Nancy L..',
        date: '2025',
      },
      {
        quote:
          "Need a smog , need service on your car, need someone you can trust? Doesn't over charge..Look no further",
        author: 'Pat M.',
        date: '2025',
      },
    ],
  },
  wqs001: {
    businessName: 'Whipple Quality Smog',
    street1: '2408 Whipple Rd  , ',
    locality: 'Hayward',
    region: 'CA',
    postalCode: '94544',
    phone: '5105563330',
    email: 'info@client-smog.com',
    headerName: <> Whipple Quality Smog </>,
    footerEntityName: 'Whipple Quality Smog',
    googleMap: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.674197476968!2d-122.06142827669136!3d37.605823134998595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f954150671093%3A0xe0a9a2f57b44e2a7!2sWhipple%20Quality%20Smog!5e0!3m2!1sen!2sus!4v1758138827086!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    testimonials: [
      {
        quote:
          "Fast efficient service. It is a hidden gem. Signage a little hard to find. Close to the major freeway.",
        author: 'Vilma A.',
        date: '2025',
      },
      {
        quote:
          "Most competitive prices for smog check in the area. Please be considerate and pay in cash if possible since he is already offering discounted rates. Nick was quick, efficient and very nice. No appointment needed. Just make sure to call before going. Highly recommend.",
        author: 'Aman K.',
        date: '2025',
      },
      {
        quote:
          "super nice and sweet staff!! the smog took 10 mins and we will ALWAYS be coming back here :D",
        author: 'MJ T.',
        date: '2025',
      },
    ],
  },
//
  bas001: {
    businessName: 'Bay Area Star Smog',
    street1: '15768 E 14th St , ',
    locality: 'San Leandro',
    region: 'CA',
    postalCode: '94578',
    phone: '5102785459',
    email: 'info@client-smog.com',
    headerName: <> Bay Area Star Smog </>,
    footerEntityName: 'Bay Area Star Smog',
    googleMap: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d928.3068609108005!2d-122.12236045108703!3d37.701034843035494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f91d1e6515f23%3A0x245d71e643d5abe5!2s15768%20E%2014th%20St%2C%20San%20Leandro%2C%20CA%2094578!5e0!3m2!1sen!2sus!4v1758143394652!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
    testimonials: [
      {
        quote:
          "Very friendly, quick and efficient . Took 15minutes to complete my smog check. Would recommend for quick service.",
        author: 'Precious E.',
        date: '2025',
      },
      {
        quote:
          "Looking online for a star smog station. Found Bay Area Star Smog super close to my house. I made an online appt. Great customer service. Definitely return if need smog check. And as for the value, I got a discount for making an online appointment. Great Value!!",
        author: 'Olivia A.',
        date: '2025',
      },
      {
        quote:
          "The new owner Jason is very helpful, friendly and knowledgeable. I needed a smog and he got me in and out in no time, I'll be recommending them to others.",
        author: 'Angel S.',
        date: '2025',
      },
    ],
  },
  //
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
