"use client";

import React, { useRef, useEffect } from "react";
import ReactFlow, { Background, Controls, Position } from "reactflow";
import "reactflow/dist/style.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const nodes = [
  { id: "1", position: { x: 0, y: 50 }, data: { label: "ユーザー" }, type: "input", style: { backgroundColor: "#E0F7FA", border: "2px solid #00ACC1", fontWeight: "bold", color: "#004D40" } },
  { id: "1.5", position: { x: 150, y: 150 }, data: { label: "movee.jp（公開ドメイン）" } },
  { id: "2", position: { x: 400, y: 100 }, data: { label: "Cloudflare (DNS / CDN / WAF)" } },
  { id: "3", position: { x: 650, y: 60 }, data: { label: "https-portal (SSL / Reverse Proxy)" } },
  { id: "4", position: { x: 900, y: 100 }, data: { label: "Next.js (Frontend / API Routes)" }, targetPosition: Position.Left },
  { id: "5", position: { x: 1150, y: 100 }, data: { label: "WordPress (Headless CMS)" } },
  { id: "6", position: { x: 1400, y: 100 }, data: { label: "MySQL (DB)" } },
  { id: "7", position: { x: 900, y: 300 }, data: { label: "Docker Compose (VPS上)" } },
  { id: "8", position: { x: 650, y: -80 }, data: { label: "SendGrid (メール送信API)" } },
  { id: "9", position: { x: 1150, y: -80 }, data: { label: "Stripe (決済API)" } },
];

const edges = [
  { id: "e1-1.5", source: "1", target: "1.5", label: "アクセス (https://movee.jp)" },
  { id: "e1.5-2", source: "1.5", target: "2", label: "DNS解決 / CDN経由" },
  { id: "e2-3", source: "2", target: "3", label: "Cloudflare Proxy" },
  { id: "e3-4", source: "3", target: "4", label: "HTTP(S)" },
  { id: "e4-5", source: "4", target: "5", label: "REST API" },
  { id: "e5-6", source: "5", target: "6", label: "DB接続" },
  { id: "e4-8", source: "4", target: "8", label: "メール送信 (SendGrid API)" },
  { id: "e4-9", source: "4", target: "9", label: "決済処理 (Stripe API)" },
  { id: "e7-3", source: "7", target: "3", label: "コンテナ管理" },
  { id: "e7-4", source: "7", target: "4" },
  { id: "e7-5", source: "7", target: "5" },
  { id: "e7-6", source: "7", target: "6" },
];

export default function SystemDiagramPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current.style as any).webkitOverflowScrolling = "touch";
    }
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center">

        {/* 1) 概要 */}
        <section className="w-full bg-white shadow rounded-lg mt-4 sm:mt-6 max-w-7xl p-6 sm:p-8">
          <h1 className="text-lg sm:text-2xl font-bold mb-3 text-center">
            movee.jp 構成の概要
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center max-w-3xl mx-auto">
            本ページでは、弊社サイト <span className="font-medium">movee.jp</span> のシステム構成を紹介しています。
            この環境は、Next.js・WordPress・MySQL・Cloudflare を組み合わせた JamStack 型構成をベースに、
            将来的にパッケージとして提供できるよう開発・検証を重ねているものです。
            メール送信や決済連携などの外部APIも統合し、実運用に近い構成でテストを行っています。
          </p>
        </section>

        {/* 2) 構成図 */}
        <section className="w-full bg-white shadow rounded-lg mt-4 sm:mt-6 max-w-7xl overflow-x-auto overflow-y-hidden">
          <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-center p-2">
            システム構成図（Cloudflare・SendGrid・Stripe対応）
          </h2>

          <div
            ref={containerRef}
            className="min-w-[1600px] h-[460px] sm:h-[500px]"
            style={{
              touchAction: "pan-x pan-y pinch-zoom",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              proOptions={{ hideAttribution: true }}
              defaultViewport={{ x: 0, y: 100, zoom: 0.9 }}
              minZoom={0.5}
              maxZoom={2.5}
              zoomOnScroll={false}
              zoomOnPinch={true}
              panOnScroll={false}
              panOnDrag={false}
              preventScrolling={false}
              fitView={false}
            >
              <Background color="#BFDBFE" gap={20} />
              <Controls position="bottom-right" showInteractive />
            </ReactFlow>
          </div>
        </section>

        {/* 3) 詳細説明 */}
        <section className="max-w-7xl bg-white p-8 mt-10 rounded-xl shadow-sm leading-relaxed space-y-6">
          <h2 className="text-2xl font-semibold mb-4">構成の目的と位置づけ</h2>
          <p>
            movee.jp は、単なる会社サイトではなく、JamStack構成の実証と商品化を視野に入れた運用環境です。
            Docker Compose 上で Next.js・WordPress・MySQL を統合し、Cloudflare 経由で配信することで、
            セキュアかつ再現性の高い構成テンプレートを実際の運用で磨いています。
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">Cloudflare レイヤー</h3>
          <p>
            DNS・CDN・WAF・SSL通信を一元管理し、どの環境でも同様の挙動を再現できるよう設定。
            Webセキュリティやキャッシュの仕組みも検証しながら、再利用可能な構成テンプレートとして整理しています。
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">アプリケーションレイヤー</h3>
          <p>
            Next.js をフロント兼APIとして、WordPress をヘッドレスCMSとして連携。
            投稿管理・API通信・キャッシュ制御を包括的に扱える構成として整備しており、
            今後は中小企業・個人事業主向けに「セットアップ済みパッケージ」として提供する構想です。
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">外部API連携</h3>
          <p>
            SendGrid（メール）・Stripe（決済）などの一般的な外部APIを統合。
            これにより、単なる静的サイトに留まらず、会員制やECなどの拡張にも対応できる形を想定しています。
            APIキーはすべて環境変数で安全に管理しています。
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">インフラ構成</h3>
          <p>
            Docker Compose を用いて各サービスを統合。
            VPS上での再現性を重視し、環境ごとの変数・SSL証明書管理・ログ監視なども本番と同等の条件で運用しています。
            将来的には、同構成を即時立ち上げできるテンプレート配布を予定しています。
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">まとめ</h3>
          <p>
            movee.jp の構成は「実運用で磨くテンプレート」を目指しています。
            検証環境としての安定性を確保しつつ、ビジネス用途に転用可能なJamStackパッケージとして体系化していく予定です。
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
