import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaUserMd, FaStethoscope, FaChartLine, FaUsers, FaComments } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "現場で使える最新ガイドライン2025",
    summary: "診療現場で役立つ最新ガイドラインの要点と運用例を徹底解説。",
    author: "佐藤 健太",
    date: "2025-07-11",
    icon: <FaStethoscope className="text-blue-400" />,
    link: "#"
  },
  {
    id: 2,
    title: "医師のキャリアパス多様化と新たな働き方",
    summary: "産業医・教育医・起業医師など臨床外キャリアの実情とロールモデルを紹介。",
    author: "山田 真理",
    date: "2025-06-28",
    icon: <FaUserMd className="text-blue-400" />,
    link: "#"
  },
  {
    id: 3,
    title: "医療DX最前線：AIと人の協働、現場での成功例",
    summary: "AI画像診断や電子カルテ連携の現場実装事例と課題を現役医師が語る。",
    author: "高橋 直人",
    date: "2025-05-30",
    icon: <FaChartLine className="text-blue-400" />,
    link: "#"
  }
];

export default function BlogTop() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 font-sans">
        <h1 className="text-3xl font-bold mb-4 text-primary-blue flex items-center gap-2">
          <FaUsers className="text-blue-500" /> ドクターズブログ
        </h1>
        <p className="mb-8 text-gray-700">現場医師によるコラム・インタビュー・医療DX・キャリア・ガイドライン解説など、実践的で信頼できる記事を随時発信しています。</p>
        <div className="grid gap-6">
          {articles.map(article => (
            <a href={article.link} key={article.id} className="group flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-100 shadow">
              <div className="text-3xl">{article.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-blue-900 group-hover:underline">{article.title}</span>
                  <span className="text-xs text-blue-500">{article.date}</span>
                </div>
                <div className="text-gray-700 text-sm mb-1">{article.summary}</div>
                <div className="text-xs text-gray-500">執筆：{article.author}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between">
          <a href="/jobs" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaBriefcase />求人情報へ</a>
          <a href="/transfer" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaHospital />施設譲渡情報へ</a>
        </div>
      </div>
      <Footer />
    </>
  );
}