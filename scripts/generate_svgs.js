const fs = require('fs');
const path = require('path');

const PORTFOLIO_NAMES = {
  video: [
    'Instagram Reels', 'YouTube Videos', 'YouTube Shorts', 'Promotional Videos', 'Corporate Videos',
    'Product Videos', 'Event Highlights', 'Wedding & Pre-Wedding Edits', 'Travel Vlogs', 'Cinematic Editing',
    'Color Grading', 'Motion Graphics', 'Subtitles & Captions', 'Intro & Outro Videos', 'Thumbnail Design',
  ],
  photo: [
    'Product Photography', 'Business Photography', 'Corporate Shoots', 'Event Coverage',
    'Real Estate Photography', 'Food Photography', 'Fashion Photography', 'Drone Videography', 'Promotional Shoots',
  ],
  design: [
    'Social Media Posts', 'Posters', 'Banners', 'Flyers', 'Brochures',
    'Logo Design', 'Business Cards', 'Menu Cards', 'Invitation Cards', 'Brand Identity Design',
  ],
  social: [
    'Content Planning', 'Post Scheduling', 'Reel Management', 'Story Design',
    'Caption Writing', 'Hashtag Research', 'Community Management', 'Monthly Analytics Reports',
  ],
  marketing: [
    'Meta Ads (Facebook & Instagram)', 'Google Ads', 'Search Engine Optimization (SEO)', 'Local SEO',
    'Email Marketing', 'Lead Generation', 'Brand Promotion', 'Marketing Strategy',
  ],
  website: [
    'Business Websites', 'Portfolio Websites', 'E-commerce Websites', 'Restaurant Websites',
    'Real Estate Websites', 'Landing Pages', 'Website Redesign', 'Website Maintenance', 'Domain & Hosting Setup',
  ],
};

const outputDir = path.join(__dirname, '..', 'public', 'images', 'portfolio', 'dynamic');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate beautiful gradients based on category
const gradients = {
  video: ['#ff416c', '#ff4b2b'],
  photo: ['#8E2DE2', '#4A00E0'],
  design: ['#00B4DB', '#0083B0'],
  social: ['#FDC830', '#F37335'],
  marketing: ['#11998e', '#38ef7d'],
  website: ['#2980B9', '#6DD5FA'],
};

function generateSVG(name, key) {
  const [color1, color2] = gradients[key] || ['#232526', '#414345'];

  // Wrap text if it's too long
  let words = name.split(' ');
  let line1 = name;
  let line2 = '';
  if (words.length > 2 && name.length > 15) {
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(' ');
    line2 = words.slice(mid).join(' ');
  }

  return `<svg width="400" height="260" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad_${key}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
      </linearGradient>
      
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
      </pattern>
    </defs>
    
    <rect width="400" height="260" fill="url(#grad_${key})" />
    <rect width="400" height="260" fill="url(#grid)" />
    
    <circle cx="200" cy="130" r="100" fill="rgba(255,255,255,0.05)" />
    
    ${line2 ?
      `<text x="200" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">${line1}</text>
       <text x="200" y="160" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">${line2}</text>` :
      `<text x="200" y="140" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">${line1}</text>`
    }
    
    <text x="200" y="230" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.6)" text-anchor="middle" letter-spacing="3">${key.toUpperCase()} PORTFOLIO</text>
  </svg>`;
}

async function main() {
  for (const [key, names] of Object.entries(PORTFOLIO_NAMES)) {
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const filename = `${key}-${i + 1}.svg`;
      const dest = path.join(outputDir, filename);

      const svgContent = generateSVG(name, key);
      fs.writeFileSync(dest, svgContent);
      console.log(`Saved SVG ${filename}`);
    }
  }
  console.log('All 60 beautiful SVG images generated instantly!');
}

main();
