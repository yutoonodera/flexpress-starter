// app/recruit/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function RecruitPage() {
  return (
    <>
    <Header />
    <main className="max-w-4xl mx-auto px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        採用情報
      </motion.h1>

      {/* 冒頭コメント */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-gray-700 leading-relaxed text-center mb-12"
      >
        株式会社moveeでは、ソフトウェア開発を通じて社会に価値を届けるエンジニアを募集しています。<br />
        技術で社会に価値を生み出したい方、チームで成果をつくることが好きな方は、ぜひご応募をお待ちしています。
      </motion.p>

      <section className="space-y-16">
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.15, duration: 0.6 }}
  className="p-8 rounded-2xl bg-yellow-50 border border-yellow-200 shadow-sm"
>
  <h2 className="text-xl font-semibold text-yellow-800 mb-6 text-center">
    応募いただく方へのインセンティブ
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    {/* 紹介者向け */}
    <div className="p-6 bg-white rounded-xl border border-yellow-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
        紹介者の方へ
      </h3>
      <p className="text-gray-700 leading-relaxed text-left">
        エンジニアをご紹介いただき、採用となった場合は紹介者（社内外問わず）へ
        <span className="text-lg font-semibold">10万円</span> をお支払いします。
      </p>
    </div>

    {/* 入社予定者向け */}
    <div className="p-6 bg-white rounded-xl border border-yellow-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-3 text-left">
        入社予定者の方へ
      </h3>
      <p className="text-gray-700 leading-relaxed text-left">
        一定期間の勤務を経た際にお渡しする「定着奨励金」をご用意しています。<br />
        ※具体的な金額は面談時にお伝えします。
      </p>
    </div>

  </div>

</motion.div>




        {/* エンジニア募集 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">ソフトウェアエンジニア</h2>
          <p className="text-gray-700 mb-4">
            Java・PHPなどのオブジェクト指向言語、または Vue / React のいずれかの経験をお持ちの方を募集しています。
          </p>

          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Java、PHPなどのオブジェクト言語の経験、もしくはVue、Reactの経験</li>
            <li>月収 20万〜40万　※現年収は保証します</li>
          </ul>
        </motion.div>
        {/* 将来的なフリーランス希望のエンジニア */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            ソフトウェアエンジニア（将来フリーランス希望）
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            将来フリーランスを目指したい方に向けたポジションです。</p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            弊社の開発業務に参画しながら、独立に必要なスキルを習得できるよう代表がサポートします。<br />
            ただし、フリーランスを目指す以上、業務外の学習や継続的なスキルアップは必須となります。
            主体的に学べる方を歓迎します。
          </p>

          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Java、PHP、または Vue / React のいずれかの開発経験</li>
            <li>将来的に独立したい意思がある方</li>
            <li>幅広い技術領域に挑戦できる方</li>
            <li>月収 20万〜40万　※現年収は必ず保証します</li>
          </ul>

          <p className="text-gray-600 mt-4 text-sm">
            ※希望があれば、独立後も協業パートナーとして案件をお願いできる体制を整えています。
          </p>
        </motion.div>


        {/* リードクラス募集 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">ソフトウェアエンジニア（リードクラス）</h2>
          <p className="text-gray-700 mb-4">
            チームの中核として、設計やレビュー、品質向上に取り組めるエンジニアを募集しています。<br />
            実装だけでなく、メンバーの成長を支える視点をお持ちの方を歓迎します。
          </p>

          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>Java、PHPなどのオブジェクト言語の経験、かつVue、Reactの経験</li>
            <li>技術への強い探究心</li>
            <li>テストコード、CICDなどデプロイの知見</li>
            <li>月収 35万〜（技術力を考慮）　※現年収は保証します</li>
          </ul>
        </motion.div>
        {/* 役員クラス募集 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-6 border border-gray-200 rounded-2xl shadow-sm bg-white"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            技術責任者（役員クラス）
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            株式会社moveeの技術基盤をともに支えながら、チームの拡大や育成にも携わっていただける方を募集しています。<br />
            開発現場に深く関わりながら、組織づくり・採用・カルチャー形成をリードできる方を歓迎します。
          </p>

          <ul className="list-disc ml-5 text-gray-700 space-y-1">
            <li>実務としてソフトウェア開発に携わる意欲・スキル</li>
            <li>チームマネジメント・エンジニア採用・組織づくりの経験</li>
            <li>経営視点を持ち、事業・組織両面で意思決定をリードできる方</li>
            <li>理念「認知を生み、接点を広げる」に共感いただける方</li>
            <li>報酬：相談の上決定　※現年収は保証します</li>
          </ul>

          <p className="text-gray-600 mt-4">
            ※開発現場での実装力を重視しつつ、チーム拡大や仕組みづくりにも挑戦いただけるポジションです。
          </p>
        </motion.div>

      </section>

      <div className="text-center mt-16">
        <p className="text-gray-600 mb-4">
          ご興味のある方は、お問い合わせフォームよりご連絡ください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          お問い合わせはこちら
        </Link>
      </div>
    </main>
    <Footer />
    </>
  );
}
