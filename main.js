import puppeteer from "puppeteer";

const getData = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
      });

      const page = await browser.newPage();

      await page.goto("https://www.amazon.in/ASUS-i7-11800H-GeForce-Windows-FX506HE-HN382W/dp/B0CCYGC3TS/ref=sr_1_30?crid=2K4BZ3OO7TW7L&keywords=laptop&psr=EY17&qid=1702997208&refinements=p_36%3A7252032031&rnid=7252027031&s=todays-deals&sprefix=lapto%2Ctodays-deals%2C548&sr=1-30&th=1", {
        waitUntil: "domcontentloaded",
      });
}

getData();