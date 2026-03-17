"use client";

import { motion } from "framer-motion";
import {
  LightBulbIcon,
  ChartBarIcon,
  MapIcon,
  ShoppingCartIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function SoftwareIntroPage() {
  // Heroテキスト
  const texts = [
    {
      text: "ソフトウェアは、あなたのビジネスを次のステージへ導く力があります。",
      type: "lead",
      icon: <LightBulbIcon className="h-8 w-8 text-blue-500 inline-block mr-2 align-middle" />,
    },
    {
      text: "たとえばオープンデータを活用して、市場や競合の動きを可視化できます。",
      type: "normal",
      icon: <ChartBarIcon className="h-6 w-6 text-blue-400 inline-block mr-2 align-middle" />,
    },
    {
      text: "自社データを組み合わせれば、顧客の行動や売上の傾向も分析できます。",
      type: "normal",
      icon: <ChartBarIcon className="h-6 w-6 text-blue-400 inline-block mr-2 align-middle" />,
    },
    {
      text: "地図を使って、独自のマップを作ることもできます。",
      type: "normal",
      icon: <MapIcon className="h-6 w-6 text-blue-400 inline-block mr-2 align-middle" />,
    },
    {
      text: "カレーの画像と「購入」ボタンを設置して、決済を組み込めば、ネットショップが立ち上がります。",
      type: "scenario",
      icon: <ShoppingCartIcon className="h-6 w-6 text-blue-400 inline-block mr-2 align-middle" />,
    },
    {
      text: "つまり、アイデア次第でソフトウェアはビジネスの可能性を大きく広げられるのです。",
      type: "lead",
    },
    {
      text: "「ソフトウェアが御社のサービスをどう発展させられるか」",
      type: "highlight",
    },
    {
      text: "その第一歩を、私たちと一緒に考えてみませんか？",
      type: "lead",
    },
  ];

  const strengths = [
    {
      icon: "🧠",
      title: "課題の本質を一緒に整理",
      description: "ただ作るだけではなく、ビジネスの目的や課題を共に言語化し、最適な形を考えます。",
    },
    {
      icon: "⚡️",
      title: "スピーディな対応",
      description: "小回りの利く体制で初期リリースまでを素早く実現。素早く検証・改善を回せます。",
    },
    {
      icon: "🤝",
      title: "非エンジニアでも安心",
      description: "ヒアリング〜運用まで丁寧にサポート。技術に詳しくない方でも安心して進められます。",
    },
  ];

  const steps = [
    {
      icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600" />,
      title: "お問い合わせ",
      description: "まずは課題・ご要望をお聞かせください。アイデア段階でもOKです。",
    },
    {
      icon: <ClipboardDocumentCheckIcon className="h-8 w-8 text-blue-600" />,
      title: "要件整理・ご提案",
      description: "課題を整理し、最適な進め方をご提案します。ご予算の相談も可能です。",
    },
    {
      icon: <PaperAirplaneIcon className="h-8 w-8 text-blue-600" />,
      title: "開発・リリース",
      description: "合意後、開発〜初期リリースまでスピーディに進行します。",
    },
  ];

  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl space-y-20 px-6 py-16">

        {/* Intro Text Section */}
        <div className="space-y-10 leading-relaxed md:leading-loose">
          {texts.map((item, index) => {
            let className = "text-base md:text-lg text-gray-700";
            if (item.type === "lead")
              className = "text-xl md:text-2xl text-gray-800";
            if (item.type === "highlight")
              className = "text-3xl md:text-4xl font-extrabold text-blue-600";
            if (item.type === "scenario")
              className = "text-base md:text-lg text-gray-600";
            if (item.type === "scenario-strong")
              className = "text-xl md:text-2xl font-semibold text-gray-800";

            return (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={className}
              >
                {item.icon}
                {item.text}
              </motion.p>
            );
          })}
        </div>

        {/* Strengths Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-10">moveeの特徴</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {strengths.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bridge Section */}
        <section className="max-w-3xl mx-auto text-center my-16 px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed"
          >
            moveeは、お客様の課題やアイデアを丁寧にヒアリングし、<br className="hidden md:block" />
            最適なプロセスで開発を進めることで、ビジネスを前へと導きます。
          </motion.p>
        </section>

        {/* Flow Section - タイムライン */}
        <section className="text-center bg-blue-50 p-10 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-10">ご依頼の流れ</h2>

          <div className="relative mx-auto max-w-4xl">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-200"></div>

            <div className="grid gap-12 md:grid-cols-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-blue-600 font-bold text-lg mb-3 z-10">
                    {index + 1}
                  </div>
                  <div className="mb-2">{step.icon}</div>
                  <h3 className="text-base font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="mt-20">
          <div className="rounded-2xl border bg-blue-50 p-8 text-center">
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              実現方法はいっしょに考えながら決めていければと思います。<br/>
              まずはお気軽にご相談ください。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/contact"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                お問い合わせ
              </a>
              <a
                href="mailto:info@movee.jp"
                className="rounded-xl border border-blue-200 px-5 py-2.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
              >
                info@movee.jp にメール
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
