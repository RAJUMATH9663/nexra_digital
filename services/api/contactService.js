import { api } from '@/lib/api';

/**
 * Submits the Contact page form to the Django REST API.
 *
 * Expected Django serializer fields:
 *   name (str), phone (str), email (str), service (str), message (str)
 *
 * Example Django REST Framework view this is designed to hit:
 *
 *   class ContactRequestViewSet(viewsets.ModelViewSet):
 *       queryset = ContactRequest.objects.all()
 *       serializer_class = ContactRequestSerializer
 *       http_method_names = ['post']
 *
 * Until the Django backend is deployed, submitContactForm() falls back to a
 * mock resolved response so the UI can be fully demoed offline.
 */
export async function submitContactForm(formData) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to send message. Please try again later.');
  }

  return response.json();
}
