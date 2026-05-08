const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    console.log('Capturing Home...');
    await page.goto('https://minegra-eight.vercel.app/', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'public/screenshot-home.png' });
    
    console.log('Capturing Ranking...');
    await page.goto('https://minegra-eight.vercel.app/ranking', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'public/screenshot-ranking.png' });
    
    console.log('Capturing Admin...');
    await page.goto('https://minegra-eight.vercel.app/admin', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: 'public/screenshot-admin.png' });

    await browser.close();
    console.log('Done.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
