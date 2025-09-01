import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaMapMarkerAlt, FaTrain, FaBus, FaPhoneAlt } from "react-icons/fa";

export default function Access() {
  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4 font-sans">
        <h1 className="text-3xl font-bold mb-4 text-primary-blue flex items-center gap-2">
          <FaMapMarkerAlt className="text-blue-500" /> アクセスマップ
        </h1>
        <p className="mb-8 text-gray-700">本社・各拠点へのアクセス・地図・連絡先をご案内します。</p>
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><FaMapMarkerAlt /> 本社所在地</h2>
          <p className="text-gray-700 mb-2">〒100-0004 東京都千代田区大手町1-2-3 Otemachi Bldg 8F</p>
          <div className="flex items-center gap-3 mb-2">
            <FaTrain className="text-blue-600" />
            <span className="text-gray-700">JR東京駅 徒歩5分 / 東京メトロ大手町駅直結</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <FaBus className="text-blue-600" />
            <span className="text-gray-700">都営バス「大手町」バス停 目の前</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <span className="text-gray-700">TEL: 03-1234-5678</span>
          </div>
        </div>
        <div className="mb-8">
          <iframe
            className="w-full h-64 border rounded-xl"
            src="https://maps.google.com/maps?q=東京都千代田区大手町1-2-3&t=&z=15&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="アクセスマップ"
          />
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between">
          <a href="/company" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaBuilding />会社概要へ</a>
          <a href="/blog" className="inline-flex items-center gap-2 text-blue-700 hover:underline font-semibold"><FaBlog />ブログへ</a>
        </div>
      </div>
      <Footer />
    </>
  );
}