import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center gap-6 h-full py-20 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Home Page</h1>

        <div className="grid gap-6 w-full max-w-3xl">
          <Card 
            title="First Card" 
            content="This is the first reusable card component." 
          />

          <Card 
            title="Second Card" 
            content="The card component accepts dynamic props for title and content." 
          />

          <Card 
            title="Third Card" 
            content="You can reuse this component anywhere in your project." 
          />
        </div>
      </main>
    </div>
  );
}
