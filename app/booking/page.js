import Script from 'next/script';
import styles from './page.module.css';

export const metadata = {
  title: 'Book a Free Consultation | NXRA DIGITAL',
  description:
    'Schedule a free 30-minute consultation with the NXRA DIGITAL team. We help founders with photography, videography, branding, websites, and digital marketing.',
};

const BENEFITS = [
  { icon: '🎯', title: 'Focused Discussion', desc: 'We talk only about your goals — no generic pitches.' },
  { icon: '⏱️', title: '30 Minutes, No Filler', desc: 'Straight to the point with actionable takeaways.' },
  { icon: '💡', title: 'Free Strategy Tips', desc: "Leave with ideas you can use even if we don't work together." },
  { icon: '📋', title: 'Custom Proposal', desc: "We'll follow up with a tailored scope and pricing." },
];

const FAQS = [
  {
    q: 'Is the consultation really free?',
    a: 'Yes, 100%. No credit card, no hidden fees. We want to understand your project before talking numbers.',
  },
  {
    q: 'What should I prepare?',
    a: "Just bring a rough idea of what you need — a website, social media package, video, etc. We'll guide the rest.",
  },
  {
    q: 'How soon will I get a proposal?',
    a: "Within 24–48 hours of the call. You'll receive a detailed scope, timeline, and pricing document.",
  },
  {
    q: 'Can I reschedule?',
    a: 'Absolutely. Calendly lets you reschedule or cancel anytime from your confirmation email.',
  },
];

export default function BookingPage() {
  return (
    <>
      {/* Calendly inline widget script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      {/* ── Page Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Free Consultation</span>
          <h1 className={styles.title}>
            Book a <span className="text-gold">30-Minute Call</span>
          </h1>
          <p className={styles.sub}>
            Pick a time that works for you. We&apos;ll talk about your project, answer every question,
            and outline a clear plan — no pressure, no commitment.
          </p>
        </div>
      </section>

      {/* ── Benefits strip ── */}
      <section className={styles.benefits}>
        <div className={`container ${styles.benefitsGrid}`}>
          {BENEFITS.map((b) => (
            <div key={b.title} className={styles.benefitCard}>
              <span className={styles.benefitIcon}>{b.icon}</span>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Calendly Embed ── */}
      <section className={styles.calSection}>
        <div className="container">
          <h2 className={styles.calHeading}>Choose Your Time Slot</h2>
          <p className={styles.calSub}>All times shown in your local timezone</p>
          <div className={styles.calWrapper}>
            {/*
              ⚠️ REPLACE the data-url below with your actual Calendly link.
              Example: https://calendly.com/nxradigital/consultation
              Get your free link at: https://calendly.com
            */}
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/rajumthpt/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=071b35&text_color=e2e8f0&primary_color=eab308"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className={`container ${styles.faqInner}`}>
          <h2 className={styles.faqHeading}>Before You Book</h2>
          <div className={styles.faqGrid}>
            {FAQS.map((item) => (
              <div key={item.q} className={styles.faqCard}>
                <h4 className={styles.faqQ}>{item.q}</h4>
                <p className={styles.faqA}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
