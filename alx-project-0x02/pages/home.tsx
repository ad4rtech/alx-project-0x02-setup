import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex items-center justify-center h-full py-20">
        <h1 className="text-4xl font-bold text-gray-800">Home Page</h1>
      </main>
    </div>
  );
}
