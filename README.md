<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedReach | 医師・医療従事者のための総合情報サイト</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700&display=swap" rel="stylesheet">

    <style>
        :root {
            --color-primary: #1a346e;
            --color-secondary: #2c5282;
            --color-accent: #0d9488;
            --color-background: #fcfcfd;
            --font-serif: 'Noto Serif JP', serif;
            --font-sans: 'Inter', 'Noto Sans JP', sans-serif;
        }

        body {
            font-family: var(--font-sans);
            background-color: var(--color-background);
            color: #334155;
        }

        /* カスタムTailwindクラス */
        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .hover\:bg-primary-dark:hover { background-color: #142a5c; }
        .border-primary { border-color: var(--color-primary); }
        .text-secondary { color: var(--color-secondary); }
        .bg-secondary { background-color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
        .border-accent { border-color: var(--color-accent); }
        .font-serif { font-family: var(--font-serif); }
        .shadow-card { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05); }
        .hover\:shadow-card-hover:hover { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.1); }

        /* コンテンツセクションの基本スタイル */
        .content-section {
            display: none;
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* スクロール連動アニメーション */
        .scroll-reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
        .scroll-reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body class="antialiased">

    <header id="header" class="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center space-x-2">
                    <svg class="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span class="text-2xl font-bold text-primary font-serif">MedReach</span>
                </div>
                <nav id="nav-menu" class="hidden md:flex items-center relative">
                    <button data-tab="home" class="nav-link">ホーム</button>
                    <button data-tab="blog" class="nav-link">ドクターズブログ</button>
                    <button data-tab="jobs" class="nav-link">求人情報</button>
                    <button data-tab="transfer" class="nav-link">クリニック譲渡</button>
                    <button data-tab="company" class="nav-link">企業情報</button>
                    <button data-tab="mhlw" class="nav-link">厚生労働省</button>
                    <div id="nav-underline" class="absolute bottom-0 h-1 bg-primary transition-all duration-300 ease-in-out"></div>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section id="home" class="content-section">
            <div class="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white overflow-hidden">
                <div class="absolute inset-0 bg-black/50 z-10"></div>
                <img src="画像(1).jpg" alt="背景画像" class="absolute inset-0 w-full h-full object-cover">
                <div class="relative z-20 p-6 scroll-reveal">
                    <h1 class="font-serif text-5xl md:text-6xl font-bold mb-4">医師の知見が、未来を拓く。</h1>
                    <p class="max-w-3xl mx-auto text-lg text-gray-200">専門知識の深化から、キャリアの新たな可能性まで。MedReachは、多忙な医師に信頼性の高い情報を届けます。</p>
                </div>
            </div>
            <div class="container mx-auto px-6 py-16 text-center">
                 <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div class="scroll-reveal p-8">
                        <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                        <h3 class="text-xl font-bold text-primary mb-2">最新の医療コラム</h3>
                        <p class="text-gray-600">現場の専門家による、示唆に富んだ記事を毎月更新。</p>
                     </div>
                     <div class="scroll-reveal p-8">
                        <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                        <h3 class="text-xl font-bold text-primary mb-2">厳選された求人情報</h3>
                        <p class="text-gray-600">あなたの専門性を最大限に活かす、次のステージへ。</p>
                     </div>
                     <div class="scroll-reveal p-8">
                        <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        <h3 class="text-xl font-bold text-primary mb-2">信頼できる公式情報</h3>
                        <p class="text-gray-600">厚生労働省の最新ガイドラインに素早くアクセス。</p>
                     </div>
                 </div>
            </div>
        </section>

        <section id="blog" class="content-section">
            <div class="py-20 bg-gray-50 text-center"><h2 class="font-serif text-5xl font-bold text-primary scroll-reveal">ドクターズブログ</h2><p class="text-lg text-gray-600 mt-2 scroll-reveal" style="transition-delay: 100ms;">現場の知見と、医療の未来への提言</p></div>
            <div class="container mx-auto px-6 py-24"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal"><div class="relative h-56 w-full"><img src="画像(3).jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6"><p class="text-sm text-accent font-semibold mb-2">最新医療技術</p><h3 class="text-xl font-bold text-primary mb-3">オンライン診療の未来：遠隔医療技術の最新動向</h3><p class="text-gray-600 text-sm mb-4">オンライン診療がもたらす医療の変革と、今後期待される新技術や法的課題について深く掘り下げて解説します。</p><a href="#" class="font-bold text-primary hover:text-accent transition">続きを読む &rarr;</a></div></div>
                <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-56 w-full"><img src="画像(4).jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6"><p class="text-sm text-accent font-semibold mb-2">キャリア</p><h3 class="text-xl font-bold text-primary mb-3">医師のキャリアパス：専門医以外の多様な選択肢</h3><p class="text-gray-600 text-sm mb-4">臨床医としてだけでなく、産業医、研究者、経営者など多様なキャリアを歩むための具体的なヒントと実例を提供します。</p><a href="#" class="font-bold text-primary hover:text-accent transition">続きを読む &rarr;</a></div></div>
                <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-56 w-full"><img src="画像(5).jpg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6"><p class="text-sm text-accent font-semibold mb-2">AIと医療</p><h3 class="text-xl font-bold text-primary mb-3">AI診断支援ツールの現状と倫理的課題</h3><p class="text-gray-600 text-sm mb-4">画像診断や問診支援におけるAIツールの活用事例と、その利用に伴う倫理的な問題点について専門家が議論します。</p><a href="#" class="font-bold text-primary hover:text-accent transition">続きを読む &rarr;</a></div></div>
            </div></div>
        </section>

        <section id="jobs" class="content-section">
            <div class="py-20 bg-secondary text-white text-center"><h2 class="font-serif text-5xl font-bold scroll-reveal">求人情報</h2><p class="text-lg text-gray-200 mt-2 scroll-reveal" style="transition-delay: 100ms;">あなたの専門性を活かす、次なるステージへ</p></div>
            <div class="container mx-auto px-6 py-24"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(12).jpg" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">外科医募集（都内総合病院）</h3><p class="text-gray-600 mb-4 text-sm">最先端の手術設備と充実した研修制度が魅力です。</p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">年収: 1,500万円〜</span><button class="mt-6 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(13).jpg" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">内科クリニック院長候補</h3><p class="text-gray-600 mb-4 text-sm">地域医療に貢献。将来的な開業支援も可能です。</p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">年収: 1,800万円〜</span><button class="mt-6 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(14).jpg" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">産業医（大手企業専属）</h3><p class="text-gray-600 mb-4 text-sm">ワークライフバランスを重視した働き方が可能です。</p><span class="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">年収: 1,200万円〜</span><button class="mt-6 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
            </div></div>
        </section>

        <section id="transfer" class="content-section">
            <div class="py-20 bg-gray-50 text-center"><h2 class="font-serif text-5xl font-bold text-primary scroll-reveal">クリニック譲渡</h2><p class="text-lg text-gray-600 mt-2 scroll-reveal" style="transition-delay: 100ms;">理想の医療を叶える、新たな開業の選択肢</p></div>
            </section>
        
        <section id="company" class="content-section">
            <div class="py-20 bg-gray-50 text-center"><h2 class="font-serif text-5xl font-bold text-primary scroll-reveal">企業情報</h2><p class="text-lg text-gray-600 mt-2 scroll-reveal" style="transition-delay: 100ms;">信頼と実績で、医療の未来をサポートします</p></div>
            </section>
        
        <section id="mhlw" class="content-section">
            <div class="py-20 bg-gray-50 text-center"><h2 class="font-serif text-5xl font-bold text-primary scroll-reveal">厚生労働省 公式情報</h2><p class="text-lg text-gray-600 mt-2 scroll-reveal" style="transition-delay: 100ms;">医師が知るべき制度・ガイドライン一覧</p></div>
            </section>
    </main>

    <footer class="bg-primary text-white">
        <div class="container mx-auto px-6 py-12 text-center">
            <p>© 2025 MedReach. All rights reserved.</p>
            <p class="text-sm text-gray-300 mt-1">医師の専門性とキャリアを力強くサポートするプラットフォーム</p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const navMenu = document.getElementById('nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');
            const navUnderline = document.getElementById('nav-underline');
            const contentSections = document.querySelectorAll('.content-section');
            const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

            // --- タブ切り替え機能 ---
            function switchTab(tabId, instant = false) {
                const targetSection = document.getElementById(tabId);
                const activeLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);

                if (!targetSection || !activeLink) return;

                // コンテンツの表示切替
                contentSections.forEach(section => {
                    section.style.display = 'none';
                });
                targetSection.style.display = 'block';

                // ナビゲーションリンクのアクティブ状態
                navLinks.forEach(link => link.classList.remove('font-bold', 'text-primary'));
                activeLink.classList.add('font-bold', 'text-primary');

                // 下線の移動
                const linkRect = activeLink.getBoundingClientRect();
                const menuRect = navMenu.getBoundingClientRect();
                
                if (instant) {
                    navUnderline.style.transition = 'none';
                } else {
                    navUnderline.style.transition = 'all 0.3s ease-in-out';
                }

                navUnderline.style.width = `${linkRect.width}px`;
                navUnderline.style.left = `${linkRect.left - menuRect.left}px`;
            }

            // ナビゲーションクリック時のイベント
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    const tabId = event.target.getAttribute('data-tab');
                    switchTab(tabId);
                });
            });

            // 初期表示
            switchTab('home', true);
            window.addEventListener('resize', () => switchTab(document.querySelector('.nav-link.font-bold').dataset.tab, true));

            // --- スクロール連動アニメーション機能 ---
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            scrollRevealElements.forEach(el => {
                observer.observe(el);
            });
        });
    </script>

</body>
</html>
