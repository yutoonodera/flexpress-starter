"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function ConsultingServicePage() {
  const plans = [
    {
      title: "1時間プラン",
      price: "¥12,000",
      desc: "技術相談・要件定義・既存環境の改善提案などをピンポイントで行います。",
      stripeUrl: "https://buy.stripe.com/eVqeVcen61hjebpf7Na7C00",
    },
    {
      title: "5時間パック",
      price: "¥50,000",
      desc: "継続的な伴走や複数テーマの相談に最適。時間を分けてご利用いただけます。",
      stripeUrl: "https://buy.stripe.com/fZu28q2Eod01ebp8Jpa7C01",
    },
  ];

  return (
    <>
      <Header />
      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* ===== Hero ===== */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
          >
            1時間から、課題解決の第一歩を。
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto"
          >
            システム開発・要件定義・技術選定・運用改善など、
            具体的な課題を1時間単位で相談できるコンサルティングサービスです。
            「はじまるをつくる」第一歩として、スモールスタートに最適です。
          </motion.p>
        </div>

        {/* ===== Plans ===== */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl border bg-white p-8 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-700 text-sm mb-4">{plan.desc}</p>
              <p className="text-2xl font-bold text-blue-600 mb-6">{plan.price}</p>
              <a
                href={plan.stripeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                購入
              </a>
            </motion.div>
          ))}
        </div>

        {/* ===== Flow ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">
            ご利用の流れ
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 text-sm space-y-4 leading-relaxed">
            <p>① プランを選択・決済</p>
            <p>② ご登録メール宛にヒアリングフォームをお送りします</p>
            <p>③ ZoomまたはMeetでオンライン相談（1時間単位）</p>
            <p>④ 必要に応じて改善提案書や設計ドキュメントを納品</p>
          </div>
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
            まずは1時間から、動かしてみませんか？
          </h2>
          <p className="text-gray-700 text-sm mb-6">
            小さな相談から、プロジェクトがはじまることもあります。
            企画段階・開発途中・運用改善など、どんなフェーズでもご相談ください。
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            contact
          </Link>
        </motion.div>
      </section>
      <Footer />
    </>
  );
}
