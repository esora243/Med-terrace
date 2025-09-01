import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-blue-100 text-blue-600 py-8 mt-16 rounded-t-3xl text-center text-sm flex flex-col items-center gap-3 font-sans">
      <div className="flex gap-4 justify-center mb-2">
        <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="X (Twitter)"><FaTwitter size={20} /></a>
        <a href="https://facebook.com/" target="_blank" rel="noopener" aria-label="Facebook"><FaFacebook size={20} /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
        <a href="https://youtube.com/" target="_blank" rel="noopener" aria-label="YouTube"><FaYoutube size={20} /></a>
      </div>
      <nav className="flex gap-5 justify-center">
        <Link href="/company" className="hover:underline">会社概要</Link>
        <Link href="/access" className="hover:underline">アクセス</Link>
        <Link href="/privacy" className="hover:underline">プライバシー</Link>
        <Link href="/terms" className="hover:underline">利用規約</Link>
        <Link href="/contact" className="hover:underline">お問い合わせ</Link>
      </nav>
      <div className="mt-2">&copy; 2025 MedReach. All Rights Reserved.</div>
    </footer>
  );
}