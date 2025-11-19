import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      const mapped = data.slice(0, 10).map((post: any) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        content: post.body,
      }));

      setPosts(mapped);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <h1>Posts</h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          userId={post.userId}
          title={post.title}
          content={post.content}
          id={post.id}
        />
      ))}
    </div>
  );
}
