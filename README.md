<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedReach | 先生のキャリアと知見を、次のステージへ</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --color-primary: #102A43; /* より深く、知的なネイビー */
            --color-secondary: #334E68;
            --color-accent: #007A7A; /* 信頼感のあるティールグリーン */
            --color-background: #F0F4F8; /* 落ち着いたオフホワイト */
            --font-serif: 'Noto Serif JP', serif;
            --font-sans: 'Inter', 'Noto Sans JP', sans-serif;
        }
        body {
            font-family: var(--font-sans);
            background-color: var(--color-background);
            color: #486581; /* やや青みがかったグレーで目に優しく */
        }
        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .hover\:bg-primary-dark:hover { background-color: #0B1D30; }
        .text-secondary { color: var(--color-secondary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
        .border-accent { border-color: var(--color-accent); }
        .bg-accent { background-color: var(--color-accent); }
        .hover\:bg-accent-dark:hover { background-color: #005A5A; }
        .font-serif { font-family: var(--font-serif); }
        .shadow-card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
        .hover\:shadow-card-hover:hover { box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); }

        .content-section { display: none; animation: fadeIn 0.6s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1); }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body class="antialiased">

    <header id="header" class="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-6"><div class="flex items-center justify-between h-20">
            <div class="flex items-center space-x-3 cursor-pointer" data-tab-target="home">
                <svg class="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                <span class="text-2xl font-bold text-primary font-serif">MedReach</span>
            </div>
            <nav id="nav-menu" class="hidden md:flex items-center relative space-x-2">
                <button data-tab="blog" class="nav-link">専門記事</button>
                <button data-tab="jobs" class="nav-link">求人</button>
                <button data-tab="transfer" class="nav-link">事業承継</button>
                <button data-tab="company" class="nav-link">企業情報</button>
                <button data-tab="mhlw" class="nav-link">公式情報</button>
                <div id="nav-underline" class="absolute bottom-4 h-0.5 bg-primary transition-all duration-300 ease-in-out"></div>
            </nav>
        </div></div>
    </header>

    <main>
        <section id="home" class="content-section">
            <div class="relative min-h-[550px] flex items-center text-white">
                <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary/60 z-10"></div>
                <img src="images/画像(1).jpg" alt="背景" class="absolute inset-0 w-full h-full object-cover opacity-30">
                <div class="container mx-auto px-6 relative z-20">
                    <div class="max-w-3xl scroll-reveal">
                        <h1 class="font-serif text-5xl md:text-6xl font-bold mb-4 leading-tight">先生のキャリアと知見を、<br>次のステージへ。</h1>
                        <p class="text-lg text-gray-200">MedReachは、多忙を極める医師一人ひとりに寄り添い、キャリア形成と学術的探究を加速させるための信頼できる情報と機会を提供します。</p>
                    </div>
                </div>
            </div>
            <div class="bg-background py-24">
                <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-reveal" data-tab-target="blog">
                        <h3 class="font-serif text-2xl font-bold text-primary mb-3">最新の専門記事を読む</h3><p class="text-secondary">臨床現場の知見から最新の医療政策まで。第一線の専門医による解説記事をお届けします。</p>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-reveal" data-tab-target="jobs" style="transition-delay: 150ms;">
                        <h3 class="font-serif text-2xl font-bold text-primary mb-3">質の高い求人を探す</h3><p class="text-secondary">先生の専門性と価値観に合致する、非公開案件を含む厳選された求人のみをご提案します。</p>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 cursor-pointer scroll-reveal" data-tab-target="transfer" style="transition-delay: 300ms;">
                        <h3 class="font-serif text-2xl font-bold text-primary mb-3">事業承継を検討する</h3><p class="text-secondary">理想の医療を次世代へ。スムーズで安心なクリニックの事業承継を専門家が支援します。</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="blog" class="content-section">
            <div class="py-20 bg-gray-50 text-center"><h2 class="font-serif text-5xl font-bold text-primary scroll-reveal">専門記事</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">臨床と研究の最前線から、価値ある知見を</p></div>
            <div class="container mx-auto px-6 py-24"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal"><div class="relative h-56 w-full"><img src="images/画像(3).jpg" alt="オンライン診療" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">最新医療技術</span><h3 class="text-xl font-bold text-primary my-2">オンライン診療の未来：遠隔医療技術の最新動向</h3><p class="text-sm text-secondary mb-4">執筆者: 高橋 優 医師 (デジタルヘルス専門)</p></div><a href="#" class="font-bold text-accent hover:underline self-start">記事を読む &rarr;</a></div></div>
                <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-56 w-full"><img src="images/画像(4).jpg" alt="キャリアパス" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">キャリア</span><h3 class="text-xl font-bold text-primary my-2">医師のキャリアパス：専門医以外の多様な選択肢</h3><p class="text-sm text-secondary mb-4">執筆者: 鈴木 誠 医師 (経営コンサルタント)</p></div><a href="#" class="font-bold text-accent hover:underline self-start">記事を読む &rarr;</a></div></div>
                <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-56 w-full"><img src="images/画像(5).jpg" alt="AI診断" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">AIと医療</span><h3 class="text-xl font-bold text-primary my-2">AI診断支援ツールの現状と倫理的課題</h3><p class="text-sm text-secondary mb-4">執筆者: 伊藤 美咲 医師 (医療情報学専門)</p></div><a href="#" class="font-bold text-accent hover:underline self-start">記事を読む &rarr;</a></div></div>
            </div></div>
        </section>

        <div class="bg-background py-16">
            <div class="container mx-auto px-6 text-center">
                <h4 class="text-secondary font-semibold scroll-reveal">MedReachは、国内トップクラスの医療機関に信頼されています。</h4>
                <div class="flex justify-center items-center space-x-12 mt-6 grayscale opacity-60 scroll-reveal" style="transition-delay: 150ms;">
                    <span class="font-serif text-xl">聖中央総合病院</span>
                    <span class="font-serif text-xl">J&Mメディカルセンター</span>
                    <span class="font-serif text-xl">未来大学付属病院</span>
                </div>
            </div>
        </div>
    </main>

    <footer class="bg-secondary text-white">
        <div class="container mx-auto px-6 pt-16 pb-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <h4 class="font-serif text-xl font-bold mb-2">MedReach</h4>
                    <p class="text-gray-300 max-w-md">医師一人ひとりのキャリアと知見を最大化し、日本の医療の未来に貢献するためのプラットフォームです。</p>
                </div>
                <div>
                    <h5 class="font-bold uppercase text-gray-200 mb-3">サイトマップ</h5>
                    <ul class="space-y-2">
                        <li><a href="#" data-tab-target="blog" class="text-gray-300 hover:text-white transition">専門記事</a></li>
                        <li><a href="#" data-tab-target="jobs" class="text-gray-300 hover:text-white transition">求人</a></li>
                        <li><a href="#" data-tab-target="transfer" class="text-gray-300 hover:text-white transition">事業承継</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="font-bold uppercase text-gray-200 mb-3">企業情報</h5>
                    <ul class="space-y-2">
                         <li><a href="#" data-tab-target="company" class="text-gray-300 hover:text-white transition">クレアメディカルについて</a></li>
                         <li><a href="#" class="text-gray-300 hover:text-white transition">プライバシーポリシー</a></li>
                         <li><a href="#" class="text-gray-300 hover:text-white transition">利用規約</a></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
                <p>© 2025 MedReach by CreaMedical Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const navMenu = document.getElementById('nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');
            const navUnderline = document.getElementById('nav-underline');
            const contentSections = document.querySelectorAll('.content-section');
            const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
            const allTabTargets = document.querySelectorAll('[data-tab-target]');
            
            let activeTabId = 'home';

            function switchTab(tabId, instant = false) {
                activeTabId = tabId;
                const targetSection = document.getElementById(tabId);
                const activeLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);

                // 初回ロード時にhomeセクションが表示されない場合があるため修正
                if (tabId === 'home' && targetSection.style.display !== 'block') {
                     scrollRevealElements.forEach(el => {
                        el.classList.remove('is-visible');
                     });
                }
                
                contentSections.forEach(section => { section.style.display = 'none'; });
                if (targetSection) targetSection.style.display = 'block';

                navLinks.forEach(link => link.classList.remove('font-bold', 'text-primary'));
                if (activeLink) activeLink.classList.add('font-bold', 'text-primary');

                if (activeLink) {
                    navUnderline.style.transition = instant ? 'none' : 'all 0.3s ease-in-out';
                    navUnderline.style.width = `${activeLink.offsetWidth}px`;
                    navUnderline.style.left = `${activeLink.offsetLeft}px`;
                } else {
                     navUnderline.style.width = '0px';
                }
                
                // 表示されたセクションのアニメーションをリセット・再生
                if (targetSection) {
                    const sectionReveals = targetSection.querySelectorAll('.scroll-reveal');
                    sectionReveals.forEach(el => {
                        el.classList.remove('is-visible');
                        observer.observe(el);
                    });
                }
            }

            allTabTargets.forEach(target => {
                target.addEventListener('click', (event) => {
                    event.preventDefault();
                    const tabId = target.getAttribute('data-tab-target');
                    if (tabId !== activeTabId) {
                        switchTab(tabId);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            });
            
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    const tabId = event.target.getAttribute('data-tab');
                    if (tabId !== activeTabId) {
                        switchTab(tabId);
                    }
                });
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            scrollRevealElements.forEach(el => { observer.observe(el); });

            switchTab('home', true);
            window.addEventListener('resize', () => switchTab(activeTabId, true));
        });
    </script>
</body>
</html>
