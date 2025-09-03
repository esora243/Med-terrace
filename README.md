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
        .prose p { margin-bottom: 1rem; }
        .prose ul { list-style-position: inside; }
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

        <section id="transfer" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">事業承継</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">理想の医療を叶える、新たな開業の選択肢</p></div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal"><div class="relative h-48 w-full"><img src="画像(15).jpg" alt="内科クリニック" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">内科クリニック（東京都世田谷区）</h3><p class="text-secondary mb-4 text-sm">駅徒歩5分の好立地。安定した患者数を維持。</p><p class="text-lg font-bold text-primary">譲渡価格: 5,000万円</p><a href="#transfer" class="block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300">譲渡条件を確認する</a></div></div>
                    <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-48 w-full"><img src="画像(16).jpg" alt="眼科クリニック" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">眼科クリニック（大阪府吹田市）</h3><p class="text-secondary mb-4 text-sm">最新設備が整備。駅直結でアクセス良好。</p><p class="text-lg font-bold text-primary">譲渡価格: 7,500万円</p><a href="#transfer" class="block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300">譲渡条件を確認する</a></div></div>
                    <div class="bg-white rounded-xl shadow-card overflow-hidden scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-48 w-full"><img src="画像(17).jpg" alt="皮膚科" class="w-full h-full object-cover"/></div><div class="p-6 border-t-4 border-accent"><h3 class="text-xl font-bold text-primary mb-2">皮膚科・美容皮膚科（名古屋市栄）</h3><p class="text-secondary mb-4 text-sm">美容医療ニーズが高い商業地域に位置します。</p><p class="text-lg font-bold text-primary">譲渡価格: 9,000万円</p><a href="#transfer" class="block mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2.5 px-4 rounded-lg transition duration-300">譲渡条件を確認する</a></div></div>
                </div>
            </div>
        </section>
        
        <section id="company" class="py-24 bg-background">
            <div class="container mx-auto px-6"><div class="bg-white rounded-xl shadow-card overflow-hidden md:flex items-center scroll-reveal">
                <div class="md:w-1/2"><div class="relative h-80 md:h-[500px] w-full"><img src="画像(25).jpg" alt="オフィス外観" class="w-full h-full object-cover"/></div></div>
                <div class="p-8 md:p-16 md:w-1/2"><h3 class="text-3xl font-bold text-primary mb-6">クレアメディカル株式会社</h3><p class="text-secondary mb-8 leading-relaxed">医療従事者の専門性とキャリア形成をサポートするため、医療情報の提供、転職・開業支援、経営コンサルティングを展開しています。変化の激しい医療業界において、常に最先端の情報と最適なソリューションを提供し、先生方の「次のステップ」を力強く支援いたします。</p><ul class="space-y-3 text-secondary"><li><strong class="font-semibold text-primary">代表取締役:</strong> 伏見 勇紀</li><li><strong class="font-semibold text-primary">所在地:</strong> 東京都港区芝大門２丁目３−１８</li><li><strong class="font-semibold text-primary">連絡先:</strong> creamed@yh.med</li></ul></div>
            </div></div>
        </section>
        
        <section id="mhlw" class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16"><h2 class="text-4xl font-bold text-primary scroll-reveal">厚生労働省 公式情報</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">医師が知るべき制度・ガイドライン一覧</p></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <a href="#" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">医師資格・免許・研修</h3><p class="text-sm text-gray-600 mt-2">免許申請、専門医研修プログラムなど</p></a>
                    <a href="#" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 150ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-2 2-4 2-6 0Z"></path><path d="m2 16 3-8 3 8c-2 2-4 2-6 0Z"></path><path d="M7 16h10"></path><path d="M12 4v12"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">医療法規・倫理・安全</h3><p class="text-sm text-gray-600 mt-2">最新の法令、ガイドライン、医療安全情報</p></a>
                    <a href="#" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 300ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2c.5 0 1 .5 1 1v2"/><path d="M14 2c-.5 0-1 .5-1 1v2"/><path d="M15 13v-2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2"/><path d="M12 9v6"/><path d="M16 15v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2"/><path d="M11 22c.5 0 1-.5 1-1v-2"/><path d="M13 22c-.5 0-1-.5-1-1v-2"/><path d="M22 12h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2"/><path d="M20 16c0 1.1.9 2 2 2h2"/><path d="M2 12h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2"/><path d="M4 8c0-1.1-.9-2-2-2H0"/></svg></div><h3 class="text-lg font-bold text-secondary mt-2">感染症対策・公衆衛生</h3><p class="text-sm text-gray-600 mt-2">パンデミック対策、地域医療との連携</p></a>
                    <a href="#" class="block bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 scroll-reveal" style="transition-delay: 450ms;"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg></div><h3 class="text-lg font-bold text-secondary mt-2">関連リンク集</h3><p class="text-sm text-gray-600 mt-2">各省庁・関係機関への便利なリンク</p></a>
                </div>
            </div>
        </section>

        <section id="privacy" class="py-24 bg-background">
            <div class="container mx-auto px-6 max-w-4xl"><div class="bg-white p-10 rounded-lg shadow-card space-y-8 scroll-reveal">
                <h2 class="text-4xl font-bold text-center mb-8">個人情報保護方針</h2>
                <div><h3 class="text-2xl font-bold mb-2">1. 基本方針</h3><p>クレアメディカル株式会社（以下、「当社」）は、個人情報の重要性を認識し、個人情報を保護することが社会的責務であると考え、個人情報に関する法令を遵守し、当社で取扱う個人情報の取得、利用、管理を適正に行います。</p></div>
                <div><h3 class="text-2xl font-bold mb-2">2. 適用範囲</h3><p>本プライバシーポリシーは、当社が行う各種サービスにおいて、お客様の個人情報もしくはそれに準ずる情報を取り扱う際に、当社が遵守する方針を示したものです。</p></div>
                <div><h3 class="text-2xl font-bold mb-2">3. 個人情報の取得と利用目的</h3><p>当社は、適法かつ公正な手段によって個人情報を取得し、以下の目的の範囲内で利用します。<br>・キャリア支援、求人情報の提供のため<br>・事業承継に関するコンサルティングのため<br>・当社サービスに関する重要なお知らせやお問い合わせへの対応のため</p></div>
                <div><h3 class="text-2xl font-bold mb-2">4. 個人情報の第三者提供について</h3><p>当社は、法令に定める場合を除き、個人情報を、事前にご本人の同意を得ることなく、第三者に提供しません。</p></div>
            </div></div>
        </section>

        <section id="terms" class="py-24 bg-white">
            <div class="container mx-auto px-6 max-w-4xl"><div class="bg-white p-10 rounded-lg shadow-card space-y-8 scroll-reveal">
                <h2 class="text-4xl font-bold text-center mb-8">利用規約</h2>
                <div><h3 class="text-2xl font-bold mb-2">第1条（適用）</h3><p>本規約は、クレアメディカル株式会社（以下、「当社」）が提供するウェブサイト「MedReach」（以下、「本サービス」）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」）には、本規約に従って本サービスをご利用いただきます。</p></div>
                <div><h3 class="text-2xl font-bold mb-2">第2条（禁止事項）</h3><p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。<br>1. 法令または公序良俗に違反する行為<br>2. 犯罪行為に関連する行為<br>3. 本サービスの内容等、本サービスに含まれる著作権、商標権ほか知的財産権を侵害する行為<br>4. 当社のサービスの運営を妨害するおそれのある行為</p></div>
                <div><h3 class="text-2xl font-bold mb-2">第3条（免責事項）</h3><p>当社は、本サービスに掲載されている情報の正確性について万全を期しておりますが、その内容を保証するものではありません。本サービスの利用によってユーザーに生じたあらゆる損害について、当社は一切の責任を負いません。</p></div>
            </div></div>
        </section>
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
        const sections = document.querySelectorAll('main > section[id]');

        // ヘッダーのスクロールエフェクト
        const handleHeaderScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        };
        window.addEventListener('scroll', handleHeaderScroll);
        handleHeaderScroll();

        // スクロールに応じたアクティブリンクの更新
        const sectionObserver = new IntersectionObserver((entries) => {
            let currentActive = '';
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    currentActive = entry.target.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                // hrefの#以降の文字列を取得して比較
                const linkHref = link.getAttribute('href').substring(1);
                link.classList.toggle('active', linkHref === currentActive);
            });

        }, { 
            rootMargin: "-20% 0px -50% 0px", // 画面の中央付近で判定
            threshold: 0.3 
        });

        sections.forEach(section => {
             if(section.id) sectionObserver.observe(section);
        });

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

