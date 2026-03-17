import SoftwareHubSection from "../../components/SoftwareHub";
import Footer from "../../components/Footer"; // Added missing import
import Header from "../../components/Header";

export const metadata = {
    title: "ソフトウェア開発 | 株式会社movee",
    description:
        "ソフトウェアの力で、ビジネスを前へ。自社の課題解決にも、パートナーとしての協業にも対応しています。",
};

export default function SoftwareServicePage() {
    return (
        <>
            <Header />
            <SoftwareHubSection />
            <Footer />
        </>
    );
}