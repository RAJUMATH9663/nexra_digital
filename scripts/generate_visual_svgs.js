const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'portfolio', 'dynamic');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Colour palettes per category
const palettes = {
  video:     { bg1: '#1a0533', bg2: '#3d0a6e', accent: '#e040fb', accent2: '#b388ff' },
  photo:     { bg1: '#0d1b2a', bg2: '#1b3a5c', accent: '#64b5f6', accent2: '#90caf9' },
  design:    { bg1: '#031520', bg2: '#073d5e', accent: '#00e5ff', accent2: '#80deea' },
  social:    { bg1: '#1a0a2e', bg2: '#2d1b69', accent: '#ff6090', accent2: '#ffab40' },
  marketing: { bg1: '#051f1b', bg2: '#0a3d35', accent: '#00e676', accent2: '#69f0ae' },
  website:   { bg1: '#070d1a', bg2: '#0d2137', accent: '#448aff', accent2: '#82b1ff' },
};

// Each illustration draws in a 400×165 viewport (upper area above the overlay)
// The SVG overall is 400×260. Overlay starts at ~40% = y:104
// We keep all main visual elements between y:10 and y:140
const illustrations = {

  // ─── VIDEO ────────────────────────────────────────
  'Instagram Reels': (a, b) => `
    <rect x="148" y="8" width="104" height="162" rx="20" fill="none" stroke="${a}" stroke-width="3" opacity="0.95"/>
    <rect x="157" y="18" width="86" height="142" rx="12" fill="${a}" opacity="0.12"/>
    <circle cx="200" cy="6" r="5" fill="${a}" opacity="0.6"/>
    <circle cx="200" cy="98" r="36" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.85"/>
    <circle cx="200" cy="98" r="20" fill="${a}" opacity="0.22"/>
    <polygon points="191,86 191,111 218,98" fill="${a}" opacity="1"/>
    <line x1="159" y1="60" x2="159" y2="136" stroke="${b}" stroke-width="1.5" opacity="0.4"/>
    <line x1="241" y1="60" x2="241" y2="136" stroke="${b}" stroke-width="1.5" opacity="0.4"/>
    <circle cx="90" cy="35" r="3" fill="${b}" opacity="0.7"/><circle cx="310" cy="55" r="3" fill="${a}" opacity="0.7"/>
    <circle cx="70" cy="130" r="4" fill="${b}" opacity="0.5"/>`,

  'YouTube Videos': (a, b) => `
    <rect x="55" y="18" width="290" height="148" rx="14" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="62" y="25" width="276" height="134" rx="9" fill="${a}" opacity="0.08"/>
    <circle cx="200" cy="92" r="44" fill="${a}" opacity="0.2"/>
    <polygon points="183,70 183,115 225,92" fill="${a}" opacity="1"/>
    <rect x="70" y="150" width="260" height="5" rx="2.5" fill="${b}" opacity="0.25"/>
    <rect x="70" y="150" width="130" height="5" rx="2.5" fill="${a}" opacity="0.9"/>
    <circle cx="80" cy="30" r="5" fill="${b}" opacity="0.5"/><circle cx="200" cy="30" r="5" fill="${a}" opacity="0.5"/>
    <circle cx="320" cy="30" r="5" fill="${b}" opacity="0.5"/>`,

  'YouTube Shorts': (a, b) => `
    <rect x="158" y="5" width="84" height="165" rx="18" fill="none" stroke="${a}" stroke-width="3" opacity="0.95"/>
    <rect x="165" y="12" width="70" height="151" rx="12" fill="${a}" opacity="0.1"/>
    <circle cx="200" cy="88" r="30" fill="${a}" opacity="0.22"/>
    <polygon points="192,75 192,102 219,88" fill="${a}" opacity="1"/>
    <polygon points="206,32 197,54 207,52 196,78 215,50 206,53" fill="${b}" opacity="0.9"/>
    <rect x="186" y="5" width="28" height="6" rx="3" fill="${a}" opacity="0.5"/>
    <circle cx="88" cy="50" r="4" fill="${b}" opacity="0.6"/><circle cx="312" cy="70" r="4" fill="${a}" opacity="0.6"/>`,

  'Promotional Videos': (a, b) => `
    <path d="M62,92 L128,62 L128,148 L62,118 Z" fill="${a}" opacity="0.3" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="42" y="92" width="24" height="26" rx="6" fill="${a}" opacity="0.4"/>
    <path d="M136,82 Q158,105 136,128" fill="none" stroke="${b}" stroke-width="3" opacity="0.8"/>
    <path d="M144,70 Q178,105 144,140" fill="none" stroke="${b}" stroke-width="2.5" opacity="0.6"/>
    <path d="M152,58 Q198,105 152,152" fill="none" stroke="${a}" stroke-width="2" opacity="0.4"/>
    <circle cx="300" cy="68" r="42" fill="${a}" opacity="0.12"/>
    <text x="283" y="80" font-family="sans-serif" font-size="46" fill="${a}" opacity="0.85">★</text>
    <circle cx="80" cy="25" r="4" fill="${b}" opacity="0.6"/><circle cx="340" cy="150" r="4" fill="${b}" opacity="0.5"/>`,

  'Corporate Videos': (a, b) => `
    <rect x="85" y="22" width="85" height="148" rx="5" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.85"/>
    <rect x="215" y="48" width="68" height="122" rx="5" fill="none" stroke="${b}" stroke-width="2" opacity="0.7"/>
    ${[[97,38],[120,38],[97,60],[120,60],[97,82],[120,82],[97,104],[120,104],[97,126],[120,126]].map(([x,y])=>`<rect x="${x}" y="${y}" width="14" height="12" rx="2" fill="${a}" opacity="0.4"/>`).join('')}
    ${[[224,64],[244,64],[224,86],[244,86],[224,108],[244,108]].map(([x,y])=>`<rect x="${x}" y="${y}" width="12" height="10" rx="2" fill="${b}" opacity="0.35"/>`).join('')}
    <rect x="160" y="95" width="48" height="34" rx="6" fill="none" stroke="${b}" stroke-width="2" opacity="0.85"/>
    <path d="M172,95 L172,84 L196,84 L196,95" fill="none" stroke="${b}" stroke-width="2" opacity="0.7"/>`,

  'Product Videos': (a, b) => `
    <rect x="118" y="42" width="105" height="105" rx="10" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <polygon points="118,42 170,15 280,42 228,42" fill="${a}" opacity="0.18"/>
    <polygon points="118,42 118,147 170,165 170,62" fill="${b}" opacity="0.12"/>
    <text x="130" y="202" font-family="sans-serif" font-size="22" fill="${a}" opacity="0.9">★★★★★</text>
    <rect x="272" y="18" width="68" height="50" rx="8" fill="none" stroke="${b}" stroke-width="2" opacity="0.75"/>
    <circle cx="306" cy="43" r="13" fill="none" stroke="${b}" stroke-width="2" opacity="0.8"/>
    <circle cx="306" cy="43" r="6" fill="${b}" opacity="0.3"/>`,

  'Event Highlights': (a, b) => `
    ${[[78,22],[118,8],[158,30],[200,14],[242,26],[282,6],[322,20],[95,145],[305,138]].map(([x,y],i)=>
      `<rect x="${x}" y="${y}" width="14" height="14" rx="3" transform="rotate(${i*35},${x+7},${y+7})" fill="${i%2===0?a:b}" opacity="${0.5+i%3*0.18}"/>`).join('')}
    <polygon points="200,160 108,60 292,60" fill="${a}" opacity="0.1"/>
    <circle cx="200" cy="60" r="48" fill="${a}" opacity="0.15"/>
    <text x="200" y="80" font-family="sans-serif" font-size="44" text-anchor="middle" fill="${a}" opacity="0.85">🎬</text>`,

  'Wedding & Pre-Wedding Edits': (a, b) => `
    <circle cx="168" cy="88" r="46" fill="none" stroke="${a}" stroke-width="3.5" opacity="0.9"/>
    <circle cx="232" cy="88" r="46" fill="none" stroke="${b}" stroke-width="3.5" opacity="0.9"/>
    <polygon points="200,22 222,48 200,68 178,48" fill="${a}" opacity="0.7"/>
    <polygon points="200,22 222,48 200,36" fill="${b}" opacity="0.45"/>
    <text x="70" y="58" font-family="sans-serif" font-size="26" fill="${a}" opacity="0.65">♥</text>
    <text x="318" y="138" font-family="sans-serif" font-size="22" fill="${b}" opacity="0.65">♥</text>
    <path d="M60,148 Q130,128 200,155 Q270,182 340,140" fill="none" stroke="${b}" stroke-width="2" opacity="0.45"/>`,

  'Travel Vlogs': (a, b) => `
    <circle cx="200" cy="90" r="78" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.85"/>
    <ellipse cx="200" cy="90" rx="38" ry="78" fill="none" stroke="${b}" stroke-width="1.5" opacity="0.5"/>
    <line x1="122" y1="90" x2="278" y2="90" stroke="${b}" stroke-width="1.5" opacity="0.45"/>
    <line x1="130" y1="54" x2="270" y2="54" stroke="${b}" stroke-width="1" opacity="0.3"/>
    <line x1="130" y1="126" x2="270" y2="126" stroke="${b}" stroke-width="1" opacity="0.3"/>
    <text x="210" y="78" font-family="sans-serif" font-size="32" fill="${a}" opacity="0.95">✈</text>`,

  'Cinematic Editing': (a, b) => `
    <circle cx="200" cy="88" r="72" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <circle cx="200" cy="88" r="26" fill="${a}" opacity="0.2"/>
    ${[0,60,120,180,240,300].map(ang=>{
      const r=52, rad=ang*Math.PI/180;
      return `<circle cx="${(200+r*Math.cos(rad)).toFixed(1)}" cy="${(88+r*Math.sin(rad)).toFixed(1)}" r="13" fill="none" stroke="${a}" stroke-width="1.8" opacity="0.55"/>`;
    }).join('')}
    <rect x="35" y="22" width="88" height="64" rx="7" fill="none" stroke="${b}" stroke-width="2" opacity="0.8"/>
    <rect x="35" y="22" width="88" height="20" rx="7" fill="${b}" opacity="0.22"/>
    ${[48,62,76,90,104].map(x=>`<line x1="${x}" y1="22" x2="${x-7}" y2="42" stroke="${b}" stroke-width="2" opacity="0.55"/>`).join('')}`,

  'Color Grading': (a, b) => `
    ${['#ff1744','#ff9100','#ffea00','#00e676','#00b0ff','#d500f9'].map((c,i)=>{
      const a1=(i*60-90)*Math.PI/180, a2=((i+1)*60-90)*Math.PI/180, r=68, cx=200, cy=82;
      return `<path d="M${cx},${cy} L${(cx+r*Math.cos(a1)).toFixed(1)},${(cy+r*Math.sin(a1)).toFixed(1)} A${r},${r},0,0,1,${(cx+r*Math.cos(a2)).toFixed(1)},${(cy+r*Math.sin(a2)).toFixed(1)} Z" fill="${c}" opacity="0.75"/>`;
    }).join('')}
    <circle cx="200" cy="82" r="24" fill="#0a0a0a" opacity="0.9"/>
    <circle cx="200" cy="82" r="10" fill="${a}" opacity="0.5"/>
    ${[75,103,131,159,187,215,243,271,299,327].map((x,i)=>`<rect x="${x}" y="${178-i*5}" width="13" height="${18+i*5}" rx="2" fill="${i%3===0?a:b}" opacity="0.65"/>`).join('')}`,

  'Motion Graphics': (a, b) => `
    <path d="M38,100 Q120,15 200,100 Q280,185 362,100" fill="none" stroke="${a}" stroke-width="3.5" opacity="0.85"/>
    <path d="M38,100 Q120,185 200,100 Q280,15 362,100" fill="none" stroke="${b}" stroke-width="2.5" opacity="0.6"/>
    ${[[38,100],[200,100],[362,100]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="9" fill="${a}" opacity="0.9"/>`).join('')}
    ${[[95,32],[165,168],[255,32],[315,168]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="6" fill="${b}" opacity="0.75"/>`).join('')}
    <line x1="50"  y1="55" x2="135" y2="55" stroke="${a}" stroke-width="2" opacity="0.35" stroke-dasharray="7 5"/>
    <line x1="265" y1="145" x2="350" y2="145" stroke="${b}" stroke-width="2" opacity="0.35" stroke-dasharray="7 5"/>`,

  'Subtitles & Captions': (a, b) => `
    <rect x="40" y="20" width="320" height="152" rx="14" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.85"/>
    <rect x="48" y="28" width="304" height="136" rx="9" fill="${a}" opacity="0.07"/>
    <line x1="200" y1="28" x2="200" y2="156" stroke="${b}" stroke-width="1" opacity="0.18" stroke-dasharray="5 5"/>
    <line x1="48" y1="96" x2="352" y2="96" stroke="${b}" stroke-width="1" opacity="0.18" stroke-dasharray="5 5"/>
    <rect x="62" y="148" width="276" height="22" rx="6" fill="${a}" opacity="0.3"/>
    <rect x="72" y="153" width="80" height="10" rx="3" fill="#fff" opacity="0.75"/>
    <rect x="162" y="153" width="55" height="10" rx="3" fill="#fff" opacity="0.75"/>
    <rect x="226" y="153" width="90" height="10" rx="3" fill="#fff" opacity="0.75"/>`,

  'Intro & Outro Videos': (a, b) => `
    <circle cx="200" cy="85" r="78" fill="none" stroke="${a}" stroke-width="3" opacity="0.85"
      stroke-dasharray="${(2*Math.PI*78*0.75).toFixed(1)} ${(2*Math.PI*78*0.25).toFixed(1)}"
      stroke-dashoffset="${(2*Math.PI*78*0.25).toFixed(1)}"/>
    <text x="200" y="105" font-family="sans-serif" font-size="56" text-anchor="middle" fill="${a}" opacity="0.9" font-weight="bold">3</text>
    <rect x="285" y="18" width="68" height="50" rx="6" fill="none" stroke="${b}" stroke-width="2" opacity="0.75"/>
    <rect x="285" y="18" width="68" height="15" rx="6" fill="${b}" opacity="0.2"/>
    <path d="M42,170 Q120,155 200,170 Q280,185 358,170" fill="none" stroke="${b}" stroke-width="2.5" opacity="0.55"/>`,

  'Thumbnail Design': (a, b) => `
    <rect x="68" y="22" width="264" height="148" rx="12" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="75" y="29" width="250" height="134" rx="8" fill="${a}" opacity="0.1"/>
    <circle cx="200" cy="95" r="36" fill="${a}" opacity="0.2"/>
    <text x="185" y="110" font-family="sans-serif" font-size="34" fill="${a}" opacity="0.9">👁</text>
    <rect x="68" y="178" width="264" height="16" rx="5" fill="${b}" opacity="0.35"/>
    <rect x="76" y="181" width="140" height="9" rx="3" fill="#fff" opacity="0.65"/>
    <circle cx="92" cy="39" r="5" fill="${b}" opacity="0.55"/><circle cx="308" cy="39" r="5" fill="${a}" opacity="0.55"/>`,

  // ─── PHOTO ────────────────────────────────────────
  'Product Photography': (a, b) => `
    <rect x="95" y="40" width="200" height="130" rx="18" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="150" y="20" width="100" height="28" rx="10" fill="none" stroke="${a}" stroke-width="2" opacity="0.7"/>
    <circle cx="200" cy="105" r="50" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.8"/>
    <circle cx="200" cy="105" r="34" fill="${a}" opacity="0.14"/>
    <circle cx="200" cy="105" r="20" fill="${a}" opacity="0.22"/>
    <rect x="35" y="118" width="54" height="60" rx="5" fill="none" stroke="${b}" stroke-width="2" opacity="0.7"/>
    <polygon points="35,118 62,102 89,118" fill="${b}" opacity="0.22"/>
    <circle cx="290" cy="55" r="10" fill="${b}" opacity="0.7"/><circle cx="290" cy="55" r="17" fill="${b}" opacity="0.18"/>`,

  'Business Photography': (a, b) => `
    <rect x="108" y="38" width="174" height="120" rx="16" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="152" y="20" width="96" height="24" rx="8" fill="none" stroke="${a}" stroke-width="2" opacity="0.75"/>
    <circle cx="195" cy="98" r="42" fill="none" stroke="${a}" stroke-width="2" opacity="0.75"/>
    <circle cx="195" cy="98" r="28" fill="${a}" opacity="0.16"/>
    <rect x="275" y="110" width="76" height="58" rx="8" fill="none" stroke="${b}" stroke-width="2" opacity="0.8"/>
    <path d="M288,110 L288,100 L315,100 L315,110" fill="none" stroke="${b}" stroke-width="2" opacity="0.7"/>
    <line x1="275" y1="138" x2="351" y2="138" stroke="${b}" stroke-width="1.5" opacity="0.4"/>`,

  'Corporate Shoots': (a, b) => `
    ${[118,200,282].map((cx,i)=>`
      <circle cx="${cx}" cy="68" r="22" fill="none" stroke="${i===1?a:b}" stroke-width="2.5" opacity="${i===1?0.9:0.7}"/>
      <path d="M${cx-30},162 Q${cx-30},118 ${cx},118 Q${cx+30},118 ${cx+30},162" fill="none" stroke="${i===1?a:b}" stroke-width="2.5" opacity="${i===1?0.85:0.65}"/>
    `).join('')}
    <circle cx="340" cy="45" r="24" fill="none" stroke="${a}" stroke-width="2" opacity="0.65"/>
    <circle cx="340" cy="45" r="12" fill="${a}" opacity="0.25"/>
    <circle cx="340" cy="45" r="5" fill="${a}" opacity="0.5"/>`,

  'Event Coverage': (a, b) => `
    <rect x="72" y="48" width="178" height="118" rx="14" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="118" y="30" width="90" height="26" rx="8" fill="none" stroke="${a}" stroke-width="2" opacity="0.75"/>
    <circle cx="162" cy="106" r="40" fill="none" stroke="${a}" stroke-width="2" opacity="0.75"/>
    <circle cx="162" cy="106" r="26" fill="${a}" opacity="0.16"/>
    <rect x="262" y="24" width="16" height="68" rx="6" fill="${b}" opacity="0.55"/>
    <circle cx="270" cy="18" r="14" fill="none" stroke="${b}" stroke-width="2" opacity="0.7"/>
    ${[42,65,88,310,330,352].map(x=>`<circle cx="${x}" cy="175" r="8" fill="${b}" opacity="0.28"/>`).join('')}`,

  'Real Estate Photography': (a, b) => `
    <polygon points="200,18 295,82 295,170 105,170 105,82" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <polygon points="200,18 105,82 295,82" fill="${a}" opacity="0.12"/>
    <rect x="175" y="120" width="50" height="50" rx="5" fill="none" stroke="${b}" stroke-width="2" opacity="0.75"/>
    <rect x="115" y="98" width="48" height="40" rx="6" fill="none" stroke="${b}" stroke-width="2" opacity="0.7"/>
    <rect x="237" y="98" width="48" height="40" rx="6" fill="none" stroke="${b}" stroke-width="2" opacity="0.7"/>
    <circle cx="340" cy="40" r="24" fill="none" stroke="${a}" stroke-width="2" opacity="0.65"/>
    <circle cx="340" cy="40" r="12" fill="${a}" opacity="0.22"/>`,

  'Food Photography': (a, b) => `
    <circle cx="200" cy="95" r="78" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.85"/>
    <circle cx="200" cy="95" r="62" fill="${a}" opacity="0.08"/>
    <line x1="92" y1="35" x2="92" y2="155" stroke="${b}" stroke-width="4" opacity="0.75"/>
    <line x1="82"  y1="35" x2="82"  y2="75" stroke="${b}" stroke-width="2.5" opacity="0.55"/>
    <line x1="102" y1="35" x2="102" y2="75" stroke="${b}" stroke-width="2.5" opacity="0.55"/>
    <line x1="308" y1="35" x2="308" y2="155" stroke="${a}" stroke-width="4" opacity="0.7"/>
    <path d="M308,35 Q326,52 308,98" fill="${a}" opacity="0.22"/>
    <path d="M172,28 Q178,14 172,0" fill="none" stroke="${b}" stroke-width="2" opacity="0.55"/>
    <path d="M200,22 Q206,8 200,0"  fill="none" stroke="${b}" stroke-width="2" opacity="0.55"/>
    <path d="M228,28 Q234,14 228,0" fill="none" stroke="${b}" stroke-width="2" opacity="0.55"/>`,

  'Fashion Photography': (a, b) => `
    <path d="M182,14 L158,58 L128,178 L272,178 L242,58 Z" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <path d="M175,14 Q200,30 225,14" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.8"/>
    <path d="M172,2 Q200,−10 228,2 L244,14 L156,14 Z" fill="none" stroke="${b}" stroke-width="2" opacity="0.75"/>
    ${[[72,42],[320,62],[75,168],[322,152]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="${b}" opacity="0.65"/>`).join('')}
    <circle cx="330" cy="32" r="22" fill="none" stroke="${a}" stroke-width="2" opacity="0.65"/>
    <circle cx="330" cy="32" r="11" fill="${a}" opacity="0.22"/>`,

  'Drone Videography': (a, b) => `
    <rect x="162" y="78" width="76" height="48" rx="12" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <line x1="162" y1="88" x2="88" y2="56"  stroke="${a}" stroke-width="3" opacity="0.8"/>
    <line x1="238" y1="88" x2="312" y2="56" stroke="${a}" stroke-width="3" opacity="0.8"/>
    <line x1="162" y1="118" x2="88" y2="150" stroke="${a}" stroke-width="3" opacity="0.8"/>
    <line x1="238" y1="118" x2="312" y2="150" stroke="${a}" stroke-width="3" opacity="0.8"/>
    ${[[88,56],[312,56],[88,150],[312,150]].map(([cx,cy])=>
      `<ellipse cx="${cx}" cy="${cy}" rx="30" ry="9" fill="none" stroke="${b}" stroke-width="2.5" opacity="0.7"/>`).join('')}
    <circle cx="200" cy="126" r="13" fill="${b}" opacity="0.5"/>`,

  'Promotional Shoots': (a, b) => `
    <rect x="88" y="32" width="192" height="128" rx="16" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="140" y="14" width="120" height="26" rx="9" fill="none" stroke="${a}" stroke-width="2" opacity="0.75"/>
    <circle cx="184" cy="96" r="44" fill="none" stroke="${a}" stroke-width="2" opacity="0.75"/>
    <circle cx="184" cy="96" r="28" fill="${a}" opacity="0.16"/>
    <polygon points="248,30 240,62 256,60 242,96" fill="${b}" opacity="0.8"/>
    <path d="M38,172 Q200,155 362,172" fill="none" stroke="${b}" stroke-width="2.5" opacity="0.45"/>`,

  // ─── DESIGN ────────────────────────────────────────
  'Social Media Posts': (a, b) => `
    ${[[52,20],[158,20],[264,20],[52,102],[158,102],[264,102]].map(([x,y],i)=>`
      <rect x="${x}" y="${y}" width="88" height="66" rx="8" fill="${a}" opacity="${0.12+i*0.03}"/>
      <rect x="${x}" y="${y}" width="88" height="66" rx="8" fill="none" stroke="${i%2===0?a:b}" stroke-width="1.8" opacity="0.6"/>
      <circle cx="${x+44}" cy="${y+33}" r="16" fill="${i%2===0?a:b}" opacity="0.32"/>
    `).join('')}
    <text x="165" y="195" font-family="sans-serif" font-size="18" fill="${a}" opacity="0.85">♥ 2.4K  💬 318</text>`,

  'Posters': (a, b) => `
    <rect x="112" y="12" width="176" height="162" rx="9" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="120" y="20" width="160" height="146" rx="6" fill="${a}" opacity="0.08"/>
    <rect x="128" y="38" width="144" height="22" rx="4" fill="${a}" opacity="0.4"/>
    <rect x="136" y="70" width="128" height="12" rx="3" fill="${b}" opacity="0.28"/>
    <rect x="144" y="90" width="112" height="10" rx="3" fill="${b}" opacity="0.22"/>
    <text x="200" y="148" font-family="sans-serif" font-size="40" text-anchor="middle" fill="${a}" opacity="0.65">✦</text>
    <rect x="128" y="160" width="144" height="5" rx="2.5" fill="${a}" opacity="0.35"/>`,

  'Banners': (a, b) => `
    <rect x="32" y="70" width="336" height="86" rx="12" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="40" y="78" width="320" height="70" rx="8" fill="${a}" opacity="0.08"/>
    <rect x="52" y="95" width="190" height="20" rx="4" fill="${a}" opacity="0.4"/>
    <rect x="52" y="124" width="130" height="10" rx="3" fill="${b}" opacity="0.28"/>
    <rect x="272" y="92" width="78" height="30" rx="8" fill="${a}" opacity="0.6"/>
    <rect x="280" y="100" width="60" height="14" rx="3" fill="#fff" opacity="0.5"/>
    <rect x="55" y="22" width="290" height="36" rx="8" fill="none" stroke="${b}" stroke-width="1.5" opacity="0.42"/>
    <rect x="55" y="168" width="290" height="36" rx="8" fill="none" stroke="${b}" stroke-width="1.5" opacity="0.42"/>`,

  'Flyers': (a, b) => `
    <rect x="110" y="8" width="180" height="168" rx="9" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="118" y="16" width="164" height="152" rx="6" fill="${a}" opacity="0.08"/>
    <rect x="118" y="16" width="164" height="85" rx="6" fill="${a}" opacity="0.18"/>
    <circle cx="200" cy="58" r="26" fill="${b}" opacity="0.35"/>
    <rect x="128" y="114" width="144" height="14" rx="3" fill="${a}" opacity="0.4"/>
    <rect x="136" y="136" width="128" height="9" rx="3" fill="${b}" opacity="0.26"/>
    <rect x="142" y="152" width="116" height="8" rx="3" fill="${b}" opacity="0.22"/>
    ${[124,142,160,178,196,214,232,250,268].map(x=>`<rect x="${x}" y="172" width="13" height="20" rx="2" fill="${a}" opacity="0.3"/>`).join('')}`,

  'Brochures': (a, b) => `
    ${[[40,28,96,144],[144,22,112,152],[264,28,96,144]].map(([x,y,w,h],i)=>`
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="none" stroke="${i===1?a:b}" stroke-width="${i===1?2.5:1.8}" opacity="${i===1?0.9:0.55}"/>
      <rect x="${x+5}" y="${y+5}" width="${w-10}" height="${h-10}" rx="4" fill="${a}" opacity="0.04"/>
    `).join('')}
    <rect x="160" y="50" width="80" height="12" rx="3" fill="${a}" opacity="0.35"/>
    <rect x="163" y="70" width="74" height="7" rx="2" fill="${b}" opacity="0.24"/>
    <rect x="163" y="85" width="65" height="7" rx="2" fill="${b}" opacity="0.22"/>
    <line x1="142" y1="22" x2="142" y2="174" stroke="${a}" stroke-width="1.2" opacity="0.35" stroke-dasharray="5 5"/>
    <line x1="260" y1="22" x2="260" y2="174" stroke="${a}" stroke-width="1.2" opacity="0.35" stroke-dasharray="5 5"/>`,

  'Logo Design': (a, b) => `
    <polygon points="200,18 242,90 295,90 254,132 270,205 200,165 130,205 146,132 105,90 158,90" fill="none" stroke="${a}" stroke-width="3" opacity="0.9"/>
    <circle cx="200" cy="110" r="32" fill="${a}" opacity="0.2"/>
    <line x1="200" y1="5"  x2="200" y2="220" stroke="${b}" stroke-width="1.2" opacity="0.22" stroke-dasharray="6 5"/>
    <line x1="48" y1="110" x2="352" y2="110" stroke="${b}" stroke-width="1.2" opacity="0.22" stroke-dasharray="6 5"/>
    <polygon points="290,22 312,54 280,54" fill="${b}" opacity="0.65"/>
    <line x1="298" y1="26" x2="276" y2="8" stroke="${b}" stroke-width="2.5" opacity="0.7"/>`,

  'Business Cards': (a, b) => `
    <rect x="68" y="108" width="224" height="112" rx="12" fill="none" stroke="${b}" stroke-width="2" opacity="0.55" transform="rotate(-7,180,164)"/>
    <rect x="68" y="96" width="224" height="112" rx="12" fill="${a}" opacity="0.1" transform="rotate(-3,180,152)"/>
    <rect x="68" y="84" width="224" height="112" rx="12" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <circle cx="108" cy="115" r="20" fill="${a}" opacity="0.35"/>
    <rect x="140" y="104" width="126" height="12" rx="3" fill="${a}" opacity="0.4"/>
    <rect x="140" y="124" width="95" height="8" rx="2" fill="${b}" opacity="0.28"/>
    <rect x="78" y="162" width="208" height="6" rx="2" fill="${b}" opacity="0.22"/>`,

  'Menu Cards': (a, b) => `
    <rect x="128" y="8" width="144" height="168" rx="9" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <line x1="200" y1="8" x2="200" y2="176" stroke="${a}" stroke-width="1.5" opacity="0.45"/>
    <rect x="136" y="28" width="58" height="10" rx="3" fill="${a}" opacity="0.35"/>
    <rect x="136" y="46" width="52" height="6" rx="2" fill="${b}" opacity="0.24"/>
    <rect x="136" y="60" width="52" height="6" rx="2" fill="${b}" opacity="0.24"/>
    <rect x="136" y="74" width="52" height="6" rx="2" fill="${b}" opacity="0.22"/>
    <rect x="208" y="28" width="56" height="10" rx="3" fill="${a}" opacity="0.35"/>
    <rect x="208" y="46" width="52" height="6" rx="2" fill="${b}" opacity="0.24"/>
    <rect x="208" y="60" width="52" height="6" rx="2" fill="${b}" opacity="0.24"/>
    <text x="310" y="110" font-family="sans-serif" font-size="34" fill="${b}" opacity="0.6">🍽</text>`,

  'Invitation Cards': (a, b) => `
    <rect x="58" y="55" width="284" height="152" rx="12" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <polygon points="58,55 200,138 342,55" fill="none" stroke="${a}" stroke-width="2" opacity="0.7"/>
    <polygon points="58,207 135,145 200,185" fill="${a}" opacity="0.1"/>
    <polygon points="342,207 265,145 200,185" fill="${a}" opacity="0.1"/>
    <circle cx="200" cy="185" r="24" fill="${a}" opacity="0.35"/>
    <circle cx="200" cy="185" r="15" fill="none" stroke="${a}" stroke-width="1.5" opacity="0.75"/>
    <path d="M72,30 Q200,10 328,30" fill="none" stroke="${b}" stroke-width="2" opacity="0.48"/>`,

  'Brand Identity Design': (a, b) => `
    ${['#ff6090','#ffab40','#00e5ff','#69f0ae','#b388ff','#ffffff'].map((c,i)=>
      `<rect x="${44+i*54}" y="18" width="44" height="44" rx="7" fill="${c}" opacity="0.78"/>`).join('')}
    <rect x="44" y="80" width="312" height="22" rx="4" fill="${a}" opacity="0.35"/>
    <rect x="44" y="110" width="210" height="12" rx="3" fill="${b}" opacity="0.22"/>
    <rect x="44" y="132" width="96" height="52" rx="8" fill="none" stroke="${a}" stroke-width="2" opacity="0.65"/>
    <circle cx="92" cy="158" r="17" fill="${a}" opacity="0.3"/>
    <rect x="152" y="138" width="198" height="12" rx="3" fill="${a}" opacity="0.2"/>
    <rect x="152" y="160" width="165" height="8" rx="2" fill="${b}" opacity="0.18"/>`,

  // ─── SOCIAL ────────────────────────────────────────
  'Content Planning': (a, b) => `
    <rect x="42" y="18" width="316" height="158" rx="12" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="42" y="18" width="316" height="40" rx="12" fill="${a}" opacity="0.22"/>
    <rect x="60" y="32" width="65" height="12" rx="3" fill="#fff" opacity="0.55"/>
    ${[0,1,2,3,4,5,6].map(col=>
      [0,1,2,3].map(row=>{
        const x=50+col*42, y=70+row*26;
        const fill=(col+row)%3===0;
        return `<rect x="${x}" y="${y}" width="34" height="18" rx="4" fill="${fill?a:b}" opacity="${fill?0.55:0.16}"/>`;
      }).join('')).join('')}`,

  'Post Scheduling': (a, b) => `
    <circle cx="148" cy="95" r="74" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <circle cx="148" cy="95" r="6" fill="${a}" opacity="0.9"/>
    <line x1="148" y1="95" x2="148" y2="38" stroke="${a}" stroke-width="3.5" opacity="0.9"/>
    <line x1="148" y1="95" x2="192" y2="118" stroke="${b}" stroke-width="3" opacity="0.8"/>
    ${[0,30,60,90,120,150,180,210,240,270,300,330].map(ang=>{
      const r=66, rad=ang*Math.PI/180;
      const x=148+r*Math.cos(rad-Math.PI/2), y=95+r*Math.sin(rad-Math.PI/2);
      return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${ang%90===0?5:2.5}" fill="${a}" opacity="${ang%90===0?0.8:0.45}"/>`;
    }).join('')}
    ${[0,1,2,3].map(i=>`
      <rect x="248" y="${50+i*32}" width="108" height="24" rx="6" fill="${a}" opacity="0.16"/>
      <rect x="256" y="${54+i*32}" width="60" height="12" rx="2" fill="${a}" opacity="0.45"/>
      <circle cx="336" cy="${62+i*32}" r="5.5" fill="${b}" opacity="0.55"/>
    `).join('')}`,

  'Reel Management': (a, b) => `
    <rect x="158" y="8" width="84" height="145" rx="16" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="165" y="16" width="70" height="129" rx="10" fill="${a}" opacity="0.1"/>
    <circle cx="200" cy="80" r="28" fill="${a}" opacity="0.22"/>
    <polygon points="192,68 192,93 215,80" fill="${a}" opacity="1"/>
    ${['📊','🗓','✏️','🔔'].map((e,i)=>`<text x="${55+i*80}" y="185" font-family="sans-serif" font-size="30" opacity="0.82">${e}</text>`).join('')}`,

  'Story Design': (a, b) => `
    ${[92,200,308].map((cx,i)=>`
      <circle cx="${cx}" cy="80" r="56" fill="none" stroke="${a}" stroke-width="${i===1?3.5:2.5}" opacity="${0.9-i*0.12}"
        stroke-dasharray="${2*Math.PI*56}" stroke-dashoffset="${i*22}"/>
      <circle cx="${cx}" cy="80" r="44" fill="${a}" opacity="${0.1-i*0.02}"/>
    `).join('')}
    <rect x="148" y="148" width="104" height="62" rx="10" fill="none" stroke="${b}" stroke-width="2" opacity="0.75"/>`,

  'Caption Writing': (a, b) => `
    <path d="M42,30 Q42,8 65,8 L335,8 Q358,8 358,30 L358,138 Q358,160 335,160 L140,160 L96,198 L106,160 L65,160 Q42,160 42,138 Z"
      fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="58" y="26" width="284" height="126" rx="7" fill="${a}" opacity="0.07"/>
    <rect x="65" y="46" width="270" height="12" rx="3" fill="${a}" opacity="0.4"/>
    <rect x="65" y="68" width="230" height="10" rx="3" fill="${b}" opacity="0.28"/>
    <rect x="65" y="88" width="252" height="10" rx="3" fill="${b}" opacity="0.24"/>
    <rect x="65" y="108" width="180" height="10" rx="3" fill="${b}" opacity="0.22"/>
    <text x="308" y="148" font-family="sans-serif" font-size="24" fill="${a}" opacity="0.7">#</text>`,

  'Hashtag Research': (a, b) => `
    <circle cx="162" cy="98" r="78" fill="none" stroke="${a}" stroke-width="3" opacity="0.9"/>
    <line x1="222" y1="158" x2="325" y2="210" stroke="${a}" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
    <line x1="138" y1="68" x2="138" y2="128" stroke="${b}" stroke-width="4" opacity="0.8"/>
    <line x1="162" y1="68" x2="162" y2="128" stroke="${b}" stroke-width="4" opacity="0.8"/>
    <line x1="126" y1="84" x2="176" y2="84" stroke="${b}" stroke-width="4" opacity="0.8"/>
    <line x1="126" y1="112" x2="176" y2="112" stroke="${b}" stroke-width="4" opacity="0.8"/>`,

  'Community Management': (a, b) => `
    ${[[200,72],[88,142],[312,142],[112,28],[288,28]].map(([cx,cy],i)=>`
      <circle cx="${cx}" cy="${cy}" r="${i===0?26:18}" fill="${a}" opacity="${i===0?0.32:0.2}"/>
      <circle cx="${cx}" cy="${cy}" r="${i===0?26:18}" fill="none" stroke="${i===0?a:b}" stroke-width="2" opacity="${i===0?0.9:0.65}"/>
    `).join('')}
    ${[[200,72,88,142],[200,72,312,142],[200,72,112,28],[200,72,288,28],[88,142,112,28],[312,142,288,28]].map(([x1,y1,x2,y2])=>
      `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${b}" stroke-width="1.5" opacity="0.38"/>`).join('')}
    <path d="M35,172 Q35,158 47,158 L148,158 Q160,158 160,172 L160,204 Q160,218 148,218 L82,218 L65,236 L70,218 L47,218 Q35,218 35,204 Z"
      fill="none" stroke="${a}" stroke-width="1.8" opacity="0.55"/>`,

  'Monthly Analytics Reports': (a, b) => `
    ${[[50,138,38,62],[96,105,38,95],[142,72,38,128],[188,48,38,152],[234,62,38,138],[280,32,38,168],[326,85,38,115]].map(([x,y,w,h],i)=>
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="${a}" opacity="${0.38+i*0.04}"/>`).join('')}
    <polyline points="69,132 115,100 161,76 207,52 253,66 299,36 345,94"
      fill="none" stroke="${b}" stroke-width="3" opacity="0.9"/>
    ${[69,115,161,207,253,299].map((x,i)=>{const ys=[132,100,76,52,66,36];return `<circle cx="${x}" cy="${ys[i]}" r="6" fill="${b}" opacity="0.85"/>`;}).join('')}
    <line x1="40" y1="200" x2="40" y2="25" stroke="${a}" stroke-width="1.5" opacity="0.3"/>
    <line x1="40" y1="200" x2="370" y2="200" stroke="${a}" stroke-width="1.5" opacity="0.3"/>`,

  // ─── MARKETING ─────────────────────────────────────
  'Meta Ads (Facebook & Instagram)': (a, b) => `
    <rect x="72" y="18" width="256" height="166" rx="14" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="80" y="26" width="240" height="106" rx="9" fill="${a}" opacity="0.12"/>
    <text x="200" y="88" font-family="sans-serif" font-size="58" text-anchor="middle" fill="${a}" opacity="0.42">∞</text>
    <line x1="80" y1="140" x2="320" y2="140" stroke="${b}" stroke-width="1.2" opacity="0.35"/>
    <text x="100" y="158" font-family="sans-serif" font-size="15" fill="${a}" opacity="0.75">👍 Like</text>
    <text x="185" y="158" font-family="sans-serif" font-size="15" fill="${b}" opacity="0.75">💬 Comment</text>
    <rect x="80" y="122" width="78" height="14" rx="4" fill="${a}" opacity="0.35"/>`,

  'Google Ads': (a, b) => `
    <rect x="38" y="30" width="324" height="50" rx="25" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <circle cx="344" cy="55" r="20" fill="${a}" opacity="0.28"/>
    <text x="336" y="61" font-family="sans-serif" font-size="18" fill="${a}" opacity="0.9">🔍</text>
    ${[0,1,2].map(i=>`
      <rect x="38" y="${100+i*38}" width="324" height="30" rx="8" fill="${a}" opacity="${0.1-i*0.02}"/>
      <rect x="48" y="${105+i*38}" width="24" height="10" rx="3" fill="${a}" opacity="0.65"/>
      <rect x="80" y="${105+i*38}" width="215" height="10" rx="3" fill="#fff" opacity="0.38"/>
      <rect x="48" y="${120+i*38}" width="268" height="6" rx="2" fill="${b}" opacity="0.22"/>
    `).join('')}`,

  'Search Engine Optimization (SEO)': (a, b) => `
    <circle cx="155" cy="92" r="72" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <line x1="207" y1="144" x2="318" y2="202" stroke="${a}" stroke-width="6" stroke-linecap="round" opacity="0.8"/>
    ${[[102,132],[124,110],[146,88],[168,70],[190,92]].map(([x,y])=>
      `<rect x="${x}" y="${y}" width="13" height="${136-y}" rx="3" fill="${a}" opacity="0.6"/>`).join('')}
    <circle cx="155" cy="55" r="22" fill="${b}" opacity="0.32"/>
    <text x="148" y="63" font-family="sans-serif" font-size="18" fill="${b}" opacity="0.95" font-weight="bold">#1</text>`,

  'Local SEO': (a, b) => `
    <path d="M200,10 C160,10 130,40 130,75 C130,118 200,182 200,182 C200,182 270,118 270,75 C270,40 240,10 200,10 Z"
      fill="none" stroke="${a}" stroke-width="3" opacity="0.9"/>
    <circle cx="200" cy="75" r="26" fill="${a}" opacity="0.35"/>
    ${[96,128,160,192,224,256,288,320].map(x=>`<line x1="${x}" y1="185" x2="${x}" y2="210" stroke="${b}" stroke-width="1.2" opacity="0.22"/>`).join('')}
    ${[190,205,220].map(y=>`<line x1="58" y1="${y}" x2="342" y2="${y}" stroke="${b}" stroke-width="1.2" opacity="0.22"/>`).join('')}
    <path d="M58,208 Q128,185 200,182 Q272,179 342,205" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.38"/>`,

  'Email Marketing': (a, b) => `
    <rect x="45" y="45" width="310" height="162" rx="12" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <polygon points="45,45 200,138 355,45" fill="none" stroke="${a}" stroke-width="2" opacity="0.75"/>
    <polygon points="45,45 98,108 45,155" fill="${a}" opacity="0.1"/>
    <polygon points="355,45 302,108 355,155" fill="${a}" opacity="0.1"/>
    <rect x="78" y="155" width="244" height="12" rx="3" fill="${a}" opacity="0.35"/>
    <rect x="78" y="175" width="200" height="8" rx="2" fill="${b}" opacity="0.24"/>
    <circle cx="38" cy="28" r="22" fill="${a}" opacity="0.22"/>
    <text x="29" y="36" font-family="sans-serif" font-size="20" fill="${a}" opacity="0.9">@</text>`,

  'Lead Generation': (a, b) => `
    <polygon points="62,22 338,22 268,100 132,100" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <polygon points="132,100 268,100 232,172 168,172" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.8"/>
    <polygon points="168,172 232,172 220,210 180,210" fill="${a}" opacity="0.35"/>
    ${[88,122,158,194,228,262,296,330].map((x,i)=>`<circle cx="${x}" cy="${12}" r="6.5" fill="${b}" opacity="${0.55+i*0.03}"/>`).join('')}
    <line x1="200" y1="210" x2="200" y2="230" stroke="${b}" stroke-width="3" opacity="0.65"/>
    <polygon points="192,228 208,228 200,242" fill="${b}" opacity="0.8"/>`,

  'Brand Promotion': (a, b) => `
    ${[0,30,60,90,120,150,180,210,240,270,300,330].map(ang=>{
      const r1=52, r2=84, rad=ang*Math.PI/180, rad2=(ang+15)*Math.PI/180;
      const x1=200+r1*Math.cos(rad), y1=90+r1*Math.sin(rad);
      const x2=200+r2*Math.cos(rad2), y2=90+r2*Math.sin(rad2);
      return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${a}" stroke-width="2.5" opacity="0.65"/>`;
    }).join('')}
    <circle cx="200" cy="90" r="46" fill="${a}" opacity="0.2"/>
    <circle cx="200" cy="90" r="28" fill="${a}" opacity="0.3"/>
    <path d="M242,78 L298,56 L298,124 L242,102 Z" fill="none" stroke="${b}" stroke-width="2.5" opacity="0.8"/>
    <rect x="222" y="78" width="24" height="24" rx="5" fill="${b}" opacity="0.28"/>`,

  'Marketing Strategy': (a, b) => `
    <rect x="42" y="22" width="200" height="160" rx="9" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    ${[1,2,3].map(i=>`
      <line x1="${42+i*50}" y1="22" x2="${42+i*50}" y2="182" stroke="${b}" stroke-width="1.2" opacity="0.28"/>
      <line x1="42" y1="${22+i*40}" x2="242" y2="${22+i*40}" stroke="${b}" stroke-width="1.2" opacity="0.28"/>
    `).join('')}
    <circle cx="92"  cy="62" r="18" fill="${a}" opacity="0.5"/>
    <circle cx="192" cy="102" r="18" fill="${b}" opacity="0.5"/>
    <circle cx="142" cy="162" r="14" fill="${a}" opacity="0.35"/>
    <path d="M246,68 Q330,48 340,105 Q350,162 296,180" fill="none" stroke="${b}" stroke-width="3" opacity="0.75"/>
    <circle cx="296" cy="180" r="8" fill="${b}" opacity="0.7"/>`,

  // ─── WEBSITE ─────────────────────────────────────
  'Business Websites': (a, b) => `
    <rect x="35" y="14" width="330" height="170" rx="13" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="35" y="14" width="330" height="38" rx="13" fill="${a}" opacity="0.2"/>
    ${[[60,25],[82,25],[104,25]].map(([cx,cy])=>`<circle cx="${cx}" cy="${cy}" r="6" fill="${a}" opacity="0.5"/>`).join('')}
    <rect x="128" y="18" width="175" height="18" rx="9" fill="${a}" opacity="0.22"/>
    <rect x="52" y="68" width="302" height="75" rx="7" fill="${a}" opacity="0.12"/>
    <rect x="68" y="82" width="110" height="14" rx="3" fill="${a}" opacity="0.55"/>
    <rect x="68" y="104" width="76" height="9" rx="3" fill="${b}" opacity="0.32"/>
    ${[165,215,265,315].map(x=>`<rect x="${x}" y="20" width="32" height="8" rx="2" fill="#fff" opacity="0.32"/>`).join('')}`,

  'Portfolio Websites': (a, b) => `
    <rect x="35" y="14" width="330" height="170" rx="13" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="35" y="14" width="330" height="32" rx="13" fill="${a}" opacity="0.2"/>
    ${[
      [44,54,96,76],[148,54,72,38],[228,54,132,76],
      [44,138,140,58],[192,100,178,76],
      [148,100,72,32],
    ].map(([x,y,w,h],i)=>`
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${a}" opacity="${0.18+i*0.04}"/>
    `).join('')}`,

  'E-commerce Websites': (a, b) => `
    <rect x="35" y="14" width="330" height="170" rx="13" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="35" y="14" width="330" height="32" rx="13" fill="${a}" opacity="0.2"/>
    ${[[45,54],[140,54],[45,120],[140,120]].map(([x,y])=>`
      <rect x="${x}" y="${y}" width="88" height="60" rx="7" fill="${a}" opacity="0.16"/>
      <rect x="${x+6}" y="${y+40}" width="64" height="8" rx="2" fill="${a}" opacity="0.45"/>
    `).join('')}
    <text x="268" y="162" font-family="sans-serif" font-size="40" fill="${b}" opacity="0.75">🛒</text>`,

  'Restaurant Websites': (a, b) => `
    <rect x="35" y="14" width="330" height="170" rx="13" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="35" y="14" width="330" height="32" rx="13" fill="${a}" opacity="0.2"/>
    <rect x="44" y="54" width="312" height="82" rx="7" fill="${a}" opacity="0.12"/>
    <text x="200" y="106" font-family="sans-serif" font-size="48" text-anchor="middle" fill="${b}" opacity="0.75">🍽</text>
    ${[0,1,2].map(i=>`
      <rect x="${50+i*104}" y="146" width="90" height="28" rx="7" fill="${a}" opacity="0.14"/>
      <rect x="${58+i*104}" y="158" width="60" height="8" rx="2" fill="${a}" opacity="0.45"/>
    `).join('')}`,

  'Real Estate Websites': (a, b) => `
    <rect x="35" y="14" width="330" height="170" rx="13" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="35" y="14" width="330" height="32" rx="13" fill="${a}" opacity="0.2"/>
    <rect x="44" y="54" width="312" height="108" rx="7" fill="${a}" opacity="0.1"/>
    <polygon points="200,62 270,102 270,158 130,158 130,102" fill="none" stroke="${b}" stroke-width="2.5" opacity="0.8"/>
    <polygon points="200,62 130,102 270,102" fill="${a}" opacity="0.18"/>
    <rect x="55" y="165" width="130" height="12" rx="4" fill="${a}" opacity="0.35"/>
    <rect x="200" y="165" width="130" height="12" rx="4" fill="${b}" opacity="0.3"/>`,

  'Landing Pages': (a, b) => `
    <rect x="35" y="14" width="330" height="170" rx="13" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="35" y="14" width="330" height="32" rx="13" fill="${a}" opacity="0.2"/>
    <rect x="80" y="62" width="240" height="20" rx="5" fill="${a}" opacity="0.45"/>
    <rect x="100" y="90" width="200" height="12" rx="3" fill="${b}" opacity="0.28"/>
    <rect x="118" y="110" width="164" height="10" rx="3" fill="${b}" opacity="0.22"/>
    <rect x="128" y="130" width="144" height="34" rx="14" fill="${a}" opacity="0.65"/>
    <rect x="140" y="141" width="100" height="12" rx="3" fill="#fff" opacity="0.55"/>`,

  'Website Redesign': (a, b) => `
    <rect x="30" y="25" width="140" height="148" rx="11" fill="none" stroke="${b}" stroke-width="2" opacity="0.55"/>
    <rect x="230" y="25" width="140" height="148" rx="11" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <line x1="175" y1="99" x2="225" y2="99" stroke="${a}" stroke-width="3.5" opacity="0.85"/>
    <polygon points="218,91 232,99 218,107" fill="${a}" opacity="0.9"/>
    ${[0,1,2].map(i=>`<rect x="42" y="${42+i*40}" width="116" height="26" rx="5" fill="${b}" opacity="${0.1+i*0.05}"/>`).join('')}
    ${[0,1,2].map(i=>`<rect x="242" y="${42+i*40}" width="116" height="26" rx="5" fill="${a}" opacity="${0.22+i*0.08}"/>`).join('')}`,

  'Website Maintenance': (a, b) => `
    <rect x="35" y="14" width="330" height="170" rx="13" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.9"/>
    <rect x="35" y="14" width="330" height="32" rx="13" fill="${a}" opacity="0.2"/>
    <circle cx="200" cy="116" r="52" fill="none" stroke="${a}" stroke-width="3" opacity="0.8"/>
    <circle cx="200" cy="116" r="22" fill="${a}" opacity="0.24"/>
    ${[0,45,90,135,180,225,270,315].map(ang=>{
      const r=52, rad=ang*Math.PI/180;
      const x=200+r*Math.cos(rad), y=116+r*Math.sin(rad);
      return `<rect x="${(x-7).toFixed(1)}" y="${(y-7).toFixed(1)}" width="14" height="14" rx="3.5" fill="${a}" opacity="0.65" transform="rotate(${ang},${x.toFixed(1)},${y.toFixed(1)})"/>`;
    }).join('')}
    <circle cx="310" cy="48" r="22" fill="${b}" opacity="0.35"/>
    <text x="302" y="56" font-family="sans-serif" font-size="20" fill="${b}" opacity="0.9">✓</text>`,

  'Domain & Hosting Setup': (a, b) => `
    ${[0,1,2,3].map(i=>`
      <rect x="108" y="${22+i*38}" width="168" height="28" rx="7" fill="none" stroke="${a}" stroke-width="2.2" opacity="${0.9-i*0.1}"/>
      <circle cx="130" cy="${36+i*38}" r="7" fill="${b}" opacity="${0.65+i*0.05}"/>
      <rect x="144" y="${30+i*38}" width="96" height="5" rx="2" fill="${a}" opacity="0.35"/>
      <rect x="144" y="${40+i*38}" width="70" height="5" rx="2" fill="${b}" opacity="0.22"/>
    `).join('')}
    <circle cx="318" cy="90" r="42" fill="none" stroke="${b}" stroke-width="2.2" opacity="0.6"/>
    <ellipse cx="318" cy="90" rx="19" ry="42" fill="none" stroke="${b}" stroke-width="1.3" opacity="0.42"/>
    <line x1="276" y1="90" x2="360" y2="90" stroke="${b}" stroke-width="1.3" opacity="0.35"/>`,
};

function fallback(a, b) {
  return `<circle cx="200" cy="90" r="72" fill="${a}" opacity="0.14"/>
    <circle cx="200" cy="90" r="46" fill="none" stroke="${a}" stroke-width="2.5" opacity="0.85"/>
    <polygon points="188,72 188,110 218,90" fill="${a}" opacity="1"/>`;
}

function buildSVG(title, category) {
  const p = palettes[category] || palettes.video;
  const fn = illustrations[title] || fallback;
  const inner = fn(p.accent, p.accent2);
  const safeTitle = title.replace(/&/g, '&amp;');

  return `<svg width="400" height="260" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" role="img" aria-label="${safeTitle}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.bg1}"/>
      <stop offset="100%" stop-color="${p.bg2}"/>
    </linearGradient>
    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="#ffffff" opacity="0.04"/>
    </pattern>
    <filter id="glow">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="400" height="260" fill="url(#bg)"/>
  <rect width="400" height="260" fill="url(#dots)"/>
  <g filter="url(#glow)">${inner}</g>
</svg>`;
}

const PORTFOLIO_NAMES = {
  video: [
    'Instagram Reels','YouTube Videos','YouTube Shorts','Promotional Videos','Corporate Videos',
    'Product Videos','Event Highlights','Wedding & Pre-Wedding Edits','Travel Vlogs','Cinematic Editing',
    'Color Grading','Motion Graphics','Subtitles & Captions','Intro & Outro Videos','Thumbnail Design',
  ],
  photo: [
    'Product Photography','Business Photography','Corporate Shoots','Event Coverage',
    'Real Estate Photography','Food Photography','Fashion Photography','Drone Videography','Promotional Shoots',
  ],
  design: [
    'Social Media Posts','Posters','Banners','Flyers','Brochures',
    'Logo Design','Business Cards','Menu Cards','Invitation Cards','Brand Identity Design',
  ],
  social: [
    'Content Planning','Post Scheduling','Reel Management','Story Design',
    'Caption Writing','Hashtag Research','Community Management','Monthly Analytics Reports',
  ],
  marketing: [
    'Meta Ads (Facebook & Instagram)','Google Ads','Search Engine Optimization (SEO)','Local SEO',
    'Email Marketing','Lead Generation','Brand Promotion','Marketing Strategy',
  ],
  website: [
    'Business Websites','Portfolio Websites','E-commerce Websites','Restaurant Websites',
    'Real Estate Websites','Landing Pages','Website Redesign','Website Maintenance','Domain & Hosting Setup',
  ],
};

let count = 0;
for (const [key, names] of Object.entries(PORTFOLIO_NAMES)) {
  for (let i = 0; i < names.length; i++) {
    const svg = buildSVG(names[i], key);
    const dest = path.join(outputDir, `${key}-${i + 1}.svg`);
    fs.writeFileSync(dest, svg, 'utf8');
    console.log(`✓ ${key}-${i+1}.svg  →  ${names[i]}`);
    count++;
  }
}
console.log(`\n✅ Generated ${count} visual SVGs`);
