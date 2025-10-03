import { useState } from "react";

export default function ObservationForm() {
  const [formData, setFormData] = useState({
    teacher: "",
    yearGroup: "",
    className: "",
    date: "",
    topic: "",
    focus1: "",
    strategies1: "",
    outcomes1: "",
    comments1: "",
    focus2: "",
    strategies2: "",
    outcomes2: "",
    comments2: "",
  });

  const [generatedPrompt, setGeneratedPrompt] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGeneratePrompt = (e) => {
    e.preventDefault();
    const prompt = `
You are a helpful assistant. Generate a full observation report using the following information:

Teacher observed: ${formData.teacher}
Year Group/Subject: ${formData.yearGroup}
Class: ${formData.className}
Date: ${formData.date}
Topic: ${formData.topic}

Area of Focus 1: ${formData.focus1}
Strategies used by the teacher: ${formData.strategies1}
Learner outcomes/responses: ${formData.outcomes1}
Other comments: ${formData.comments1}

Area of Focus 2: ${formData.focus2}
Strategies used by the teacher: ${formData.strategies2}
Learner outcomes/responses: ${formData.outcomes2}
Other comments: ${formData.comments2}

Please format the report clearly for copy-pasting.
`;
    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    alert("Prompt copied to clipboard!");
  };

  return (
    <div className="space-y-6 p-6 border rounded-lg bg-white shadow-md">
      <form onSubmit={handleGeneratePrompt} className="space-y-4">
        <input
          name="teacher"
          placeholder="Teacher observed"
          value={formData.teacher}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <input
          name="yearGroup"
          placeholder="Year Group/Subject"
          value={formData.yearGroup}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <input
          name="className"
          placeholder="Class"
          value={formData.className}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <input
          name="date"
          placeholder="Date (dd/mm/yyyy)"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <input
          name="topic"
          placeholder="Topic"
          value={formData.topic}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />

        <h3 className="font-semibold">Area of Focus 1</h3>
        <input
          name="focus1"
          placeholder="Area of Focus 1"
          value={formData.focus1}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <textarea
          name="strategies1"
          placeholder="Strategies used by the teacher"
          value={formData.strategies1}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <textarea
          name="outcomes1"
          placeholder="Learner outcomes/responses"
          value={formData.outcomes1}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <textarea
          name="comments1"
          placeholder="Any other comments"
          value={formData.comments1}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />

        <h3 className="font-semibold">Area of Focus 2</h3>
        <input
          name="focus2"
          placeholder="Area of Focus 2"
          value={formData.focus2}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <textarea
          name="strategies2"
          placeholder="Strategies used by the teacher"
          value={formData.strategies2}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <textarea
          name="outcomes2"
          placeholder="Learner outcomes/responses"
          value={formData.outcomes2}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />
        <textarea
          name="comments2"
          placeholder="Any other comments"
          value={formData.comments2}
          onChange={handleChange}
          className="border p-3 w-full rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700"
        >
          Generate ChatGPT Prompt
        </button>
      </form>

      {generatedPrompt && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Copy this prompt into ChatGPT
          </h3>
          <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded overflow-x-auto">
            {generatedPrompt}
          </pre>
          <button
            onClick={copyToClipboard}
            className="mt-2 bg-green-600 text-white p-3 rounded w-full hover:bg-green-700"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}