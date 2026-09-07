const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
app.use(express.static('dist'));
const server = app.listen(4173, async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        page.on('console', msg => console.log('PAGE LOG:', msg.text()));
        page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
        page.on('response', response => {
            if (!response.ok()) console.log('PAGE RESPONSE ERROR:', response.status(), response.url());
        });
        await page.goto('http://localhost:4173/');
        await page.waitForTimeout(2000);
        await browser.close();
    } catch(e) {
        console.error("Puppeteer script error", e);
    }
    server.close();
});
