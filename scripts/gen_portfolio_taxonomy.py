import os, random
from xml.sax.saxutils import escape as xml_escape

BASE = os.path.dirname(__file__)
PORT = os.path.join(BASE, "..", "public", "images", "portfolio")
os.makedirs(PORT, exist_ok=True)

CARD_DEFS = '''<defs>
  <linearGradient id="pc{i}" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="{c1}"/>
    <stop offset="100%" stop-color="{c2}"/>
  </linearGradient>
</defs>'''

PALETTES = [
 ("#0b3d91", "#123163"), ("#071b35", "#0b3d91"), ("#123163", "#1a56c4"),
 ("#0d2647", "#8a7124"), ("#0b3d91", "#d4af37"), ("#071b35", "#1a56c4"),
]

# Keys and item order MUST match lib/data.js PORTFOLIO_CATEGORIES / PORTFOLIO_NAMES exactly,
# since image paths there are built as `/images/portfolio/${key}-${String(i+1).padStart(2,'0')}.svg`.
CATEGORY_LABELS = {
    'video': 'Video Editing',
    'photo': 'Photography & Videography',
    'design': 'Graphic Design',
    'social': 'Social Media Management',
    'marketing': 'Digital Marketing',
    'website': 'Website Development',
}

PORTFOLIO_NAMES = {
  'video': [
    'Instagram Reels', 'YouTube Videos', 'YouTube Shorts', 'Promotional Videos', 'Corporate Videos',
    'Product Videos', 'Event Highlights', 'Wedding & Pre-Wedding Edits', 'Travel Vlogs', 'Cinematic Editing',
    'Color Grading', 'Motion Graphics', 'Subtitles & Captions', 'Intro & Outro Videos', 'Thumbnail Design',
  ],
  'photo': [
    'Product Photography', 'Business Photography', 'Corporate Shoots', 'Event Coverage',
    'Real Estate Photography', 'Food Photography', 'Fashion Photography', 'Drone Videography', 'Promotional Shoots',
  ],
  'design': [
    'Social Media Posts', 'Posters', 'Banners', 'Flyers', 'Brochures',
    'Logo Design', 'Business Cards', 'Menu Cards', 'Invitation Cards', 'Brand Identity Design',
  ],
  'social': [
    'Content Planning', 'Post Scheduling', 'Reel Management', 'Story Design',
    'Caption Writing', 'Hashtag Research', 'Community Management', 'Monthly Analytics Reports',
  ],
  'marketing': [
    'Meta Ads (Facebook & Instagram)', 'Google Ads', 'Search Engine Optimization (SEO)', 'Local SEO',
    'Email Marketing', 'Lead Generation', 'Brand Promotion', 'Marketing Strategy',
  ],
  'website': [
    'Business Websites', 'Portfolio Websites', 'E-commerce Websites', 'Restaurant Websites',
    'Real Estate Websites', 'Landing Pages', 'Website Redesign', 'Website Maintenance', 'Domain & Hosting Setup',
  ],
}


def shape_layer(seed, category):
    r = random.Random(seed)
    shapes = []
    if category == 'video':
        shapes.append('<rect x="30" y="40" width="340" height="180" rx="10" fill="none" stroke="#f0dfa6" stroke-width="2" opacity="0.5"/>')
        shapes.append('<circle cx="200" cy="130" r="34" fill="#f0dfa6" opacity="0.16"/>')
        shapes.append('<path d="M190 115 L190 145 L216 130 Z" fill="#f0dfa6" opacity="0.7"/>')
        for k in range(4):
            shapes.append(f'<rect x="{40+k*80}" y="200" width="60" height="10" rx="3" fill="#f0dfa6" opacity="0.25"/>')
    elif category == 'photo':
        for _ in range(3):
            cx, cy, rad = r.uniform(80, 320), r.uniform(60, 180), r.uniform(30, 70)
            shapes.append(f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{rad:.0f}" fill="#f0dfa6" opacity="0.1"/>')
        shapes.append('<rect x="120" y="90" width="160" height="110" rx="8" fill="none" stroke="#f0dfa6" stroke-width="2.5" opacity="0.55"/>')
        shapes.append('<circle cx="200" cy="145" r="34" fill="none" stroke="#f0dfa6" stroke-width="3" opacity="0.6"/>')
        shapes.append('<circle cx="200" cy="145" r="13" fill="#f0dfa6" opacity="0.5"/>')
    elif category == 'design':
        for k in range(3):
            cx = 110 + k * 90
            shapes.append(f'<path d="M{cx} 70 L{cx+40} 100 L{cx+25} 150 L{cx-25} 150 L{cx-40} 100 Z" fill="#f0dfa6" opacity="{0.09+k*0.06:.2f}"/>')
        shapes.append('<rect x="40" y="180" width="320" height="8" rx="4" fill="#f0dfa6" opacity="0.3"/>')
    elif category == 'social':
        shapes.append('<rect x="150" y="30" width="100" height="160" rx="16" fill="none" stroke="#f0dfa6" stroke-width="2.5" opacity="0.55"/>')
        for k in range(3):
            shapes.append(f'<rect x="165" y="{55+k*40}" width="70" height="24" rx="6" fill="#f0dfa6" opacity="0.16"/>')
        shapes.append('<circle cx="90" cy="120" r="26" fill="#f0dfa6" opacity="0.12"/>')
        shapes.append('<circle cx="310" cy="120" r="26" fill="#f0dfa6" opacity="0.12"/>')
    elif category == 'marketing':
        for k in range(5):
            hgt = r.uniform(30, 120)
            shapes.append(f'<rect x="{40+k*60}" y="{200-hgt:.0f}" width="34" height="{hgt:.0f}" rx="4" fill="#f0dfa6" opacity="0.32"/>')
        shapes.append('<path d="M40 190 L110 140 L170 165 L230 90 L340 60" fill="none" stroke="#f0dfa6" stroke-width="2.5" opacity="0.5"/>')
    elif category == 'website':
        shapes.append('<rect x="40" y="40" width="320" height="160" rx="10" fill="none" stroke="#f0dfa6" stroke-width="2" opacity="0.55"/>')
        shapes.append('<rect x="40" y="40" width="320" height="24" fill="#f0dfa6" opacity="0.18"/>')
        for k in range(3):
            shapes.append(f'<rect x="{60+k*100}" y="90" width="80" height="90" rx="6" fill="#f0dfa6" opacity="0.12"/>')
    return "\n".join(shapes)


def portfolio_card(w, h, seed, category, label, sub):
    c1, c2 = PALETTES[seed % len(PALETTES)]
    r = random.Random(seed)
    particles = "\n".join(
        f'<circle cx="{r.uniform(0,w):.0f}" cy="{r.uniform(0,h):.0f}" r="{r.uniform(1,2.4):.1f}" fill="#ffffff" opacity="{r.uniform(0.08,0.25):.2f}"/>'
        for _ in range(10)
    )
    safe_label = xml_escape(label)
    safe_sub = xml_escape(sub)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="{safe_label}">
{CARD_DEFS.format(i=seed, c1=c1, c2=c2)}
<rect width="{w}" height="{h}" fill="url(#pc{seed})"/>
{particles}
{shape_layer(seed, category)}
<line x1="0" y1="{h*0.9:.0f}" x2="{w}" y2="{h*0.05:.0f}" stroke="#d4af37" stroke-width="1.5" opacity="0.35"/>
<text x="24" y="{h-22}" font-family="Montserrat, sans-serif" font-size="15" font-weight="700" fill="#ffffff">{safe_label}</text>
<text x="24" y="{h-6}" font-family="Poppins, sans-serif" font-size="10" fill="#d4af37" letter-spacing="1">{safe_sub}</text>
</svg>'''
    return svg


count = 0
for key, names in PORTFOLIO_NAMES.items():
    label = CATEGORY_LABELS[key]
    for i, name in enumerate(names):
        count += 1
        seed = count * 7 + i
        svg = portfolio_card(400, 260, seed, key, name, label)
        fname = f"{key}-{str(i+1).zfill(2)}.svg"
        with open(os.path.join(PORT, fname), "w") as f:
            f.write(svg)

print("Portfolio thumbnails written:", count)
