import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#FAFAF9"/>

  <!-- Subtle top border accent -->
  <rect x="0" y="0" width="${W}" height="5" fill="#be185d"/>

  <!-- Rose vertical accent bar -->
  <rect x="80" y="180" width="4" height="110" fill="#be185d"/>

  <!-- Name -->
  <text
    x="104"
    y="262"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="88"
    font-weight="400"
    fill="#1A1A1A"
    letter-spacing="-1"
  >Clement Hoang</text>

  <!-- Subtitle -->
  <text
    x="106"
    y="312"
    font-family="Arial, Helvetica, sans-serif"
    font-size="26"
    font-weight="400"
    fill="#706F6C"
    letter-spacing="2"
  >SOFTWARE ENGINEER · BUILDER · COACH</text>

  <!-- Domain -->
  <text
    x="106"
    y="530"
    font-family="Arial, Helvetica, sans-serif"
    font-size="22"
    font-weight="400"
    fill="#be185d"
    letter-spacing="3"
  >CLEMMY.NINJA</text>
</svg>`;

const svgPath = join(root, 'static', 'og-image.svg');
const outPath = join(root, 'static', 'og-image.png');

writeFileSync(svgPath, svg);

await sharp(Buffer.from(svg))
  .resize(W, H)
  .png()
  .toFile(outPath);

console.log('Generated og-image.png');
