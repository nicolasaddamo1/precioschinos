const puppeteer = require('puppeteer');

async function getDataFromWebPage(){
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 3000
    });
    const page = await browser.newPage();
    await page.goto('https://');

    const result = await page.evaluate(() => {
        const element = document.getElementsByClassName('sc-bqWxrE ivfBCn')[0];
        return element ? element.outerHTML : null;
    });

    console.log(result);
    await browser.close();
    return result
}

module.exports = { getDataFromWebPage };
