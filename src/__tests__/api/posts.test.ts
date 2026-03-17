import { GET } from "../../../app/api/posts/route";
import "whatwg-fetch";

jest.setTimeout(10000); // ⭐安全策

jest.mock("next/server", () => ({
  NextResponse: {
    json: (data: any, init?: any) => ({
      status: init?.status ?? 200,
      json: async () => data,
    }),
  },
}));

process.env.WORDPRESS_API_URL = "http://wordpress:80";

describe("GET /api/posts", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: true,
      json: async () => [],
    } as any);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
  it("正常に投稿データを返すこと", async () => {
    const mockWpPosts = [
      { id: 1, title: { rendered: "テスト投稿" }, date: "2025-01-01" },
    ];

    jest.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(mockWpPosts), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      })
    );

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([
      {
        id: 1,
        title: "テスト投稿",
        date: "2025-01-01",
      },
    ]);
  });

  it("fetch失敗時は500を返すこと", async () => {

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({}),
    } as any);

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toContain("Failed to fetch posts");
  });

  it("fetchが404エラーの時は空配列を２００で返すこと", async() =>{

    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status:404,
      json: async() => ({}),
  } as any);

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual([]);
  });

  it("例外発生時は500を返すこと", async () => {
    jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("ネットワークエラー"));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Internal Server Error" });
  });
});
