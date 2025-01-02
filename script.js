document.addEventListener('DOMContentLoaded', () => {
    const textDisplay = document.getElementById('text-display');
    const textInput = document.getElementById('text-input');
    const wpmDisplay = document.getElementById('wpm-display');
    const restartSameButton = document.getElementById('restart-same');
    const restartNewButton = document.getElementById('restart-new');
    const textLengthSelector = document.getElementById('text-length');

    let startTime;
    let endTime;
    let randomText = generateRandomText(parseInt(textLengthSelector.value));

    function displayText(text) {
        textDisplay.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
    }

    function reset() {
        textInput.value = '';
        wpmDisplay.textContent = 'WPM: 0';
        startTime = null;
        endTime = null;
        textInput.focus();
        displayText(randomText);
    }

    displayText(randomText);

    textInput.addEventListener('input', () => {
        const inputText = textInput.value;
        const textArray = textDisplay.querySelectorAll('span');

        if (!startTime) {
            startTime = new Date();
        }

        let correct = true;
        textArray.forEach((char, index) => {
            const typedChar = inputText[index];

            if (typedChar == null) {
                char.classList.remove('correct', 'incorrect', 'cursor');
            } else if (typedChar === char.textContent) {
                char.classList.add('correct');
                char.classList.remove('incorrect', 'cursor');
            } else {
                char.classList.add('incorrect');
                char.classList.remove('correct', 'cursor');
                correct = false;
            }
        });

        if (inputText.length < textArray.length) {
            textArray[inputText.length].classList.add('cursor');
        }

        if (correct && inputText.length === randomText.length) {
            endTime = new Date();
            const wpm = calculateWPM(startTime, endTime, inputText);
            wpmDisplay.textContent = `WPM: ${wpm}`;
        }
    });

    restartSameButton.addEventListener('click', () => {
        reset();
    });

    restartNewButton.addEventListener('click', () => {
        randomText = generateRandomText(parseInt(textLengthSelector.value));
        reset();
    });

    textLengthSelector.addEventListener('change', () => {
        randomText = generateRandomText(parseInt(textLengthSelector.value));
        reset();
    });

    // Focus the hidden input field to start typing when text display is clicked
    textDisplay.addEventListener('click', () => {
        textInput.focus();
    });

    // Focus the hidden input field to start typing
    textInput.focus();
});