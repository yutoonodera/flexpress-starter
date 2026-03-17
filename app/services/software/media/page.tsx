"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function MediaServicePage() {
  return (
    <>
    <Header />
    <section className="mx-auto max-w-5xl px-6 py-20">
      {/* ===== Hero Section ===== */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
        >
          情報発信サイトを、新しいかたちで。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
        >
          企業や個人が持つ「知見」や「ストーリー」を、より速く・美しく・柔軟に届ける。
          <br />
          Next.jsとHeadless CMSを活用して、SEOとデザイン、運用性を両立する新しい情報発信サイトを構築します。
        </motion.p>
      </div>

      {/* ===== Current Challenges ===== */}
      <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            よくある課題と限界
          </h2>
          <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
            <li>・WordPressや既存CMSの更新が重く、デザイン制約が多い</li>
            <li>・記事数が増えると表示が遅くなる</li>
            <li>・SPA化や高速化が難しく、SEO対策が複雑</li>
            <li>・マーケティング連携（GA4、OGP、SNS）が手間</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">
              解決策：Headless構成 × Next.js
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              コンテンツ管理をHeadless CMS（例：WordPress REST API、Notion、MicroCMSなど）に分離し、
              フロントエンドをNext.jsで構築することで、軽量・柔軟・高パフォーマンスな構成を実現します。
            </p>
          </div>
        </motion.div>
      </div>

      {/* ===== Structure Diagram ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">
          Next.js × Headless CMS 構成のイメージ
        </h2>

        <div className="bg-white border rounded-2xl shadow-sm p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-6">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Headless CMS</h3>
              <p className="text-sm text-gray-600">
                WordPress / MicroCMS / Notion などから<br />
                記事・画像・カテゴリをAPIで取得
              </p>
            </div>

            <div className="text-3xl">➡️</div>

            <div className="flex-1">
              <h3 className="font-semibold mb-2">Next.js フロントエンド</h3>
              <p className="text-sm text-gray-600">
                高速なビルド、静的配信（SSG）・動的配信（ISR）に対応。<br />
                どんなデザインも柔軟に実装可能。
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Benefits ===== */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: "⚡",
            title: "高速表示",
            text: "静的生成（SSG）やキャッシュ戦略により、従来よりも圧倒的に速い表示速度を実現します。",
          },
          {
            icon: "🧱",
            title: "疎結合構成",
            text: "バックエンドとフロントを分離することで、更新や改修が安全かつ柔軟になります。",
          },
          {
            icon: "🔒",
            title: "高いセキュリティ",
            text: "管理画面と公開画面が分離されるため、攻撃リスクを大幅に低減できます。",
          },
          {
            icon: "🚀",
            title: "超高速・高スコア",
            text: "Core Web Vitalsを満たし、SEO・ユーザー体験ともに高評価を獲得できます。",
          },
          {
            icon: "🎨",
            title: "自由なデザイン",
            text: "従来のテーマ制約がなく、ブランドに合わせた完全オリジナルデザインが可能です。",
          },
          {
            icon: "🧩",
            title: "柔軟な拡張性",
            text: "ブログ、製品紹介、採用情報、LPなども同じ構成で拡張可能です。",
          },
        ].map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-white p-8 text-center shadow-sm"
          >
            <div className="text-4xl mb-3">{b.icon}</div>
            <h3 className="font-semibold mb-2">{b.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{b.text}</p>
          </motion.div>
        ))}
      </div>

    {/* ===== Possible Tech Stack ===== */}
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-20"
    >
    <h2 className="text-2xl font-semibold text-center mb-8">
        主な技術スタック例
    </h2>

    <div className="grid sm:grid-cols-3 gap-6 text-center">
        {[
        {
            name: "WordPress REST API",
            desc: "既存のWordPressをAPIサーバとして再利用。投稿・メディア・カテゴリをJSON経由で配信し、Next.jsが受け取って描画します。",
        },
        {
            name: "Next.js",
            desc: "最新のReactフレームワーク。静的生成（SSG）・増分ビルド（ISR）・サーバーコンポーネント対応で高速かつ柔軟。",
        },
        {
            name: "Vercel / Docker",
            desc: "開発〜本番まで自動デプロイ可能。安定性・スケーラビリティ・CI/CDを兼ね備えた運用基盤。",
        },
        ].map((t, i) => (
        <div
            key={t.name}
            className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
        >
            <h3 className="font-semibold mb-2">{t.name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
        </div>
        ))}
    </div>

    <p className="text-center text-gray-500 text-sm mt-6">
        ※ ご希望に応じて MicroCMS や Notion API など他のHeadless CMSにも対応可能です。
    </p>
    </motion.div>


      {/* ===== CTA ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-50 rounded-2xl p-10 text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Next.jsで情報発信を強化しませんか？</h2>
        <p className="text-gray-700 text-sm mb-6">
          サイトを単なる「ブログ」から「マーケティング資産」へ。
          SEO・運用・デザインを全て最適化した構成で発信の効果を高めます。
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          ご相談はこちら
        </Link>
      </motion.div>
    </section>
    <Footer />
    </>
  );
}
