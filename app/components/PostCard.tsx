// components/PostCard.tsx
import Link from "next/link";
import { Post } from "../../app/lib/getTechPosts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      key={post.id}
      href={`/techblog/${post.slug}`}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 group-focus:text-blue-600">
        <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      </h2>
      <div
        className="text-gray-600 text-sm line-clamp-3"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
    </Link>
  );
}
