"use client";

import Link from "next/link";

export default function ContactSection() {
  return (

<section className="border-t border-slate-200 bg-slate-900 mt-16 rounded-2xl">
  <div className="mx-auto max-w-5xl px-6 py-10 text-slate-50">
    <div className="flex flex-col gap-6 sm:gap-4 sm:flex-row sm:items-center sm:justify-between">

      {/* 左側テキスト */}
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-semibold sm:text-xl">
          FlexPress を導入したい企業様へ
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          中規模〜大規模なメディア運営、EC拡張、会員制サイト、
          機能を追加しながら長期運用したい企業のご相談に対応しています。
          Docker / CI/CD 設計から伴走可能です。
        </p>
      </div>

      {/* 右側ボタン */}
      <div className="flex flex-wrap gap-3 justify-start sm:justify-end">

        <Link
          href="/contact"
          className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600"
        >
          ご相談・お問い合わせ
        </Link>

        <Link
          href="/flexpress/guide"
          className="rounded-full border border-slate-500 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-300"
        >
          機能ガイドを見る
        </Link>

      </div>
    </div>
  </div>
</section>
  );
}
