import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="flex flex-col items-center gap-6 h-full py-20 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Home Page</h1>

        {/* Button to Open Modal */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add New Post
        </button>

        {/* Modal */}
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />

        {/* Display Posts */}
        <div className="grid gap-6 w-full max-w-3xl">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
}
