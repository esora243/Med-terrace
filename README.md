<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedReach | 医師・医療従事者のための総合情報サイト</title>
    
    <script src="https://cdn.tailwindcss.com"></script>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">

    <style>
        /* 基本のフォント設定 */
        body {
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            background-color: #f8f9fa; /* 背景色 */
        }

        /* カスタムカラーをTailwind CSSに設定 */
        .bg-primary { background-color: #1a346e; }
        .text-primary { color: #1a346e; }
        .border-primary { border-color: #1a346e; }
        .hover\:bg-primary-dark:hover { background-color: #142a5c; }

        .bg-secondary { background-color: #2c5282; }
        .text-secondary { color: #2c5282; }
        
        .text-accent { color: #0d9488; }
        .border-accent { border-color: #0d9488; }
        .bg-accent\/10 { background-color: rgba(13, 148, 136, 0.1); }
        
        .shadow-card { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
        .hover\:shadow-card-hover:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }

        /* タブ切り替え時のアニメーション */
        .content-section {
            display: none;
            animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body class="antialiased text-gray-700">

    <header id="header" class="bg-white shadow-md sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                    <h1 class="text-2xl font-bold text-primary ml-2">MedReach</h1>
                </div>
                <nav class="hidden md:flex items-center space-x-6">
                    <button data-tab="home" class="nav-link text-primary">ホーム</button>
                    <button data-tab="blog" class="nav-link">ドクターズブログ</button>
                    <button data-tab="jobs" class="nav-link">求人情報</button>
                    <button data-tab="transfer" class="nav-link">クリニック譲渡</button>
                    <button data-tab="company" class="nav-link">企業情報</button>
                    <button data-tab="mhlw" class="nav-link">厚生労働省</button>
                </nav>
            </div>
        </div>
    </header>

    <main>
        <section id="home" class="content-section container mx-auto px-6 py-16 md:py-24 text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">医師の知的好奇心とキャリアの次なる一歩を繋ぐ</h2>
            <p class="max-w-3xl mx-auto text-lg text-gray-600 mb-10">日々の診療に役立つ専門記事、キャリアの選択肢を広げる求人・譲渡情報、そして国の重要な公式発表まで、必要な情報をこの場所で。</p>
            <div class="flex justify-center space-x-4 mb-12">
                <button data-tab-target="blog" class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 flex items-center">
                    最新記事を見る <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
                <button data-tab-target="jobs" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300">求人情報を探す</button>
            </div>
            <div class="relative max-w-5xl mx-auto h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img src="画像(1).jpg" alt="医療研究のイメージ" class="w-full h-full object-cover">
            </div>
        </section>

        <section id="blog" class="content-section bg-white py-16 md:py-24">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12"><h2 class="text-4xl font-extrabold text-primary">ドクターズブログ</h2><p class="text-lg text-gray-600 mt-2">現場の知見と、医療の未来への提言</p></div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
                        <div class="relative h-56 w-full"><img src="画像(3).jpg" alt="オンライン診療の未来" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
                        <div class="p-6"><p class="text-sm text-accent font-semibold mb-2">最新医療技術</p><h3 class="text-xl font-bold text-primary mb-3 h-20">オンライン診療の未来：遠隔医療技術の最新動向</h3><p class="text-gray-600 text-sm h-24">オンライン診療がもたらす医療の変革と、今後期待される新技術や法的課題について深く掘り下げて解説します。</p><a href="#" class="text-primary font-bold hover:underline mt-4 inline-block">続きを読む &rarr;</a></div>
                    </div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
                        <div class="relative h-56 w-full"><img src="画像(4).jpg" alt="医師のキャリアパス" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
                        <div class="p-6"><p class="text-sm text-accent font-semibold mb-2">キャリア</p><h3 class="text-xl font-bold text-primary mb-3 h-20">医師のキャリアパス：専門医以外の多様な選択肢</h3><p class="text-gray-600 text-sm h-24">臨床医としてだけでなく、産業医、研究者、経営者など多様なキャリアを歩むための具体的なヒントと実例を提供します。</p><a href="#" class="text-primary font-bold hover:underline mt-4 inline-block">続きを読む &rarr;</a></div>
                    </div>
                    <div class="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
                        <div class="relative h-56 w-full"><img src="画像(5).jpg" alt="AI診断支援ツール" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
                        <div class="p-6"><p class="text-sm text-accent font-semibold mb-2">AIと医療</p><h3 class="text-xl font-bold text-primary mb-3 h-20">AI診断支援ツールの現状と倫理的課題</h3><p class="text-gray-600 text-sm h-24">画像診断や問診支援におけるAIツールの活用事例と、その利用に伴う倫理的な問題点について専門家が議論します。</p><a href="#" class="text-primary font-bold hover:underline mt-4 inline-block">続きを読む &rarr;</a></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="jobs" class="content-section py-16 md:py-24">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12"><h2 class="text-4xl font-extrabold text-primary">求人情報</h2><p class="text-lg text-gray-600 mt-2">あなたの専門性を活かす、次なるステージへ</p></div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-xl shadow-card p-6"><div class="relative h-40 w-full mb-4 rounded-lg overflow-hidden"><img src="画像(12).jpg" alt="外科医募集" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">外科医募集（都内総合病院）</h3><p class="text-gray-600 mb-4">最先端の手術設備と充実した研修制度が魅力です。</p><p class="text-sm font-semibold text-gray-800">勤務地: 東京都23区内</p><p class="text-sm font-semibold text-gray-800">年収: 1,500万円〜2,500万円</p><button class="mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                    <div class="bg-white rounded-xl shadow-card p-6"><div class="relative h-40 w-full mb-4 rounded-lg overflow-hidden"><img src="画像(13).jpg" alt="内科クリニック院長" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">内科クリニック院長候補（地方都市）</h3><p class="text-gray-600 mb-4">地域医療に貢献。将来的な開業支援も可能です。</p><p class="text-sm font-semibold text-gray-800">勤務地: 静岡県静岡市</p><p class="text-sm font-semibold text-gray-800">年収: 1,800万円〜3,000万円</p><button class="mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                    <div class="bg-white rounded-xl shadow-card p-6"><div class="relative h-40 w-full mb-4 rounded-lg overflow-hidden"><img src="画像(14).jpg" alt="産業医" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">産業医（大手企業専属）</h3><p class="text-gray-600 mb-4">ワークライフバランスを重視した働き方が可能です。</p><p class="text-sm font-semibold text-gray-800">勤務地: 大阪府大阪市</p><p class="text-sm font-semibold text-gray-800">年収: 1,200万円〜1,800万円</p><button class="mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                </div>
            </div>
        </section>

        <section id="transfer" class="content-section bg-white py-16 md:py-24">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12"><h2 class="text-4xl font-extrabold text-primary">クリニック譲渡</h2><p class="text-lg text-gray-600 mt-2">理想の医療を叶える、新たな開業の選択肢</p></div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-white rounded-xl shadow-card p-6 border-t-4 border-accent"><div class="relative h-40 w-full mb-4 rounded-lg overflow-hidden"><img src="画像(15).jpg" alt="内科クリニック" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">内科クリニック（東京都世田谷区）</h3><p class="text-gray-600 mb-4">駅徒歩5分の好立地。安定した患者数を維持。</p><p class="text-lg font-bold text-gray-800">譲渡価格: 5,000万円</p><button class="mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                    <div class="bg-white rounded-xl shadow-card p-6 border-t-4 border-accent"><div class="relative h-40 w-full mb-4 rounded-lg overflow-hidden"><img src="画像(16).jpg" alt="眼科クリニック" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">眼科クリニック（大阪府吹田市）</h3><p class="text-gray-600 mb-4">最新設備が整備。駅直結でアクセス良好。</p><p class="text-lg font-bold text-gray-800">譲渡価格: 7,500万円</p><button class="mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                    <div class="bg-white rounded-xl shadow-card p-6 border-t-4 border-accent"><div class="relative h-40 w-full mb-4 rounded-lg overflow-hidden"><img src="画像(17).jpg" alt="皮膚科" class="w-full h-full object-cover"/></div><h3 class="text-xl font-bold text-primary mb-2">皮膚科・美容皮膚科（名古屋市栄）</h3><p class="text-gray-600 mb-4">美容医療ニーズが高い商業地域に位置します。</p><p class="text-lg font-bold text-gray-800">譲渡価格: 9,000万円</p><button class="mt-4 w-full bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded-lg transition duration-300">詳細を見る</button></div>
                </div>
            </div>
        </section>
        
        <section id="company" class="content-section py-16 md:py-24">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12"><h2 class="text-4xl font-extrabold text-primary">企業情報</h2><p class="text-lg text-gray-600 mt-2">信頼と実績で、医療の未来をサポートします</p></div>
                <div class="bg-white rounded-xl shadow-card overflow-hidden md:flex">
                    <div class="md:w-1/2"><div class="relative h-64 md:h-full w-full"><img src="画像(25).jpg" alt="オフィス" class="w-full h-full object-cover"/></div></div>
                    <div class="p-8 md:p-12 md:w-1/2"><h3 class="text-2xl font-bold text-primary mb-4">クレアメディカル株式会社</h3><p class="text-gray-600 mb-6">医療従事者の専門性とキャリア形成をサポートするため、医療情報の提供、転職・開業支援、経営コンサルティングを展開しています。</p><ul class="space-y-2 text-gray-700"><li><strong class="font-semibold">代表取締役:</strong> 伏見 勇紀</li><li><strong class="font-semibold">所在地:</strong> 東京都港区芝大門２丁目３−１８</li><li><strong class="font-semibold">連絡先:</strong> creamed@yh.med</li></ul></div>
                </div>
            </div>
        </section>

        <section id="mhlw" class="content-section bg-white py-16 md:py-24">
            <div class="container mx-auto px-6">
                <div class="text-center mb-12"><h2 class="text-4xl font-extrabold text-primary">厚生労働省 公式情報</h2><p class="text-lg text-gray-600 mt-2">医師が知るべき制度・ガイドライン一覧</p></div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5Z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div><h3 class="text-lg font-bold text-secondary">医師資格・免許・研修</h3></div>
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-2 2-4 2-6 0Z"></path><path d="m2 16 3-8 3 8c-2 2-4 2-6 0Z"></path><path d="M7 16h10"></path><path d="M12 4v12"></path></svg></div><h3 class="text-lg font-bold text-secondary">医療法規・倫理・安全</h3></div>
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2c.5 0 1 .5 1 1v2"/><path d="M14 2c-.5 0-1 .5-1 1v2"/><path d="M15 13v-2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2"/><path d="M12 9v6"/><path d="M16 15v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2"/><path d="M11 22c.5 0 1-.5 1-1v-2"/><path d="M13 22c-.5 0-1-.5-1-1v-2"/><path d="M22 12h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2"/><path d="M20 16c0 1.1.9 2 2 2h2"/><path d="M2 12h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2"/><path d="M4 8c0-1.1-.9-2-2-2H0"/></svg></div><h3 class="text-lg font-bold text-secondary">感染症対策・公衆衛生</h3></div>
                    <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"><div class="text-accent inline-block p-4 bg-accent/10 rounded-full mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg></div><h3 class="text-lg font-bold text-secondary">関連リンク集</h3></div>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-primary text-white">
        <div class="container mx-auto px-6 py-8 text-center">
            <p>© 2025 MedReach. All rights reserved.</p>
            <p class="text-sm text-gray-400 mt-1">医師の専門性とキャリアを力強くサポートするプラットフォーム</p>
        </div>
    </footer>


    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('.nav-link');
            const contentSections = document.querySelectorAll('.content-section');
            const tabTargets = document.querySelectorAll('[data-tab-target]');

            function switchTab(tabId) {
                // すべてのセクションを非表示にする
                contentSections.forEach(section => {
                    section.style.display = 'none';
                });

                // すべてのナビゲーションリンクのアクティブ状態を解除
                navLinks.forEach(link => {
                    link.classList.remove('text-primary');
                    link.classList.add('text-gray-600');
                });

                // 対象のセクションを表示
                const targetSection = document.getElementById(tabId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }

                // 対象のナビゲーションリンクをアクティブにする
                const targetLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
                if (targetLink) {
                    targetLink.classList.add('text-primary');
                    targetLink.classList.remove('text-gray-600');
                }
            }

            // ヘッダーのナビゲーションリンクに対するクリックイベント
            navLinks.forEach(link => {
                link.addEventListener('click', (event) => {
                    const tabId = event.target.getAttribute('data-tab');
                    switchTab(tabId);
                });
            });

            // ホームセクション内のボタンなど、他の場所からのタブ切り替え
            tabTargets.forEach(button => {
                button.addEventListener('click', (event) => {
                    const tabId = event.currentTarget.getAttribute('data-tab-target');
                    switchTab(tabId);
                    // ページ上部にスクロール
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // 初期表示設定
            switchTab('home');
        });
    </script>

</body>
</html>
