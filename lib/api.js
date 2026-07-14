/**
 * NEXRA DIGITAL — API client
 * -----------------------------------------------------------------------
 * Thin wrapper around fetch() aimed at a Django REST Framework backend.
 * Swap NEXT_PUBLIC_API_BASE_URL in .env.local once the Django API is live;
 * every call in /services/api/*.js already targets the routes below.
 *
 * Expected Django REST Framework endpoints (suggested):
 *   POST /api/contact/          -> create a contact / quote request
 *   GET  /api/services/         -> list services (optional, currently static)
 *   GET  /api/portfolio/        -> list portfolio projects (optional, currently static)
 *   POST /api/newsletter/       -> subscribe an email (optional)
 * -----------------------------------------------------------------------
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

class ApiError extends Error {
  constructor(message, status, payload) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}

async function request(path, { method = 'GET', body, headers = {}, ...rest } = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...rest,
  });

  let payload = null;
  try {
    payload = await res.json();
  } catch (_) {
    // no JSON body
  }

  if (!res.ok) {
    throw new ApiError(payload?.detail || 'Request failed', res.status, payload);
  }

  return payload;
}

export const api = {
  get: (path, options) => request(path, { ...options, method: 'GET' }),
  post: (path, body, options) => request(path, { ...options, method: 'POST', body }),
};

export { ApiError, API_BASE_URL };
