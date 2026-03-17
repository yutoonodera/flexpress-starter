"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PurposeSection() {
  const subCards = [
    {
      icon: "📰",
      title: "情報発信サイトを新しく作りたい方へ",
      description:
        "Next.jsやHeadless CMSを活用し、SEO・デザイン・運用性を兼ね備えた情報発信サイトを構築します。",
      href: "/services/software/media",
      buttonText: "詳しく見る",
    },
    {
      icon: "🛒",
      title: "ECサイト・予約システムを構築したい方へ",
      description:
        "Next.jsとStripeやShopify APIを活用し、スピードと柔軟性を両立したEC・予約システムを構築します。",
      href: "/services/software/ec",
      buttonText: "詳しく見る",
    },
    {
      icon: "📊",
      title: "データを見える化したい方へ",
      description:
        "RechartsやChart.jsを用い、アクセス数や売上推移などをグラフで可視化。経営やマーケティングの意思決定を支援します。",
      href: "/services/software/analytics",
      buttonText: "詳しく見る",
    },
    {
      icon: "💬",
      title: "1時間単位で相談したい方へ",
      description:
        "開発・技術・システム企画に関するご相談を、1時間からご利用いただけます。要件整理や改善提案も対応します。",
      href: "/services/software/consulting",
      buttonText: "詳しく見る",
    },
  ];

  return (
    <section className="px-6 py-12 mx-auto max-w-6xl">
      {/* タイトル部分 */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          目的から選ぶ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          情報発信・EC・データ分析など、目的に応じた開発プランをご用意しています。
        </motion.p>
      </div>

      {/* カード部分 */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {subCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex flex-col justify-between rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md w-full max-w-[350px]"
          >
            <div>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
            <Link
              href={card.href}
              className="mt-6 inline-block rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {card.buttonText}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
