"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PostsChart from "./components/PostsChart";
import ContactSection from "./components/ContactSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChurnChart from "./components/ChurnChart";

export default function HomePage() {
  const services = [
    {
      title: "ソフトウェア開発",
      description:
        "最新技術を活用し、お客様の課題を解決するソフトウェアを開発します。",
      href: "/services/software",
    },
    {
      title: "その他",
      description:
        "開発以外にも、「こんなことできる？」というご相談を歓迎しています。まずはお気軽にお話しください。",
        href: "/contact", // ← 「contact」ページに変更
        buttonText: "Contactはこちら",
    },
  ];

  return (
    <>
      <Header />
      <main className="p-6 font-sans">
        {/* Top section */}
        <section className="max-w-4xl mx-auto text-center mb-24 mt-24 px-4">
          {/* 導入（企業理念・背景） */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 leading-snug">
            私たちは、企業の<br className="sm:hidden" />
            <span className="text-rose-700">“はじまりをつくる”</span>会社です
          </h2>

          <p className="text-gray-700 mb-16 leading-relaxed text-base sm:text-lg">
          株式会社movee（モビー）は、ソフトウェア開発を通じて
            「認知を生み、接点を広げる」仕組みづくりを支援しています。<br />
            営業や広告に頼らず、構造的に見つけてもらえる状態を目指しています。
          </p>

          {/* CTAリンク */}
          <div className="mt-10">
            <Link
              href="/make-start"
              className="inline-block text-blue-600 font-medium hover:underline text-sm sm:text-base"
            >
              「はじまりをつくる」について詳しく見る →
            </Link>
          </div>
        </section>

        {/* Services section */}
        <section id="services" className="max-w-5xl mx-auto mt-12 sm:mt-20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-center">
            事業内容
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 place-items-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full sm:w-[90%] lg:w-[80%] p-8 border rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow text-center"
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                {service.description}
              </p>

              {service.href && (
                <Link
                  href={service.href}
                  className="text-blue-600 font-medium hover:underline"
                >
                  {service.buttonText || "詳しく見る →"}
                </Link>
              )}
            </motion.div>
          ))}
          </div>
        </section>

        {/* その他セクション */}
        <section className="mt-20">
          <ContactSection />
          <PostsChart />
        </section>
        <section className="max-w-2xl mx-auto text-center mb-16">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6">🧠 マニアックなページ</h2>
  <p className="text-gray-600 mb-10 leading-relaxed">
    開発の裏側、日々の気づき、思考の断片。<br />
    moveeの“中の人”がふと書き残したメモのような場所です。
  </p>

  <div className="space-y-8">
    {/* dlog */}
    <div>
      <a
        href="/dlog"
        className="text-blue-600 text-xl font-semibold hover:underline inline-block"
      >
        D.log
      </a>
      <p className="text-gray-500 text-sm mt-2">
        代表の個人的な記録や考察など
      </p>
    </div>

    {/* tech blog */}
    <div>
      <a
        href="/techblog"
        className="text-blue-600 text-xl font-semibold hover:underline inline-block"
      >
        Techblog
      </a>
      <p className="text-gray-500 text-sm mt-2">
        技術検証や実験的な投稿
      </p>
    </div>
  </div>
</section>

              {/* 会社情報セクション */}
              <section className="bg-white mt-24 py-12 border-t">
  <div className="max-w-4xl mx-auto text-center px-6">
    <h2 className="text-2xl font-bold mb-6">会社情報</h2>
    <p className="text-gray-700 leading-relaxed mb-8">
      株式会社movee（モビー）は、福岡を拠点に
      ソフトウェア開発・データ分析・仕組みづくりを行う会社です。
      <br />
      テクノロジーを活用して、企業の“はじまり”をともにつくることを目指しています。
    </p>

    {/* 顔写真 + 名前 */}
    <div className="flex flex-col items-center mb-8">
      <p className="text-gray-800 font-medium">代表取締役 小野寺祐人</p>
      <p className="text-gray-500 text-sm">Yuto Onodera</p>
    </div>

    <div className="flex justify-center">
  <div className="space-y-2 text-sm text-gray-600 text-left max-w-sm sm:max-w-md">
    <p>所在地：〒810-0001 福岡県福岡市中央区天神２丁目３−１０ 天神パインクレスト 716（リモートワーク中心）</p>
    <p>設立：2015年</p>
    <p>事業内容：ソフトウェア開発・データ分析・業務支援</p>
    <p>
      Webサイト：
      <a
        href="https://movee.jp"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://movee.jp
      </a>
    </p>
  </div>
</div>

  </div>
</section>

        </main>
      <Footer />
    </>
  );
}
