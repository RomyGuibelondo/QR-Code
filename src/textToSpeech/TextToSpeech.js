/** @format */
import { useEffect, useState } from "react";

function TextToSpeech() {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const synth = window.speechSynthesis;

    const updateVoices = () => {
      const availableVoices = synth.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]); // Default to first voice
      }
    };

    synth.onvoiceschanged = updateVoices;
    updateVoices(); // Call immediately in case voices are already loaded

    return () => {
      synth.onvoiceschanged = null; // Cleanup
    };
  }, []);

  const handleSpeak = () => {
    if (!text.trim()) return;

    const speech = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      speech.voice = selectedVoice;
    }
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 p-6 font-sans bor">
      <div className="w-full max-w-xl bg-white shadow-lg border-1 border-b-cyan-800 rounded-2xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Text To Speech Converter
        </h1>

        <textarea
          placeholder="Write anything here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <select
            onChange={(e) => setSelectedVoice(voices[e.target.value])}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {voices.map((voice, index) => (
              <option key={index} value={index}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>

          <button
            onClick={handleSpeak}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}
export default TextToSpeech;
