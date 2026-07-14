import os, math, random
from xml.sax.saxutils import escape as xml_escape

BASE = os.path.dirname(__file__)
OUT = os.path.join(BASE, "..", "public", "images")
os.makedirs(OUT, exist_ok=True)

W, H = 800, 600

DEFS = '''<defs>
  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#071b35"/>
    <stop offset="55%" stop-color="#0b3d91"/>
    <stop offset="100%" stop-color="#123163"/>
  </linearGradient>
  <linearGradient id="seam" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8a7124"/>
    <stop offset="50%" stop-color="#d4af37"/>
    <stop offset="100%" stop-color="#f0dfa6"/>
  </linearGradient>
  <radialGradient id="glow" cx="50%" cy="50%" r="60%">
    <stop offset="0%" stop-color="#d4af37" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="#d4af37" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.14"/>
    <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02"/>
  </linearGradient>
</defs>'''

def particles(seed, n=14):
    r = random.Random(seed)
    out = []
    for _ in range(n):
        x = r.uniform(20, W-20)
        y = r.uniform(20, H-20)
        rad = r.uniform(1.2, 3.2)
        op = r.uniform(0.15, 0.55)
        out.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{rad:.1f}" fill="#f0dfa6" opacity="{op:.2f}"/>')
    return "\n".join(out)

def panel(seed, glyph, label, sub=""):
    label = xml_escape(label)
    sub = xml_escape(sub)
    body = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="{label}">
{DEFS}
<rect width="{W}" height="{H}" fill="url(#bgGrad)"/>
<rect width="{W}" height="{H}" fill="url(#glow)"/>
{particles(seed)}
<line x1="0" y1="{H*0.78:.0f}" x2="{W}" y2="{H*0.22:.0f}" stroke="url(#seam)" stroke-width="2.5" opacity="0.55"/>
<circle cx="{W/2:.0f}" cy="{H/2:.0f}" r="150" fill="url(#glass)" stroke="#f0dfa6" stroke-opacity="0.25" stroke-width="1"/>
<g transform="translate({W/2-48},{H/2-48}) scale(2)" stroke="#f0dfa6" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">
{glyph}
</g>
<text x="40" y="{H-40}" font-family="Montserrat, sans-serif" font-size="22" font-weight="700" fill="#ffffff">{label}</text>
{f'<text x="40" y="{H-16}" font-family="Poppins, sans-serif" font-size="13" fill="#aebbd4">{sub}</text>' if sub else ''}
</svg>'''
    return body

GLYPHS = {
 "photography-workspace": ('<circle cx="24" cy="26" r="9"/><path d="M6 16h8l3-5h14l3 5h8v22H6z"/>', "Photography", "Studio & On-Location Shoots"),
 "videographer-shoot": ('<rect x="6" y="14" width="24" height="20" rx="3"/><path d="M30 20l12-6v20l-12-6"/>', "Videography", "Cinematic Storytelling"),
 "drone-shoot": ('<circle cx="24" cy="24" r="5"/><path d="M14 14l-8-6M34 14l8-6M14 34l-8 6M34 34l8 6"/>', "Drone Shoot", "Aerial Cinematography"),
 "video-editing-setup": ('<rect x="6" y="10" width="36" height="22" rx="2"/><path d="M6 32l10-10 6 6 8-10 12 14"/>', "Video Editing", "Colour Grade & Post-Production"),
 "developer-workspace": ('<path d="M16 14l-10 10 10 10"/><path d="M32 14l10 10-10 10"/><path d="M28 10l-8 28"/>', "Development", "Clean, Scalable Code"),
 "software-illustration": ('<rect x="6" y="10" width="36" height="26" rx="3"/><path d="M6 18h36"/><circle cx="12" cy="14" r="1.2" fill="#f0dfa6"/>', "Software", "Custom Product Engineering"),
 "designer-workspace": ('<path d="M8 40l4-12L34 6l8 8-22 22z"/><path d="M28 12l8 8"/>', "Design Studio", "Graphic & Brand Design"),
 "branding-illustration": ('<path d="M24 6l5.5 11.4L42 19l-9 9 2 12.6L24 35 13 40.6 15 28l-9-9 12.5-1.6z"/>', "Branding", "Identity Systems That Endure"),
 "seo-illustration": ('<circle cx="20" cy="20" r="13"/><path d="M29.5 29.5L42 42"/>', "SEO", "Rank. Reach. Convert."),
 "digital-marketing-illustration": ('<path d="M6 26l14-6v12z"/><path d="M20 20l16-8v28l-16-8"/>', "Digital Marketing", "Campaigns That Compound"),
 "creative-team": ('<circle cx="14" cy="18" r="7"/><circle cx="34" cy="18" r="7"/><circle cx="24" cy="34" r="7"/>', "Our Team", "Strategists, Makers & Engineers"),
 "office-background": ('<rect x="6" y="14" width="36" height="26" rx="2"/><path d="M6 22h36M16 22v18M32 22v18"/>', "Studio Space", "Where Ideas Are Built"),
 "business-meeting": ('<circle cx="14" cy="16" r="6"/><circle cx="34" cy="16" r="6"/><path d="M6 40c0-8 6-12 8-12M42 40c0-8-6-12-8-12"/><path d="M18 30h12v10H18z"/>', "Strategy Session", "Aligning on Vision & Roadmap"),
 "website-mockup": ('<rect x="5" y="9" width="38" height="30" rx="3"/><path d="M5 17h38"/><path d="M12 25h12M12 31h20"/>', "Website Design", "Responsive, Fast, On-Brand"),
 "mobile-app-mockup": ('<rect x="15" y="4" width="18" height="40" rx="3"/><path d="M20 8h8"/><circle cx="24" cy="38" r="1.6" fill="#f0dfa6"/>', "Mobile App", "Native-Feel Experiences"),
 "dashboard-mockup": ('<rect x="4" y="8" width="40" height="32" rx="2"/><path d="M10 32V20M18 32V14M26 32V24M34 32V18"/>', "Product Dashboard", "Data, Visualised"),
 "logo-mockup": ('<path d="M24 4 L40 13 L40 31 L24 40 L8 31 L8 13 Z"/><path d="M8 13 L24 22 L40 13"/>', "Logo System", "Marks Built to Scale"),
 "laptop-mockup": ('<rect x="8" y="8" width="32" height="20" rx="2"/><path d="M4 34h40l-4 6H8z"/>', "Web Presentation", "Client-Ready Presentation"),
 "social-mockup": ('<rect x="10" y="4" width="28" height="40" rx="5"/><rect x="15" y="12" width="18" height="18" rx="2"/><path d="M15 34h18"/>', "Social Media", "Content That Gets Shared"),
}

for fname, (glyph, label, sub) in GLYPHS.items():
    seed = abs(hash(fname)) % 10000
    svg = panel(seed, glyph, label, sub)
    with open(os.path.join(OUT, f"{fname}.svg"), "w") as f:
        f.write(svg)

print(f"Wrote {len(GLYPHS)} illustration panels")
