import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="eyebrow" style={{ justifyContent: 'center' }}>404</span>
        <h1 className="section-heading" style={{ margin: '0 auto' }}>This page took a wrong turn</h1>
        <p className="section-sub" style={{ margin: '1rem auto 2rem' }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </section>
  );
}
