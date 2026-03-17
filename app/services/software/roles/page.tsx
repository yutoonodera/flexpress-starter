import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import RoleSection from "../../../components/SoftwareHub/RoleSection";

export const metadata = {
  title: "立場から選ぶ | 株式会社movee",
  description:
    "企業様・パートナー様・非営利団体様など、立場に合わせた最適な開発プランをご提案します。",
};

export default function RolePage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <section className="py-16">
          <RoleSection />
        </section>
      </main>
      <Footer />
    </>
  );
}
