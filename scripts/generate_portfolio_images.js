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

async function downloadImage(url, dest) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(dest, Buffer.from(buffer));
}

async function main() {
  const allTasks = [];
  
  for (const [key, names] of Object.entries(PORTFOLIO_NAMES)) {
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const filename = `${key}-${i + 1}.jpg`;
      const dest = path.join(outputDir, filename);
      
      const prompt = `A highly professional, premium quality portfolio thumbnail for a digital agency representing "${name}". Sleek, modern, dark mode aesthetic, vibrant accent colors, 4k resolution, cinematic lighting.`;
      
      // Use pollinations.ai for true AI-generated beautiful images
      const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=400&height=260&nologo=true`;
      
      allTasks.push({ name, filename, dest, url });
    }
  }

  console.log(`Starting generation of ${allTasks.length} beautiful AI images...`);

  // Run in batches of 5 to avoid rate-limiting
  const concurrency = 5;
  for (let i = 0; i < allTasks.length; i += concurrency) {
    const batch = allTasks.slice(i, i + concurrency);
    const promises = batch.map(async (task) => {
      console.log(`Generating AI image for ${task.name}...`);
      try {
        await downloadImage(task.url, task.dest);
        console.log(`Saved ${task.filename}`);
      } catch (err) {
        console.error(`Failed ${task.filename}:`, err.message);
      }
    });
    await Promise.all(promises);
  }
  
  console.log('All beautiful AI images generated successfully!');
}

main();
