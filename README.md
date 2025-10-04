<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medterrace | 医師のキャリアと知見を、次のステージへ</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&family=Noto+Serif+JP:wght@600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --color-primary: #102A43; --color-secondary: #334E68; --color-accent: #007A7A;
            --color-background: #F8F9FA; --font-serif: 'Noto Serif JP', serif; --font-sans: 'Inter', 'Noto Sans JP', sans-serif;
        }
        html { scroll-behavior: smooth; scroll-padding-top: 5rem; /* ヘッダーの高さ分、スクロール位置を調整 */ }
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
            text-decoration: none; transition: color 0.3s ease-in-out;
        }
        .nav-link::after {
            content: ''; position: absolute; left: 0; bottom: -2px; width: 100%; height: 2px;
            background-color: var(--color-accent); transform: scaleX(0); transition: transform 0.3s ease-in-out;
            transform-origin: center;
        }
        .nav-link.active::after, .nav-link:hover::after { transform: scaleX(1); }
        .nav-link.active { color: var(--color-primary); }

        .header-scrolled {
            background-color: rgba(255, 255, 255, 0.95) !important;
            backdrop-filter: blur(8px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .prose p { margin-bottom: 1.5rem; }
        .prose ul { list-style-position: inside; margin-left: 1rem; margin-bottom: 1.5rem; }
        .prose h3 { margin-top: 2.5rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #E2E8F0; }
        .prose ol { list-style-position: inside; margin-left: 1.5rem; margin-bottom: 1.5rem; }

        /* AI Chatbot Styles */
        #chat-fab { position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; }
        #chat-widget { position: fixed; bottom: 6rem; right: 2rem; width: 380px; max-width: 90vw; height: 550px; max-height: 80vh; z-index: 1000; transition: all 0.3s ease-in-out; transform: translateY(20px) scale(0.95); opacity: 0; pointer-events: none; }
        #chat-widget.is-open { transform: translateY(0) scale(1); opacity: 1; pointer-events: auto; }
        .chat-message { max-width: 80%; }
        .chat-bubble-user { background-color: var(--color-primary); color: white; }
        .chat-bubble-ai { background-color: #E2E8F0; color: var(--color-secondary); }
        
        /* Transfer Section Details */
        .transfer-details {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
            padding-top: 0;
            padding-bottom: 0;
        }
        .transfer-details.is-open {
            max-height: 500px; /* Adjust as needed */
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        /* Company Section Tabs */
        .company-tab {
            padding: 0.75rem 1.5rem;
            font-weight: 600;
            cursor: pointer;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
            color: var(--color-secondary);
        }
        .company-tab.active-tab {
            color: var(--color-primary);
            border-bottom-color: var(--color-accent);
        }
    </style>
</head>
<body class="antialiased">

    <header id="header" class="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div class="container mx-auto px-6">
            <div class="flex items-center justify-between h-20">
                <a href="#home" class="flex items-center space-x-3">
                    <svg class="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    <span class="text-2xl font-bold text-primary font-serif">Medterrace</span>
                </a>
                <nav id="nav-menu" class="hidden md:flex items-center">
                    <a href="#blog" class="nav-link">Featured Articles</a>
                    <a href="#jobs" class="nav-link">求人情報</a>
                    <a href="#transfer" class="nav-link">事業承継</a>
                    <a href="#company" class="nav-link">企業情報</a>
                    <a href="#links" class="nav-link">関連リンク</a>
                </nav>
            </div>
        </div>
    </header>

    <div id="main-content-wrapper">
        <main>
            <section id="home" class="relative min-h-screen flex items-center text-white">
                <div class="absolute inset-0 bg-primary z-10 opacity-60"></div>
                <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0">
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-doctor-looking-at-a-sample-in-a-microscope-2380-large.mp4" type="video/mp4">
                </video>
                <div class="container mx-auto px-6 relative z-20">
                    <div class="max-w-3xl scroll-reveal">
                        <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight" style="text-shadow: 1px 1px 5px rgba(0,0,0,0.3);">先生のキャリアと知見を、<br>次のステージへ。</h1>
                        <p class="text-xl text-gray-200" style="text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">メドテラスは、多忙な日々を送る先生方のキャリア形成と学術的探究を加速させるための、信頼できる情報と機会を提供します。</p>
                    </div>
                </div>
            </section>

            <section id="blog" class="py-24 bg-white">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">Featured Articles</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">臨床と研究の最前線から、価値ある知見を</p></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <!-- Articles will be injected here by JS -->
                    </div>
                    <div class="text-center mt-16 scroll-reveal">
                        <button id="load-more-articles" class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300">もっと見る</button>
                    </div>
                </div>
            </section>

            <section id="jobs" class="py-24 bg-background">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">求人情報</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">先生の専門性を最大限に活かす、次なるステージへ</p></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <!-- Initial 3 Job Postings -->
                        <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(12).jpg" alt="外科医募集" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">外科医募集（都内総合病院）</h3><p class="text-secondary mb-4 text-sm">最先端の手術設備と充実した研修制度が魅力です。若手からベテランまで幅広く歓迎します。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">東京都23区</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,500万円〜</span></div><a href="mailto:cremed@xs671474.xsrv.jp?subject=【求人問合せ】外科医募集（都内総合病院）&body=本求人について、より詳細な情報の提供を希望します。" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">この求人に問い合わせる</a></div>
                        <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(13).jpg" alt="内科クリニック院長" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">内科クリニック院長候補</h3><p class="text-secondary mb-4 text-sm">地域医療に貢献。将来的な開業支援制度も整っており、経営ノウハウも学べます。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">静岡県静岡市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,800万円〜</span></div><a href="mailto:cremed@xs671474.xsrv.jp?subject=【求人問合せ】内科クリニック院長候補&body=本求人について、より詳細な情報の提供を希望します。" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">この求人に問い合わせる</a></div>
                        <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(14).jpg" alt="産業医" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">産業医（大手IT企業専属）</h3><p class="text-secondary mb-4 text-sm">ワークライフバランスを重視した働き方が可能です。メンタルヘルス領域に強みのある方歓迎。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">大阪府大阪市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,200万円〜</span></div><a href="mailto:cremed@xs671474.xsrv.jp?subject=【求人問合せ】産業医（大手IT企業専属）&body=本求人について、より詳細な情報の提供を希望します。" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">この求人に問い合わせる</a></div>

                        <!-- Extra Job Postings (Initially hidden) -->
                        <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal hidden extra-job-item"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(12).jpg" alt="小児科医募集" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">小児科医募集（横浜市）</h3><p class="text-secondary mb-4 text-sm">駅前のクリニックモール内。週4日勤務も相談可能です。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">神奈川県横浜市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,400万円〜</span></div><a href="mailto:cremed@xs671474.xsrv.jp?subject=【求人問合せ】小児科医募集（横浜市）&body=本求人について、より詳細な情報の提供を希望します。" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">この求人に問い合わせる</a></div>
                        <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal hidden extra-job-item"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(13).jpg" alt="研究医" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">研究医（大手製薬会社）</h3><p class="text-secondary mb-4 text-sm">オンコロジー領域のトランスレーショナルリサーチ担当。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">東京都中央区</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,300万円〜</span></div><a href="mailto:cremed@xs671474.xsrv.jp?subject=【求人問合せ】研究医（大手製薬会社）&body=本求人について、より詳細な情報の提供を希望します。" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">この求人に問い合わせる</a></div>
                        <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal hidden extra-job-item"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(14).jpg" alt="在宅医" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">在宅医（福岡市）</h3><p class="text-secondary mb-4 text-sm">多職種連携を重視した地域密着型の在宅医療クリニックです。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">福岡県福岡市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,600万円〜</span></div><a href="mailto:cremed@xs671474.xsrv.jp?subject=【求人問合せ】在宅医（福岡市）&body=本求人について、より詳細な情報の提供を希望します。" class="mt-2 block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300">この求人に問い合わせる</a></div>
                    </div>
                    <div class="text-center mt-16 scroll-reveal">
                        <button id="load-more-jobs" class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300">もっと見る</button>
                    </div>
                </div>
            </section>

            <section id="transfer" class="py-24 bg-white">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">事業承継</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">理想の医療を叶える、新たな開業の選択肢</p></div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <!-- Initial 3 Transfer items -->
                        <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal transfer-card"><div class="relative h-48 w-full"><img src="画像(15).jpg" alt="内科クリニック" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">内科クリニック（東京都世田谷区）</h3><p class="text-secondary mb-4 text-sm">駅徒歩5分の好立地。地域に根ざし、安定した患者数を維持しています。</p><p class="text-lg font-bold text-primary">譲渡価格: 5,000万円</p><button class="transfer-toggle block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">譲渡条件を確認する</button><div class="transfer-details"><ul class="text-sm text-secondary space-y-2 mt-4 text-left border-t pt-4"><li><strong>院長年収目安:</strong> 2,500万円</li><li><strong>スタッフ:</strong> 常勤看護師2名、事務2名</li><li><strong>連携病院:</strong> 地域中核病院と密連携</li></ul><a href="mailto:cremed@xs671474.xsrv.jp?subject=【事業承継問合せ】内科クリニック(世田谷区)&body=本案件について、より詳細な情報の提供を希望します。" class="block mt-4 w-full bg-accent hover:opacity-90 text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">メールで問い合わせる</a></div></div></div>
                        <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal transfer-card" style="transition-delay: 150ms;"><div class="relative h-48 w-full"><img src="画像(16).jpg" alt="眼科クリニック" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">眼科クリニック（大阪府吹田市）</h3><p class="text-secondary mb-4 text-sm">最新の白内障手術設備が整備済み。駅直結の医療モール内でアクセス良好。</p><p class="text-lg font-bold text-primary">譲渡価格: 7,500万円</p><button class="transfer-toggle block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">譲渡条件を確認する</button><div class="transfer-details"><ul class="text-sm text-secondary space-y-2 mt-4 text-left border-t pt-4"><li><strong>手術件数:</strong> 白内障 約40件/月</li><li><strong>設備:</strong> 最新フェムトセカンドレーザー完備</li><li><strong>特徴:</strong> 自由診療（ICL等）の実績多数</li></ul><a href="mailto:cremed@xs671474.xsrv.jp?subject=【事業承継問合せ】眼科クリニック(吹田市)&body=本案件について、より詳細な情報の提供を希望します。" class="block mt-4 w-full bg-accent hover:opacity-90 text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">メールで問い合わせる</a></div></div></div>
                        <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal transfer-card" style="transition-delay: 300ms;"><div class="relative h-48 w-full"><img src="画像(17).jpg" alt="皮膚科" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">皮膚科・美容皮膚科（名古屋市栄）</h3><p class="text-secondary mb-4 text-sm">美容医療ニーズが高い中心商業地域に位置。自由診療の売上が高く高収益。</p><p class="text-lg font-bold text-primary">譲渡価格: 9,000万円</p><button class="transfer-toggle block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">譲渡条件を確認する</button><div class="transfer-details"><ul class="text-sm text-secondary space-y-2 mt-4 text-left border-t pt-4"><li><strong>自由診療比率:</strong> 約60%</li><li><strong>設備:</strong> ピコレーザー、HIFU等多数</li><li><strong>顧客層:</strong> 20-40代女性が中心</li></ul><a href="mailto:cremed@xs671474.xsrv.jp?subject=【事業承継問合せ】皮膚科(名古屋市栄)&body=本案件について、より詳細な情報の提供を希望します。" class="block mt-4 w-full bg-accent hover:opacity-90 text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">メールで問い合わせる</a></div></div></div>
                        
                        <!-- Extra Transfer items (initially hidden) -->
                        <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal transfer-card hidden extra-transfer-item"><div class="relative h-48 w-full"><img src="画像(15).jpg" alt="整形外科" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">整形外科クリニック（神戸市）</h3><p class="text-secondary mb-4 text-sm">リハビリテーション施設が充実。スポーツ整形にも強み。</p><p class="text-lg font-bold text-primary">譲渡価格: 1.2億円</p><button class="transfer-toggle block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">譲渡条件を確認する</button><div class="transfer-details"><ul class="text-sm text-secondary space-y-2 mt-4 text-left border-t pt-4"><li><strong>一日来院数:</strong> 約150人</li><li><strong>設備:</strong> MRI、骨密度測定装置完備</li><li><strong>特徴:</strong> 運動療法士が多数在籍</li></ul><a href="mailto:cremed@xs671474.xsrv.jp?subject=【事業承継問合せ】整形外科(神戸市)&body=本案件について、より詳細な情報の提供を希望します。" class="block mt-4 w-full bg-accent hover:opacity-90 text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">メールで問い合わせる</a></div></div></div>
                        <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal transfer-card hidden extra-transfer-item"><div class="relative h-48 w-full"><img src="画像(16).jpg" alt="耳鼻咽喉科" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">耳鼻咽喉科（さいたま市）</h3><p class="text-secondary mb-4 text-sm">住宅街に位置し、小児から高齢者まで幅広い患者層。</p><p class="text-lg font-bold text-primary">譲渡価格: 6,000万円</p><button class="transfer-toggle block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">譲渡条件を確認する</button><div class="transfer-details"><ul class="text-sm text-secondary space-y-2 mt-4 text-left border-t pt-4"><li><strong>院長年収目安:</strong> 2,800万円</li><li><strong>特徴:</strong> 補聴器外来も実施</li><li><strong>引継期間:</strong> 6ヶ月間の丁寧な引継ぎ可</li></ul><a href="mailto:cremed@xs671474.xsrv.jp?subject=【事業承継問合せ】耳鼻咽喉科(さいたま市)&body=本案件について、より詳細な情報の提供を希望します。" class="block mt-4 w-full bg-accent hover:opacity-90 text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">メールで問い合わせる</a></div></div></div>
                        <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal transfer-card hidden extra-transfer-item"><div class="relative h-48 w-full"><img src="画像(17).jpg" alt="心療内科" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">心療内科（京都市）</h3><p class="text-secondary mb-4 text-sm">オフィス街にあり、働く世代のメンタルヘルスをサポート。</p><p class="text-lg font-bold text-primary">譲渡価格: 4,500万円</p><button class="transfer-toggle block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">譲渡条件を確認する</button><div class="transfer-details"><ul class="text-sm text-secondary space-y-2 mt-4 text-left border-t pt-4"><li><strong>診療形態:</strong> 完全予約制</li><li><strong>特徴:</strong> カウンセリング、復職支援に強み</li><li><strong>引継条件:</strong> 現院長の週1日勤務継続希望</li></ul><a href="mailto:cremed@xs671474.xsrv.jp?subject=【事業承継問合せ】心療内科(京都市)&body=本案件について、より詳細な情報の提供を希望します。" class="block mt-4 w-full bg-accent hover:opacity-90 text-white font-bold py-2.5 px-4 rounded-lg transition duration-300 text-center">メールで問い合わせる</a></div></div></div>
                    </div>
                    <div class="text-center mt-16 scroll-reveal">
                        <button id="load-more-transfers" class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition duration-300">もっと見る</button>
                    </div>
                </div>
            </section>
            
            <section id="company" class="py-24 bg-background">
                <div class="container mx-auto px-6">
                    <div class="bg-white rounded-xl shadow-card overflow-hidden md:flex items-stretch scroll-reveal">
                        <!-- Left Pane with Tabs for Photo/Map -->
                        <div class="md:w-1/2 flex flex-col">
                            <div class="flex-shrink-0 border-b bg-gray-50 rounded-tl-xl">
                                <button class="company-tab active-tab" data-content="company-photo">外観写真</button>
                                <button class="company-tab" data-content="company-map">アクセスマップ</button>
                            </div>
                            <div class="flex-grow relative">
                                <div id="company-photo" class="company-tab-content absolute inset-0">
                                    <img src="画像(25).jpg" alt="オフィス外観" class="w-full h-full object-cover"/>
                                </div>
                                <div id="company-map" class="company-tab-content hidden absolute inset-0">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828032331557!2d139.7566613156296!3d35.6811673801944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf90da7fe15%3A0x2578228b31338a83!2z44OR44K544K_44Kz44OT44Or44OA!5e0!3m2!1sja!2sjp!4v1678886400000!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <!-- Right Pane with Company Info -->
                        <div class="p-8 md:p-16 md:w-1/2">
                            <h3 class="text-3xl font-bold text-primary mb-6">クレアメディカル株式会社</h3>
                            <p class="text-secondary mb-8 leading-relaxed">
                                私たちクレアメディカルは、「医療の未来を、医師と共に創造する」を理念に、先生一人ひとりのキャリアと学術探究を支援するプラットフォーム「メドテラス」を運営しております。
                                変化の激しい医療業界において、常に最先端の情報と最適なソリューションを提供し、先生方が専門性を最大限に発揮できる環境作りをサポートすることが私たちの使命です。
                            </p>
                            <ul class="space-y-4 text-secondary">
                                <li><strong class="font-semibold text-primary block">会社名</strong>クレアメディカル株式会社 (CreaMedical Inc.)</li>
                                <li><strong class="font-semibold text-primary block">代表者</strong>代表取締役社長　伏見勇紀</li>
                                <li><strong class="font-semibold text-primary block">所在地</strong>〒100-0005 東京都千代田区丸の内一丁目1番1号 パレスビルディング</li>
                                <li><strong class="font-semibold text-primary block">連絡先</strong>cremed@xs671474.xsrv.jp</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="links" class="py-24 bg-white">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">公的機関・関連リンク</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">医療キャリアと研究に役立つ国内外の主要機関・企業へのリンク集です。</p></div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Row 1: Public Institutions -->
                        <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/ishikakunin/" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">厚生労働省 (医師関連)</h3><p class="text-sm text-gray-600 mt-2">免許申請、専門医研修プログラムなど</p></a>
                        <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 150ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">世界保健機関 (WHO)</h3><p class="text-sm text-gray-600 mt-2">国際的な保健課題、統計、ガイドライン</p></a>
                        <a href="https://www.pmda.go.jp/" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 300ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg></div><h3 class="text-lg font-bold text-secondary mt-2">医薬品医療機器総合機構</h3><p class="text-sm text-gray-600 mt-2">医薬品・医療機器の承認審査、安全対策</p></a>
                        <a href="https://www.amed.go.jp/" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 450ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 13.5 12 21l-7.5-7.5"></path><path d="M19.5 7.5 12 15l-7.5-7.5"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">日本医療研究開発機構</h3><p class="text-sm text-gray-600 mt-2">医療分野の研究開発、ファンディング情報</p></a>
                    </div>
                     <div class="text-center my-16"><h3 class="text-2xl font-bold text-primary scroll-reveal">ヘルスケア・コンサルティング</h3></div>
                     <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <!-- Row 2: Consulting Firms -->
                        <a href="https://www2.deloitte.com/jp/ja/industries/life-sciences-health-care.html" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">デロイト トーマツ</h3><p class="text-sm text-gray-600 mt-2">ライフサイエンス＆ヘルスケア</p></a>
                        <a href="https://www.pwc.com/jp/ja/industries/health-care-pharma.html" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 150ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg></div><h3 class="text-lg font-bold text-secondary mt-2">PwC</h3><p class="text-sm text-gray-600 mt-2">医薬・ヘルスケア</p></a>
                        <a href="https://www.ey.com/ja_jp/health" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 300ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">EY Japan</h3><p class="text-sm text-gray-600 mt-2">ヘルスサイエンス & ウェルネス</p></a>
                        <a href="https://kpmg.com/jp/ja/home/industries/healthcare.html" target="_blank" rel="noopener noreferrer" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 450ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div><h3 class="text-lg font-bold text-secondary mt-2">KPMG Japan</h3><p class="text-sm text-gray-600 mt-2">ヘルスケア</p></a>
                    </div>
                </div>
            </section>

            <section id="privacy" class="py-24 bg-background">
                <div class="container mx-auto px-6 max-w-4xl"><div class="bg-white p-10 rounded-lg shadow-card space-y-8 scroll-reveal prose">
                    <h2 class="text-4xl font-bold text-center mb-8">個人情報保護方針</h2>
                    <p>クレアメディカル株式会社（以下、「当社」）は、個人情報の重要性を深く認識し、その保護を社会的責務と考え、関連法令を遵守するとともに、当社が取り扱う個人情報の取得、利用、管理を以下の通り適正に行います。</p>
                    <h3>1. 基本方針</h3><p>当社は、個人情報保護法および関連するその他の法令・規範を遵守し、個人情報を適正に取り扱います。また、個人情報保護に関する社内規程を策定し、役員および全従業員に周知徹底させ、継続的な改善に努めます。</p>
                    <h3>2. 個人情報の取得と利用目的</h3><p>当社は、適法かつ公正な手段によって個人情報を取得し、以下の目的の範囲内で適切に利用します。<br>・キャリア支援、求人情報の提供、およびそれらに関連する連絡のため<br>・事業承継に関するコンサルティング業務の遂行のため<br>・当社が提供するサービスに関する重要なお知らせや、お問い合わせへの対応のため<br>・サービスの改善や新たなサービスの開発に役立てるため</p>
                    <h3>3. 個人情報の第三者提供について</h3><p>当社は、法令に定める場合を除き、事前にご本人の同意を得ることなく、個人情報を第三者に提供しません。ただし、求人応募や事業承継のマッチング等、ご本人の同意に基づき、必要な範囲で提携企業や医療機関に情報を提供することがあります。</p>
                    <h3>4. 個人情報の安全管理措置</h3><p>当社は、取り扱う個人情報の漏洩、滅失またはき損の防止、その他の個人情報の安全管理のために、必要かつ適切な措置を講じます。</p>
                </div></div>
            </section>

            <section id="terms" class="py-24 bg-white">
                <div class="container mx-auto px-6 max-w-4xl"><div class="bg-white p-10 rounded-lg shadow-card space-y-8 scroll-reveal prose">
                    <h2 class="text-4xl font-bold text-center mb-8">利用規約</h2>
                    <h3>第1条（適用）</h3><p>本規約は、クレアメディカル株式会社（以下、「当社」）が提供するウェブサイト「メドテラス」（以下、「本サービス」）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」）には、本規約に従って本サービスをご利用いただきます。</p>
                    <h3>第2条（禁止事項）</h3><p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。<br>1. 法令または公序良俗に違反する行為<br>2. 犯罪行為に関連する行為<br>3. 本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為<br>4. 当社のサービスの運営を妨害するおそれのある行為</p>
                    <h3>第3条（免責事項）</h3><p>当社は、本サービスに掲載されている情報の正確性について万全を期しておりますが、その内容の完全性、正確性、有用性、安全性を保証するものではありません。本サービスの利用によってユーザーに生じたあらゆる損害について、当社は一切の責任を負いません。</p>
                </div></div>
            </section>
        </main>
    </div>

    <!-- Article Detail Sections (Initially Hidden) -->
    <div id="article-section-wrapper" class="hidden">
        <!-- Article details will be injected here by JS -->
    </div>

    <footer class="bg-primary text-white">
        <div class="container mx-auto px-6 pt-16 pb-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="md:col-span-2">
                    <a href="#home" class="flex items-center space-x-3 mb-4">
                        <svg class="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                        <span class="text-2xl font-bold text-white font-serif">Medterrace</span>
                    </a>
                    <p class="text-gray-300 max-w-md mt-2">医師一人ひとりのキャリアと知見を最大化し、日本の医療の未来に貢献するためのプラットフォームです。</p>
                </div>
                <div>
                    <h5 class="font-bold uppercase text-gray-200 mb-4">サイトマップ</h5>
                    <ul class="space-y-3">
                        <li><a href="#blog" class="text-gray-300 hover:text-white transition">Featured Articles</a></li>
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
                <p>&copy; 2025 Medterrace by CreaMedical Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- AI Chatbot -->
    <div id="chat-fab">
        <button id="chat-toggle-button" class="bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-transform duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            <svg id="chat-icon-open" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <svg id="chat-icon-close" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
    </div>
        <div id="chat-widget" class="bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border">
        <div class="p-4 bg-primary text-white flex items-center">
            <svg class="h-7 w-7 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <h3 class="text-lg font-semibold font-serif">AIキャリア相談</h3>
        </div>
        <div id="chat-log" class="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            <!-- Messages will be appended here -->
        </div>
        <div class="p-4 border-t bg-white">
            <div class="flex items-center space-x-2">
                <input type="text" id="chat-input" placeholder="メッセージを入力..." class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent">
                <button id="chat-send" class="bg-accent text-white rounded-lg p-2 hover:bg-opacity-90">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
            </div>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            fetch('article.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(articlesData => {
                    const articles = articlesData;
                    const INITIAL_ARTICLES_SHOWN = 6;

                    // --- Render Articles ---
                    const renderArticles = () => {
                        const blogGrid = document.querySelector('#blog .grid');
                        const articleWrapper = document.getElementById('article-section-wrapper');
                        let articleCardsHTML = '';
                        let articleDetailsHTML = '';
                        
                        articles.forEach((article, index) => {
                            const delay = (index % 3) * 150;
                            const isHidden = index >= INITIAL_ARTICLES_SHOWN ? 'hidden' : '';
                            const articleDate = new Date(article.createdAt.$date).toLocaleDateString('ja-JP');

                            // Article Card
                            articleCardsHTML += `
                                <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal article-item ${isHidden}" style="transition-delay: ${delay}ms;">
                                    <div class="relative h-56 w-full">
                                        <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                                    </div>
                                    <div class="p-6 flex flex-col">
                                        <div class="flex-grow">
                                            <span class="text-xs font-bold uppercase text-accent">${article.category}</span>
                                            <h3 class="text-xl font-bold text-primary my-2">${article.title}</h3>
                                            <p class="text-sm text-secondary mb-4">公開日: ${articleDate}</p>
                                        </div>
                                        <a href="#${article.id}" class="font-bold text-accent hover:underline self-start article-link">続きを読む &rarr;</a>
                                    </div>
                                </div>
                            `;
                            
                            // Article Detail Page
                            articleDetailsHTML += `
                                <section id="${article.id}" class="article-content py-24 bg-white">
                                    <div class="container mx-auto px-6 max-w-4xl prose">
                                        <button class="back-to-main mb-8 font-bold text-accent hover:underline">&larr; 記事一覧へ戻る</button>
                                        <div class="my-4">${article.ad_html || ''}</div>
                                        <span class="text-sm font-bold uppercase text-accent">${article.category}</span>
                                        <h1 class="text-4xl font-bold text-primary mt-2 mb-4">${article.title}</h1>
                                        <p class="text-base text-secondary">公開日: ${articleDate}</p>
                                        <img src="${article.image}" alt="${article.title}" class="w-full rounded-lg shadow-md my-8"/>
                                        ${article.content}
                                        <h3>参考文献</h3>
                                        <p>本記事の作成にあたり、以下の論文・報告を参考にしました。</p>
                                        <ul>
                                            <li><a href="${article.ref_link}" target="_blank" rel="noopener noreferrer">${article.ref_title}</a></li>
                                        </ul>
                                    </div>
                                </section>
                            `;
                        });
                        
                        blogGrid.innerHTML = articleCardsHTML;
                        articleWrapper.innerHTML = articleDetailsHTML;
                        setupArticleLinks(); // Re-bind links after rendering
                    };

                    const setupArticleLinks = () => {
                        document.querySelectorAll('.article-link').forEach(link => {
                            link.addEventListener('click', (e) => {
                                e.preventDefault();
                                const articleId = link.getAttribute('href').substring(1);
                                showArticle(articleId);
                            });
                        });
                        document.querySelectorAll('.back-to-main').forEach(button => {
                            button.addEventListener('click', (e) => {
                                e.preventDefault();
                                showMainContent();
                            });
                        });
                    };

                    renderArticles();
                    
                    const header = document.getElementById('header');
                    const navLinks = document.querySelectorAll('.nav-link');
                    const sections = document.querySelectorAll('#main-content-wrapper > main > section[id]');

                    // --- Header Scroll Effect ---
                    const handleHeaderScroll = () => {
                        if (window.scrollY > 50) {
                            header.classList.add('header-scrolled');
                        } else {
                            header.classList.remove('header-scrolled');
                        }
                    };
                    window.addEventListener('scroll', handleHeaderScroll);
                    handleHeaderScroll();

                    // --- Nav Link Active State on Scroll ---
                    const sectionObserver = new IntersectionObserver((entries) => {
                        let currentActive = '';
                        entries.forEach(entry => {
                            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                                currentActive = entry.target.getAttribute('id');
                            }
                        });
                        const blogSection = document.getElementById('blog');
                        const rect = blogSection.getBoundingClientRect();
                        if (rect.top <= window.innerHeight * 0.2 && rect.bottom >= window.innerHeight * 0.5) {
                            currentActive = 'blog';
                        }

                        navLinks.forEach(link => {
                            const linkHref = link.getAttribute('href').substring(1);
                            link.classList.toggle('active', linkHref === currentActive);
                        });
                    }, { rootMargin: "-20% 0px -50% 0px", threshold: 0.3 });
                    sections.forEach(section => {
                        if (section.id) sectionObserver.observe(section);
                    });

                    // --- Scroll Reveal Animation ---
                    const scrollObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('is-visible');
                                scrollObserver.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.1 });
                    document.querySelectorAll('.scroll-reveal').forEach(el => scrollObserver.observe(el));

                    // --- Article Page Navigation ---
                    const mainContentWrapper = document.getElementById('main-content-wrapper');
                    const articleSectionWrapper = document.getElementById('article-section-wrapper');
                    
                    const showArticle = (articleId) => {
                        mainContentWrapper.classList.add('hidden');
                        articleSectionWrapper.classList.remove('hidden');
                        document.querySelectorAll('.article-content').forEach(article => {
                            article.classList.toggle('hidden', article.id !== articleId);
                        });
                        window.scrollTo(0, 0);
                    };

                    const showMainContent = () => {
                        articleSectionWrapper.classList.add('hidden');
                        mainContentWrapper.classList.remove('hidden');
                    };
                    
                    // --- Business Transfer Accordion ---
                    document.querySelectorAll('.transfer-card').forEach(card => {
                        const toggleButton = card.querySelector('.transfer-toggle');
                        const details = card.querySelector('.transfer-details');
                        if (toggleButton && details) {
                            toggleButton.addEventListener('click', (e) => {
                                e.preventDefault();
                                const isOpen = details.classList.contains('is-open');
                                
                                document.querySelectorAll('.transfer-details.is-open').forEach(openDetail => {
                                    if (openDetail !== details) {
                                        openDetail.classList.remove('is-open');
                                        const otherButton = openDetail.closest('.transfer-card').querySelector('.transfer-toggle');
                                        if(otherButton) otherButton.textContent = '譲渡条件を確認する';
                                    }
                                });

                                details.classList.toggle('is-open');
                                toggleButton.textContent = isOpen ? '譲渡条件を確認する' : '閉じる';
                            });
                        }
                    });

                    // --- "Load More" Functionality ---
                    const setupLoadMore = (buttonId, itemClass) => {
                        const loadMoreButton = document.getElementById(buttonId);
                        if (loadMoreButton) {
                            loadMoreButton.addEventListener('click', () => {
                                document.querySelectorAll(`.${itemClass}.hidden`).forEach(item => {
                                    item.classList.remove('hidden');
                                });
                                loadMoreButton.style.display = 'none';
                            });
                        }
                    };

                    setupLoadMore('load-more-articles', 'article-item');
                    setupLoadMore('load-more-jobs', 'extra-job-item');
                    setupLoadMore('load-more-transfers', 'extra-transfer-item');

                    // --- Company Section Tab Functionality ---
                    const companyTabs = document.querySelectorAll('.company-tab');
                    const companyTabContents = document.querySelectorAll('.company-tab-content');

                    companyTabs.forEach(tab => {
                        tab.addEventListener('click', () => {
                            companyTabs.forEach(t => t.classList.remove('active-tab'));
                            tab.classList.add('active-tab');

                            const contentId = tab.dataset.content;
                            companyTabContents.forEach(content => {
                                content.classList.add('hidden');
                            });
                            
                            const targetContent = document.getElementById(contentId);
                            if (targetContent) {
                                targetContent.classList.remove('hidden');
                            }
                        });
                    });

                    // --- AI Chatbot Logic ---
                    const chatWidget = document.getElementById('chat-widget');
                    const chatToggleButton = document.getElementById('chat-toggle-button');
                    const chatIconOpen = document.getElementById('chat-icon-open');
                    const chatIconClose = document.getElementById('chat-icon-close');
                    const chatLog = document.getElementById('chat-log');
                    const chatInput = document.getElementById('chat-input');
                    const chatSendButton = document.getElementById('chat-send');

                    const toggleChat = () => {
                        const isOpen = chatWidget.classList.toggle('is-open');
                        chatIconOpen.classList.toggle('hidden', isOpen);
                        chatIconClose.classList.toggle('hidden', !isOpen);
                        if(isOpen) {
                            if(chatLog.children.length === 0) {
                               setTimeout(() => addMessage('ai', 'こんにちは。メドテラス AIキャリア相談です。ご興味のある内容についてキーワードを入力してください。（例：「求人」「事業承継」「キャリア」）'), 500);
                            }
                            chatInput.focus();
                        }
                    };
                    chatToggleButton.addEventListener('click', toggleChat);

                    const addMessage = (sender, text) => {
                        const messageDiv = document.createElement('div');
                        messageDiv.classList.add('chat-message', 'w-full', 'flex');
                        
                        const bubbleDiv = document.createElement('div');
                        bubbleDiv.classList.add('rounded-lg', 'px-4', 'py-2');
                        
                        if (sender === 'user') {
                            messageDiv.classList.add('justify-end');
                            bubbleDiv.classList.add('chat-bubble-user');
                            bubbleDiv.textContent = text;
                        } else {
                            messageDiv.classList.add('justify-start');
                            bubbleDiv.classList.add('chat-bubble-ai');
                            bubbleDiv.innerHTML = text;
                        }

                        messageDiv.appendChild(bubbleDiv);
                        chatLog.appendChild(messageDiv);
                        chatLog.scrollTop = chatLog.scrollHeight;
                    };

                    const getAiResponse = (userText) => {
                        const lowerCaseText = userText.toLowerCase();
                        if (lowerCaseText.includes('求人') || lowerCaseText.includes('転職')) {
                            return '求人情報ですね。当サイトでは、全国の病院やクリニック、企業からの多様な求人を掲載しております。ご希望の診療科や勤務地、年収など、より詳しい条件をお聞かせいただけますか？ <a href="#jobs" class="text-accent underline">求人情報セクション</a>もご覧ください。';
                        }
                        if (lowerCaseText.includes('事業承継') || lowerCaseText.includes('開業')) {
                            return '事業承継にご興味がおありなのですね。メドテラスでは、後継者を探されているクリニック様と、開業を目指す先生とのマッチングをサポートしております。ご希望のエリアや規模について教えていただけますでしょうか。詳しくは<a href="#transfer" class="text-accent underline">事業承継セクション</a>をご覧ください。';
                        }
                        if (lowerCaseText.includes('キャリア') || lowerCaseText.includes('パス')) {
                            return '医師のキャリアパスは多様化しています。臨床以外にも、製薬会社、コンサルティング、行政など、様々な選択肢がございます。当サイトの<a href="#article-career" class="article-link text-accent underline">特集記事</a>もご参考に、先生の将来像について一緒に考えさせていただければと存じます。';
                        }
                        if (lowerCaseText.includes('記事') || lowerCaseText.includes('ai') || lowerCaseText.includes('オンライン')) {
                            return '専門記事ですね。<a href="#blog" class="text-accent underline">Featured Articlesセクション</a>では、医療の最新トレンドに関する質の高い情報を提供しております。「オンライン診療」「AI診断」「キャリアパス」など、様々なテーマの記事がございますので、ぜひご覧ください。';
                        }
                        if (lowerCaseText.includes('ありがとう')) {
                            return 'どういたしまして。その他、何かご不明な点がございましたら、お気軽にお尋ねください。';
                        }
                        return 'ご質問ありがとうございます。申し訳ありません、そのご質問にはまだお答えできません。より詳しい情報をご提供いただくか、別のキーワードでお試しください。';
                    };
                    
                    const handleSendMessage = () => {
                        const userText = chatInput.value.trim();
                        if (userText === '') return;

                        addMessage('user', userText);
                        chatInput.value = '';
                        
                        setTimeout(() => {
                            const aiText = getAiResponse(userText);
                            addMessage('ai', aiText);

                            chatLog.querySelectorAll('.article-link').forEach(link => {
                                link.addEventListener('click', (e) => {
                                    e.preventDefault();
                                    const articleId = link.getAttribute('href').substring(1);
                                    showArticle(articleId);
                                    toggleChat();
                                });
                            });
                        }, 1000);
                    };
                    
                    chatSendButton.addEventListener('click', handleSendMessage);
                    chatInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                            handleSendMessage();
                        }
                    });
                })
                .catch(error => {
                    console.error('記事データの読み込みに失敗しました:', error);
                    document.querySelector('#blog .grid').innerHTML = `<p class="text-red-500 text-center col-span-3">記事の読み込みに失敗しました。ページを再読み込みしてください。</p>`;
                });
        });
    </script>
</body>
</html>

