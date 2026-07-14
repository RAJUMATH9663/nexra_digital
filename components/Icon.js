'use client';

/*
 * Central inline icon set for NEXRA DIGITAL.
 * All icons share a 0 0 48 48 viewBox and use currentColor so they can be
 * themed (gold on hover, white default, navy on light cards) purely via CSS.
 * Source SVG files also live in /public/icons for direct <img> use, favicons,
 * and design handoff.
 */

import React from 'react';

const PATHS = {
  photography: (
    <><circle cx="24" cy="26" r="9"/><circle cx="24" cy="26" r="3.4" fill="currentColor" stroke="none"/><path d="M6 16h8l3-5h14l3 5h8v22H6z"/><path d="M14 16v-2"/></>
  ),
  videography: (
    <><rect x="6" y="14" width="24" height="20" rx="3"/><path d="M30 20l12-6v20l-12-6"/><circle cx="18" cy="24" r="4"/></>
  ),
  editing: (
    <><rect x="6" y="10" width="36" height="22" rx="2"/><path d="M6 32l10-10 6 6 8-10 12 14"/><path d="M14 40h20"/><path d="M24 32v8"/></>
  ),
  drone: (
    <><circle cx="24" cy="24" r="5"/><path d="M14 14l-8-6M34 14l8-6M14 34l-8 6M34 34l8 6"/><circle cx="8" cy="6" r="3"/><circle cx="40" cy="6" r="3"/><circle cx="8" cy="42" r="3"/><circle cx="40" cy="42" r="3"/></>
  ),
  website: (
    <><rect x="5" y="9" width="38" height="30" rx="3"/><path d="M5 17h38"/><circle cx="10.5" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="13" r="1" fill="currentColor" stroke="none"/><path d="M12 25h12M12 31h20"/></>
  ),
  software: (
    <><path d="M16 14l-10 10 10 10"/><path d="M32 14l10 10-10 10"/><path d="M28 10l-8 28"/></>
  ),
  branding: (
    <><path d="M24 6l5.5 11.4L42 19l-9 9 2 12.6L24 35 13 40.6 15 28l-9-9 12.5-1.6z"/></>
  ),
  marketing: (
    <><path d="M6 26l14-6v12z"/><path d="M20 20l16-8v28l-16-8"/><path d="M36 20v12"/><path d="M12 32l1 8h4l1-8"/></>
  ),
  seo: (
    <><circle cx="20" cy="20" r="13"/><path d="M29.5 29.5L42 42"/><path d="M14 20h12M20 14v12" opacity="0.5"/></>
  ),
  react: (
    <><circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none"/><ellipse cx="24" cy="24" rx="18" ry="7.2"/><ellipse cx="24" cy="24" rx="18" ry="7.2" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="18" ry="7.2" transform="rotate(120 24 24)"/></>
  ),
  nextjs: (
    <><circle cx="24" cy="24" r="18"/><path d="M17 16v16" /><path d="M17 16l14 16"/><path d="M31 16v10" opacity="0.6"/></>
  ),
  python: (
    <><path d="M24 6c-6 0-7 3-7 6v4h7"/><path d="M17 16h14v6c0 3-1 6-7 6s-7-3-7-6"/><path d="M24 42c6 0 7-3 7-6v-4h-7"/><path d="M31 32H17v-6c0-3 1-6 7-6s7 3 7 6"/><circle cx="19" cy="11" r="1.3" fill="currentColor" stroke="none"/><circle cx="29" cy="37" r="1.3" fill="currentColor" stroke="none"/></>
  ),
  django: (
    <><path d="M18 6h8v28c0 5-3 8-9 8"/><path d="M18 16c-6 0-10 4-10 10s4 10 10 10 10-4 10-10"/></>
  ),
  email: (
    <><rect x="5" y="11" width="38" height="26" rx="3"/><path d="M6 13l18 15 18-15"/></>
  ),
  phone: (
    <><path d="M12 6h6l3 8-4 3c2 6 6 10 12 12l3-4 8 3v6c0 3-2 5-5 5-16-1-29-14-30-30 0-3 2-3 3-3z"/></>
  ),
  whatsapp: (
    <><path d="M24 6a18 18 0 00-15.5 27L6 42l9.3-2.4A18 18 0 1024 6z"/><path d="M17 17c-1 3 1 8 3 10s7 4 10 3l1-4-5-2-1 2c-2-1-4-3-5-5l2-1-2-5z" fill="currentColor" stroke="none"/></>
  ),
  location: (
    <><path d="M24 44s14-13 14-24a14 14 0 10-28 0c0 11 14 24 14 24z"/><circle cx="24" cy="20" r="5"/></>
  ),
  quote: (
    <><path d="M10 26c0-8 5-14 12-16v6c-4 2-6 5-6 8h6v12H10z"/><path d="M26 26c0-8 5-14 12-16v6c-4 2-6 5-6 8h6v12H26z"/></>
  ),
  arrow: (
    <><path d="M8 24h32"/><path d="M30 12l12 12-12 12"/></>
  ),
  star: (
    <><path d="M24 6l5.5 11.4L42 19l-9 9 2 12.6L24 35 13 40.6 15 28l-9-9 12.5-1.6z" fill="currentColor" stroke="none"/></>
  ),
  design: (
    <><path d="M8 40l4-12L34 6l8 8-22 22z"/><path d="M28 12l8 8"/></>
  ),
  growth: (
    <><path d="M6 38h36" /><path d="M10 34V22M20 34V14M30 34V24M40 34V10"/></>
  ),
  delivery: (
    <><path d="M6 18h22v18H6z"/><path d="M28 24h8l6 6v6h-14z"/><circle cx="14" cy="38" r="3.4"/><circle cx="34" cy="38" r="3.4"/></>
  ),
  support: (
    <><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="7"/><path d="M13 13l7 7M35 13l-7 7M13 35l7-7M35 35l-7-7"/></>
  ),
};

export default function Icon({ name, size = 24, className = '', strokeWidth = 2, ...rest }) {
  const content = PATHS[name];
  if (!content) return null;
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {content}
    </svg>
  );
}
