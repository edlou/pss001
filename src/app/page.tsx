// metadata
export async function generateMetadata() {
  const session = await getSession();
  const { lang } = await getSite();

  const siteKey: SiteKey = (session.site as SiteKey) ?? 'efx';
  const content = siteContent[siteKey];

  const localizedTitles: Record<string, string> = {
    'en-US': content.businessName,
  };

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
import FAQ from '@/ui/molecules/faq';
import Header from '@/ui/molecules/header';
import Footer from '@/ui/molecules/footer';

// styles
import '@/ui/atoms/formField/styles.css';

// lib
import { getSite } from '@/lib/getSite';
import { getSession } from '@/lib/session';

// data
import { siteContent, SiteKey } from '@/data/home';

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

  const siteKey: SiteKey = (session.site as SiteKey) ?? 'efx';
  const content = siteContent[siteKey];

  return (
    <>
      <Header>
        <Heading level={1}>{content.headerName}</Heading>
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
              At {content.businessName}, we specialize in providing reliable
              smog checks to keep your vehicle compliant with California
              emissions standards. Our process is quick, efficient, and designed
              to get you back on the road without hassle. With friendly service
              and accurate testing, we make smog checks simple and stress-free.
            </p>
          </Container>
        </ContainerGroup>

        <ContainerGroup id="testimonialGroup" className="tri">
          {content.testimonials.map((t, idx) => (
            <Container key={idx}>
              <Testimonial quote={t.quote} author={t.author} role={t.date} />
            </Container>
          ))}
        </ContainerGroup>

        <ContainerGroup id="contact" className="dual">
          <Container>
            <HCard
              name={content.businessName}
              street1={content.street1}
              locality={content.locality}
              region={content.region}
              postalCode={content.postalCode}
            ></HCard>

            <HCard phone={content.phone} email={content.email}></HCard>
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
          <Container>{content.googleMap}</Container>
        </ContainerGroup>

        <ContainerGroup id="faq">
          <Container>
            <Heading level={4}>Frequently Asked Questions</Heading>
            <FAQ />
          </Container>
        </ContainerGroup>
      </main>
      <Footer
        year="2025"
        entity={{
          url: '/',
          name: content.footerEntityName,
        }}
      />
    </>
  );
}
