/** @format */

import React from "react";
import TextToSpeech from "./textToSpeech/textToSpeech.jsx";
import "./App.css";
import QrCodeGenerator from "./qrCodeGenerator/QrCodeGenerator.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 space-y-10 font-sans">
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 drop-shadow-md">
        XTIAN
      </h1>

      <QrCodeGenerator />
      <TextToSpeech />
    </div>
  );
}
