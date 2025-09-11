import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/session';
import { getSiteURL } from '@/util/getSiteURL';

export async function GET(req: NextRequest) {
  const siteURL = getSiteURL(req);
  const url = new URL(req.url);
  const site = url.searchParams.get('site');

  if (!site) {
    // No site provided → redirect to root
    return NextResponse.redirect(new URL(siteURL + '/'));
  }

  // Get session and set site
  const session = await getSession();
  session.site = site;
  await session.save();

  // Redirect to root after saving session
  return NextResponse.redirect(new URL(siteURL + '/'));
}
