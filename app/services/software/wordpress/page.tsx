"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function WordpressServicePage() {
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
          WordPressを「API化」して、次世代フロントへ。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
        >
          WordPressの運用をそのまま活かしつつ、Next.jsやNuxtなどの最新フロントエンドで
          「高速・安全・拡張性の高い」サイトを構築しませんか？
        </motion.p>
      </div>

      {/* ===== Problem Section ===== */}
      <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            従来のWordPress構成の課題
          </h2>
          <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
            <li>・PHPでの描画処理により、ページ表示速度が遅くなる</li>
            <li>・管理画面と公開画面が密結合しており、改修リスクが高い</li>
            <li>・テーマやプラグインの更新で不具合が起きやすい</li>
            <li>・セキュリティ対策に常に気を配る必要がある</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-3">解決策：Headless構成</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              WordPressを「コンテンツ管理（CMS）」としてだけ利用し、
              公開部分はNext.jsなどのフロントフレームワークで構築することで、
              表示速度・安全性・柔軟性を飛躍的に高められます。
            </p>
          </div>
        </motion.div>
      </div>

      {/* ===== Diagram Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">
          Headless構成のイメージ
        </h2>

        <div className="bg-white border rounded-2xl shadow-sm p-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-6">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">WordPress（APIサーバ）</h3>
              <p className="text-sm text-gray-600">
                投稿・カテゴリ・メディアを<br />
                REST API / GraphQL 経由で提供
              </p>
            </div>

            <div className="text-3xl">➡️</div>

            <div className="flex-1">
              <h3 className="font-semibold mb-2">Next.js / Nuxt</h3>
              <p className="text-sm text-gray-600">
                高速な表示・SEO最適化・柔軟なUIを実現。<br />
                Jamstack構成で静的配信も可能。
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Benefits Section ===== */}
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

      {/* ===== CTA Section ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-blue-50 rounded-2xl p-10 text-center"
      >
        <h2 className="text-2xl font-bold mb-3">WordPress × Next.js で運用改善を</h2>
        <p className="text-gray-700 text-sm mb-6">
          既存のWordPressを活かしつつ、フロントをモダン化することで、
          サイトの表示速度・保守性・安全性を一気に高められます。
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
