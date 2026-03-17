export const revalidate = 60;  // 60秒ごとに再検証
// app/techblog/post/[slug]/page.tsx
import { getPost } from "../../lib/getPost";
import PostsList from "../../components/PostsList";
import ContactSection from "../../components/ContactSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) return <div>記事が見つかりません</div>;

  return (
    <>
    <Header />
    <main className="p-6 font-sans max-w-4xl mx-auto">
      <div className="bg-white border rounded-2xl shadow-md p-8 mb-12">
        <h1
          className="text-3xl font-bold mb-6"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <article
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
      <ContactSection />
      {/* 他の記事リストを下に表示 */}
      <PostsList />
    </main>
    <Footer />
    </>
  );
}
