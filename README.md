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
            --color-background: #F0F4F8; --font-serif: 'Noto Serif JP', serif; --font-sans: 'Inter', 'Noto Sans JP', sans-serif;
        }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-sans); background-color: var(--color-background); color: #486581; line-height: 1.7; }
        h1, h2, h3, h4, h5 { font-family: var(--font-serif); color: var(--color-primary); }
        .text-primary { color: var(--color-primary); }
        .bg-primary { background-color: var(--color-primary); }
        .hover\:bg-primary-dark:hover { background-color: #0B1D30; }
        .text-secondary { color: var(--color-secondary); }
        .text-accent { color: var(--color-accent); }
        .border-accent { border-color: var(--color-accent); }
        .shadow-card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); }
        .hover\:shadow-card-hover:hover { box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08); }

        .content-section { display: none; animation: fadeIn 0.6s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

        .scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1); }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }

        .nav-link { padding: 0.5rem 1rem; color: #64748B; font-weight: 500; transition: all 0.3s ease-in-out; border-radius: 9999px; }
        .nav-link.active { color: var(--color-primary); font-weight: 700; background-color: #E2E8F0; }
        .nav-link:not(.active):hover { color: var(--color-primary); background-color: #F8FAFC; }

        /* ヒーロースライドショー */
        .hero-slide { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; transition: opacity 1.5s ease-in-out; }
        .hero-slide.active { opacity: 1; }
        .hero-slide-text { transition: opacity 1s ease-in-out, transform 1s ease-in-out; }
        .hero-slide:not(.active) .hero-slide-text { opacity: 0; transform: translateY(20px); }

        /* モーダル */
        .modal-overlay { position: fixed; inset: 0; background-color: rgba(0,0,0,0.6); z-index: 100; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: opacity 0.3s, visibility 0.3s; }
        .modal-container { background-color: white; padding: 2rem; border-radius: 0.5rem; max-width: 500px; width: 90%; transform: scale(0.95); transition: transform 0.3s; }
        .modal-overlay.active { opacity: 1; visibility: visible; }
        .modal-overlay.active .modal-container { transform: scale(1); }
    </style>
</head>
<body class="antialiased">

    <header id="header" class="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center space-x-3 cursor-pointer" data-tab-target="home">
                    <svg class="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span class="text-2xl font-bold text-primary font-serif">MedReach</span>
                </div>
                <nav id="nav-menu" class="hidden md:flex items-center relative space-x-2 p-1 bg-gray-100/70 rounded-full">
                    <button data-tab="blog" class="nav-link">専門記事</button>
                    <button data-tab="jobs" class="nav-link">求人情報</button>
                    <button data-tab="transfer" class="nav-link">事業承継</button>
                    <button data-tab="company" class="nav-link">企業情報</button>
                    <button data-tab="mhlw" class="nav-link">公式情報</button>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section id="home" class="content-section">
            <div id="hero-slideshow" class="relative min-h-[550px] text-white overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary/60 z-10"></div>
                <div class="hero-slide active">
                    <img src="画像(1).jpg" alt="医療従事者のイメージ" class="absolute inset-0 w-full h-full object-cover opacity-30">
                    <div class="relative z-20 h-full flex items-center">
                        <div class="container mx-auto px-6">
                            <div class="max-w-3xl hero-slide-text">
                                <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">先生のキャリアと知見を、<br>次のステージへ。</h1>
                                <p class="text-lg text-gray-200">MedReachは、多忙な日々を送る先生方へ。キャリア形成と学術的探究を加速させるための信頼できる情報と機会を提供します。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-slide">
                    <img src="画像(2).jpg" alt="研究のイメージ" class="absolute inset-0 w-full h-full object-cover opacity-30">
                     <div class="relative z-20 h-full flex items-center">
                        <div class="container mx-auto px-6">
                            <div class="max-w-3xl hero-slide-text">
                                <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">一つの記事が、<br>明日の臨床を変える。</h1>
                                <p class="text-lg text-gray-200">臨床現場の知見から最新の医療政策まで。第一線の専門医による、深く、価値ある解説記事をお届けします。</p>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="hero-slide">
                    <img src="画像(25).jpg" alt="カンファレンスのイメージ" class="absolute inset-0 w-full h-full object-cover opacity-30">
                     <div class="relative z-20 h-full flex items-center">
                        <div class="container mx-auto px-6">
                            <div class="max-w-3xl hero-slide-text">
                                <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">理想の医療を、<br>理想の環境で。</h1>
                                <p class="text-lg text-gray-200">先生の専門性と価値観に合致する、非公開案件を含む厳選された求人のみをご提案します。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-background py-24">
                 <div class="container mx-auto px-6 text-center">
                    <h2 class="text-4xl font-bold text-primary mb-12 scroll-reveal">MedReachが提供する価値</h2>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="scroll-reveal p-8">
                            <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                            <h3 class="text-xl font-bold text-primary mb-2">最新の医療コラム</h3><p class="text-gray-600">現場の専門家による、示唆に富んだ記事を毎月更新。</p>
                        </div>
                        <div class="scroll-reveal p-8" style="transition-delay: 150ms;">
                            <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                            <h3 class="text-xl font-bold text-primary mb-2">厳選された求人情報</h3><p class="text-gray-600">あなたの専門性を最大限に活かす、次のステージへ。</p>
                        </div>
                        <div class="scroll-reveal p-8" style="transition-delay: 300ms;">
                            <svg class="w-12 h-12 mx-auto text-accent mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            <h3 class="text-xl font-bold text-primary mb-2">信頼できる公式情報</h3><p class="text-gray-600">厚生労働省の最新ガイドラインに素早くアクセス。</p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        
        </main>
    
    <div id="modal-overlay" class="modal-overlay">
        <div id="modal-container" class="modal-container">
            <div class="flex justify-between items-center mb-4">
                <h3 id="modal-title" class="text-xl font-bold">お知らせ</h3>
                <button id="modal-close" class="text-gray-400 hover:text-gray-800">&times;</button>
            </div>
            <p id="modal-body">詳細コンテンツは現在準備中です。公開まで今しばらくお待ちください。</p>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // ... (前回のスクリプト)

            // --- 新機能：ヒーロースライドショー ---
            const heroSlideshow = document.getElementById('hero-slideshow');
            if (heroSlideshow) {
                const slides = heroSlideshow.querySelectorAll('.hero-slide');
                let currentSlide = 0;
                setInterval(() => {
                    slides[currentSlide].classList.remove('active');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.add('active');
                }, 6000); // 6秒ごとに切り替え
            }

            // --- 改善：リンク切れの代わりにモーダル表示 ---
            const modalOverlay = document.getElementById('modal-overlay');
            const modalContainer = document.getElementById('modal-container');
            const modalClose = document.getElementById('modal-close');
            const demoLinks = document.querySelectorAll('.demo-link');

            function showModal() {
                modalOverlay.classList.add('active');
            }
            function hideModal() {
                modalOverlay.classList.remove('active');
            }

            demoLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    showModal();
                });
            });
            modalClose.addEventListener('click', hideModal);
            modalOverlay.addEventListener('click', (event) => {
                if (event.target === modalOverlay) {
                    hideModal();
                }
            });
        });
    </script>
</body>
</html>
