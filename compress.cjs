const sharp = require('sharp');
sharp('src/assets/leonardo-profile.png')
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile('src/assets/leonardo-profile.webp')
  .then(() => console.log('Compression done'))
  .catch(err => console.error(err));
