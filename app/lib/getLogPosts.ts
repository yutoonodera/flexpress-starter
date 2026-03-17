export type LogPost = {
  content: any;
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string | number | Date;
};

export async function getLogPosts() {
  const res = await fetch("/api/dlog"); // 内部APIを叩く
  if (!res.ok) return [];
  return res.json();
}
