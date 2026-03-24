"use client";

import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const nodes = [
  { id: "1", position: { x: 50, y: 50 }, data: { label: "全ユーザー層" }, type: "input",
    style: { backgroundColor: "#E0F7FA", border: "2px solid #00ACC1", fontWeight: "bold" } },
  { id: "2", position: { x: 300, y: 50 }, data: { label: "ソフトウェアの閲覧" } },
  {
    id: "3",
    position: { x: 550, y: 50 },
    data: { label: "🎯 認知の獲得（繰り返し閲覧による理解）" },
    type: "output",
    style: {
      backgroundColor: "#E0F7FA",       // 💙 全ユーザー層と同系の淡い青
      border: "3px solid #00ACC1",     // 💙 メインカラーに統一
      fontWeight: "bold",
      color: "#004D40",                 // 深い緑み青で締める
      boxShadow: "0 0 14px rgba(0,172,193,0.5)", // ✨ ゴールらしい光
      borderRadius: "12px",
    },
  },
  { id: "4", position: { x: 50, y: 250 }, data: { label: "重点ターゲット層" },
    style: { backgroundColor: "#FFF3E0", border: "2px solid #FB8C00", fontWeight: "bold" } },
  { id: "5", position: { x: 300, y: 180 }, data: { label: "メール / DM 送付" } },
  { id: "6", position: { x: 500, y: 180 }, data: { label: "アポ取得" } },
  { id: "7", position: { x: 700, y: 180 }, data: { label: "サービス紹介・ヒアリング" } },
  { id: "8", position: { x: 300, y: 320 }, data: { label: "交流会・イベント・紹介" } },
  { id: "9", position: { x: 500, y: 320 }, data: { label: "名刺交換" } },
  { id: "10", position: { x: 700, y: 320 }, data: { label: "アポ取得" } },
  { id: "11", position: { x: 900, y: 320 }, data: { label: "サービス紹介・ヒアリング" } },
  {
    id: "12",
    position: { x: 1000, y: 250 },
    data: { label: "🎯 認知の獲得（直接接触による理解）" },
    type: "output",
    style: {
      backgroundColor: "#FFF3E0",       // 🧡 重点ターゲット層と同系の淡い橙
      border: "3px solid #FB8C00",     // 🧡 メインカラーに統一
      fontWeight: "bold",
      color: "#E65100",                 // 濃いオレンジで文字を際立たせる
      boxShadow: "0 0 14px rgba(251,140,0,0.5)", // ✨ 柔らかい光
      borderRadius: "12px",
    },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", label: "ネット検索・SNS" },
  { id: "e2-3", source: "2", target: "3", label: "繰り返しの閲覧" },
  { id: "e4-5", source: "4", target: "5", label: "オンライン接点" },
  { id: "e5-6", source: "5", target: "6" },
  { id: "e6-7", source: "6", target: "7" },
  { id: "e7-12", source: "7", target: "12" },
  { id: "e4-8", source: "4", target: "8", label: "リアル接点" },
  { id: "e8-9", source: "8", target: "9" },
  { id: "e9-10", source: "9", target: "10" },
  { id: "e10-11", source: "10", target: "11" },
  { id: "e11-12", source: "11", target: "12" },
  { id: "loop1", source: "7", target: "4", label: "継続的な接点 / フォローアップ", type: "smoothstep", animated: true,
    style: { stroke: "#FB8C00", strokeWidth: 3 }, labelStyle: { fill: "#FB8C00", fontSize: 13 } },
  { id: "loop2", source: "11", target: "4", label: "再訪問・関係深化", type: "smoothstep", animated: true,
    style: { stroke: "#FB8C00", strokeWidth: 3 }, labelStyle: { fill: "#FB8C00", fontSize: 13 } },
];

export default function RecognitionApproachPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex flex-col items-center">
        {/* ✅ 導入セクション */}
        <section className="w-full bg-white shadow rounded-lg mt-6 max-w-6xl p-6 sm:p-8">
          <h1 className="text-lg sm:text-2xl font-bold mb-4 text-center">
            はじまりをつくる、考え方
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto text-center">
            moveeでは、マーケティングを「広く自然に伝わる流れ」と「直接的に伝える流れ」の
            2つのルートで整理しています。
            SNSやWebサイトなどを通じた自然な接触からの認知と、
            メール・イベント・対話といった直接的な接点による認知。
            この2つをどう設計し、どのように重ねていくかが、
            私たちのマーケティングの中心的なテーマです。
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto mt-4 text-center">
            下の図は、その考え方を可視化したものです。
            「自然認知ルート」と「直接認知ルート」がどのように機能し、
            どのポイントで“理解や信頼”が形成されていくのかを示しています。
          </p>
        </section>
        <section className="w-full bg-white shadow rounded-lg mt-4 sm:mt-6 max-w-6xl overflow-x-auto overflow-y-hidden">
          <h1 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-center p-2">
            はじまりをつくる、考え方（自然認知と直接認知の2ルート）
          </h1>

          {/* ✅ 縦横どちらもスクロール可能に */}
          <div
            className="min-w-[1300px] h-[380px] sm:h-[420px]"
            style={{
                touchAction: "pan-x pan-y pinch-zoom",
            }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              proOptions={{ hideAttribution: true }}
              defaultViewport={{ x: 0, y: 0, zoom: 0.9 }}
              minZoom={0.5}
              maxZoom={2.5}
              zoomOnScroll={false}   // ❌ ホイールズーム禁止
              zoomOnPinch={true}     // ✅ ピンチズーム許可
              panOnScroll={false}
              panOnDrag={false}      // ✅ ReactFlowのパン操作は禁止
              preventScrolling={false}
              fitView={false}
            >
              <Background color="#BFDBFE" gap={20} />
              <Controls position="bottom-right" showInteractive={true} />
            </ReactFlow>
          </div>
        </section>

        <section className="max-w-6xl bg-white p-6 sm:p-8 mt-10 rounded-xl shadow-sm leading-relaxed space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">継続的接触の重要性</h2>

            <p>
                「重点ターゲット層」へのアプローチは一度限りの接点ではなく、
                継続的なコミュニケーションの積み重ねによって関係性を深めることが重要です。
                この図では、オレンジ色の太線ループでそのプロセスを表現しています。
                一度の商談や説明で完結するのではなく、再訪問や情報提供などを通じて、
                信頼の醸成と理解の深化を進めていく構造になっています。
            </p>

            <p>
                上段の「全ユーザー層」は、自然な接触からの認知を目指すルートです。
                主にWebサイトやSNSを通じて情報を発信し、
                興味関心を持つユーザーが繰り返し閲覧することで徐々に理解を深めます。
                このプロセスでは、コンテンツの質・頻度・一貫性が重要であり、
                ユーザーが何度も接触するうちにサービス価値を自ら理解していく形をとります。
            </p>

            <p>
                一方、下段の「重点ターゲット層」は、直接的な接点を重ねて認知を形成するルートです。
                メールやDM、交流会、イベント、名刺交換など、
                対人コミュニケーションを中心とした行動の中で相互理解を深めます。
                このプロセスはオンライン広告のような一方向の接触ではなく、
                実際の対話を通じて信頼と理解を積み上げていく関係性形成に重点を置いています。
            </p>

            <p>
                どちらのルートも最終的なゴールは「認知の獲得」です。
                自然認知ルートでは、繰り返しの閲覧や情報提供を通じて
                ユーザーの中に理解と好意が蓄積され、
                直接認知ルートでは、具体的な対話や商談の中で信頼が形成されます。
                つまり、異なる経路であっても目的は共通しており、
                「相手が自ら納得して理解する状態」に到達させることが最終成果となります。
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">図の読み取りポイント</h3>
            <ul className="list-disc list-inside space-y-2">
                <li>
                青色のルートは「自然認知」を示し、主にデジタル上での接触を表します。
                コンテンツマーケティングやSNS投稿など、広く・継続的な発信を通じて
                潜在層の理解を促進します。
                </li>
                <li>
                オレンジのルートは「直接認知」を示し、
                営業・紹介・イベントなど、人的な接触による理解形成を重視しています。
                1対1の深い関係構築に向いています。
                </li>
                <li>
                ループ線（太線）は、フォローアップ・再接触・関係深化を意味します。
                一度の接点で終わらせず、継続的に価値提供を行うことで、
                より強い認知・信頼を獲得します。
                </li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-2">全体設計の意図</h3>
            <p>
                本図の2ルート構成は、マーケティング活動を「自然接触」と「直接接触」に明確に分け、
                それぞれの役割を整理することを目的としています。
                自然認知ルートでは認知の拡大を、直接認知ルートでは信頼の深化を担うことで、
                全体として認知から関係構築までを一貫して設計することができます。
            </p>
            <p>
                このように、単なる集客導線ではなく、
                「関係を積み上げるプロセス」を視覚化することで、
                チーム全体で一貫した戦略思考を持つための共通言語として機能します。
            </p>
        </section>
        <section className="max-w-6xl bg-white p-10 mt-16 mb-20 rounded-xl shadow-sm text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            一緒に「はじまり」を設計しませんか？
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
            moveeでは、このような構造的な認知設計をもとに、
            ソフトウェアや仕組みを通じて企業の「はじまり」を支援しています。
            ご興味をお持ちの方は、お気軽にご相談ください。
          </p>

          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Contactはこちら
          </Link>

          <p className="mt-4 text-sm text-gray-500">
            まだ具体的でなくても構いません。構想段階のご相談も歓迎しています。
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
