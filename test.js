import { scrapeSeatAvailability } from './utils/scraper.js';
import dotenv from 'dotenv';
dotenv.config();

console.log("🧪 Testing UI Scraper\n");

const seats = await scrapeSeatAvailability();

if (seats !== null) {
  console.log(`\n✅ Successfully scraped: ${seats} seats available`);
} else {
  console.log("\n❌ Scraping failed");
}