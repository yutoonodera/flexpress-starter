// app/legal/asct/page.tsx
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "特定商取引法に基づく表記 | 株式会社movee",
  description:
    "株式会社moveeの特定商取引法に基づく表記ページです。販売事業者、所在地、連絡先、役務の対価、支払時期・方法、提供時期、返品・解約等の条件を定めています。",
};

export default function AsctPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
          本ページは、オンライン決済（Stripe 等）を含む取引に関して、特定商取引法（通信販売）に基づき必要な事項を表示するものです。
        </p>

        {/* テーブル表示（モバイルは縦積み） */}
        <dl className="divide-y rounded-2xl border bg-white shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">販売事業者</dt>
            <dd className="md:col-span-2">株式会社movee（movee Inc.）</dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">運営統括責任者</dt>
            <dd className="md:col-span-2">小野寺 祐人</dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">所在地</dt>
            <dd className="md:col-span-2">
              〒810-0001<br />
              福岡県福岡市中央区天神２丁目３−１０ 天神パインクレスト 716<br />
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">電話番号</dt>
            <dd className="md:col-span-2">
              固定電話なしのため、info@movee.jpへお願いします。
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">メールアドレス</dt>
            <dd className="md:col-span-2">
              <a href="mailto:info@movee.jp" className="text-blue-600 underline">
                info@movee.jp
              </a>
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">URL</dt>
            <dd className="md:col-span-2">
              <a href="https://movee.jp/" className="text-blue-600 underline">
                https://movee.jp/
              </a>
            </dd>
          </div>

          {/* 価格・費用 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">販売価格・役務の対価</dt>
            <dd className="md:col-span-2">
              各サービスの紹介ページ・見積書・チェックアウト画面に表示された金額（消費税を含む/税抜表記いずれかで統一）となります。
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">商品代金以外の必要料金</dt>
            <dd className="md:col-span-2">
              振込手数料（銀行振込の場合）、通信費、クラウド/外部サービス利用料（必要な場合は事前に提示）等。
              送料が発生する物品の発送は原則行いません。
            </dd>
          </div>

          {/* 支払方法・時期 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">支払方法</dt>
            <dd className="md:col-span-2">
              クレジットカード（Stripe）、銀行振込、その他当社が指定する方法。
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">支払時期</dt>
            <dd className="md:col-span-2">
              単発（都度課金）：申込時／請求書到着後10日以内。<br />
              サブスクリプション（月額等）：契約開始日に初回決済、以降毎月同日（または当社指定日）に自動決済。
            </dd>
          </div>

          {/* 提供時期 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">役務の提供時期</dt>
            <dd className="md:col-span-2">
              ご入金確認後、合意したスケジュールに基づき着手します。デジタルコンテンツやオンラインサービスは、決済完了後ただちに提供される場合があります。
            </dd>
          </div>

          {/* 返品・キャンセル */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">返品・キャンセル</dt>
            <dd className="md:col-span-2">
              サービスの性質上、提供開始後の返金は原則としてお受けしておりません。<br />
              提供前のキャンセル可否および費用は契約書・注文書で定めます。成果物に重大な瑕疵がある場合は、契約に基づき修補・再実施等で対応します。
            </dd>
          </div>

          {/* 定期課金の解約 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">定期課金の解約方法</dt>
            <dd className="md:col-span-2">
              お客様専用の管理画面またはメール（<a href="mailto:info@movee.jp" className="text-blue-600 underline">info@movee.jp</a>）
              にて解約申請を受け付けます。解約は当月末日までの申請で翌月以降の課金を停止（※日割精算の有無はプラン毎に明示）。最低利用期間がある場合はプラン詳細に明示します。
            </dd>
          </div>

          {/* 動作環境（必要な場合） */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">動作環境</dt>
            <dd className="md:col-span-2">
              ブラウザ最新バージョンのご利用を推奨します。個別システム要件がある場合は各サービスページに記載します。
            </dd>
          </div>

          {/* 問い合わせ窓口・営業時間 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">問い合わせ窓口</dt>
            <dd className="md:col-span-2">
              <a href="mailto:info@movee.jp" className="text-blue-600 underline">
                info@movee.jp
              </a>{" "}
              ／ contact：<a href="/contact" className="text-blue-600 underline">/contact</a>
            </dd>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <dt className="font-medium text-gray-700">営業時間</dt>
            <dd className="md:col-span-2">平日 10:00–18:00（年末年始・当社指定日を除く）</dd>
          </div>
        </dl>

        <p className="text-xs text-gray-400 mt-6">
          ※本表記は法改正・サービス内容の変更に伴い、予告なく更新される場合があります。
        </p>
      </main>
      <Footer />
    </>
  );
}
