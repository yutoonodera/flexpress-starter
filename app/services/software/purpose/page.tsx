import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PurposeSection from "../../../components/SoftwareHub/PurposeSection";

export const metadata = {
  title: "目的から選ぶ | 株式会社movee",
  description:
    "情報発信・EC・データ可視化など、目的別にシステム開発のご提案をしています。",
};

export default function PurposePage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <section className="py-16">
          <PurposeSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
