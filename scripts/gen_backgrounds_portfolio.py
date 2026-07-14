import os, random

BASE = os.path.dirname(__file__)
OUT = os.path.join(BASE, "..", "public", "images")
PORT = os.path.join(OUT, "portfolio")
os.makedirs(PORT, exist_ok=True)

DEFS = '''<defs>
  <linearGradient id="bg{i}" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#071b35"/>
    <stop offset="{m}%" stop-color="#0b3d91"/>
    <stop offset="100%" stop-color="#123163"/>
  </linearGradient>
  <linearGradient id="sm{i}" x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8a7124"/>
    <stop offset="50%" stop-color="#d4af37"/>
    <stop offset="100%" stop-color="#f0dfa6"/>
  </linearGradient>
</defs>'''

def hero_bg(w=1600, h=900, seed=1, name="hero-background"):
    r = random.Random(seed)
    lines = []
    for k in range(5):
        y1 = r.uniform(0, h)
        y2 = r.uniform(0, h)
        lines.append(f'<line x1="0" y1="{y1:.0f}" x2="{w}" y2="{y2:.0f}" stroke="url(#sm{seed})" stroke-width="1" opacity="{0.08+k*0.04:.2f}"/>')
    parts = []
    for _ in range(40):
        x = r.uniform(0, w); y = r.uniform(0, h); rad = r.uniform(1, 3)
        parts.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{rad:.1f}" fill="#f0dfa6" opacity="{r.uniform(0.1,0.5):.2f}"/>')
    hexes = []
    for _ in range(6):
        cx = r.uniform(100, w-100); cy = r.uniform(100, h-100); rad = r.uniform(60, 160)
        hexes.append(f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{rad:.0f}" fill="none" stroke="#f0dfa6" stroke-opacity="0.10" stroke-width="1"/>')
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="{name}">
{DEFS.format(i=seed, m=55)}
<rect width="{w}" height="{h}" fill="url(#bg{seed})"/>
{''.join(hexes)}
{''.join(lines)}
{''.join(parts)}
<line x1="0" y1="{h*0.85:.0f}" x2="{w}" y2="{h*0.1:.0f}" stroke="url(#sm{seed})" stroke-width="3" opacity="0.6"/>
</svg>'''
    return svg

# Hero + abstract atmospheric backgrounds
for name, seed in [("hero-background", 11), ("abstract-bg-1", 22), ("abstract-bg-2", 33)]:
    with open(os.path.join(OUT, f"{name}.svg"), "w") as f:
        f.write(hero_bg(seed=seed, name=name))

# ---- Portfolio thumbnails ----
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

def shape_layer(seed, category):
    r = random.Random(seed)
    shapes = []
    if category == "photography":
        for _ in range(3):
            cx, cy, rad = r.uniform(80,320), r.uniform(60,180), r.uniform(30,70)
            shapes.append(f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{rad:.0f}" fill="#f0dfa6" opacity="0.12"/>')
        shapes.append('<circle cx="200" cy="120" r="42" fill="none" stroke="#f0dfa6" stroke-width="3" opacity="0.6"/>')
        shapes.append('<circle cx="200" cy="120" r="16" fill="#f0dfa6" opacity="0.5"/>')
    elif category == "website":
        shapes.append('<rect x="40" y="40" width="320" height="160" rx="10" fill="none" stroke="#f0dfa6" stroke-width="2" opacity="0.55"/>')
        shapes.append('<rect x="40" y="40" width="320" height="24" fill="#f0dfa6" opacity="0.18"/>')
        for k in range(3):
            shapes.append(f'<rect x="{60+k*100}" y="90" width="80" height="90" rx="6" fill="#f0dfa6" opacity="0.12"/>')
    elif category == "branding":
        for k in range(3):
            cx = 100 + k*90
            shapes.append(f'<path d="M{cx} 60 L{cx+40} 90 L{cx+25} 140 L{cx-25} 140 L{cx-40} 90 Z" fill="#f0dfa6" opacity="{0.10+k*0.06:.2f}"/>')
    elif category == "social":
        for k in range(4):
            x = 40 + (k%2)*170
            y = 40 + (k//2)*90
            shapes.append(f'<rect x="{x}" y="{y}" width="150" height="70" rx="10" fill="#f0dfa6" opacity="0.12"/>')
    elif category == "dashboard":
        for k in range(5):
            hgt = r.uniform(30,120)
            shapes.append(f'<rect x="{40+k*60}" y="{200-hgt:.0f}" width="34" height="{hgt:.0f}" rx="4" fill="#f0dfa6" opacity="0.35"/>')
        shapes.append('<circle cx="300" cy="80" r="34" fill="none" stroke="#f0dfa6" stroke-width="8" opacity="0.4"/>')
    elif category == "mobile":
        shapes.append('<rect x="130" y="20" width="140" height="200" rx="18" fill="none" stroke="#f0dfa6" stroke-width="2.5" opacity="0.55"/>')
        for k in range(3):
            shapes.append(f'<rect x="145" y="{55+k*45}" width="110" height="30" rx="6" fill="#f0dfa6" opacity="0.15"/>')
    return "\n".join(shapes)

def portfolio_card(w, h, seed, category, label, sub):
    c1, c2 = PALETTES[seed % len(PALETTES)]
    r = random.Random(seed)
    particles = "\n".join(
        f'<circle cx="{r.uniform(0,w):.0f}" cy="{r.uniform(0,h):.0f}" r="{r.uniform(1,2.4):.1f}" fill="#ffffff" opacity="{r.uniform(0.08,0.25):.2f}"/>'
        for _ in range(10)
    )
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img" aria-label="{label}">
{CARD_DEFS.format(i=seed, c1=c1, c2=c2)}
<rect width="{w}" height="{h}" fill="url(#pc{seed})"/>
{particles}
{shape_layer(seed, category)}
<line x1="0" y1="{h*0.9:.0f}" x2="{w}" y2="{h*0.05:.0f}" stroke="#d4af37" stroke-width="1.5" opacity="0.35"/>
<text x="24" y="{h-22}" font-family="Montserrat, sans-serif" font-size="16" font-weight="700" fill="#ffffff">{label}</text>
<text x="24" y="{h-6}" font-family="Poppins, sans-serif" font-size="10" fill="#d4af37" letter-spacing="1">{sub}</text>
</svg>'''
    return svg

PORTFOLIO_SPEC = [
 ("photography", 8, "Photography", ["Editorial Portrait", "Product Story", "Golden Hour Series", "Architecture Study",
    "Studio Session", "Street Documentary", "Event Coverage", "Fashion Editorial"]),
 ("website", 6, "Website Design", ["Fintech Platform", "Real Estate Portal", "SaaS Dashboard",
    "Restaurant Group", "Travel Marketplace", "Healthcare Portal"]),
 ("branding", 6, "Brand Identity", ["Astra Coffee Co.", "Verde Wellness", "Lumen Studios",
    "Northbridge Capital", "Aria Skincare", "Kestrel Outdoors"]),
 ("social", 6, "Social Media Design", ["Product Launch Set", "Founder Story Series", "Reels Cover Pack",
    "Seasonal Campaign", "Carousel Templates", "Story Highlight Set"]),
 ("dashboard", 4, "Software UI", ["Analytics Dashboard", "Inventory System", "CRM Console", "Billing Portal"]),
 ("mobile", 4, "Mobile App UI", ["Fitness App", "Food Delivery App", "Banking App", "Booking App"]),
]

idx = 0
for category, count, label_prefix, names in PORTFOLIO_SPEC:
    for i in range(count):
        idx += 1
        fname = f"{category}-{i+1:02d}"
        svg = portfolio_card(400, 260, idx*7+i, category, names[i], label_prefix)
        with open(os.path.join(PORT, f"{fname}.svg"), "w") as f:
            f.write(svg)

print("Portfolio thumbnails written:", idx)
