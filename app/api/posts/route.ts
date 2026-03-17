export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

type WpPost ={
id: number;
title: {rendered:string};
date:string;
}

type simplifiedPost ={
id: number;
title: string;
date: string;
}

export async function GET() {
  try {
    const baseUrl = process.env.WORDPRESS_API_URL || "http://localhost:8000";
    const perPage = 20; // 1ページあたり取得数（最大100まで可能）
    let page = 1;
    let allPosts: simplifiedPost[] = [];

    while (true) {
      const res = await fetch(
        `${baseUrl}/wp-json/wp/v2/posts?_fields=id,title,date&per_page=${perPage}&page=${page}`,
        {
          headers: {
            "CF-Access-Client-Id": process.env.CF_ACCESS_CLIENT_ID!,
            "CF-Access-Client-Secret": process.env.CF_ACCESS_CLIENT_SECRET!,
          },
          next: { revalidate: 60 },
        }
      );

      if (!res.ok) {
        // WordPress は、ページが存在しないときに 400 または 404 を返す
        if (res.status === 400 || res.status === 404) break;
        return NextResponse.json(
          { error: `Failed to fetch posts (page ${page})` },
          { status: res.status }
        );
      }

      const posts:WpPost[] = await res.json();
      if (posts.length === 0) break;

      // 🎯 必要な情報だけを抽出（軽量化）
        const simplified :simplifiedPost[] = posts.map((p: any) => ({
          id: p.id,
          title: p.title.rendered,
          date: p.date,
        }));

      allPosts = allPosts.concat(simplified);
      page++;
    }

    // 🎨 日付順にソート（古い順）
    allPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return NextResponse.json(allPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
