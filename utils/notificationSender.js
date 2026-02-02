import dotenv from 'dotenv';
dotenv.config();

/**
 * Send notification to subscribers via ntfy
 * @param {string} message - Message to send
 * @returns {Promise<boolean>} Success status
 */
export async function pushNotification(message) {
    if (!message) {
        console.log("⚠️ No message to push");
        return false;
    }

    try {
        const response = await fetch(process.env.NOTIFICATION_URL, {
            method: "POST",
            body: message,
            headers: {
                "Content-type": "text/plain;charset=UTF-8",
            }
        });

        if (response.ok) {
            console.log("✅ Notification sent successfully!");
            return true;
        } else {
            console.log(`⚠️ Notification response status: ${response.status}`);
            return false;
        }
    } catch (error) {
        console.error("❌ Error pushing notification:", error.message);
        return false;
    }
}