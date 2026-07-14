import { api } from '@/lib/api';
import { SERVICES } from '@/lib/data';

/**
 * Fetches the services list. Designed to hit a future Django endpoint:
 *   GET /api/services/  -> [{ slug, title, description, icon }, ...]
 *
 * Falls back to the static SERVICES catalogue in lib/data.js so the site
 * works fully before the Django backend is connected.
 */
export async function getServices() {
  if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    return SERVICES;
  }
  try {
    return await api.get('/services/');
  } catch (e) {
    return SERVICES;
  }
}
