"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { getLogPosts, LogPost } from "../lib/getLogPosts";
import Header from "../components/Header";
import { Briefcase } from "lucide-react";

const Calendar = dynamic(() => import("react-calendar"), { ssr: false });
import "react-calendar/dist/Calendar.css";
import Footer from "../components/Footer";

export default function OnodyLogPage() {
  const [posts, setPosts] = useState<LogPost[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(0);

  useEffect(() => {
    getLogPosts().then((data) => {
      const sorted = data.sort(
        (a: LogPost, b: LogPost) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
      setPosts(sorted);

      if (sorted.length > 0) {
        const latestPost = sorted[sorted.length - 1];
        setSelectedDate(new Date(latestPost.date));
        setCurrentPostIndex(sorted.length - 1);
      }
    });
  }, []);

  // 投稿のある日一覧
  const postDates = Array.from(
    new Set(posts.map((p) => new Date(p.date).toDateString()))
  );

  // 現在表示している投稿
  const currentPost = posts[currentPostIndex] || null;

  const handlePrev = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex((i) => i - 1);
      setSelectedDate(new Date(posts[currentPostIndex - 1].date));
    }
  };

  const handleNext = () => {
    if (currentPostIndex < posts.length - 1) {
      setCurrentPostIndex((i) => i + 1);
      setSelectedDate(new Date(posts[currentPostIndex + 1].date));
    }
  };

  const handleClickDay = (date: Date) => {
    const targetIndex = posts.findIndex(
      (p) => new Date(p.date).toDateString() === date.toDateString()
    );
    if (targetIndex !== -1) {
      setSelectedDate(date);
      setCurrentPostIndex(targetIndex);
    }
  };

  return (
    <>
     <Header />
      <div className="p-6">
        <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-2 text-center">D.log</h1>

        <p className="text-gray-500 text-sm text-center mb-6 leading-relaxed">
          代表の個人的な記録です。<br />
          1ヶ月前、1年前の自分が何を考えていたか、を振り返れるようにしています。
        </p>

          <div className="flex justify-center mb-8">
            <Calendar
              onClickDay={handleClickDay}
              value={selectedDate}
              locale="ja-JP"
              tileDisabled={({ date }) => !postDates.includes(date.toDateString())}
              tileClassName={({ date }) => {
                const dateStr = date.toDateString();
                if (currentPost && new Date(currentPost.date).toDateString() === dateStr) {
                  return "selected-post";
                }
                if (postDates.includes(dateStr)) return "has-post";
                return null;
              }}
            />
          </div>

          <div className="mt-8 text-center">
            {currentPost ? (
              <>
                <h2 className="text-xl mb-2 font-semibold">
                  {new Date(currentPost.date).toLocaleDateString("ja-JP")}（
                  {new Date(currentPost.date).toLocaleDateString("ja-JP", { weekday: "short" })}）の日記
                </h2>

                <div
                  key={currentPost.id}
                  className="mb-6 p-6 border rounded-lg shadow text-left bg-white"
                >
                  <h3
                    className="font-bold text-lg mb-2"
                    dangerouslySetInnerHTML={{ __html: currentPost.title.rendered }}
                  />
                  <div
                    className="prose mx-auto max-w-none"
                    dangerouslySetInnerHTML={{ __html: currentPost.content.rendered }}
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handlePrev}
                    disabled={currentPostIndex === 0}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  >
                    ← 前の記事
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentPostIndex === posts.length - 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  >
                    次の記事 →
                  </button>
                </div>
              </>
            ) : (
              <p className="text-gray-500">投稿がありません。</p>
            )}
          </div>
        </div>
        {/* 🔽 代表写真セクション */}
        <div className="mt-16 mb-12 text-center text-gray-700">
          <div className="inline-block">
            <img
              src="/dlog/profile/onodera.jpg"
              alt="代表 小野寺祐人"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-3 opacity-90"
            />
            <p className="text-sm font-medium">Acme Corp</p>
            <p className="text-gray-800 font-semibold">小野寺 祐人</p>
          </div>
        </div>

        {/* contact */}
        <div className="mt-20 mb-20">
          <div className="max-w-2xl mx-auto text-center bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-10">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-black text-white rounded-full">
                <Briefcase size={28} />
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-6 text-gray-800 leading-relaxed">
              <a href="/#services" className="text-blue-600 hover:underline">
                お仕事のご相談
              </a>
              、{" "}
              <a href="/recruit" className="text-blue-600 hover:underline">
                求人応募
              </a>
              {" "}については以下よりお問い合わせください。
            </h3>

            <a
              href="/contact"
              className="inline-block bg-black text-white px-10 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Contact is here
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
