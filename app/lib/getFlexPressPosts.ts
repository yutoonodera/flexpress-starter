export type Post = {
  id: number;
  date: string | number | Date;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
};

export async function getFlexPressPosts() {

  const res = await fetch("/api/flexpressposts"); // 内部APIを叩く
  if (!res.ok) return [];
  return res.json();
}