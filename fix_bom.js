const fs = require('fs');
['tailwind.config.js', 'postcss.config.js', 'vite.config.js'].forEach(file => {
    if (fs.existsSync('frontend/' + file)) {
        let content = fs.readFileSync('frontend/' + file, 'utf8');
        content = content.replace(/^\uFEFF/, '');
        fs.writeFileSync('frontend/' + file, content, 'utf8');
    }
});
