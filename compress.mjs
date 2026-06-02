import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const DIRS_TO_PROCESS = [
  path.join(process.cwd(), 'public', 'images'),
  path.join(process.cwd(), 'src', 'greenhousefiles')
];

const MAX_SIZE_BYTES = 1 * 1024 * 1024; // 1 MB

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (stat.size > MAX_SIZE_BYTES && /\.(jpg|jpeg|png)$/i.test(file)) {
      console.log(`Compressing ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
      
      const tmpPath = `${fullPath}.tmp`;
      try {
        const image = sharp(fullPath);
        const metadata = await image.metadata();
        
        let processedImage = image;
        
        // Resize if it's crazy large
        if (metadata.width > 2000) {
           processedImage = processedImage.resize({ width: 2000, withoutEnlargement: true });
        }

        if (/\.(jpg|jpeg)$/i.test(file)) {
          await processedImage.jpeg({ quality: 80, mozjpeg: true }).toFile(tmpPath);
        } else if (/\.png$/i.test(file)) {
          // PNG to WebP isn't safe since we want to keep the same file extension,
          // so we compress it as PNG using zlib compression level 9 and palette mapping
          await processedImage.png({ quality: 80, compressionLevel: 9, palette: true }).toFile(tmpPath);
        }
        
        fs.unlinkSync(fullPath);
        fs.renameSync(tmpPath, fullPath);
        
        const newStat = fs.statSync(fullPath);
        console.log(` -> Reduced to ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);
      } catch (err) {
        console.error(`Failed to compress ${file}:`, err);
        if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
      }
    }
  }
}

async function main() {
  for (const dir of DIRS_TO_PROCESS) {
    await processDirectory(dir);
  }
  console.log("Done compressing images.");
}

main();
