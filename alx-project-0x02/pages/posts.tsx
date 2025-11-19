import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const posts = data.slice(0, 10).map((post: any) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    content: post.body,
  }));

  return {
    props: {
      posts,
    },
  };
}
