import { morningMessages, eveningMessages, afternoonMessages, timeSlots } from '../config/messages.js';

/**
 * Get current hour in IST timezone
 * @returns {number} Hour in 24-hour format (0-23)
 */
function getISTHour() {
    // Better way to get IST time
    const now = new Date();

    // Method 1: Using toLocaleString with IST timezone
    const istTimeString = now.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: 'numeric'
    });

    const istHour = parseInt(istTimeString);

    console.log(`🕐 System Time: ${now.toLocaleString()}`);
    console.log(`🕐 IST Hour: ${istHour}`);

    return istHour;
}

/**
 * Get time slot based on current IST hour
 * @param {number} hour - Current hour in IST
 * @returns {string} Time slot name ('morning', 'afternoon', or 'evening')
 */
function getTimeSlot(hour) {
    if (hour >= timeSlots.morning.start && hour < timeSlots.morning.end) {
        return 'morning';
    } else if (hour >= timeSlots.afternoon.start && hour < timeSlots.afternoon.end) {
        return 'afternoon';
    } else {
        return 'evening';
    }
}

/**
 * Get appropriate message array based on time slot
 * @param {string} timeSlot - Time slot name
 * @returns {Array<string>} Array of messages for that time slot
 */
function getMessageArray(timeSlot) {
    const messageMap = {
        morning: morningMessages,
        afternoon: afternoonMessages,
        evening: eveningMessages
    };
    return messageMap[timeSlot] || eveningMessages;
}

/**
 * Get a randomized message based on current IST time
 * @param {number} availableSeats - Number of available seats
 * @returns {string} Formatted message with seat count
 */
export function getRandomMessage(availableSeats) {
    const istHour = getISTHour();
    const timeSlot = getTimeSlot(istHour);

    console.log(`🕐 Current IST Hour: ${istHour}:00`);
    console.log(`📋 Time Slot: ${timeSlot.toUpperCase()}`);

    const messageArray = getMessageArray(timeSlot);

    // Get random message from the selected array
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    const selectedMessage = messageArray[randomIndex];

    // Replace placeholder with actual seat count
    const finalMessage = selectedMessage.replace('{seats}', availableSeats);

    console.log(`🎲 Selected message: "${finalMessage}"`);
    return finalMessage;
}

/**
 * Get a specific message type (useful for testing)
 * @param {number} availableSeats - Number of available seats
 * @param {string} timeSlot - Specific time slot ('morning', 'afternoon', 'evening')
 * @returns {string} Formatted message
 */
export function getSpecificMessage(availableSeats, timeSlot) {
    const messageArray = getMessageArray(timeSlot);
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    return messageArray[randomIndex].replace('{seats}', availableSeats);
}