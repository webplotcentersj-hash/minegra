const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Abrir la URL directamente para asegurar que las fuentes y estilos carguen bien
    await page.goto('https://minegra-eight.vercel.app/manual_feria_minera.html', { waitUntil: 'networkidle2' });
    
    const outputPath = path.join(require('os').homedir(), 'Desktop', 'Manual_Usuario_Feria_Minera.pdf');
    
    await page.pdf({ 
      path: outputPath, 
      format: 'A4',
      printBackground: true, // Esto asegura que los fondos y colores se exporten
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      }
    });

    await browser.close();
    console.log('PDF generado exitosamente en:', outputPath);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
