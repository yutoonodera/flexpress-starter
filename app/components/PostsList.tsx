"use client";

import { useState, useEffect } from "react";
import { Post, getTechPosts } from "../lib/getTechPosts";
import SearchBox from "../components/SearchBox";
import PostCard from "../components/PostCard";

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getTechPosts().then(setPosts);
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (!search.trim()) return true;

    const keywords = search.toLowerCase().split(/\s+/).filter(Boolean);
    const title = post.title.rendered.toLowerCase();

    return keywords.every((kw) => title.includes(kw));
  });

  return (
    <section className="mt-12 tech-grid min-h-screen p-8 rounded-3xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-white">記事一覧</h2>

      {/* 投稿リスト */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        {filteredPosts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No matching articles found.
          </p>
        )}
      </div>
    </section>
  );
}
