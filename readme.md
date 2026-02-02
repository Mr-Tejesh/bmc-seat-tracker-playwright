# 🏔️ BMC Seat Checker (UI Scraping Version)

> Works around IP restrictions by scraping the public website

Auto-checks BMC seat availability from the NIMAS website and sends notifications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

> ⚠️ **Note:** This version uses web scraping instead of API calls to bypass IP restrictions.

---

## Why This Version?

The ERP API has IP-based restrictions that block GitHub Actions. This version:
- ✅ Scrapes the public website (no IP restrictions)
- ✅ Works from GitHub Actions
- ✅ Same notification system
- ⚠️ May break if website HTML changes

## Quick Start

```bash
# Clone and install
git clone https://github.com/yourusername/bmc-seat-checker-ui.git
cd bmc-seat-checker-ui
npm install

# Install Playwright browsers
npx playwright install chromium

# Setup config
cp .env.example .env
nano .env

# Test it
npm test

# Run it
npm start
```

## Configuration

**.env file:**
```env
NOTIFICATION_URL=https://ntfy.sh/your-topic
COURSE_URL=https://nimasdirang.com/Mountaineering-courses
COURSE_NAME=Basic Mountaineering Course
```

## GitHub Actions Setup

**Only 1 secret needed:**
- `NOTIFICATION_URL` - Your ntfy.sh topic URL

That's it! The course URL is public, no auth needed.

**Setup:**
1. Push code to GitHub
2. Add `NOTIFICATION_URL` secret
3. Done! Runs at 4 AM, 2 PM, 8:30 PM IST

## How It Works

1. 🎭 Launches headless Chrome browser
2. 🌐 Navigates to NIMAS courses page
3. 🔍 Finds BMC course row
4. 📊 Extracts seat count
5. 📱 Sends notification

## Debugging

If scraping fails:
- Screenshot saved to `/tmp/nimas-debug.png`
- GitHub Actions uploads it as artifact
- Check page structure in logs

## Customization

Edit `utils/scraper.js` if HTML structure changes. Look for:
- Table rows with course info
- Seat count patterns
- Cell selectors

## The Team

Built by a human and Claude, solving IP restrictions one scrape at a time! 🤝

---

**License:** MIT  
**Questions?** Open an issue

*Mountains don't care about IP restrictions 🏔️*