export const SITE_NAME = 'Clínica 21 Días Psicoeducación';
export const DEFAULT_OG_IMAGE = '/og.jpg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const BUSINESS_ID_FRAGMENT = '#business';
export const MAP_URL = 'https://maps.app.goo.gl/hLzTC1JKWWrvXPjv6';

export function businessId(siteBase: URL | string): string {
	const base = typeof siteBase === 'string' ? siteBase.replace(/\/$/, '') : siteBase.href.replace(/\/$/, '');
	return `${base}${BUSINESS_ID_FRAGMENT}`;
}
