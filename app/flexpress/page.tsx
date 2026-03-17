// app/flexpress/page.tsx

import Link from "next/link";

export default function FlexPressPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* ===================== HERO ===================== */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-sm font-semibold tracking-wide text-blue-600">
              movee Inc. / FlexPress
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              拡張型セキュアWordPressパッケージ
              <br />
              「FlexPress」
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              FlexPress は、WordPress の投稿しやすさをそのままに、
              フロントエンドを Next.js へ切り離すことで
              <span className="font-semibold">
                高速表示・強固なセキュリティ・柔軟なUI/機能開発
              </span>
              を同時に実現するヘッドレス型パッケージシステムです。
              WordPress を外部へ露出させない構成により安全性を高めつつ、
              カスタムページ・EC・会員制サイト・アプリケーション連携など、
              従来の WordPress では難しかった拡張が可能になります。
              Docker と Cloudflare/WAF の併用により、長期運用にも耐えられる安定した基盤を備えています。
            </p>

            {/* BADGES */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
                Headless WordPress
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
                Next.js / React
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                Docker / CI/CD
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 font-medium text-indigo-700">
                中長期運用向け
              </span>
              <span className="rounded-full bg-red-50 px-3 py-1 font-medium text-red-700">
                Security First
              </span>
            </div>
          </div>

          {/* STACK BOX */}
          <div className="mt-8 flex flex-1 justify-center lg:mt-0">
            <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-slate-900 px-5 py-4 text-xs text-slate-100 shadow-lg">
              <p className="font-mono text-[10px] uppercase tracking-wide text-slate-400">
                flexpress stack
              </p>
              <div className="mt-3 space-y-2 font-mono text-[11px] leading-relaxed">
                <p>
                  - frontend: Next.js (App Router)
                  <br />- backend: Headless WordPress
                  <br />- infra: Docker / docker-compose
                  <br />- deploy: CI/CD (GitHub Actions 等)
                </p>
                <p className="text-emerald-300">
                  ✔ 高速 & セキュアな Next.js フロント
                </p>
                <p className="text-amber-200">
                  ✔ WP の投稿体験を保ちながら自由に拡張可能
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY FLEXPRESS ===================== */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            FlexPress が“運用に強い”理由
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            FlexPress は、ヘッドレス構成・Docker 環境分離・Next.js フロントエンドを基盤にした、
            <span className="font-semibold">
              自由に拡張しながら中長期でガッツリ運用したい企業向け
            </span>
            のパッケージシステムです。
            表示速度・セキュリティ・柔軟性のバランスに優れ、
            情報発信から EC・会員制・業務連携まで幅広い構築が可能です。
          </p>

          {/* === WHY POINTS === */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-sm font-semibold text-slate-900">
                ① 完全分離されたヘッドレス構成
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                フロントは Next.js、管理は WordPress。
                これにより自由なUI開発と安全なバックエンド運用を両立できます。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-sm font-semibold text-slate-900">
                ② Docker による安定した開発・運用基盤
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                本番・検証・ローカルの環境差異を最小化し、運用負荷を削減。
                トラブルの検知と改善が圧倒的にラクになります。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <h3 className="text-sm font-semibold text-slate-900">
                ③ CI/CD による継続改善しやすい構成
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                GitHub Actions と連携し、ビルド〜デプロイを自動化。
                成長するサイトを安全に更新し続けられます。
              </p>
            </div>
          </div>

          {/* ===================== COMPARISON TABLE ===================== */}
          <h3 className="mt-12 text-lg font-semibold text-slate-900 sm:text-xl">
            FlexPress と他サービスの比較
          </h3>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="border-b p-3 font-semibold">サービス</th>
                  <th className="border-b p-3 font-semibold">柔軟性</th>
                  <th className="border-b p-3 font-semibold">表示速度</th>
                  <th className="border-b p-3 font-semibold">セキュリティ</th>
                  <th className="border-b p-3 font-semibold">運用しやすさ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "FlexPress",
                    flex: "◎ Next.js で自由に拡張可能",
                    speed: "◎ Next.js 高速SSR/ISR",
                    sec: "◎ WP非公開 + WAF + Docker",
                    ops: "◎ 開発〜運用まで安定",
                  },
                  {
                    name: "WordPress（通常構成）",
                    flex: "△ プラグイン頼み",
                    speed: "△ PHPレンダリング",
                    sec: "× WPが外部公開",
                    ops: "△ プラグイン事故リスク",
                  },
                  {
                    name: "Wix / Wix Studio",
                    flex: "△ ノーコードで限界あり",
                    speed: "△ 重くなりがち",
                    sec: "○ SaaS保護",
                    ops: "◎ 初心者向け",
                  },
                  {
                    name: "microCMS",
                    flex: "○ APIで柔軟",
                    speed: "◎ 高速API",
                    sec: "◎ SaaSセキュリティ",
                    ops: "○ WPのような投稿UIなし",
                  },
                  {
                    name: "Ghost",
                    flex: "△ ブログ特化",
                    speed: "◎ 高速",
                    sec: "○ SaaS or 自前設定",
                    ops: "○ シンプル",
                  },
                  {
                    name: "Contentful",
                    flex: "◎ 大規模対応",
                    speed: "◎ API高速",
                    sec: "◎ 強力",
                    ops: "△ UIが複雑",
                  },
                  {
                    name: "Strapi",
                    flex: "◎ 自由度Max",
                    speed: "○ API速度",
                    sec: "○ ルール次第",
                    ops: "△ 自前運用が必要",
                  },
                ].map((row) => (
                  <tr key={row.name} className="border-b">
                    <td className="p-3 font-medium text-slate-900">{row.name}</td>
                    <td className="p-3">{row.flex}</td>
                    <td className="p-3">{row.speed}</td>
                    <td className="p-3">{row.sec}</td>
                    <td className="p-3">{row.ops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================== FEATURES ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            FlexPress の主な特徴
          </h2>

          <dl className="mt-6 space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <dt className="text-sm font-semibold text-slate-900">WordPress の「書きやすさ」をそのまま活かす</dt>
              <dd className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                通常の WordPress と同じ管理画面で投稿可能。複数カテゴリ・複数配信先のサイト運用に最適です。
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <dt className="text-sm font-semibold text-slate-900">Next.js による高速表示と柔軟なUI</dt>
              <dd className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                SSR / SSG / ISR を併用し、コンテンツ増加時も高速表示を実現。
                企業ごとのデザイン要件にも柔軟に対応できます。
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <dt className="text-sm font-semibold text-slate-900">外部サービス・API との柔軟な連携基盤</dt>
              <dd className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                会計 / CRM / MA / EC / Notion など、外部APIとの連携が容易。WPに依存しない拡張性が強みです。
              </dd>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <dt className="text-sm font-semibold text-slate-900">パートナー企業が再利用しやすい構成</dt>
              <dd className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Docker 化された構成のため、複数案件に横展開しやすく、制作会社にも導入しやすいパッケージです。
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="border-t border-slate-200 bg-slate-900">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 px-6 py-10 text-slate-50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold sm:text-xl">
              FlexPress を導入したい企業様へ
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              中規模〜大規模なメディア運営、EC拡張、会員制サイト、
              機能を追加しながら長期運用したい企業のご相談に対応しています。
              Docker / CI/CD 設計から伴走可能です。
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="/contact"
              className="flex-shrink-0 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600"
            >
              ご相談・お問い合わせ
            </Link>

            <Link
              href="/flexpress/guide"
              className="flex-shrink-0 rounded-full border border-slate-500 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-300"
            >
              機能ガイドを見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
