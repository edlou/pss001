// metadata
export async function generateMetadata() {
  const session = await getSession();
  const { lang } = await getSite();

  let localizedTitles: Record<string, string> = {
    'en-US': 'EFX Design Template',
  };
  switch (session.site) {
    case 'pss001':
      localizedTitles = {
        'en-US': "Phan's Smog Station",
      };
      break;
    case 'client001':
      localizedTitles = {
        'en-US': 'Client Smog Station',
      };
      break;
    case 'efx':
      localizedTitles = {
        'en-US': 'EFX Design Template',
      };
      break;
  }

  return {
    title: localizedTitles[lang] ?? '',
  };
}

// nextjs
import Image from 'next/image';
import { redirect } from 'next/navigation';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// ui - molecules
import Hero from '@/ui/molecules/hero';
import ContainerGroup from '@/ui/molecules/containerGroup';
import Container from '@/ui/molecules/container';
import Testimonial from '@/ui/molecules/testimonial';
import HCard from '@/ui/molecules/hcard';
import Header from '@/ui/molecules/header';
import Footer from '@/ui/molecules/footer';

// styles
import '@/ui/atoms/formField/styles.css';

// lib
import { getSite } from '@/lib/getSite';
import { getSession } from '@/lib/session';

// type
type PageProps = {
  searchParams?: Promise<Record<string, string | string[]>>;
};

export default async function MainPage({ searchParams }: PageProps) {
  const params = searchParams ? await searchParams : {};
  const site = typeof params.site === 'string' ? params.site : undefined;

  if (site) {
    // redirect to your API route to set session
    redirect(`/api/site?site=${site}`);
  }

  const session = await getSession();
  if (!session.site) {
    redirect(`/api/site?site=efx`);
  }

  let businessName = '';
  let street1 = '';
  let locality = '';
  let region = '';
  let postalCode = '';
  let phone = '';
  let email = '';
  let author1 = '';
  let quote1 = '';
  let date1 = '';
  let author2 = '';
  let quote2 = '';
  let date2 = '';
  let author3 = '';
  let quote3 = '';
  let date3 = '';
  let googleMap: React.ReactNode;
  let headerName: React.ReactNode;
  let footerEntityName = '';
  switch (session.site) {
    case 'pss001':
      businessName = "Phan's Smog Station";
      street1 = '6938 Thornton Ave,';
      locality = 'Newark';
      region = 'CA';
      postalCode = '94560';
      phone = '5107940384';
      email = 'info@phan-smog.com';
      quote1 =
        'Fast, great customer service, and Nate even kept his shop open an extra 15 minutes because I was running late';
      author1 = 'Manpreet K.';
      date1 = '2025';
      quote2 =
        'Have been here for flat tires, replacements, smog...they do everything well and with a smile.';
      author2 = 'Nick L.';
      date2 = '2025';
      quote3 =
        'I was helped by Tri, he was super friendly and the service was QUICK, and affordable and the information was sent directly to the DMV!';
      author3 = 'Cynthia C.';
      date3 = '2025';
      googleMap = (
        <>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0407352322018!2d-122.0387420876875!3d37.53053702607344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf1dd7f0cb75%3A0x5dd5b9f492d542bf!2sPhan&#39;s%20Smog%20Station!5e0!3m2!1sen!2sus!4v1756924872552!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </>
      );
      headerName = (
        <>
          Phan&apos;s <span>Smog Station</span>
        </>
      );
      footerEntityName = "Phan's Smog Station";
      break;
    case 'client001':
      businessName = 'Client Smog Station';
      street1 = '38888 Fremont Blvd,';
      locality = 'Fremont';
      region = 'CA';
      postalCode = '94536';
      phone = '5105551212';
      email = 'info@client-smog.com';
      quote1 = 'Insert quote 1';
      author1 = 'Insert author 1';
      date1 = '2025';
      quote2 = 'Insert quote 2';
      author2 = 'Insert author 2';
      date2 = '2025';
      quote3 = 'Insert quote 3';
      author3 = 'Insert author 3';
      googleMap = (
        <>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497.06189507033383!2d-122.12478061906623!3d37.66753065444798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f91011379e58f%3A0xa19b86d37ce341e0!2s18010%20Incline%20Rd%2C%20Hayward%2C%20CA%2094541!5e0!3m2!1sen!2sus!4v1757572025481!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </>
      );
      headerName = <>Client Smog Station</>;
      footerEntityName = 'Client Smog Station';
      break;
    case 'efx':
      businessName = 'EFX Design';
      street1 = '123 ABC Street,';
      locality = 'San Francisco';
      region = 'CA';
      postalCode = '94123';
      phone = '4155551212';
      email = 'info@efx-design.com';
      quote1 = 'Insert quote 1';
      author1 = 'Insert author 1';
      date1 = '2025';
      quote2 = 'Insert quote 2';
      author2 = 'Insert author 2';
      date2 = '2025';
      quote3 = 'Insert quote 3';
      author3 = 'Insert author 3';
      date3 = '2025';
      googleMap = (
        <>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.0407352322018!2d-122.0387420876875!3d37.53053702607344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf1dd7f0cb75%3A0x5dd5b9f492d542bf!2sPhan&#39;s%20Smog%20Station!5e0!3m2!1sen!2sus!4v1756924872552!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </>
      );
      headerName = <>EFX Design Template</>;
      footerEntityName = 'EFX Design Template';
      break;
  }

  return (
    <>
      <Header>
        <Heading level={1}>{headerName}</Heading>
      </Header>
      <Hero
        video="home"
        primary={
          <>
            <Heading level={1}>Drive Worry-Free</Heading>
            <p>
              We make smog checks simple, fast, and stress-free, so you can get
              back on the road with peace of mind.
            </p>
          </>
        }
      />
      <main role="main">
        <ContainerGroup id="intro" className="dual">
          <Container>
            <Image
              src="/assets/i/smogcheck.jpg"
              width="379"
              height="277"
              alt="Smog Check"
            />
          </Container>
          <Container>
            <Heading level={3}>Services</Heading>
            <p>
              At {businessName}, we specialize in providing reliable smog checks
              to keep your vehicle compliant with California emissions
              standards. Our process is quick, efficient, and designed to get
              you back on the road without hassle. With friendly service and
              accurate testing, we make smog checks simple and stress-free.
            </p>
          </Container>
        </ContainerGroup>

        <ContainerGroup id="testimonialGroup" className="tri">
          <Container>
            <Testimonial quote={quote1} author={author1} role={date1} />
          </Container>
          <Container>
            <Testimonial quote={quote2} author={author2} role={date2} />
          </Container>
          <Container>
            <Testimonial quote={quote3} author={author3} role={date3} />
          </Container>
        </ContainerGroup>

        <ContainerGroup id="contact" className="dual">
          <Container>
            <HCard
              name={businessName}
              street1={street1}
              locality={locality}
              region={region}
              postalCode={postalCode}
            ></HCard>

            <HCard phone={phone} email={email}></HCard>
            <dl>
              <dt>Sunday:</dt>
              <dd>Closed</dd>
              <dt>Monday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Tuesday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Wednesday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Thursday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Friday</dt>
              <dd>8:00am - 5:00pm</dd>
              <dt>Saturday</dt>
              <dd>8:00am - 1:00pm</dd>
            </dl>
          </Container>
          <Container>{googleMap}</Container>
        </ContainerGroup>
      </main>
      <Footer
        year="2025"
        entity={{
          url: '/',
          name: footerEntityName,
        }}
      />
    </>
  );
}
