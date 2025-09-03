<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedReach | 医師のキャリアと知見を、次のステージへ</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --color-primary: #102A43; --color-secondary: #334E68; --color-accent: #007A7A;
            --color-background: #FDFDFD; --font-serif: 'Noto Serif JP', serif; --font-sans: 'Inter', 'Noto Sans JP', sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-sans); background-color: var(--color-background); color: #486581; line-height: 1.8; }
        h1, h2, h3, h4, h5 { font-family: var(--font-serif); color: var(--color-primary); }
        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .hover\:bg-primary-dark:hover { background-color: #0B1D30; }
        .text-secondary { color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
        .border-accent { border-color: var(--color-accent); }
        .shadow-card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
        .hover\:shadow-card-hover:hover { box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); }

        .scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1); }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }

        .nav-link {
            position: relative; padding: 0.5rem 0; margin: 0 1rem; color: #64748B; font-weight: 500;
            transition: color 0.3s ease-in-out;
        }
        .nav-link::after {
            content: ''; position: absolute; left: 0; bottom: 0; width: 100%; height: 2px;
            background-color: var(--color-accent); transform: scaleX(0); transition: transform 0.3s ease-in-out;
            transform-origin: center;
        }
        .nav-link.active::after, .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: var(--color-primary); }

        .header-scrolled { background-color: rgba(255, 255, 255, 0.95); box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    </style>
</head>
<body class="antialiased">

    <header id="header" class="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="container mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <a href="#home" class="flex items-center space-x-3">
                    <svg class="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span class="text-2xl font-bold text-primary font-serif">MedReach</span>
                </a>
                <nav id="nav-menu" class="hidden md:flex items-center">
                    <a href="#blog" class="nav-link">専門記事</a>
                    <a href="#jobs" class="nav-link">求人情報</a>
                    <a href="#transfer" class="nav-link">事業承継</a>
                    <a href="#company" class="nav-link">企業情報</a>
                    <a href="#mhlw" class="nav-link">公式情報</a>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section id="home" class="relative min-h-screen flex items-center text-white">
            <div class="absolute inset-0 bg-primary z-10 opacity-60"></div>
            <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-doctor-looking-at-a-sample-in-a-microscope-2380-large.mp4" type="video/mp4">
            </video>
            <div class="container mx-auto px-6 relative z-20">
                <div class="max-w-3xl scroll-reveal">
                    <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">先生のキャリアと知見を、<br>次のステージへ。</h1>
                    <p class="text-lg text-gray-200">MedReachは、多忙な日々を送る先生方へ。キャリア形成と学術的探究を加速させるための信頼できる情報と機会を提供します。</p>
                </div>
            </div>
        </section>

        <section id="about" class="bg-background py-24">
            <div class="container mx-auto px-6 text-center">
                <h2 class="text-4xl font-bold text-primary mb-12 scroll-reveal">MedReachが提供する価値</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="scroll-reveal p-8">
                        <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                        <h3 class="text-xl font-bold text-primary mb-2">最新の医療コラム</h3><p class="text-gray-600">現場の専門家による、示唆に富んだ記事を毎月更新。</p>
                    </div>
                    <div class="scroll-reveal p-8" style="transition-delay: 150ms;">
                        <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <h3 class="text-xl font-bold text-primary mb-2">厳選された求人情報</h3><p class="text-gray-600">先生の専門性を最大限に活かす、次のステージへ。</p>
                    </div>
                    <div class="scroll-reveal p-8" style="transition-delay: 300ms;">
                        <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        <h3 class="text-xl font-bold text-primary mb-2">信頼できる公式情報</h3><p class="text-gray-600">厚生労働省の最新ガイドラインに素早くアクセス。</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="blog" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">専門記事</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">臨床と研究の最前線から、価値ある知見を</p></div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal"><div class="relative h-56 w-full"><img src="画像(3).jpg" alt="オンライン診療" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">最新医療技術</span><h3 class="text-xl font-bold text-primary my-2">オンライン診療の未来：遠隔医療技術の最新動向</h3><p class="text-sm text-secondary mb-4">執筆者: 高橋 優 医師 (デジタルヘルス専門)</p></div><a href="#blog" class="font-bold text-accent hover:underline self-start">続きを読む &rarr;</a></div></div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-56 w-full"><img src="画像(4).jpg" alt="キャリアパス" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">キャリア</span><h3 class="text-xl font-bold text-primary my-2">医師のキャリアパス：専門医以外の多様な選択肢</h3><p class="text-sm text-secondary mb-4">執筆者: 鈴木 誠 医師 (経営コンサルタント)</p></div><a href="#blog" class="font-bold text-accent hover:underline self-start">続きを読む &rarr;</a></div></div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-56 w-full"><img src="画像(5).jpg" alt="AI診断" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">AIと医療</span><h3 class="text-xl font-bold text-primary my-2">AI診断支援ツールの現状と倫理的課題</h3><p class="text-sm text-secondary mb-4">執筆者: 伊藤 美咲 医師 (医療情報学専門)</p></div><a href="#blog" class="font-bold text-accent hover:underline self-start">続きを読む &rarr;</a></div></div>
                </div>
            </div>
        </section>

        <section id="jobs" class="py-24 bg-background">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">求人情報</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">先生の専門性を最大限に活かす、次なるステージへ</p></div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(12).jpg" alt="外科医募集" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">外科医募集（都内総合病院）</h3><p class="text-secondary mb-4 text-sm">最先端の手術設備と充実した研修制度が魅力です。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">東京都23区</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,500万円〜</span></div><a href="#jobs" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">募集要項を見る</a></div>
                    <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(13).jpg" alt="内科クリニック院長" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">内科クリニック院長候補</h3><p class="text-secondary mb-4 text-sm">地域医療に貢献。将来的な開業支援も可能です。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">静岡県静岡市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,800万円〜</span></div><a href="#jobs" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">募集要項を見る</a></div>
                    <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(14).jpg" alt="産業医" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">産業医（大手企業専属）</h3><p class="text-secondary mb-4 text-sm">ワークライフバランスを重視した働き方が可能です。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">大阪府大阪市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,200万円〜</span></div><a href="#jobs" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">募集要項を見る</a></div>
                </div>
            </div>
        </section>

        <section id="transfer" class="py-24 bg-white"><!-- ... (transfer content) ... --></section>
        <section id="company" class="py-24 bg-background"><!-- ... (company content) ... --></section>
        <section id="mhlw" class="py-24 bg-white"><!-- ... (mhlw content) ... --></section>
        <section id="privacy" class="py-24 bg-background"><!-- ... (privacy content) ... --></section>
        <section id="terms" class="py-24 bg-white"><!-- ... (terms content) ... --></section>
    </main>
    
    <footer class="bg-primary text-white">
        <div class="container mx-auto px-6 pt-16 pb-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <a href="#home" class="flex items-center space-x-3 mb-4">
                        <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        <span class="text-2xl font-bold text-white font-serif">MedReach</span>
                    </a>
                    <p class="text-gray-300 max-w-md mt-2">医師一人ひとりのキャリアと知見を最大化し、日本の医療の未来に貢献するためのプラットフォームです。</p>
                </div>
                <div>
                    <h5 class="font-bold uppercase text-gray-200 mb-4">サイトマップ</h5>
                    <ul class="space-y-3">
                        <li><a href="#blog" class="text-gray-300 hover:text-white transition">専門記事</a></li>
                        <li><a href="#jobs" class="text-gray-300 hover:text-white transition">求人情報</a></li>
                        <li><a href="#transfer" class="text-gray-300 hover:text-white transition">事業承継</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-bold uppercase text-gray-200 mb-4">企業情報</h5>
                    <ul class="space-y-3">
                         <li><a href="#company" class="text-gray-300 hover:text-white transition">運営会社について</a></li>
                         <li><a href="#privacy" class="text-gray-300 hover:text-white transition">個人情報保護方針</a></li>
                         <li><a href="#terms" class="text-gray-300 hover:text-white transition">利用規約</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2025 MedReach by CreaMedical Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
    document.addEventListener('DOMContentLoaded', () => {
        const header = document.getElementById('header');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('main > section');

        // ヘッダーのスクロールエフェクト
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // スクロールに応じたアクティブリンクの更新
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });

        sections.forEach(section => sectionObserver.observe(section));

        // スクロールリビールアニメーション
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal').forEach(el => scrollObserver.observe(el));
    });
    </script>
</body>
</html>
