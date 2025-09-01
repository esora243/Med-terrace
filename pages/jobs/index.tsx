import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaBriefcaseMedical, FaMapMarkerAlt, FaUserMd, FaClock } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    title: "総合診療医（東京都・常勤）",
    company: "医療法人社団みらいクリニック",
    location: "東京都千代田区",
    type: "常勤",
    posted: "2025-08-25",
    icon: <FaUserMd className="text-blue-500" />,
    link: "#"
  },
  {
    id: 2,
    title: "産業医（埼玉県・週3日）",
    company: "株式会社メディカルサポート",
    location: "埼玉県さいたま市",
    type: "パート",
    posted: "2025-08-18",
    icon: <FaBriefcaseMedical className="text-blue-500" />,
    link: "#"
  },
  {
    id: 3,
    title: "健診センター医師（大阪府・非常勤）",
    company: "健診メディカル大阪",
    location: "大阪府大阪市",
    type: "非常勤",
    posted: "2025-08-10",
    icon: <FaClock className="text-blue-500" />,
    link: "#"
  }
];

export default function JobsTop() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 font-sans">
        <h1 className="text-3xl font-bold mb-4 text-primary-blue flex items-center gap-2">
          <FaBriefcaseMedical className="text-blue-500" /> 求人情報
        </h1>
        <p className="mb-8 text-gray-700">医師・医療従事者向けの最新求人を厳選掲載。勤務地・診療科・働き方から検索可能。企業求人も豊富。</p>
        <div className="grid gap-6">
          {jobs.map(job => (
            <a href={job.link} key={job.id} className="group flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-100 shadow">
              <div className="text-3xl">{job.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-blue-900 group-hover:underline">{job.title}</span>
                  <span className="text-xs text-blue-500">{job.posted}</span>
                </div>
                <div className="text-gray-700 text-sm mb-1">{job.company} ／ {job.location} ／ {job.type}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between">
          <a href="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaBlog />ブログへ</a>
          <a href="/transfer" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaHospital />施設譲渡情報へ</a>
        </div>
      </div>
      <Footer />
    </>
  );
}