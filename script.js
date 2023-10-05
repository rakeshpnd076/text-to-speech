let speech = new SpeechSynthesisUtterance();

// to get all the voice list available
let voices = []; 
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

// to change the speech voice from the list 

voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
})



document.querySelector("button").addEventListener('click', () => {
    // to get the text from text box 
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});

l