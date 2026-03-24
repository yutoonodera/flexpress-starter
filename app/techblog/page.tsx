"use client";

import { useState, useEffect } from "react";
import { Post, getTechPosts } from "../lib/getTechPosts";
import SearchBox from "../components/SearchBox";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTechPosts().then(setPosts)
    .finally(() => setLoading(false));
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (!search.trim()) return true;

    const keywords = search
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    const title = post.title.rendered.toLowerCase();

    return keywords.every((kw) => title.includes(kw));
  });

  return (
    <>
    <Header />
   <main className="p-6 font-sans max-w-5xl mx-auto">
    <div className="tech-grid min-h-screen p-8 rounded-3xl shadow-xl bg-slate-900/60 backdrop-blur">
      <h1 className="text-3xl font-bold mb-6 text-white">
        Techblog
      </h1>

      <p className="text-sm mb-6 text-white">
        This page displays WordPress posts based on their category ID.
        Please match the ID in app/api/techposts/route.ts with the category ID of the posts you want to display.
        For example, if the category ID is 10 in the WordPress admin panel, set techCatId to 10.
      </p>

      {/* 検索窓 */}
      <SearchBox value={search} onChange={setSearch} />

      {/* 投稿リスト */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {loading && (
          <p className="col-span-full text-center text-gray-500">
            ロード中...
          </p>
      )}
      {!loading &&
        filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

      {!loading && filteredPosts.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          No matching articles found.
        </p>
      )}
      </div>
    </div>
    </main>
    <Footer />
    </>
  );
}
