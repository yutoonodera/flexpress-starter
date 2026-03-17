import { getMonthlyCounts } from "../../app/lib/getMonthlyCounts";
import { getPosts } from "../../app/lib/getPosts";


jest.mock("../../app/lib/getPosts");

describe("getMonthlyCounts", () => {
  it("投稿月毎に集計し、年月順にソートして返すこと", async() => {
    const mockPosts =[
      { date: "2025-01-10" },
      { date: "2025-01-15" },
      { date: "2025-02-01" },
      { date: "2024-12-20" },
    ];
    (getPosts as jest.Mock).mockResolvedValue(mockPosts);
    const result = await getMonthlyCounts();
    expect(getPosts).toHaveBeenCalledTimes(1);
   });

   it("投稿がなしの時は空の配列を戻すこと", async() => {
    (getPosts as jest.Mock).mockResolvedValue([]);
    const result = await getMonthlyCounts();
    expect(result).toEqual([]);
   });
});
