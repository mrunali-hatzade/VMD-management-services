const { Jimp } = require('jimp');

async function analyzeLogo() {
  try {
    const image = await Jimp.read('public/logo.png');
    const colorCounts = {};

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      // Ignore near-white and near-black
      if (r > 240 && g > 240 && b > 240) return;
      if (r < 15 && g < 15 && b < 15) return;
      
      const hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      colorCounts[hex] = (colorCounts[hex] || 0) + 1;
    });

    const sortedColors = Object.entries(colorCounts).sort((a, b) => b[1] - a[1]);
    console.log("Dominant non-white/black colors:", sortedColors.slice(0, 5));
  } catch (e) {
    console.error("Error:", e);
  }
}

analyzeLogo();
