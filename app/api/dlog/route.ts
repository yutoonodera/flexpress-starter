export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.WORDPRESS_API_URL || "http://localhost:8000";
  const perPage = 20; // 1ページあたりの取得数（最大100まで）
  let page = 1;
  let allPosts: any[] = [];
  const onodyCatId = process.env.NEXT_PUBLIC_DLOG_CAT_ID || "4";

  while (true) {
    const res = await fetch(
      `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${onodyCatId}&per_page=${perPage}&page=${page}`,
      {
        headers: {
          "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID!,
          "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET!,
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      // ページが存在しない＝終了
      if (res.status === 400 || res.status === 404) break;
      return NextResponse.json(
        { error: "Failed to fetch posts" },
        { status: res.status }
      );
    }

    const posts = await res.json();
    if (posts.length === 0) break;

    allPosts = allPosts.concat(posts);

    // 最終ページ判定（WordPressはX-WP-TotalPagesヘッダで総ページ数を返す）
    const totalPages = Number(res.headers.get("X-WP-TotalPages") || "1");
    if (page >= totalPages) break;

    page++;
  }

  return NextResponse.json(allPosts);
}
