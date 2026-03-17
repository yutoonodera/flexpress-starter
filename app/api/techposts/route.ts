export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = process.env.WORDPRESS_API_URL || "http://localhost:8000";
  const techCatId = process.env.NEXT_PUBLIC_TECHBLOG_CAT_ID || "23";
  const perPage = 20;

  try {
    // ✅ まず1ページ目を取得
    const firstRes = await fetch(
      `${baseUrl}/wp-json/wp/v2/posts?_fields=id,slug,title,date,link,excerpt,featured_media,content&categories=${techCatId}&per_page=${perPage}&page=1`,
      {
        headers: {
          "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID!,
          "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET!,
        },
        next: { revalidate: 60 },
      }
    );

    if (!firstRes.ok) {
      return NextResponse.json({ error: "Failed to fetch first page" }, { status: firstRes.status });
    }

    const firstPosts = await firstRes.json();
    const totalPages = Number(firstRes.headers.get("x-wp-totalpages")) || 1;

    // ✅ 2ページ目以降を並列fetch
    const pageRequests = [];
    for (let i = 2; i <= totalPages; i++) {
      pageRequests.push(
        fetch(
          `${baseUrl}/wp-json/wp/v2/posts?_fields=id,slug,title,date,link,excerpt,featured_media,content&categories=${techCatId}&per_page=${perPage}&page=${i}`,
          {
            headers: {
              "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID!,
              "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET!,
            },
            cache: "no-store",
          }
        )
      );
    }

    // ✅ Promise.allで一気に並列取得
    const responses = await Promise.all(pageRequests);
    const jsons = await Promise.all(responses.map((r) => (r.ok ? r.json() : [])));

    // ✅ 配列をフラット化して結合
    const allPosts = [firstPosts, ...jsons].flat();

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error("Error fetching all posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
