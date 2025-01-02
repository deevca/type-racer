// Calculates the word per minute
function calculateWPM (startTime, endTime, text) {
    const wordsTyped = text.trim().split(/\s+/).length;
    const timeTaken = (endTime - startTime) / 1000 / 60;
    return Math.round(wordsTyped / timeTaken);
}