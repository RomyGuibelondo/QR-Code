/** @format */

import { useState } from "react";

const QrCodeGenerator = () => {
  const [inputs, setInputs] = useState(["", "", "", "", ""]);
  const [qrImages, setQrImages] = useState(Array(5).fill(""));

  const handleGenerate = (index) => {
    const value = inputs[index].trim();
    if (!value) {
      alert("Please enter a value");
      return;
    }

    const newQrImages = [...qrImages];
    newQrImages[
      index
    ] = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      value
    )}`;
    setQrImages(newQrImages);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto bg-white border-1 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        QR Code Generator
      </h2>

      {inputs.map((input, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="text"
            placeholder="Enter number or words"
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => handleGenerate(index)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
          >
            Generate QR Code
          </button>
          {qrImages[index] && (
            <img
              src={qrImages[index]}
              alt={`QR ${index + 1}`}
              className="w-36 h-36"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default QrCodeGenerator;
