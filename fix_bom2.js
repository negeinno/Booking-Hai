const fs = require('fs');
let content = fs.readFileSync('frontend/src/style.css', 'utf8');
content = content.replace(/^\uFEFF/, '');
fs.writeFileSync('frontend/src/style.css', content, 'utf8');
