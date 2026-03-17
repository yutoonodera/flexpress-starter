import { getPosts } from "./getPosts";

export type MonthlyCount = {
  year: number;
  month: number;
  count: number;
};

export async function getMonthlyCounts(): Promise<MonthlyCount[]> {
  const posts = await getPosts();

  const counts: Record<string, number> = {};

  posts.forEach((post: { date: string; }) => {
    const date = new Date(post.date);
    const key = `${date.getFullYear()}-${date.getMonth() + 1}`; // 1月=0なので +1
    counts[key] = (counts[key] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([key, count]) => {
      const [year, month] = key.split("-").map(Number);
      return { year, month, count };
    })
    .sort((a, b) => (a.year - b.year) || (a.month - b.month));
}
