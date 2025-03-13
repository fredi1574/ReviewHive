import Header from "@/components/Header";

export default function WorkInProgress() {
  return (
    <div>
      <Header />
      <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center">
        <h1 className="mb-4 text-4xl font-bold">Work In Progress</h1>
        <p className="text-lg text-gray-600">
          This page is under construction. Please check back later.
        </p>
      </div>
    </div>
  );
}
