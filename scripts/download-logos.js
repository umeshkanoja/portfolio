const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  {
    name: 'salesforce.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png'
  },
  {
    name: 'amazon.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
  },
  {
    name: 'microsoft.png',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
  }
];

const downloadLogo = (url, filename) => {
  const filepath = path.join(__dirname, '../public/company-logos', filename);
  
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${filename}: ${response.statusCode}`);
      return;
    }

    const fileStream = fs.createWriteStream(filepath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log(`Downloaded ${filename}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
};

// Download all logos
logos.forEach(logo => {
  downloadLogo(logo.url, logo.name);
}); 