import { useState } from "react";
import LessonForm from "../components/LessonForm";
import ObservationForm from "../components/ObservationForm";

export default function Home() {
  const [activeForm, setActiveForm] = useState("lesson"); // "lesson" or "observation"

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">AI Prompt Generator</h1>

      {/* Tabs / Buttons to switch forms */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveForm("lesson")}
          className={`px-4 py-2 rounded ${
            activeForm === "lesson" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Lesson Planner
        </button>
        <button
          onClick={() => setActiveForm("observation")}
          className={`px-4 py-2 rounded ${
            activeForm === "observation" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Lesson Observation
        </button>
      </div>

      {/* Render the active form */}
      <div className="w-full max-w-4xl">
        {activeForm === "lesson" && <LessonForm />}
        {activeForm === "observation" && <ObservationForm />}
      </div>
    </div>
  );
}