// nodejs script to fetch all image filenames from public/glass and write to src/data/galleryImages.json
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const glassDir = path.join(__dirname, '../public/glass');
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'galleryImages.json');

// Supported image extensions
const exts = ['.jpeg', '.png', '.jpg'];

function main() {
    if (!fs.existsSync(glassDir)) {
        console.error('Glass directory does not exist:', glassDir);
        process.exit(1);
    }
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const files = fs
        .readdirSync(glassDir)
        .filter((f) => exts.includes(path.extname(f).toLowerCase()));
    const imagesWithCaptions = files.map((filename) => ({
        image: filename,
        caption: '',
    }));
    fs.writeFileSync(outputFile, JSON.stringify(imagesWithCaptions, null, 2));
    console.log(`Wrote ${files.length} image filenames to`, outputFile);
}

main();
