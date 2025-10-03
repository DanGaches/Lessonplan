import LessonForm from "../components/LessonForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        AI Lesson Planner (Free ChatGPT)
      </h1>

      <div className="w-full max-w-4xl">
        <LessonForm />
      </div>

      <p className="mt-8 text-gray-500 text-center text-sm md:text-base">
        Fill out the form above and click <strong>Generate ChatGPT Prompt</strong>. 
        Copy the prompt and paste it into{" "}
        <a
          className="text-blue-600 underline"
          href="https://chat.openai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ChatGPT
        </a>{" "}
        to generate your full lesson plan.
      </p>
    </div>
  );
}