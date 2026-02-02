/**
 * Message templates for different times of day
 * Use {seats} as placeholder for seat count
 */

export const morningMessages = [
  "☀️ Good morning! BMC seats update: {seats} seats available 🧗🏔️",
  "🌅 Rise and shine! {seats} seats left for BMC adventure! 🏔️",
  "☕ Morning update: {seats} BMC seats ready for booking 🧗",
  "🌄 Wake up adventurers! {seats} seats available at BMC 🏔️",
  "🎒 Good morning climbers! {seats} spots open today 🧗🏔️",
  "☀️ Fresh morning count: {seats} BMC seats waiting! 🏔️",
  "🌞 Start your day right! {seats} seats available for adventure 🧗",
  "🏔️ Good morning! Today's BMC availability: {seats} seats 🧗",
  "☕ Coffee time update: {seats} BMC spots are open! 🏔️",
  "🌅 New day, new adventure! {seats} seats at BMC 🧗"
];

export const eveningMessages = [
  "🌆 Evening update: {seats} BMC seats still available! 🧗🏔️",
  "🌙 Don't miss out! {seats} seats left for BMC 🏔️",
  "⭐ Evening check: {seats} BMC seats ready to book 🧗",
  "🌃 Last call! {seats} spots remaining at BMC 🏔️",
  "🌠 Tonight's count: {seats} BMC seats available 🧗🏔️",
  "🌜 Evening adventure alert: {seats} seats open! 🏔️",
  "✨ Before you sleep - {seats} BMC seats waiting for you! 🧗",
  "🌆 End of day update: {seats} BMC seats still up for grabs! 🏔️",
  "🌙 Evening reminder: {seats} spots available at BMC 🧗",
  "⭐ Sunset check: {seats} BMC seats ready for booking! 🏔️"
];

export const afternoonMessages = [
  "🌤️ Afternoon update: {seats} BMC seats available! 🧗🏔️",
  "☀️ Midday check: {seats} seats left at BMC 🏔️",
  "🏔️ Lunch break update: {seats} BMC spots open 🧗",
  "🌞 Afternoon alert: {seats} seats ready for adventure! 🏔️",
  "⛰️ Midday count: {seats} BMC seats waiting 🧗",
  "🌤️ Post-lunch update: {seats} seats available! 🏔️"
];

// Time slot configuration (24-hour format in IST)
export const timeSlots = {
  morning: { start: 6, end: 12 },    // 6 AM - 12 PM
  afternoon: { start: 12, end: 18 }, // 12 PM - 6 PM
  evening: { start: 18, end: 24 }    // 6 PM - 12 AM
};