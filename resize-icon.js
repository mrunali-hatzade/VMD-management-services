const Jimp = require('jimp');

async function resizeIcon() {
  try {
    const image = await Jimp.read('public/logo-transparent.png');
    // Resize to 192x192 as recommended by Google for search results
    image.resize(192, 192);
    await image.writeAsync('app/icon.png');
    // Also save to public for the metadata fallback
    await image.writeAsync('public/icon.png');
    console.log('Icon resized successfully!');
  } catch (err) {
    console.error('Error resizing icon:', err);
  }
}

resizeIcon();
