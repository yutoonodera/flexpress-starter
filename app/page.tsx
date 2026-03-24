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
            We are <br className="sm:hidden" />
            <span className="text-rose-700">“XXX”</span> company.
          </h2>

          <p className="text-gray-700 mb-16 leading-relaxed text-base sm:text-lg">
          Free format
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
