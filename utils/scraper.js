import { chromium } from 'playwright';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Scrape BMC seat availability from NIMAS website
 */
export async function scrapeSeatAvailability() {
    let browser;

    try {
        console.log('🌐 Launching browser...');
        browser = await chromium.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        console.log('📄 Navigating to NIMAS courses page...');
        await page.goto(process.env.COURSE_URL || 'https://nimasdirang.com/Mountaineering-courses', {
            waitUntil: 'networkidle',
            timeout: 30000
        });

        const courseId = process.env.COURSE_ID || 'BMC-63';
        console.log(`🔍 Searching for ${courseId}...`);

        // Find the seat count cell using XPath
        const seatCell = page.locator(`xpath=//td[contains(text(),"${courseId}")]/following-sibling::td[6]`);

        // Wait for the element to be visible
        await seatCell.waitFor({ state: 'visible', timeout: 10000 });

        // Get the text content
        const seatText = await seatCell.textContent();
        const seats = parseInt(seatText.trim());

        console.log('✅ Available Seats:', seats);

        if (isNaN(seats)) {
            await page.screenshot({ path: '/tmp/nimas-debug.png', fullPage: true });
            console.log('📸 Screenshot saved for debugging');
            throw new Error('Could not parse seat count');
        }

        await browser.close();
        return seats;

    } catch (error) {
        console.error('❌ Error scraping seats:', error.message);
        if (browser) await browser.close();
        return null;
    }
}