import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = './public/portfolio/yoga';
const outputDir = './public/portfolio-webp/yoga';
// const inputDir = './src/Components/Pages/Home/Banner/images/alt';
// const outputDir = './src/Components/Pages/Home/Banner/images/alt-webp2';

// ensure output folder exists
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// recursive function to process folders
function convertFolder(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src).forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      // recurse into subfolder
      convertFolder(srcPath, destPath);
    } else if (file.endsWith('.jpg')) {
      // read metadata first to check dimensions
      sharp(srcPath)
        .metadata()
        .then((meta) => {
          let pipeline = sharp(srcPath);

          // if image is wider than 1920px, resize it
          if (meta.width && meta.width > 1920) {
            pipeline = pipeline.resize({ width: 1920 });
          }

          return pipeline
            .webp({ quality: 80 })
            .toFile(destPath.replace('.jpg', '.webp'));
        })
        .then(() => console.log(`Converted: ${srcPath}`))
        .catch((err) => console.error(`❌ Error converting ${srcPath}:`, err));
    }
  });
}

// start conversion
convertFolder(inputDir, outputDir);

//to run this function command "node convert.js"
