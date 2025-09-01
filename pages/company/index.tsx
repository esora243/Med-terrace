import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaBuilding, FaUserTie, FaTrophy, FaRegLightbulb } from "react-icons/fa";

export default function Company() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto py-12 px-4 font-sans">
        <h1 className="text-3xl font-bold mb-4 text-primary-blue flex items-center gap-2">
          <FaBuilding className="text-blue-500" /> 会社概要
        </h1>
        <p className="mb-8 text-gray-700">MedReach運営会社の理念・事業内容・スタッフ・沿革をご紹介します。</p>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaRegLightbulb /> 企業理念</h2>
          <p className="text-gray-700 mb-2">「医療従事者のキャリアと知を支え、より良い医療を実現する」</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaTrophy /> 主要実績</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>2021年 医療人材紹介事業スタート</li>
            <li>2023年 全国クリニックM&A実績50件</li>
            <li>2025年 医療DX支援プロジェクト推進</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaUserTie /> 主要スタッフ</h2>
          <ul className="list-disc ml-8 text-gray-700">
            <li>代表取締役：高橋 直人（医師／MBA）</li>
            <li>医療人材部長：佐藤 健太</li>
            <li>事業承継支援責任者：山田 真理</li>
          </ul>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between">
          <a href="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaBlog />ブログへ</a>
          <a href="/access" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaMapMarkerAlt />アクセスへ</a>
        </div>
      </div>
      <Footer />
    </>
  );
}