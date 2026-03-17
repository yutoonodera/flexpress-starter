export type PostDetail = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
};

export async function getPost(slug: string): Promise<PostDetail | null> {
  const baseUrl = "http://wordpress:80";
  const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) return null;

  const posts = await res.json();
  return posts.length > 0 ? posts[0] : null;
}