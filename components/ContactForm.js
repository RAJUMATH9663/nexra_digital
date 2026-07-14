'use client';

import { useState } from 'react';
import { submitContactForm } from '@/services/api/contactService';
import { SERVICES } from '@/lib/data';
import styles from './ContactForm.module.css';

const initialState = { name: '', phone: '', email: '', service: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className={`${styles.success} glass`} role="status">
        <h3>Message sent</h3>
        <p>Thanks for reaching out — a member of the NEXRA DIGITAL team will reply within one business day.</p>
        <button className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>Send another message</button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your full name" autoComplete="name" />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 12345 67890" autoComplete="tel" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Service</label>
        <select id="service" name="service" required value={form.service} onChange={handleChange}>
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>{s.title}</option>
          ))}
          <option value="other">Something else</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} placeholder="Tell us a bit about your project..." />
      </div>

      {status === 'error' && <p className={styles.error} role="alert">{error}</p>}

      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
