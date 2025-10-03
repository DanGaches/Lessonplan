import ObservationForm from "../components/ObservationForm";

export default function ObservationPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 md:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Lesson Observation Form
      </h1>
      <div className="w-full max-w-4xl">
        <ObservationForm />
      </div>
    </div>
  );
}