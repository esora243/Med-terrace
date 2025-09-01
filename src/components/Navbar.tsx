import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-primary-blue dark:bg-gray-800 text-white py-4 px-2 shadow-lg sticky top-0 z-40">
      <div className="max-w-4xl mx-auto flex gap-6 items-center">
        <Link href="/" className="font-bold text-2xl tracking-tight hover:opacity-80">MedReach</Link>
        <Link href="/" className="hover:underline">ホーム</Link>
        <Link href="#blog" className="hover:underline">ブログ</Link>
        <Link href="#job" className="hover:underline">求人</Link>
        <Link href="#clinic" className="hover:underline">クリニック譲渡</Link>
        <Link href="#company" className="hover:underline">企業情報</Link>
        <Link href="#mhlw" className="hover:underline">厚生労働省</Link>
      </div>
    </nav>
  );
}