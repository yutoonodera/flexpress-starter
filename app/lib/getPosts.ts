export async function getPosts() {
  const res = await fetch("/api/posts"); // 内部APIを叩く
  if (!res.ok) return [];
  return res.json();
}
