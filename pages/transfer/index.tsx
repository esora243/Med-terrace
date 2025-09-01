import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaHospital, FaHandshake, FaYenSign } from "react-icons/fa";

const transfers = [
  {
    id: 1,
    title: "都内内科クリニック譲渡案件",
    location: "東京都港区",
    price: "応相談",
    status: "新着",
    icon: <FaHospital className="text-blue-500" />,
    link: "#"
  },
  {
    id: 2,
    title: "地方中核病院M&A案件",
    location: "福島県会津若松市",
    price: "2億円",
    status: "募集中",
    icon: <FaHandshake className="text-blue-500" />,
    link: "#"
  },
  {
    id: 3,
    title: "クリニック事業承継（大阪）",
    location: "大阪府堺市",
    price: "3500万円",
    status: "商談中",
    icon: <FaYenSign className="text-blue-500" />,
    link: "#"
  }
];

export default function TransferTop() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 font-sans">
        <h1 className="text-3xl font-bold mb-4 text-primary-blue flex items-center gap-2">
          <FaHospital className="text-blue-500" /> 施設譲渡情報
        </h1>
        <p className="mb-8 text-gray-700">クリニック・病院の最新譲渡案件、M&A情報、事業承継案件を掲載。譲渡・買収希望受付も対応。</p>
        <div className="grid gap-6">
          {transfers.map(tr => (
            <a href={tr.link} key={tr.id} className="group flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-100 shadow">
              <div className="text-3xl">{tr.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-blue-900 group-hover:underline">{tr.title}</span>
                  <span className="text-xs text-blue-500">{tr.status}</span>
                </div>
                <div className="text-gray-700 text-sm mb-1">{tr.location} ／ 譲渡価格：{tr.price}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between">
          <a href="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaBlog />ブログへ</a>
          <a href="/jobs" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaBriefcase />求人情報へ</a>
        </div>
      </div>
      <Footer />
    </>
  );
}