import { useState } from "react";

export default function LessonForm() {
  const [formData, setFormData] = useState({
    teacher: "",
    date: "",
    group: "",
    topic: "",
    objectives: "",
    description: "",
    mentorFocus: "",
  });

  const [generatedPrompt, setGeneratedPrompt] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGeneratePrompt = (e) => {
    e.preventDefault();

    const prompt = `
You are a helpful assistant. Generate a full lesson plan using the following information:

Teacher: ${formData.teacher}
Date (dd/mm/yyyy): ${formData.date}
Teaching Group: ${formData.group}
Lesson Topic/Title: ${formData.topic}
Lesson Objectives: ${formData.objectives}
Lesson Description / Steps: ${formData.description}
Mentor Focus: ${formData.mentorFocus}

Follow this template exactly:

Teacher:  
Date (dd/mm/yyyy):  

Teaching group:  
Lesson Topic/Title:  
Lesson objective(s):  

REVIEW
What previous learning do I need to revisit in today’s lesson?

KEY LESSON QUESTIONS
1. Where are the learners starting from? 
2. Where do I want them to get to by the end of the lesson?
3. What is the core knowledge that I will assess in the lesson? How will I know if the learners have grasped the core knowledge?
Core knowledge:  
Checkpoint actions:  
4. What are the likely misconceptions? How will I find out?
Likely misconception(s):  
How to check:  
5. Tier 2 and tier 3 vocabulary/key words. How will these be taught?

FOCUS: Action step(s) from mentor meeting.

Part II - Lesson Sequence
Lesson time (be specific):  
Teacher actions:  
Learner actions:  
Entrance / retrieval practice:  
Introduction or Hook:  
Lesson input (teaching & modelling / assessment):  
Checkpoints:  
Plenary:

Part III - Lesson Evaluation
Final comments:  
My action steps were achieved by:  
If I were teaching this lesson again I would:  
In my next lesson I will:
`;

    setGeneratedPrompt(prompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    alert("Prompt copied to clipboard! Paste it into ChatGPT.");
  };

  return (
    <div className="space-y-6 p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Lesson Form</h2>

      <div className="space-y-4">
        <input
          name="teacher"
          placeholder="Teacher Name"
          value={formData.teacher}
          onChange={handleChange}
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="date"
          placeholder="Date (dd/mm/yyyy)"
          value={formData.date}
          onChange={handleChange}
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="group"
          placeholder="Teaching Group"
          value={formData.group}
          onChange={handleChange}
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="topic"
          placeholder="Lesson Topic"
          value={formData.topic}
          onChange={handleChange}
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="objectives"
          placeholder="Lesson Objectives"
          value={formData.objectives}
          onChange={handleChange}
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="description"
          placeholder="Lesson Description / Steps"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="mentorFocus"
          placeholder="Mentor Focus (optional)"
          value={formData.mentorFocus}
          onChange={handleChange}
          className="border p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        onClick={handleGeneratePrompt}
        className="bg-blue-600 text-white p-3 rounded w-full hover:bg-blue-700 transition-colors"
      >
        Generate ChatGPT Prompt
      </button>

      {generatedPrompt && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Copy this prompt into ChatGPT:
          </h3>
          <pre className="whitespace-pre-wrap bg-gray-100 p-3 rounded overflow-x-auto">
            {generatedPrompt}
          </pre>
          <button
            onClick={copyToClipboard}
            className="mt-2 bg-green-600 text-white p-3 rounded w-full hover:bg-green-700 transition-colors"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}