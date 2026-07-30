const fs = require('fs');
const path = require('path');

const publicDir = path.resolve(__dirname, 'public');

const unusedFiles = [
  'VMD_Management_Services_Logo.png',
  'file.svg',
  'gal_physical_drill.jpg',
  'gal_society_security.jpg',
  'globe.svg',
  'guards_in_uniform.jpg',
  'hero_option_1.jpg',
  'hero_option_2.jpg',
  'hero_option_3.jpg',
  'hero_option_4.jpg',
  'housekeeping_staff.jpg',
  'ind_it_companies.jpg',
  'logo without name.png',
  'logo.png',
  'media_.jpg',
  'office_team.jpg',
  'vmd_hero_bouncers.jpg',
  'vmd_hero_formation.jpg',
  'vmd_hero_housekeeping.jpg',
  'weblium_hero.jpg',
  'window.svg',
];

let deleted = 0;
for (const f of unusedFiles) {
  const fullPath = path.join(publicDir, f);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    console.log('DELETED: ' + f);
    deleted++;
  } else {
    console.log('NOT FOUND: ' + f);
  }
}
console.log('Total deleted: ' + deleted + ' files');
