import { useState } from "react";

export default function TestPage() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    console.log("Button clicked!");
    setMessage("Button was clicked! ✅");
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-gray-50 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Test Button Page</h1>

      <button
        type="button"
        onClick={handleClick}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Click Me
      </button>

      {message && (
        <p className="mt-4 text-green-700 font-semibold">{message}</p>
      )}
    </div>
  );
}