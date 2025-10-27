const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Speech Recognition not supported in this browser.");
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;

  const recordBtn = document.getElementById("record");
  const output = document.getElementById("output");

  recordBtn.addEventListener("click", () => {
    console.log("clicked")
    recognition.start();
    output.textContent = "Listening...";
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    output.textContent = transcript;
  };

  recognition.onerror = (event) => {
    output.textContent = "Error: " + event.error;
  };

  recognition.onend = () => {
    recordBtn.textContent = "🎤 Start Recording";
  };
}
