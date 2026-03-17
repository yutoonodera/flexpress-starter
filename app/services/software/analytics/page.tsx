"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AnalyticsServicePage() {
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
            データを「見える化」し、意思決定を加速する。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
          >
            売上・アクセス・マーケティング指標など、散在するデータを一つにまとめて「わかりやすく」。
            <br />
            Next.jsとグラフライブラリを用いて、リアルタイムなダッシュボードや経営分析サイトを構築します。
          </motion.p>
        </div>

        {/* ===== Problems ===== */}
        <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4">よくある課題</h2>
            <ul className="text-gray-600 space-y-2 text-sm leading-relaxed">
              <li>・データがスプレッドシートや各サービスに分散している</li>
              <li>・グラフ化や集計が手作業になっており、更新が大変</li>
              <li>・リアルタイムでの把握や可視化ができない</li>
              <li>・経営層や顧客に「伝わる」形でデータを見せられていない</li>
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
                解決策：Next.js × データビジュアライゼーション
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Next.jsで構築したWebアプリに、RechartsやChart.jsなどの可視化ライブラリを統合。
                APIやデータベースと連携して、リアルタイムでデータを見せるインタラクティブな分析サイトを実現します。
              </p>
            </div>
          </motion.div>
        </div>

        {/* ===== Visualization Concept ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">
            データビジュアライゼーション構成イメージ
          </h2>

          <div className="bg-white border rounded-2xl shadow-sm p-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-6">
              <div className="flex-1">
                <h3 className="font-semibold mb-2">データソース</h3>
                <p className="text-sm text-gray-600">
                  Google Analytics / 売上DB / CRM / スプレッドシート など
                </p>
              </div>

              <div className="text-3xl">➡️</div>

              <div className="flex-1">
                <h3 className="font-semibold mb-2">Next.js + API連携</h3>
                <p className="text-sm text-gray-600">
                  API経由でデータを取得し、RechartsやChart.jsでグラフ化。<br />
                  経営者・顧客・チームに共有できるダッシュボードを構築。
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== Benefits ===== */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "📊",
              title: "リアルタイム可視化",
              text: "API連携により、売上やアクセスの最新データを常に自動で更新。瞬時に現状を把握できます。",
            },
            {
              icon: "📈",
              title: "経営・マーケ分析に最適",
              text: "KPI・CVR・LTVなど、経営指標を一元管理し、次のアクションを明確にします。",
            },
            {
              icon: "💬",
              title: "伝わるレポート",
              text: "グラフやダッシュボードのデザインを工夫し、誰でも直感的に理解できる資料を生成できます。",
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

        {/* ===== Tech Stack ===== */}
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
                name: "Next.js + API Routes",
                desc: "バックエンドAPIを統合。外部データソースやDBと安全に接続し、リアルタイムな値をフロントへ。",
              },
              {
                name: "Recharts / Chart.js",
                desc: "売上推移・CVR・トレンドなどを視覚的に表現。棒グラフ・折れ線・円グラフなど柔軟に対応。",
              },
              {
                name: "PostgreSQL / Supabase",
                desc: "自社データを保存・管理。分析・API提供・顧客ごとの表示カスタマイズにも対応可能。",
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
            ※ Google Analytics 4 / Notion / Salesforce / スプレッドシート連携なども対応可能です。
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
          <h2 className="text-2xl font-bold mb-3">
            データを「伝わる」形にしませんか？
          </h2>
          <p className="text-gray-700 text-sm mb-6">
            経営・マーケティング・業務改善に必要な指標を、Next.jsで可視化。
            チームや顧客と「同じ数字」を見ながら前進できる環境を構築します。
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
