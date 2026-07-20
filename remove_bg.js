const Jimp = require('jimp');

async function removeWhiteBg(input, output) {
  try {
    const image = await Jimp.read(input);
    
    // We will do a flood fill or simple threshold. 
    // Since logos often have anti-aliased edges, simple threshold might leave white fringing.
    // We will use a threshold but also soften the alpha based on how close it is to white.
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      
      const avg = (r + g + b) / 3;
      
      if (avg > 230) {
        // Linear fade for anti-aliasing edges between 230 and 255
        const alpha = Math.max(0, 255 - ((avg - 230) * 10));
        this.bitmap.data[idx + 3] = alpha; 
      }
    });

    await image.writeAsync(output);
    console.log('Successfully created transparent logo!');
  } catch (err) {
    console.error('Error:', err);
  }
}

removeWhiteBg('./public/logo.png', './public/logo-transparent.png');
