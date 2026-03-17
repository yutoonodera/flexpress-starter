"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RoleSection() {
  const mainCards = [
    {
      icon: "🧑‍💼",
      title: "自社の課題解決をお考えの企業様へ",
      description:
        "業務効率化や新サービス開発など、ビジネス課題をシステム開発で解決します。要件定義〜運用まで一貫して対応します。",
      href: "/services/software/end-user",
      buttonText: "詳しく見る",
    },
    {
      icon: "🤝",
      title: "開発パートナーをお探しの企業様へ",
      description:
        "マーケ・デザイン・制作会社様の裏側で開発を支援。設計・開発・運用まで、柔軟にパートナーとして協業可能です。",
      href: "/services/software/partner",
      buttonText: "パートナーの方へ",
    },
    {
      icon: "🤲",
      title: "非営利団体・NPOの皆様へ",
      description:
        "小規模でも運用しやすいウェブサイトや会員管理システムを、目的と予算に合わせてご提案します。助成金活用のご相談も可能です。",
      href: "/services/software/nonprofit",
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
          立場から選ぶ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          企業様・パートナー様・非営利団体様など、立場に合わせた最適な開発プランをご案内します。
        </motion.p>
      </div>

      {/* カード部分 */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {mainCards.map((card, index) => (
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
