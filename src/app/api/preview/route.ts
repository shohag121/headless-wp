import { previewRouteHandler } from '@headstartwp/next/app';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
	return previewRouteHandler(request);
}
