const fs = require('fs');
let content = fs.readFileSync('frontend/vercel.json', 'utf8');
content = content.replace(/^\uFEFF/, '');
fs.writeFileSync('frontend/vercel.json', content, 'utf8');
