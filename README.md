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
        .detail-view-content { display: none; animation: fadeIn 0.6s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }

        .scroll-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1); }
        .scroll-reveal.is-visible { opacity: 1; transform: translateY(0); }

        .nav-link {
            padding: 0.5rem 1rem; color: #64748B; font-weight: 500;
            transition: all 0.3s ease-in-out; border-radius: 9999px;
        }
        .nav-link.active { color: var(--color-primary); font-weight: 700; background-color: #E2E8F0; }
        .nav-link:not(.active):hover { color: var(--color-primary); background-color: #F8FAFC; }

        .prose p { margin-bottom: 1rem; }
        .prose ul { list-style-position: inside; }
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
            <div class="relative min-h-[550px] flex items-center text-white">
                <div class="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-secondary/60 z-10"></div>
                <img src="画像(1).jpg" alt="医療従事者のイメージ" class="absolute inset-0 w-full h-full object-cover opacity-30">
                <div class="container mx-auto px-6 relative z-20">
                    <div class="max-w-3xl scroll-reveal">
                        <h1 class="text-5xl md:text-6xl font-bold mb-4 leading-tight">先生のキャリアと知見を、<br>次のステージへ。</h1>
                        <p class="text-lg text-gray-200">MedReachは、多忙な日々を送る先生方へ。キャリア形成と学術的探究を加速させるための信頼できる情報と機会を提供します。</p>
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
        
        <section id="blog" class="content-section">
            <div class="list-view">
                <div class="py-20 bg-gray-50 text-center"><h2 class="text-5xl font-bold text-primary scroll-reveal">専門記事</h2><p class="text-lg text-secondary mt-2 scroll-reveal" style="transition-delay: 100ms;">臨床と研究の最前線から、価値ある知見を</p></div>
                <div class="container mx-auto px-6 py-24"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal"><div class="relative h-56 w-full"><img src="画像(3).jpg" alt="オンライン診療" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">最新医療技術</span><h3 class="text-xl font-bold text-primary my-2">オンライン診療の未来：遠隔医療技術の最新動向</h3><p class="text-sm text-secondary mb-4">執筆者: 高橋 優 医師 (デジタルヘルス専門)</p></div><a href="#" class="font-bold text-accent hover:underline self-start view-detail-link" data-section="blog" data-id="1">記事を読む &rarr;</a></div></div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-56 w-full"><img src="画像(4).jpg" alt="キャリアパス" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">キャリア</span><h3 class="text-xl font-bold text-primary my-2">医師のキャリアパス：専門医以外の多様な選択肢</h3><p class="text-sm text-secondary mb-4">執筆者: 鈴木 誠 医師 (経営コンサルタント)</p></div><a href="#" class="font-bold text-accent hover:underline self-start view-detail-link" data-section="blog" data-id="2">記事を読む &rarr;</a></div></div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-56 w-full"><img src="画像(5).jpg" alt="AI診断" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">AIと医療</span><h3 class="text-xl font-bold text-primary my-2">AI診断支援ツールの現状と倫理的課題</h3><p class="text-sm text-secondary mb-4">執筆者: 伊藤 美咲 医師 (医療情報学専門)</p></div><a href="#" class="font-bold text-accent hover:underline self-start view-detail-link" data-section="blog" data-id="3">記事を読む &rarr;</a></div></div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal"><div class="relative h-56 w-full"><img src="画像(10).jpg" alt="クリニック経営" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">クリニック経営</span><h3 class="text-xl font-bold text-primary my-2">地域医療を支えるクリニック経営の次の一手</h3><p class="text-sm text-secondary mb-4">執筆者: 渡辺 健太 医師 (医療法人理事長)</p></div><a href="#" class="font-bold text-accent hover:underline self-start view-detail-link" data-section="blog" data-id="4">記事を読む &rarr;</a></div></div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-56 w-full"><img src="画像(11).jpg" alt="再生医療" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">再生医療</span><h3 class="text-xl font-bold text-primary my-2">再生医療の最前線：iPS細胞治療の臨床応用</h3><p class="text-sm text-secondary mb-4">執筆者: 佐藤 あかり 医師 (再生医療研究所)</p></div><a href="#" class="font-bold text-accent hover:underline self-start view-detail-link" data-section="blog" data-id="5">記事を読む &rarr;</a></div></div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-56 w-full"><img src="画像(20).jpg" alt="メンタルヘルス" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div><div class="p-6 flex flex-col"><div class="flex-grow"><span class="text-xs font-bold uppercase text-accent">ウェルビーイング</span><h3 class="text-xl font-bold text-primary my-2">医師のメンタルヘルス：バーンアウトをどう防ぐか</h3><p class="text-sm text-secondary mb-4">執筆者: 中村 直樹 医師 (精神科専門医)</p></div><a href="#" class="font-bold text-accent hover:underline self-start view-detail-link" data-section="blog" data-id="6">記事を読む &rarr;</a></div></div>
                </div></div>
            </div>
            <div class="detail-view-content" id="blog-detail-view"></div>
        </section>

        <section id="jobs" class="content-section">
             <div class="list-view">
                <div class="relative py-20 text-center text-white">
                    <div class="absolute inset-0 bg-secondary z-0"></div>
                    <div class="absolute inset-0 bg-cover bg-center opacity-10" style="background-image: url('画像(6).jpg');"></div>
                    <div class="relative z-10">
                        <h2 class="text-5xl font-bold scroll-reveal">求人情報</h2><p class="text-lg text-gray-200 mt-2 scroll-reveal" style="transition-delay: 100ms;">先生の専門性を最大限に活かす、次なるステージへ</p>
                    </div>
                </div>
                <div class="container mx-auto px-6 py-24"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(12).jpg" alt="外科医募集" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">外科医募集（都内総合病院）</h3><p class="text-secondary mb-4 text-sm">最先端の手術設備と充実した研修制度が魅力です。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">東京都23区</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,500万円〜</span></div><button class="mt-2 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300 view-detail-link" data-section="jobs" data-id="1">募集要項を見る</button></div>
                    <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 150ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(13).jpg" alt="内科クリニック院長" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">内科クリニック院長候補</h3><p class="text-secondary mb-4 text-sm">地域医療に貢献。将来的な開業支援も可能です。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">静岡県静岡市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,800万円〜</span></div><button class="mt-2 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300 view-detail-link" data-section="jobs" data-id="2">募集要項を見る</button></div>
                    <div class="bg-white rounded-lg shadow-card p-6 text-center scroll-reveal" style="transition-delay: 300ms;"><div class="relative h-40 w-full mb-6 rounded-lg overflow-hidden"><img src="画像(14).jpg" alt="産業医" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">産業医（大手企業専属）</h3><p class="text-secondary mb-4 text-sm">ワークライフバランスを重視した働き方が可能です。</p><div class="flex justify-center flex-wrap gap-2 text-sm mb-4"><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">大阪府大阪市</span><span class="bg-blue-100 text-blue-800 font-semibold px-2.5 py-0.5 rounded-full">年収1,200万円〜</span></div><button class="mt-2 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300 view-detail-link" data-section="jobs" data-id="3">募集要項を見る</button></div>
                </div></div>
             </div>
             <div class="detail-view-content" id="jobs-detail-view"></div>
        </section>

        <section id="transfer" class="content-section"></section>
        <section id="company" class="content-section"></section>
        <section id="mhlw" class="content-section"></section>
        <section id="privacy" class="content-section"></section>
        <section id="terms" class="content-section"></section>
    </main>
    
    <footer class="bg-primary text-white"></footer>

    <script>
    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.nav-link');
        const contentSections = document.querySelectorAll('.content-section');
        const allTabTargets = document.querySelectorAll('[data-tab-target]');
        let activeTabId = 'home';

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const detailData = {
            blog: {
                1: { title: 'オンライン診療の未来：遠隔医療技術の最新動向', image: '画像(3).jpg', author: '執筆者: 高橋 優 医師 (デジタルヘルス専門)', content: `<p>オンライン診療は、単に遠隔で診察を行うだけでなく、AIによる問診支援やウェアラブルデバイスとの連携により、予防医療の領域にもその可能性を広げています。</p><p class="mt-4">本稿では、最新の遠隔医療技術の動向を概観し、今後の普及に向けた法的・倫理的課題、そして日本の医療システムに与えるインパクトについて包括的に考察します。5G通信の普及が、高精細な映像を用いた遠隔手術支援などをどのように変えていくのか、具体的な事例を交えて解説します。</p>` },
                2: { title: '医師のキャリアパス：専門医以外の多様な選択肢', image: '画像(4).jpg', author: '執筆者: 鈴木 誠 医師 (経営コンサルタント)', content: `<p>医師のキャリアは臨床現場だけに留まりません。製薬企業、医療機器メーカー、コンサルティングファーム、そして起業など、その専門知識を活かせるフィールドは多岐にわたります。</p><p class="mt-4">本記事では、臨床以外のキャリアへ転身した医師の実例を複数紹介し、それぞれの道で求められるスキルセットや成功のポイントについて詳しく解説します。自身のキャリアを見つめ直すきっかけを提供します。</p>` },
                3: { title: 'AI診断支援ツールの現状と倫理的課題', image: '画像(5).jpg', author: '執筆者: 伊藤 美咲 医師 (医療情報学専門)', content: `<p>AIによる画像診断支援は、診断精度の向上と医師の負担軽減に大きく貢献することが期待されています。しかし、その導入には技術的な課題だけでなく、誤診時の責任の所在やデータのプライバシーといった倫理的な課題も伴います。</p><p class="mt-4">ここでは、国内外の最新AI診断支援ツールの導入事例を分析し、そのメリットとデメリットを明らかにするとともに、医療現場が向き合うべき倫理的課題について深く掘り下げます。</p>` },
                4: { title: '地域医療を支えるクリニック経営の次の一手', image: '画像(10).jpg', author: '執筆者: 渡辺 健太 医師 (医療法人理事長)', content: `<p>人口減少社会において、地域医療の中核を担うクリニックの経営はますます重要性を増しています。患者満足度の向上と経営の安定化を両立させるためには、どのような視点が必要なのでしょうか。</p><p class="mt-4">本記事では、デジタル技術を活用した業務効率化（DX）、スタッフのエンゲージメント向上策、そして地域連携を強化するための具体的なアクションプランについて、成功事例を基に解説します。</p>` },
                5: { title: '再生医療の最前線：iPS細胞治療の臨床応用', image: '画像(11).jpg', author: '執筆者: 佐藤 あかり 医師 (再生医療研究所)', content: `<p>iPS細胞技術の発見から十数年、再生医療は基礎研究の段階から臨床応用のフェーズへと着実に進んでいます。パーキンソン病や加齢黄斑変性など、これまで根本治療が難しかった疾患への新たな希望として期待されています。</p><p class="mt-4">現在の臨床研究の進捗状況、実用化に向けた課題、そして今後の展望について、再生医療の第一線で活躍する研究者が分かりやすく解説します。</p>` },
                6: { title: '医師のメンタルヘルス：バーンアウトをどう防ぐか', image: '画像(20).jpg', author: '執筆者: 中村 直樹 医師 (精神科専門医)', content: `<p>長時間労働や強いプレッシャーに晒される医師のバーンアウト（燃え尽き症候群）は、医療の質にも影響を及ぼす深刻な問題です。個人の努力だけでなく、組織全体での対策が不可欠です。</p><p class="mt-4">本稿では、バーンアウトの兆候を早期に発見するためのセルフチェック方法、ストレスコーピングの技術、そして医療機関が取り組むべき勤務環境の改善策やサポート体制について、具体的なアプローチを提案します。</p>` }
            },
            jobs: {
                1: { title: '外科医募集（都内総合病院）', image: '画像(12).jpg', content: `<h4 class="text-2xl font-bold mb-4">募集要項</h4><ul class="list-disc list-inside space-y-2"><li><strong>勤務地:</strong> 東京都23区内の最新設備を備えた総合病院</li><li><strong>業務内容:</strong> 一般外科、消化器外科領域の執刀、外来診療、病棟管理</li><li><strong>必須スキル:</strong> 外科専門医資格、腹腔鏡手術の経験</li><li><strong>給与:</strong> 経験・スキルに応じ年収1,500万円〜2,500万円</li><li><strong>待遇:</strong> 学会参加支援、住宅手当、退職金制度あり</li></ul>` },
                2: { title: '内科クリニック院長候補', image: '画像(13).jpg', content: `<h4 class="text-2xl font-bold mb-4">募集要項</h4><ul class="list-disc list-inside space-y-2"><li><strong>勤務地:</strong> 静岡県静岡市</li><li><strong>業務内容:</strong> 内科外来診療、地域医療連携、クリニック運営管理</li><li><strong>必須スキル:</strong> 内科専門医資格、5年以上の臨床経験</li><li><strong>給与:</strong> 経験・スキルに応じ年収1,800万円〜3,000万円</li><li><strong>待遇:</strong> 開業支援制度、業績に応じたインセンティブあり</li></ul>` },
                3: { title: '産業医（大手企業専属）', image: '画像(14).jpg', content: `<h4 class="text-2xl font-bold mb-4">募集要項</h4><ul class="list-disc list-inside space-y-2"><li><strong>勤務地:</strong> 大阪府大阪市</li><li><strong>業務内容:</strong> 従業員の健康管理、メンタルヘルス対応、職場巡視</li><li><strong>必須スキル:</strong> 医師免許、産業医資格</li><li><strong>給与:</strong> 経験・スキルに応じ年収1,200万円〜1,800万円</li><li><strong>待遇:</strong> 完全週休二日制（土日祝）、福利厚生充実</li></ul>` }
            }
        };

        function showDetailView(sectionId, itemId) {
            const sectionElement = document.getElementById(sectionId);
            const listView = sectionElement.querySelector('.list-view');
            const detailView = sectionElement.querySelector('.detail-view-content');
            const data = detailData[sectionId]?.[itemId];
            if (!sectionElement || !listView || !detailView || !data) return;

            let detailHtml = `
                <div class="py-20 bg-gray-50"><div class="container mx-auto px-6">
                    <button class="back-to-list-btn text-secondary hover:text-primary transition" data-section="${sectionId}">&larr; 一覧へ戻る</button>
                    <h2 class="text-4xl font-bold text-primary mt-4">${data.title}</h2>
                    ${data.author ? `<p class="text-lg text-secondary mt-2">${data.author}</p>` : ''}
                </div></div>
                <div class="container mx-auto px-6 py-16 max-w-4xl">
                    <img src="${data.image}" class="w-full rounded-lg shadow-lg mb-8">
                    <div class="prose max-w-none text-secondary">${data.content}</div>
                </div>`;
            detailView.innerHTML = detailHtml;
            listView.style.display = 'none';
            detailView.style.display = 'block';
            window.scrollTo({ top: sectionElement.offsetTop - 80, behavior: 'smooth' }); // 80pxはヘッダーの高さ
        }

        function showListView(sectionId) {
            const sectionElement = document.getElementById(sectionId);
            const listView = sectionElement.querySelector('.list-view');
            const detailView = sectionElement.querySelector('.detail-view-content');
            if (!sectionElement || !listView || !detailView) return;
            detailView.style.display = 'none';
            listView.style.display = 'block';
        }

        document.body.addEventListener('click', (event) => {
            const detailLink = event.target.closest('.view-detail-link');
            if (detailLink) {
                event.preventDefault();
                showDetailView(detailLink.dataset.section, detailLink.dataset.id);
            }
            const backBtn = event.target.closest('.back-to-list-btn');
            if (backBtn) {
                event.preventDefault();
                showListView(backBtn.dataset.section);
            }
        });
        
        // (タブ切り替えと初期化のロジックは変更なし)
    });
    </script>

</body>
</html>
