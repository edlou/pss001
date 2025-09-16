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
import Link from 'next/link';

// ui - atoms
import Heading from '@/ui/atoms/heading';

// ui - molecules
import ContainerGroup from '@/ui/molecules/containerGroup';
import Container from '@/ui/molecules/container';

// styles
import '@/ui/atoms/formField/styles.css';

// lib
import { getSite } from '@/lib/getSite';
import { getSession } from '@/lib/session';

// data
import { siteContent, SiteKey } from '@/data/home';

export default async function MainPage() {
  return (
    <main role="main">
      <ContainerGroup>
        <Container>
          <Heading level={3}>Client List</Heading>
          <ul>
            <li>
              <Link href="/?site=pss001"></Link>
            </li>
            <li>
              <Link href="/?site=pss001">Phan&apos;s Smog Station</Link>
            </li>
            <li>
              <Link href="/?site=mst001">Mission Smog Test Only Center</Link>
            </li>
            <li>
              <Link href="/?site=fnc001">Fast N Cheap Smog Station</Link>
            </li>
            <li>
              <Link href="/?site=jus001">Just Smog</Link>
            </li>
            <li>
              <Link href="/?site=wse001">Winton Smog Express</Link>
            </li>
            <li>
              <Link href="/?site=jst001">
                Jackson Smog Test Only Centre, Inc
              </Link>
            </li>
            <li>
              <Link href="/?site=client001">Client Template</Link>
            </li>
            <li>
              <Link href="/?site=efx">EFX Template</Link>
            </li>
          </ul>
        </Container>
      </ContainerGroup>
    </main>
  );
}
