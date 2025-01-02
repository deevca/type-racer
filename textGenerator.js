// Generates random text for typing
function generateRandomText(wordCount = 50) {
    const words = [
        "The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog",
        "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
        "A", "journey", "of", "a", "thousand", "miles", "begins", "with", "a", "single", "step",
        "To", "be", "or", "not", "to", "be", "that", "is", "the", "question"
    ];
    let text = '';
    for (let i = 0; i < wordCount; i++) {
        text += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return text.trim();
}