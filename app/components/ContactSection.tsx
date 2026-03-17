"use client";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="bg-white text-center py-16 rounded-3xl shadow-lg px-6">
      <h2 className="text-3xl font-extrabold mb-4">
        moveeは企業の新たな試みをサポートします
      </h2>

      <p className="text-lg font-semibold mb-2">
        <a href="mailto:info@movee.jp" className="hover:underline">
          Info@movee.jp
        </a>
      </p>

      <p className="text-gray-600 mb-8">
        ご依頼内容が固まってなくても、お気軽にお問い合わせください。<br />
        いっしょに考えていきましょう。<br />

      </p>

      <Link
        href="/contact"
        className="inline-block bg-black text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-800 transition"
      >
        お問い合わせ
      </Link>
    </section>
  );
}
