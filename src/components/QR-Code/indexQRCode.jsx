import  useFetch from"react";
import { useState } from "react";

export function QRCodeGenerator() {
  const [qrCode, setQRCode] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here: "
        />
        <button
          disabled={input && input.trim() !== " " ? false : true}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgcolor=#ffffff />
      </div>
    </div>
  );
}
