import Link from "next/link";
import { FaBlog, FaBriefcase, FaHospital, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-soft-blue to-white/70 px-4 py-5 flex gap-8 items-center shadow-md rounded-b-2xl z-10 font-sans">
      <Link href="/" className="font-extrabold text-2xl text-primary-blue tracking-tight">MedReach</Link>
      <Link href="/blog" className="flex items-center gap-1 text-primary-blue hover:underline"><FaBlog />ブログ</Link>
      <Link href="/jobs" className="flex items-center gap-1 text-primary-blue hover:underline"><FaBriefcase />求人</Link>
      <Link href="/transfer" className="flex items-center gap-1 text-primary-blue hover:underline"><FaHospital />譲渡</Link>
      <Link href="/company" className="flex items-center gap-1 text-primary-blue hover:underline"><FaBuilding />会社</Link>
      <Link href="/access" className="flex items-center gap-1 text-primary-blue hover:underline"><FaMapMarkerAlt />MAP</Link>
    </nav>
  );
}