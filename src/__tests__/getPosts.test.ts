import { getPosts } from "../../app/lib/getPosts";

global.fetch = jest.fn();

const mockPosts = [
  {
    id: 1,
    title: { rendered: "Hello World" },
    excerpt: { rendered: "This is an excerpt" },
    slug: "hello-world",
  },
  {
    id: 2,
    title: { rendered: "GoodNight World" },
    excerpt: { rendered: "This is an excerpt" },
    slug: "goodnight-world",
  },
];

describe("すべての記事を取得すること", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockPosts,
    });
  });

  it("全記事取得APIが正しいこと", async () => {
    const posts = await getPosts();
    expect(posts).toEqual(mockPosts);
  });

  it("Fetchに失敗してから空の配列が返ってくること", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false });
    const posts = await getPosts();
    expect(posts).toEqual([]);
  });
});
