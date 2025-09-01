import Link from "next/link";
import { FaBlog, FaBriefcase, FaHospital, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const sections = [
    {
      href: "/blog",
      title: "ドクターズブログ",
      description: "現場医師による実践的コラム・最新知見・インタビュー。臨床・キャリア・経営のヒントを毎週発信。",
      image: "/images/画像(1).jpg",
      icon: <FaBlog size={36} className="text-blue-500" />
    },
    {
      href: "/jobs",
      title: "求人情報",
      description: "全国の医療機関・クリニック・企業の医師向け求人を厳選。勤務地・診療科・働き方で絞込可。",
      image: "/images/画像(2).jpg",
      icon: <FaBriefcase size={36} className="text-blue-500" />
    },
    {
      href: "/transfer",
      title: "施設譲渡情報",
      description: "クリニック・病院の譲渡案件やM&A情報を網羅。譲渡・買収希望も随時更新。",
      image: "/images/画像(3).jpg",
      icon: <FaHospital size={36} className="text-blue-500" />
    },
    {
      href: "/company",
      title: "会社概要",
      description: "運営会社の理念・事業・スタッフ・実績を公開。信頼できる医療のために。",
      image: "/images/画像(4).jpg",
      icon: <FaBuilding size={36} className="text-blue-500" />
    },
    {
      href: "/access",
      title: "アクセスマップ",
      description: "本社・各拠点のアクセス方法と地図。Google Map連携で迷わず来社。",
      image: "/images/画像(5).jpg",
      icon: <FaMapMarkerAlt size={36} className="text-blue-500" />
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-blue via-white to-blue-50 font-sans">
      <Navbar />
      <header className="bg-white shadow-md py-8 px-4 mb-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <img src="/images/画像(1).jpg" alt="MedReach" className="w-40 h-40 object-cover rounded-2xl border border-blue-200 shadow-md" />
          <div>
            <h1 className="text-4xl font-extrabold text-primary-blue mb-2 tracking-tight leading-tight">MedReach</h1>
            <h2 className="text-lg text-blue-800 mb-3 font-semibold tracking-wide leading-snug">
              医師・医療従事者のための<br className="md:hidden" />キャリア＆情報プラットフォーム
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              ドクターズブログ・求人情報・施設譲渡・会社概要・MAPなど、<br />
              “現場志向・信頼性・最新性”の医療情報をワンストップで提供。
            </p>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid gap-8 md:grid-cols-3">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group bg-white rounded-2xl shadow hover:shadow-xl border border-blue-100 hover:border-blue-400 flex flex-col items-center p-6 text-center transition cursor-pointer"
            >
              <div className="mb-3">{section.icon}</div>
              <img
                src={section.image}
                alt={section.title}
                className="w-28 h-28 object-cover rounded-xl mb-4 shadow group-hover:scale-105 transition"
              />
              <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-blue-700 tracking-tight leading-tight">{section.title}</h3>
              <p className="text-gray-700 mb-2 text-sm leading-relaxed">{section.description}</p>
              <span className="inline-block text-blue-500 font-bold mt-auto group-hover:underline">→ 詳細を見る</span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}