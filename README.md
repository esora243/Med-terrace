<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedReach | 医師・医療従事者のための総合情報サイト</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;700;800&display=swap" rel="stylesheet">
    <style>
        /* CSSカスタムプロパティを定義し、一貫したデザインを維持 */
        :root {
            --primary-blue: #1a346e; /* サイト全体の基調となる濃い青 */
            --secondary-blue: #2c5282; /* 専門的で信頼感のある中間の青 */
            --accent-teal: #0d9488; /* アクセントに使う落ち着いたティールグリーン */
            --light-gray: #f9fafb; /* 背景用の非常に薄いグレー */
            --medium-gray: #e0e7ff; /* カードのボーダーなどに使う薄い青みがかったグレー */
            --dark-gray-text: #1f2937; /* 見出し用の濃いグレー */
            --medium-gray-text: #4b5563; /* 本文用の標準グレー */
            --header-gradient-start: #1d4ed8; /* ヘッダーグラデーションの開始色 */
            --header-gradient-end: #3b82f6; /* ヘッダーグラデーションの終了色 */
            --button-gradient-start: #3b82f6; /* ボタングラデーションの開始色 */
            --button-gradient-end: #1e3a8a; /* デープブルー for button end */
            --underline-gradient-start: #6ee7b7; /* 下線グラデーションの開始色 */
            --underline-gradient-end: var(--accent-teal); /* 下線グラデーションの終了色 */
        }

        /* 全体的なスタイル設定 */
        body {
            font-family: 'Inter', 'Noto Sans JP', sans-serif;
            background-color: var(--light-gray);
            color: var(--medium-gray-text);
            line-height: 1.7;
            background-image: linear-gradient(to bottom, var(--light-gray) 0%, #edf2f7 100%);
            background-attachment: fixed;
        }

        .container {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        /* ヘッダーのスタイル - グラデーションと透かし画像を適用 */
        .header-bg {
            background-image: linear-gradient(to right, var(--header-gradient-start), var(--header-gradient-end));
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
        }

        .header-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('画像 (1).jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.2; /* 透かしの透明度 */
        }

        /* フッターのスタイル - グラデーションと透かし画像を適用 */
        .footer-bg {
            background-color: #1f2937;
            box-shadow: inset 0 4px 15px rgba(0, 0, 0, 0.2);
            position: relative;
            overflow: hidden;
        }

        .footer-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('画像 (2).jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.2; /* 透かしの透明度 */
        }

        /* ナビゲーションリンクのスタイル */
        .nav-link {
            transition: all 0.3s ease-in-out;
            position: relative;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #e0f2fe;
        }

        .nav-link:hover {
            transform: translateY(-3px);
            color: #ffffff;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 3px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            background-image: linear-gradient(to right, var(--underline-gradient-start), var(--underline-gradient-end));
            border-radius: 9999px;
            transition: width 0.3s ease-in-out;
        }

        .nav-link.active::after {
            width: 100%;
        }

        /* カードのスタイル - 統一感のあるシャドウと丸み */
        .card {
            background-color: #ffffff;
            border-radius: 1.25rem;
            box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.08);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            border: 1px solid var(--medium-gray);
        }

        .card:hover {
            transform: translateY(-12px);
            box-shadow: 0 20px 30px -8px rgba(0, 0, 0, 0.2), 0 8px 12px -4px rgba(0, 0, 0, 0.12);
        }

        /* プライマリーボタンのスタイル - グラデーションとアニメーション */
        .button-primary {
            background-image: linear-gradient(to right, var(--button-gradient-start), var(--button-gradient-end));
            color: #ffffff;
            padding: 0.9rem 2rem;
            border-radius: 0.75rem;
            font-weight: 700;
            transition: background-position 0.4s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
            background-size: 200% auto;
        }

        .button-primary:hover {
            background-position: right center;
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        /* 記事リストのスタイル */
        .article-item {
            border-left: 5px solid var(--accent-teal);
            padding-left: 1.2rem;
            margin-bottom: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }

        .article-item a {
            flex-grow: 1;
            color: var(--dark-gray-text);
            font-weight: 700;
            font-size: 1.125rem;
            line-height: 1.4;
            cursor: pointer;
        }

        .article-item a:hover {
            color: var(--secondary-blue);
            text-decoration: underline;
            text-underline-offset: 4px;
        }

        .article-summary {
            font-size: 0.95rem;
            color: var(--medium-gray-text);
            line-height: 1.5;
        }

        /* セクションタイトルのスタイル */
        .section-title {
            color: var(--primary-blue);
            font-size: 2.75rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 90px;
            height: 4px;
            background-image: linear-gradient(to right, var(--underline-gradient-start), var(--underline-gradient-end));
            border-radius: 9999px;
        }

        /* SVGアイコンのスタイル */
        .icon-small {
            width: 1.35rem;
            height: 1.35rem;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            flex-shrink: 0;
        }

        .icon-medium {
            width: 1.65rem;
            height: 1.65rem;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            flex-shrink: 0;
        }

        .icon-large {
            width: 2rem;
            height: 2rem;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            flex-shrink: 0;
        }
        
        /* 記事詳細ページのアイコン調整 */
        .article-modal-content .icon-medium {
            width: 1.5rem;
            height: 1.5rem;
        }

        /* 画像のスタイル */
        .feature-image {
            width: 100%;
            height: auto;
            border-radius: 1.25rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            margin-bottom: 2.5rem;
            object-fit: cover;
        }
        .mhlw-category-card .feature-image {
            box-shadow: none;
            border-radius: 0.75rem;
        }
        
        /* 厚生労働省リンクのカードスタイル */
        .mhlw-category-card {
            display: flex;
            flex-direction: column;
            padding: 1.5rem;
        }

        .mhlw-category-card h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary-blue);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .mhlw-category-card p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: var(--medium-gray-text);
            margin-bottom: 1.25rem;
            flex-grow: 1;
        }

        .mhlw-category-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
            border-top: 1px solid var(--medium-gray);
            padding-top: 1rem;
        }

        .mhlw-category-card li {
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .mhlw-category-card li a {
            color: var(--secondary-blue);
            font-weight: 600;
            text-decoration: none;
            transition: color 0.2s ease-in-out, text-decoration 0.2s ease-in-out;
        }

        .mhlw-category-card li a:hover {
            color: var(--primary-blue);
            text-decoration: underline;
        }

        /* タブ切り替え時のアニメーション */
        .content-section {
            display: none;
            animation: fadeIn 0.5s ease-out;
        }

        .content-section.active {
            display: block;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* チャットボットのスタイル */
        #chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 350px;
            max-width: 90%;
            height: 500px;
            background-color: white;
            border-radius: 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            display: flex;
            flex-direction: column;
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
        }

        #chatbot-container.active {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        #chatbot-header {
            background-image: linear-gradient(to right, var(--header-gradient-start), var(--header-gradient-end));
            color: white;
            padding: 1rem 1.5rem;
            border-top-left-radius: 1.5rem;
            border-top-right-radius: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        #chatbot-messages {
            flex-grow: 1;
            padding: 1.5rem;
            overflow-y: auto;
            border-bottom: 1px solid var(--medium-gray);
        }

        .chatbot-message {
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
        }

        .chatbot-message.bot .message-bubble {
            background-color: var(--medium-gray);
            border-radius: 1.25rem 1.25rem 1.25rem 0;
            padding: 0.75rem 1rem;
            color: var(--dark-gray-text);
        }

        .chatbot-message.user {
            justify-content: flex-end;
        }

        .chatbot-message.user .message-bubble {
            background-color: var(--primary-blue);
            color: white;
            border-radius: 1.25rem 1.25rem 0 1.25rem;
            padding: 0.75rem 1rem;
        }

        #chatbot-input-container {
            padding: 1rem 1.5rem;
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        #chatbot-input {
            flex-grow: 1;
            border: 1px solid var(--medium-gray);
            border-radius: 0.75rem;
            padding: 0.5rem 1rem;
        }

        #chatbot-toggle-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-image: linear-gradient(to right, #60a5fa, #3b82f6);
            color: white;
            border-radius: 9999px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            z-index: 1000;
            transition: transform 0.2s;
        }

        #chatbot-toggle-btn:hover {
            transform: scale(1.1);
        }

        /* 管理者パネルのスタイル */
        .admin-panel-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }

        .admin-panel-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .admin-panel-content {
            background-color: #ffffff;
            border-radius: 1.5rem;
            padding: 2.5rem;
            width: 90%;
            max-width: 1000px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
            transform: scale(0.95);
            transition: transform 0.3s ease-in-out;
        }

        .admin-panel-overlay.active .admin-panel-content {
            transform: scale(1);
        }

        .admin-input {
            border: 1px solid var(--medium-gray);
            border-radius: 0.5rem;
            padding: 0.75rem 1rem;
            width: 100%;
            font-size: 1rem;
            margin-bottom: 1rem;
        }

        .admin-button {
            background-image: linear-gradient(to right, #60a5fa, #3b82f6);
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: background-position 0.3s ease-in-out, transform 0.2s ease-in-out;
            background-size: 200% auto;
        }

        .admin-button:hover {
            background-position: right center;
            transform: translateY(-2px);
        }

        .admin-button.delete {
            background-image: linear-gradient(to right, #ef4444, #dc2626);
        }

        .admin-button.delete:hover {
            background-position: right center;
            transform: translateY(-2px);
        }
        
        .blog-header {
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .blog-header svg {
            transition: transform 0.3s ease;
        }
        .blog-header.expanded svg {
            transform: rotate(90deg);
        }
    </style>
</head>
<body class="antialiased">
    <!-- ヘッダー -->
    <div class="header-bg text-white py-6 md:py-8 shadow-lg">
        <div class="container flex flex-col md:flex-row items-center justify-between relative z-10">
            <a href="#home" class="flex items-center gap-2 mb-4 md:mb-0 text-3xl md:text-4xl font-extrabold text-white no-underline">
                <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                MedReach
            </a>
            <nav>
                <ul class="flex flex-wrap justify-center space-x-4 md:space-x-8 text-lg md:text-xl font-semibold">
                    <li><a href="#home" class="nav-link active">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        ホーム
                    </a></li>
                    <li><a href="#blog" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M16 16h-2"/></svg>
                        ドクターズブログ
                    </a></li>
                    <li><a href="#job-postings" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        求人情報
                    </a></li>
                    <li><a href="#clinic-transfer" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital"><path d="M12 6V2H2v10a4 4 0 0 0 4 4h10v6h4V6Z"/><path d="M12 18h.01"/><path d="M12 12h.01"/></svg>
                        クリニック譲渡
                    </a></li>
                    <li><a href="#company-info" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building-2"><path d="M6 8a6 6 0 0 1 6-6v7H6v11"/><path d="M22 2v11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V2"/><path d="M16 21v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/></svg>
                        企業情報
                    </a></li>
                    <li><a href="#mhlw-links" class="nav-link">
                        <svg class="icon-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3.5-3.5a4 4 0 0 0-6.74-6.74l1.24-1.24a7.5 7.5 0 0 1-.12 10.62ZM14 11a5 5 0 0 0-7.54-.54l-3.5 3.5a4 4 0 0 0 6.74 6.74l-1.24 1.24a7.5 7.5 0 0 1 .12-10.62Z"/></svg>
                        厚生労働省
                    </a></li>
                </ul>
            </nav>
            <button id="adminLoginBtn" class="ml-4 px-4 py-2 bg-white text-primary-blue rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-200">管理者ログイン</button>
            <button id="adminPanelBtn" class="ml-4 px-4 py-2 bg-accent-teal text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-200 hidden">管理者パネル</button>
        </div>
    </div>

    <!-- メインコンテンツ -->
    <main class="container py-8 md:py-12">
        <!-- ホームセクション -->
        <section id="home" class="content-section active mb-12 md:mb-16 bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 class="section-title">MedReach：医師の知的好奇心とキャリアの次なる一歩を繋ぐ</h2>
            <img src="画像 (3).jpg" alt="[医療研究のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-xl text-dark-gray-text max-w-3xl mx-auto leading-relaxed mb-6">
                先生方の「知りたい」に真摯に寄り添い、日々の診療に役立つ専門記事、キャリアの選択肢を広げる求人・譲渡情報、そして国の重要な公式発表まで、必要な情報を迷いなく手に入れられるよう、本プラットフォームは設計されております。
            </p>
            <p class="text-lg text-medium-gray-text max-w-3xl mx-auto leading-relaxed">
                2019年以来、毎月3本の厳選記事で、先生方の専門知識とキャリアを力強く後押ししています。
            </p>
            <div class="text-center mt-10">
                <a href="#blog" class="button-primary page-link">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    最新記事を見る
                </a>
            </div>
        </section>

        <!-- ドクターズブログセクション -->
        <section id="blog" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">ドクターズブログ：現場の知見と未来への提言</h2>
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                現役医師や医療専門家が執筆するコラム・解説記事です。日々の診療のヒントからキャリア、最新医療トレンドまで、多岐にわたるテーマを深く掘り下げます。
            </p>
            <div id="blogGrid" class="space-y-8">
                <!-- 記事はJavaScriptによって動的にここにロードされます -->
            </div>
        </section>

        <!-- 記事詳細表示用モーダル -->
        <div id="articleModal" class="admin-panel-overlay">
            <div class="admin-panel-content max-w-2xl text-left">
                <div class="flex justify-between items-center mb-4">
                    <h3 id="modalTitle" class="text-2xl font-bold text-primary-blue">記事タイトル</h3>
                    <button id="closeArticleModalBtn" class="text-gray-500 hover:text-gray-900 text-3xl">&times;</button>
                </div>
                <img id="modalImage" src="" alt="[記事画像]" class="w-full h-auto rounded-lg mb-4 hidden">
                <p id="modalBody" class="text-base text-dark-gray-text leading-relaxed"></p>
                <div class="mt-8 flex justify-end">
                    <button id="closeArticleModalBtnBottom" class="admin-button delete">閉じる</button>
                </div>
            </div>
        </div>
        
        <!-- 求人情報セクション -->
        <section id="job-postings" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">求人情報：あなたの専門性を活かす次なるステージへ</h2>
            <img src="画像 (5).jpg" alt="[求職活動のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                専門分野や働き方のニーズに応える、医師向けの厳選求人情報です。ビズリーチやマイナビドクターのような質の高い情報提供を目指し、先生方の理想の職場探しをMedReachがサポートします。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">外科医募集（都内総合病院）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        緊急オペ対応可能な外科医を募集。専門医資格優遇。最先端の手術設備と充実した研修制度が魅力です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 東京都23区内</li>
                        <li>年収: 1,500万円〜2,500万円</li>
                        <li>待遇: 住宅手当、学会参加費補助、週休2日制</li>
                    </ul>
                    <img src="画像 (6).jpg" alt="[都内総合病院のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://doctor.mynavi.jp/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">内科クリニック院長候補（地方都市）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        地域医療に貢献したい内科医を求む。将来的な開業支援も可能で、地域に密着した医療を提供できます。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 静岡県静岡市</li>
                        <li>年収: 1,800万円〜3,000万円</li>
                        <li>待遇: 車通勤可、退職金制度あり、開業支援制度</li>
                    </ul>
                    <img src="画像 (7).jpg" alt="[地方クリニックのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.bizreach.jp/career-change/medical/doctor/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">産業医（大手企業専属）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        従業員の健康管理・メンタルヘルスケアに従事する産業医を募集。ワークライフバランスを重視した働き方が可能です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 大阪府大阪市</li>
                        <li>年収: 1,200万円〜1,800万円</li>
                        <li>待遇: 完全週休二日制、福利厚生充実、研修制度</li>
                    </ul>
                    <img src="画像 (8).jpg" alt="[大手企業のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.dr-summit.jp/column/industrial_physician/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">健診センター医師（パート・非常勤）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        健康診断や人間ドックの診察・読影業務。柔軟なシフト対応が可能で、子育て中の方にも働きやすい環境です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 愛知県名古屋市</li>
                        <li>時給: 10,000円〜15,000円</li>
                        <li>待遇: 交通費支給、扶養内勤務応相談、午前のみ勤務可</li>
                    </ul>
                    <img src="画像 (9).jpg" alt="[健診センターのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.m3.com/doctor/job/parttime/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.dr-summit.jp/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くの求人情報を見る
                </a>
            </div>
        </section>

        <!-- クリニック譲渡情報セクション -->
        <section id="clinic-transfer" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">クリニック譲渡：理想の医療を叶える、新たな開業の選択肢</h2>
            <img src="画像 (10).jpg" alt="[クリニック譲渡のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                開業を検討中の先生方、新たな挑戦をお考えの方へ。質の高いクリニック譲渡案件を厳選し、スムーズな事業承継を支援します。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">内科クリニック（東京都世田谷区）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        駅徒歩5分の好立地。地域に根ざした内科クリニックで、長年の実績と安定した患者数を維持。院長引退のため譲渡希望です。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 東京都世田谷区</li>
                        <li>診療科目: 内科、小児科</li>
                        <li>譲渡価格: 5,000万円</li>
                        <li>特記事項: 既存患者基盤あり、スタッフ引き継ぎ可</li>
                    </ul>
                    <img src="画像 (11).jpg" alt="[世田谷区のクリニック外観]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.medius.co.jp/transfer/clinic/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">眼科クリニック（大阪府吹田市）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        最新設備が整った清潔な眼科クリニック。駅直結でアクセス良好。事業拡大のため譲渡を検討しています。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 大阪府吹田市</li>
                        <li>診療科目: 眼科</li>
                        <li>譲渡価格: 7,500万円</li>
                        <li>特記事項: 最新のレーザー治療器導入済、駅直結</li>
                    </ul>
                    <img src="画像 (12).jpg" alt="[吹田市の眼科クリニック]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.japan-med.co.jp/clinic-transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">皮膚科・美容皮膚科（名古屋市栄）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        商業地域に位置し、美容医療ニーズが高いクリニック。経験豊富なスタッフが在籍し、すぐに運営を開始できます。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 愛知県名古屋市栄</li>
                        <li>診療科目: 皮膚科、美容皮膚科</li>
                        <li>譲渡価格: 9,000万円</li>
                        <li>特記事項: 美容機器一式、集客ノウハウ提供、駅近</li>
                    </ul>
                    <img src="画像 (13).jpg" alt="[名古屋市の美容皮膚科]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.iryokai.co.jp/consulting/transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">整形外科クリニック（福岡市中央区）</h3>
                    <p class="text-medium-gray-text mb-4 text-sm">
                        スポーツ外傷対応の整形外科クリニック。地域住民からの信頼も厚く、院長の健康問題で早期譲渡希望。
                    </p>
                    <ul class="text-sm text-gray-500 list-disc list-inside mb-4 space-y-1">
                        <li>勤務地: 福岡市中央区</li>
                        <li>診療科目: 整形外科、リハビリテーション科</li>
                        <li>譲渡価格: 6,000万円</li>
                        <li>特記事項: 理学療法士常勤、駐車場完備</li>
                    </ul>
                    <img src="画像 (14).jpg" alt="[福岡市の整形外科]" class="w-full h-auto rounded-lg mb-4">
                    <a href="https://www.dr-summit.jp/column/clinic-transfer/" target="_blank" class="button-primary inline-block text-center">
                        <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                        詳細を見る
                    </a>
                </div>
            </div>
            <div class="text-center mt-12">
                <a href="https://www.clinic-m.jp/joto/" target="_blank" class="button-primary">
                    <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                    さらに多くの譲渡情報を見る
                </a>
            </div>
        </section>

        <!-- 企業情報セクション -->
        <section id="company-info" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">企業情報：クレアメディカル株式会社</h2>
            <img src="画像 (25).jpg" alt="[オフィスビルのイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="card p-6 col-span-1 md:col-span-2">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">企業概要</h3>
                    <p class="text-medium-gray-text text-sm leading-relaxed">
                        クレアメディカル株式会社は、医療従事者の皆様の専門性とキャリア形成をサポートするため、医療情報の提供、転職・開業支援、そして経営コンサルティングを主軸としたサービスを展開しています。変化の激しい医療業界において、常に最先端の情報と最適なソリューションを提供し、医師の皆様がより良い環境で活躍できる社会の実現に貢献します。
                    </p>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">代表者情報</h3>
                    <p class="text-medium-gray-text text-sm">
                        代表取締役社長：<span class="font-bold">伏見 勇紀</span><br>
                        メールアドレス：<span class="text-secondary-blue font-semibold">creamed@yh.med</span>
                    </p>
                </div>
                <div class="card p-6 col-span-1 md:col-span-3">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">所在地・アクセスマップ</h3>
                    <p class="text-medium-gray-text text-sm mb-4">
                        〒105-0012<br>
                        東京都港区芝大門２丁目３−１８ 大門ビル<br>
                        <a href="https://maps.app.goo.gl/abcdefg" target="_blank" class="text-secondary-blue hover:text-primary-blue transition-colors duration-200">[Google Mapsで見る]</a>
                    </p>
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-inner">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5284059085237!2d139.75486517617904!3d35.66318533816654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b90a6e0d9b7%3A0x86e680a6c026e4e0!2z44CSMTA1LTAwMTIg5p2x5Lqs6YO95b-o55Sw5Yy66Iil5aSn5Zmo77yS77yS5LiJ77yS5LiK44Oh44Kj44Ki44Kv44OP44Oz44K_44Or44Kv44O8!5e0!3m2!1sja!2sjp!4v1692224424368!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">プライバシーポリシー</h3>
                    <p class="text-medium-gray-text text-sm">
                        お客様の個人情報の保護を最重要課題と位置づけ、厳格な管理体制のもと、法令に基づいた適切な取り扱いを徹底しております。
                    </p>
                    <div class="text-right mt-4">
                        <a href="#" class="text-secondary-blue hover:text-primary-blue transition-colors duration-200 text-sm font-semibold">詳細を見る</a>
                    </div>
                </div>
                <div class="card p-6">
                    <h3 class="text-xl font-semibold text-primary-blue mb-4">利用規約</h3>
                    <p class="text-medium-gray-text text-sm">
                        本プラットフォームをご利用いただく上での規約です。当サービスを利用される前に必ずご確認ください。
                    </p>
                    <div class="text-right mt-4">
                        <a href="#" class="text-secondary-blue hover:text-primary-blue transition-colors duration-200 text-sm font-semibold">詳細を見る</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 厚生労働省リンクセクション -->
        <section id="mhlw-links" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">厚生労働省：医師が知るべき制度・ガイドライン一覧</h2>
            <img src="画像 (26).jpg" alt="[厚生労働省のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                医師の皆様に不可欠な厚生労働省の公式情報を、テーマ別に整理しました。必要な制度やガイドラインへ迷わずアクセスいただけます。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- カテゴリ1: 医師資格・免許・研修 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap"><path d="M22 10v6M2 10l10-5 10 5M2 10v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/><path d="M6 10v6"/><path d="M18 10v6"/><path d="M12 2v3"/></svg>医師資格・免許・研修</h3>
                    <img src="画像 (20).jpg" alt="[医師免許のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医師免許の取得・更新手続き、専門医制度、各種研修制度など、医師としてのキャリア形成に欠かせない情報です。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/ishimensetsu/index.html" target="_blank">医師免許関係情報</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/kensyu/index.html" target="_blank">医師臨床研修制度</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/senmoni/index.html" target="_blank">専門医制度について</a></li>
                    </ul>
                </div>
                <!-- カテゴリ2: 医療法規・倫理・安全 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scale"><path d="m16 16 3-3V9l-3 3"/><path d="M21 16V9l-3 3"/><path d="M21 16H9a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h5"/><path d="M16 16H4a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1h12a2 2 0 0 1 2 2v10"/></svg>医療法規・倫理・安全</h3>
                    <img src="画像 (21).jpg" alt="[医療法規に関する文書のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医療法、医師法、医療安全、医療倫理に関する最新の法令やガイドラインなど、診療の遵守事項を確認できます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/hourei/index.html" target="_blank">医療法関係通知</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/iryou_anzen/index.html" target="_blank">医療安全対策</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/shingi/shingi-kousei_261545.html" target="_blank">医療倫理に関する指針</a></li>
                    </ul>
                </div>
                <!-- カテゴリ3: 診療報酬・医療制度 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-yen"><path d="M12 1v22"/><path d="M17 7H7M17 17H7"/></svg>診療報酬・医療制度</h3>
                    <img src="画像 (22).jpg" alt="[診療報酬に関するグラフのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>診療報酬改定情報、保険制度、地域医療構想など、医療経営や国の医療政策に関わる重要な情報をご確認いただけます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/index.html" target="_blank">診療報酬改定について</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryouhoken/kokuho/index.html" target="_blank">国民健康保険・後期高齢者医療</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/iryou_keikaku/index.html" target="_blank">地域医療構想</a></li>
                    </ul>
                </div>
                <!-- カテゴリ4: 感染症対策・公衆衛生 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-virus"><path d="M10 2c.5 0 1 .5 1 1v2"/><path d="M14 2c-.5 0-1 .5-1 1v2"/><path d="M15 13v-2c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v2"/><path d="M12 9v6"/><path d="M16 15v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2"/><path d="M11 22c.5 0 1-.5 1-1v-2"/><path d="M13 22c-.5 0-1-.5-1-1v-2"/><path d="M22 12h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2"/><path d="M20 16c0 1.1.9 2 2 2h2"/><path d="M2 12h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H2"/><path d="M4 8c0-1.1-.9-2-2-2H0"/></svg>感染症対策・公衆衛生</h3>
                    <img src="画像 (23).jpg" alt="[感染症対策のイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>新型コロナウイルス感染症をはじめとする各種感染症の情報、予防接種、公衆衛生関連の最新動向を把握できます。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou04/index.html" target="_blank">感染症情報全般</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/kenkou/kekkaku-kansenshou04/inful_04.html" target="_blank">新型インフルエンザ対策</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/vaccine_index.html" target="_blank">予防接種情報</a></li>
                    </ul>
                </div>
                <!-- カテゴリ5: 働き方改革・労働環境 -->
                <div class="card mhlw-category-card">
                    <h3 class="mb-4"><svg class="icon-large text-secondary-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog"><circle cx="12" cy="7" r="4"/><path d="M12 15v2"/><path d="M16 19h-8"/><path d="M17.6 17.6a2 2 0 0 0-2.8 0l-1.4 1.4a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0l1.4-1.4a2 2 0 0 0 0-2.8z"/><path d="M2 21v-2a4 4 0 0 1 4-4h4a4 2 0 0 1 4 4v2"/></svg>働き方改革・労働環境</h3>
                    <img src="画像 (24).jpg" alt="[ワークライフバランスのイメージ]" class="w-full h-auto rounded-lg mb-4">
                    <p>医師の労働時間短縮、タスクシフト、女性医師支援など、より良い労働環境を実現するための国の取り組みをご紹介します。</p>
                    <ul>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/ishihou/index.html" target="_blank">医師の働き方改革</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/zyosei_sien/index.html" target="_blank">女性医師等に対する支援</a></li>
                        <li><svg class="icon-small text-accent-teal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg><a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iryou/chiikihenzai/index.html" target="_blank">医師の地域偏在対策</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </main>

    <!-- フッター -->
    <footer class="footer-bg text-white py-8 md:py-10 mt-16">
        <div class="container text-center text-sm relative z-10">
            <p>&copy; 2023 MedReach. All rights reserved.</p>
            <p class="mt-2 text-gray-400">医師の専門性とキャリアを力強くサポートするプラットフォーム</p>
            <div class="mt-6 flex justify-center space-x-6 text-gray-300">
                <a href="#" class="hover:text-white transition-colors duration-200">サイトマップ</a>
                <span class="text-gray-600">|</span>
                <a href="#" class="hover:text-white transition-colors duration-200">プライバシーポリシー</a>
                <span class="text-gray-600">|</span>
                <a href="#" class="hover:text-white transition-colors duration-200">利用規約</a>
            </div>
        </div>
    </footer>

    <!-- チャットボット切り替えボタン -->
    <div id="chatbot-toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9.3 9.3 0 0 1 4 16.1L2 22l6-2Z"/><path d="M10.5 4A9.45 9.45 0 0 1 20 12.5a9.38 9.38 0 0 1-1.2 4.4L22 22l-6-2a9.43 9.43 0 0 1-5.5-1.5"/></svg>
    </div>

    <!-- チャットボットコンテナ -->
    <div id="chatbot-container">
        <div id="chatbot-header">
            <h4 class="font-bold">MedReachサポート</h4>
            <button id="close-chatbot-btn" class="text-white text-3xl font-bold leading-none">&times;</button>
        </div>
        <div id="chatbot-messages">
            <!-- チャットメッセージはJavaScriptで動的に追加されます -->
            <div class="chatbot-message bot">
                <span class="message-bubble">こんにちは！ご質問があれば、以下から選択いただくか、入力してください。</span>
            </div>
            <div class="chatbot-message bot mt-2">
                <div class="flex flex-col space-y-2">
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">求人情報について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">クリニック譲渡について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">企業情報について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">ブログ記事について</button>
                    <button class="chatbot-quick-reply-btn bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">パスワードを忘れた</button>
                </div>
            </div>
        </div>
        <div id="chatbot-input-container">
            <input type="text" id="chatbot-input" placeholder="質問を入力してください..." class="flex-grow">
            <button id="chatbot-send-btn" class="bg-primary-blue text-white p-2 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizonal"><path d="m3 3 3 9-3 9 19-9Z"/><path d="M21 12H6"/></svg>
            </button>
        </div>
    </div>


    <!-- 管理者ログインモーダル -->
    <div id="adminLoginModal" class="admin-panel-overlay">
        <div class="admin-panel-content text-center">
            <h3 class="text-2xl font-bold text-primary-blue mb-6">管理者ログイン</h3>
            <input type="password" id="adminPasswordInput" class="admin-input" placeholder="パスワードを入力してください">
            <p id="adminLoginError" class="text-red-500 text-sm mb-4 hidden">パスワードが間違っています。</p>
            <div class="flex justify-center space-x-4">
                <button id="loginSubmitBtn" class="admin-button">ログイン</button>
                <button id="loginCancelBtn" class="admin-button delete">キャンセル</button>
            </div>
        </div>
    </div>

    <!-- 管理者パネルモーダル -->
    <div id="adminPanelModal" class="admin-panel-overlay">
        <div class="admin-panel-content">
            <h3 class="text-2xl font-bold text-primary-blue mb-6">記事管理パネル</h3>

            <!-- 新規記事追加フォーム -->
            <div class="mb-8 p-6 border border-medium-gray rounded-xl shadow-sm">
                <h4 class="text-xl font-semibold text-dark-gray-text mb-4">新規記事の追加</h4>
                <input type="text" id="newArticleTitle" class="admin-input" placeholder="記事タイトル">
                <textarea id="newArticleSummary" class="admin-input h-24 resize-y" placeholder="記事概要"></textarea>
                <div class="mt-4">
                    <label for="newArticleImage" class="block text-dark-gray-text font-semibold mb-2">画像ファイル名 (例: 画像 (1).jpg)</label>
                    <input type="text" id="newArticleImage" class="admin-input" placeholder="画像ファイル名">
                </div>
                <button id="addArticleBtn" class="admin-button mt-4">記事を追加</button>
            </div>

            <!-- 既存記事リスト -->
            <div class="mb-8">
                <h4 class="text-xl font-semibold text-dark-gray-text mb-4">既存記事の編集・削除</h4>
                <div id="adminArticleList" class="space-y-4">
                    <!-- 記事はJSでここにロードされます -->
                </div>
            </div>

            <div class="flex justify-end">
                <button id="closeAdminPanelBtn" class="admin-button delete">パネルを閉じる</button>
            </div>
        </div>
    </div>

    <script type="module">
        // Firebase SDKのインポート
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, collection, query, orderBy, getDocs, addDoc, setDoc, updateDoc, deleteDoc, doc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
        
        const blogArticles = [
            // 2025年
            { year: 2025, month: 7, title: "オンライン診療の未来：遠隔医療技術の最新動向", summary: "オンライン診療がもたらす医療の変革と、今後期待される新技術や法的課題について解説します。", image: "画像 (3).jpg" },
            { year: 2025, month: 7, title: "医師のキャリアパス：専門医以外の選択肢", summary: "臨床医としてだけでなく、産業医、研究者、経営者など多様なキャリアを歩むためのヒントを提供します。", image: "画像 (4).jpg" },
            { year: 2025, month: 7, title: "AI診断支援ツールの現状と倫理的課題", summary: "画像診断や問診支援におけるAIツールの活用事例と、その利用に伴う倫理的な問題点について議論します。", image: "画像 (5).jpg" },
            { year: 2025, month: 6, title: "地域医療を支えるクリニック経営戦略", summary: "人口減少や高齢化が進む地域でのクリニック経営を成功させるための具体的な戦略と成功事例を紹介します。", image: "画像 (6).jpg" },
            { year: 2025, month: 6, title: "再生医療の最前線：iPS細胞治療の臨床応用", summary: "iPS細胞を用いた再生医療技術が、難病治療にどのように貢献しているか、最新の研究動向を深掘りします。", image: "画像 (7).jpg" },
            { year: 2025, month: 6, title: "医師のメンタルヘルス：バーンアウトをどう防ぐか", summary: "多忙な医療現場で心身の健康を保つためのストレス管理法や、バーンアウト予防の組織的アプローチを解説します。", image: "画像 (8).jpg" },
            { year: 2025, month: 5, title: "医療DX推進の鍵：電子カルテのデータ連携", summary: "医療のデジタルトランスフォーメーションを加速させるための、電子カルテシステム間でのデータ連携の重要性と技術的課題を考察します。", image: "画像 (9).jpg" },
            { year: 2025, month: 5, title: "女性医師のキャリアと育児の両立支援", summary: "出産や育児とキャリアを両立させるための、柔軟な勤務形態やサポート制度の事例を紹介し、働きやすい環境づくりを提言します。", image: "画像 (10).jpg" },
            { year: 2025, month: 5, title: "希少疾患治療薬の開発動向と患者アクセス", summary: "オーファンドラッグ（希少疾患治療薬）の開発状況と、患者が治療薬にアクセスするための課題や支援策について議論します。", image: "画像 (11).jpg" },
            { year: 2025, month: 4, title: "在宅医療の最新動向：多職種連携とICT活用", summary: "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。", image: "画像 (12).jpg" },
            { year: 2025, month: 4, title: "医師の働き方改革：タスク・シフト/シェアの進捗", summary: "医師の業務負担軽減のために進められているタスク・シフト/シェアの現状と、今後の課題や展望について解説します。", image: "画像 (13).jpg" },
            { year: 2025, month: 4, title: "ゲノム医療の発展：個別化医療の最前線", summary: "個人の遺伝子情報に基づいたがん治療や難病治療の現状と、プレシジョン・メディスンの未来を考察します。", image: "画像 (14).jpg" },
            { year: 2025, month: 3, title: "医師賠償責任保険の選び方：リスクマネジメントの基礎", summary: "医療訴訟リスクに備えるための医師賠償責任保険の重要性と、保険選びのポイントを分かりやすく解説します。", image: "画像 (15).jpg" },
            { year: 2025, month: 3, title: "医療機器の進化：AI搭載デバイスの安全性評価", summary: "診断や治療を支援するAI搭載医療機器の最新技術と、その導入に際しての安全性評価や倫理的ガイドラインについて議論します。", image: "画像 (16).jpg" },
            { year: 2025, month: 3, title: "地域包括ケアシステムの現状と医師の役割", summary: "住み慣れた地域で生活を続けるための地域包括ケアシステム。その構築における医師の役割と多職種連携の課題を考察します。", image: "画像 (17).jpg" },
            { year: 2025, month: 2, title: "AIチャットボットが変えるクリニックの患者対応", summary: "患者からの問い合わせ対応を自動化するAIチャットボットの導入事例と、業務効率化への貢献について解説します。", image: "画像 (18).jpg" },
            { year: 2025, month: 2, title: "医療機関のセキュリティ対策：サイバー攻撃の脅威", summary: "電子カルテの普及に伴うサイバー攻撃の増加。情報漏洩を防ぐための医療機関が取るべきセキュリティ対策を詳述します。", image: "画像 (19).jpg" },
            { year: 2025, month: 2, title: "医師のキャリアを左右するリーダーシップスキル", summary: "チーム医療を成功させるために不可欠なリーダーシップ。医師に求められるコミュニケーション能力やマネジメントスキルについて解説します。", image: "画像 (20).jpg" },
            { year: 2025, month: 1, title: "ロボット支援手術の拡大とトレーニング：外科医のスキル向上", summary: "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。", image: "画像 (21).jpg" },
            { year: 2025, month: 1, title: "グローバルヘルス課題への貢献：日本の医療技術と知見", summary: "世界が直面する感染症、貧困、格差といったグローバルヘルス課題に対し、日本の医療技術や公衆衛生の知見がどのように貢献できるかを考察します。", image: "画像 (22).jpg" },
            { year: 2025, month: 1, title: "予防医療の新戦略：ゲノム情報とライフスタイル介入", summary: "個人のゲノム情報を活用したリスク評価と、それに基づいた個別化された生活習慣改善プログラムについて深掘りします。", image: "画像 (23).jpg" },
            
            // 2024年
            { year: 2024, month: 11, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (24).jpg" },
            { year: 2024, month: 11, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (25).jpg" },
            { year: 2024, month: 11, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (26).jpg" },
            { year: 2024, month: 10, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (27).jpg" },
            { year: 2024, month: 10, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (28).jpg" },
            { year: 2024, month: 10, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (29).jpg" },
            { year: 2024, month: 9, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (30).jpg" },
            { year: 2024, month: 9, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (31).jpg" },
            { year: 2024, month: 9, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (32).jpg" },
            { year: 2024, month: 8, title: "医療AIの倫理的ガイドラインと運用：安全で公正な利用のために", summary: "医療AIの急速な発展に伴い、その倫理的な運用が重要視されています。AIの公平性、透明性、責任の所在に関するガイドラインとその実践について解説します。", image: "画像 (33).jpg" },
            { year: 2024, month: 8, title: "グローバルヘルス課題への貢献：日本の医療技術と知見", summary: "世界が直面する感染症、貧困、格差といったグローバルヘルス課題に対し、日本の医療技術や公衆衛生の知見がどのように貢献できるかを考察します。", image: "画像 (34).jpg" },
            { year: 2024, month: 8, title: "疾病予防のための新たな戦略：ゲノム情報とライフスタイル介入", summary: "個人のゲノム情報を活用したリスク評価と、それに基づいた個別化された生活習慣改善プログラムなど、新しい疾病予防戦略について深掘りします。", image: "画像 (35).jpg" },
            { year: 2024, month: 7, title: "ロボット支援手術の拡大とトレーニング：外科医のスキル向上", summary: "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。", image: "画像 (36).jpg" },
            { year: 2024, month: 7, title: "医療従事者のウェルビーイング向上：組織と個人の取り組み", summary: "医療従事者の心身の健康と幸福感を高めるための組織的な支援（労働環境改善、メンタルヘルスプログラム）と、個人でできるセルフケアについて議論します。", image: "画像 (37).jpg" },
            { year: 2024, month: 7, title: "災害医療における連携体制：平時からの備えと訓練", summary: "大規模災害発生時に医療機能を迅速に展開するための多機関連携。平時からの訓練、情報共有体制、医療物資の備蓄の重要性を解説します。", image: "画像 (38).jpg" },
            { year: 2024, month: 6, title: "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢", summary: "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。", image: "画像 (39).jpg" },
            { year: 2024, month: 6, title: "医療現場でのハラスメント対策：働きやすい職場環境のために", summary: "医療現場におけるハラスメントの実態と、それを防止するための具体的な対策。組織の意識改革、相談窓口の設置、被害者支援の重要性について提言します。", image: "画像 (40).jpg" },
            { year: 2024, month: 6, title: "希少疾患治療薬のアクセス改善：オーファンドラッグの課題", summary: "治療法が限られる希少疾患患者への治療薬アクセス改善は世界的な課題です。オーファンドラッグの開発支援、薬価設定、国際的な協力について考察します。", image: "画像 (41).jpg" },
            { year: 2024, month: 5, title: "栄養と疾患の関係性研究：エビデンスに基づく食事指導", summary: "最新の栄養学研究に基づき、特定の栄養素や食事が疾患の発症・進行にどう影響するかを解説。医師によるエビデンスに基づいた食事指導の重要性を強調します。", image: "画像 (42).jpg" },
            { year: 2024, month: 5, title: "医療AIの倫理的ガイドラインと運用：安全で公正な利用のために", summary: "医療AIの急速な発展に伴い、その倫理的な運用が重要視されています。AIの公平性、透明性、責任の所在に関するガイドラインとその実践について解説します。", image: "画像 (43).jpg" },
            { year: 2024, month: 5, title: "グローバルヘルス課題への貢献：日本の医療技術と知見", summary: "世界が直面する感染症、貧困、格差といったグローバルヘルス課題に対し、日本の医療技術や公衆衛生の知見がどのように貢献できるかを考察します。", image: "画像 (44).jpg" },
            { year: 2024, month: 4, title: "疾病予防のための新たな戦略：ゲノム情報とライフスタイル介入", summary: "個人のゲノム情報を活用したリスク評価と、それに基づいた個別化された生活習慣改善プログラムなど、新しい疾病予防戦略について深掘りします。", image: "画像 (45).jpg" },
            { year: 2024, month: 4, title: "ロボット支援手術の拡大とトレーニング：外科医のスキル向上", summary: "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。", image: "画像 (46).jpg" },
            { year: 2024, month: 4, title: "医療従事者のウェルビーイング向上：組織と個人の取り組み", summary: "医療従事者の心身の健康と幸福感を高めるための組織的な支援（労働環境改善、メンタルヘルスプログラム）と、個人でできるセルフケアについて議論します。", image: "画像 (47).jpg" },
            { year: 2024, month: 3, title: "災害医療における連携体制：平時からの備えと訓練", summary: "大規模災害発生時に医療機能を迅速に展開するための多機関連携。平時からの訓練、情報共有体制、医療物資の備蓄の重要性を解説します。", image: "画像 (48).jpg" },
            { year: 2024, month: 3, title: "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢", summary: "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。", image: "画像 (49).jpg" },
            { year: 2024, month: 3, title: "医療現場でのハラスメント対策：働きやすい職場環境のために", summary: "医療現場におけるハラスメントの実態と、それを防止するための具体的な対策。組織の意識改革、相談窓口の設置、被害者支援の重要性について提言します。", image: "画像 (50).jpg" },
            { year: 2024, month: 2, title: "希少疾患治療薬のアクセス改善：オーファンドラッグの課題", summary: "治療法が限られる希少疾患患者への治療薬アクセス改善は世界的な課題です。オーファンドラッグの開発支援、薬価設定、国際的な協力について考察します。", image: "画像 (51).jpg" },
            { year: 2024, month: 2, title: "栄養と疾患の関係性研究：エビデンスに基づく食事指導", summary: "最新の栄養学研究に基づき、特定の栄養素や食事が疾患の発症・進行にどう影響するかを解説。医師によるエビデンスに基づいた食事指導の重要性を強調します。", image: "画像 (52).jpg" },
            { year: 2024, month: 2, title: "医療AIの倫理的ガイドラインと運用：安全で公正な利用のために", summary: "医療AIの急速な発展に伴い、その倫理的な運用が重要視されています。AIの公平性、透明性、責任の所在に関するガイドラインとその実践について解説します。", image: "画像 (53).jpg" },
            { year: 2024, month: 1, title: "グローバルヘルス課題への貢献：日本の医療技術と知見", summary: "世界が直面する感染症、貧困、格差といったグローバルヘルス課題に対し、日本の医療技術や公衆衛生の知見がどのように貢献できるかを考察します。", image: "画像 (54).jpg" },
            { year: 2024, month: 1, title: "疾病予防のための新たな戦略：ゲノム情報とライフスタイル介入", summary: "個人のゲノム情報を活用したリスク評価と、それに基づいた個別化された生活習慣改善プログラムなど、新しい疾病予防戦略について深掘りします。", image: "画像 (55).jpg" },
            { year: 2024, month: 1, title: "ロボット支援手術の拡大とトレーニング：外科医のスキル向上", summary: "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。", image: "画像 (56).jpg" },
            
            // 2023年
            { year: 2023, month: 11, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (57).jpg" },
            { year: 2023, month: 11, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (58).jpg" },
            { year: 2023, month: 11, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (59).jpg" },
            { year: 2023, month: 10, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (60).jpg" },
            { year: 2023, month: 10, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (61).jpg" },
            { year: 2023, month: 10, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (62).jpg" },
            { year: 2023, month: 9, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (63).jpg" },
            { year: 2023, month: 9, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (64).jpg" },
            { year: 2023, month: 9, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (65).jpg" },
            { year: 2023, month: 8, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (66).jpg" },
            { year: 2023, month: 8, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (67).jpg" },
            { year: 2023, month: 8, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (68).jpg" },
            { year: 2023, month: 7, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (69).jpg" },
            { year: 2023, month: 7, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (70).jpg" },
            { year: 2023, month: 7, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (71).jpg" },
            { year: 2023, month: 6, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (72).jpg" },
            { year: 2023, month: 6, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (73).jpg" },
            { year: 2023, month: 6, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (74).jpg" },
            { year: 2023, month: 5, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (75).jpg" },
            { year: 2023, month: 5, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (76).jpg" },
            { year: 2023, month: 5, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (77).jpg" },
            { year: 2023, month: 4, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (78).jpg" },
            { year: 2023, month: 4, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (79).jpg" },
            { year: 2023, month: 4, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (80).jpg" },
            { year: 2023, month: 3, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (81).jpg" },
            { year: 2023, month: 3, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (82).jpg" },
            { year: 2023, month: 3, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (83).jpg" },
            { year: 2023, month: 2, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (84).jpg" },
            { year: 2023, month: 2, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (85).jpg" },
            { year: 2023, month: 2, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (86).jpg" },
            { year: 2023, month: 1, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (87).jpg" },
            { year: 2023, month: 1, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (88).jpg" },
            { year: 2023, month: 1, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (89).jpg" },
            // 2022年
            { year: 2022, month: 11, title: "COVID-19：初期対応と感染拡大の抑制策の検証", summary: "未知のウイルスに対し、各国の初期対応がどうであったか、感染拡大を抑制するために講じられた具体的な施策とその効果を分析します。", image: "画像 (90).jpg" },
            { year: 2022, month: 11, title: "テレワークとオンライン診療の急拡大：コロナ禍が変えた医療の形", summary: "COVID-19パンデミックが加速させたオンライン診療とテレワーク導入。その利便性と課題、今後の定着について掘り下げます。", image: "画像 (91).jpg" },
            { year: 2022, month: 11, title: "医療従事者の精神的負担とサポート体制：パンデミックの影で", summary: "最前線で奮闘する医療従事者が直面した精神的ストレスの実態と、彼らを支えるために国内外で構築されたサポートプログラムを紹介します。", image: "画像 (92).jpg" },
            { year: 2022, month: 10, title: "パンデミック下の医療体制強化策：病床確保と人材配置", summary: "予期せぬ医療需要の急増に対し、政府や医療機関がどのように病床を確保し、医療人材を最適に配置したか、その課題と教訓を検証します。", image: "画像 (93).jpg" },
            { year: 2022, month: 10, title: "COVID-19ワクチン開発の進捗と期待：最新研究レビュー", summary: "世界中で進められたCOVID-19ワクチンの開発競争。様々なタイプのワクチンのメカニズム、臨床試験データ、そして今後の展望を概説します。", image: "画像 (94).jpg" },
            { year: 2022, month: 10, title: "医療機関におけるBCP（事業継続計画）：パンデミックからの教訓", summary: "災害や感染症流行時に医療機能を維持するためのBCPの重要性。コロナ禍で明らかになった課題と、今後のBCP策定・見直しのポイントを解説します。", image: "画像 (95).jpg" },
            { year: 2022, month: 9, title: "新しい生活様式と医療の未来：感染症時代の健康管理", summary: "マスク着用、手洗い、ソーシャルディスタンスなど、新しい生活様式が常態化する中で、医療がどのように変化し、人々の健康管理に貢献していくかを探ります。", image: "画像 (96).jpg" },
            { year: 2022, month: 9, title: "遠隔医療技術の可能性と課題：地域格差解消への貢献", summary: "遠隔医療技術が持つ、医療過疎地域の課題解決への可能性と、技術的・法的な課題、そして普及に向けたロードマップについて考察します。", image: "画像 (97).jpg" },
            { year: 2022, month: 9, title: "グローバルな感染症対策協力：国際機関の役割と日本の貢献", summary: "国境を越える感染症に対し、WHOをはじめとする国際機関が果たす役割、そして日本が国際社会にどのように貢献してきたかをレビューします。", image: "画像 (98).jpg" },
            { year: 2022, month: 8, title: "医療現場におけるデジタル化の推進：電子カルテからAIまで", summary: "デジタル技術が医療現場にもたらす変革。電子カルテの普及、AIによる診断支援、そしてIoTデバイスを活用した遠隔モニタリングの動向を追います。", image: "画像 (99).jpg" },
            { year: 2022, month: 8, title: "COVID-19と併存疾患管理：慢性疾患患者への影響と治療戦略", summary: "COVID-19が慢性疾患を持つ患者に与えた影響、およびパンデミック下での適切な疾患管理戦略、治療プロトコルの調整について議論します。", image: "画像 (100).jpg" },
            { year: 2022, month: 8, title: "地域医療連携の新たな形：ポストコロナ時代の医療供給体制", summary: "感染症流行を経て、地域医療連携の重要性が再認識されています。病院と診療所、介護施設が連携し、住民を支える新たな医療供給体制の構築を探ります。", image: "画像 (101).jpg" },
            { year: 2022, month: 7, title: "COVID-19ワクチン接種プログラムの進展と副反応の実態", summary: "ワクチン接種が本格化する中、接種率の向上策、期待される集団免疫、そして懸念される副反応や長期的な安全性に関する最新情報を解説します。", image: "画像 (102).jpg" },
            { year: 2022, month: 7, title: "「ロングCOVID」の病態と治療アプローチ：新たな医療課題", summary: "COVID-19回復後も続く様々な症状（ロングCOVID）について、その複雑な病態生理、診断基準、そして多岐にわたる治療アプローチを紹介します。", image: "画像 (103).jpg" },
            { year: 2022, month: 7, title: "医療DX推進のためのデータ活用：匿名加工情報とPBR", summary: "医療DXの基盤となる医療データの利活用。匿名加工情報を用いた研究、患者ベースド・レジストリ（PBR）の構築と意義について掘り下げます。", image: "画像 (104).jpg" },
            { year: 2022, month: 6, title: "ウィズコロナ時代の外来診療：感染対策と患者安心への工夫", summary: "感染リスクを最小限に抑えつつ、患者が安心して受診できる外来診療のあり方。動線分離、換気対策、オンライン問診の活用などを紹介します。", image: "画像 (105).jpg" },
            { year: 2022, month: 6, title: "医療資源の最適配分と公平性：パンデミック下での意思決定", summary: "限られた医療資源をどのように配分するかという倫理的・実践的課題。トリアージの原則、公平なアクセスの確保、医療者の負担軽減策について議論します。", image: "画像 (106).jpg" },
            { year: 2022, month: 6, title: "パンデミックがもたらした医療教育の変化：オンライン化とシミュレーション", summary: "COVID-19が医療教育に与えた影響。オンライン講義への移行、バーチャルリアリティを活用したシミュレーション教育の導入事例を検証します。", image: "画像 (107).jpg" },
            { year: 2022, month: 5, title: "電子カルテシステムの最新動向：クラウド化と連携強化", summary: "進化する電子カルテシステム。クラウドベースのEHRのメリット、他システムとの連携強化、そしてデータ共有の未来について概説します。", image: "画像 (108).jpg" },
            { year: 2022, month: 5, title: "ポストコロナにおける医療の課題：医療費増大と持続可能性", summary: "パンデミック後の医療現場が直面する課題。累積する医療費の増大、医療提供体制の維持、そして持続可能な医療システムの構築に向けた提言をします。", image: "画像 (109).jpg" },
            { year: 2022, month: 5, title: "感染症流行と医療経済：パンデミックが変えた医療費構造", summary: "感染症流行が医療経済に与えた具体的な影響。医療費の変動、新たな支出項目、そして保険制度への影響について経済学的視点から分析します。", image: "画像 (110).jpg" },
            { year: 2022, month: 4, title: "新しい治療薬の承認プロセスと迅速化：患者アクセスへの貢献", summary: "難病や希少疾患に対する新しい治療薬が患者に届くまでの承認プロセス。迅速承認制度の活用、開発コスト、そしてアクセス改善策を詳述します。", image: "画像 (111).jpg" },
            { year: 2022, month: 4, title: "医療従事者のスキルアップと研修：変化するニーズへの対応", summary: "医療技術の進歩や社会情勢の変化に対応するための医療従事者の継続的な学習。最新の研修プログラム、リカレント教育の重要性について考察します。", image: "画像 (112).jpg" },
            { year: 2022, month: 4, title: "患者中心の医療提供体制：Shared Decision Makingの推進", summary: "患者の価値観や意向を尊重し、医療者が情報を提供しながら共に治療方針を決定するShared Decision Making (SDM)の理念と実践について解説します。", image: "画像 (113).jpg" },
            { year: 2022, month: 3, title: "コロナ禍からの医療現場の回復戦略：人員配置と資金確保", summary: "パンデミックで疲弊した医療現場の回復に向けた戦略。医療人材の再配置、財政的支援、そして持続的な運営体制の再構築について提言します。", image: "画像 (114).jpg" },
            { year: 2022, month: 3, title: "医療人材不足への対策と外国人材活用：多様な働き方", summary: "深刻化する医療人材不足に対し、外国人医師・看護師の受け入れ、働き方改革による定着率向上、多様なキャリアパスの創出策を検討します。", image: "画像 (115).jpg" },
            { year: 2022, month: 3, title: "再生医療の臨床応用と展望：幹細胞治療の最新研究", summary: "iPS細胞やES細胞を用いた再生医療が臨床現場にどう応用されているか、最新の研究動向、そして今後の疾患治療への可能性を探ります。", image: "画像 (116).jpg" },
            { year: 2022, month: 2, title: "高齢化社会と在宅医療の重要性：多職種連携の深化", summary: "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、患者が住み慣れた場所で質の高いケアを受けられる仕組みを構築します。", image: "画像 (117).jpg" },
            { year: 2022, month: 2, title: "ゲノム医療の発展と個別化医療：がん治療への応用", summary: "個人の遺伝子情報に基づいたゲノム医療が、がん治療をはじめとする様々な疾患治療にどう貢献しているか、その最新の知見と課題を解説します。", image: "画像 (118).jpg" },
            { year: 2022, month: 2, title: "医療機関のサイバーセキュリティ対策：情報漏洩リスクと防御", summary: "電子カルテの普及に伴い増大するサイバー攻撃のリスク。医療機関が取るべきセキュリティ対策、個人情報保護の重要性、緊急時の対応を詳述します。", image: "画像 (119).jpg" },
            { year: 2022, month: 1, title: "地域包括ケアシステムの深化：住民の健康を支える", summary: "住まい、医療、介護、予防、生活支援が一体的に提供される地域包括ケアシステム。その深化に向けた課題と、医師の関わり方について考察します。", image: "画像 (120).jpg" },
            { year: 2022, month: 1, title: "医療費抑制と効率化のバランス：持続可能な医療制度へ", summary: "増大する医療費への対応として、医療の効率化と質の維持をどう両立させるか。予防医療の推進、適正な診療報酬制度のあり方を議論します。", image: "画像 (121).jpg" },
            { year: 2022, month: 1, title: "予防医療と健康寿命の延伸：医師の新たな役割", summary: "疾病の治療だけでなく、予防に重点を置く予防医療の重要性。医師が患者の健康寿命延伸にどう貢献できるか、その具体的なアプローチを紹介します。", image: "画像 (122).jpg" },
        
            // 2021年
            { year: 2021, month: 11, title: "医師の働き方改革：QOL向上のための実践的アプローチ", summary: "長時間労働の是正から、ワークライフバランスの実現に向けた具体的な施策と、医療機関での導入事例を解説します。", image: "画像 (123).jpg" },
            { year: 2021, month: 11, title: "AIを活用した画像診断の最前線：臨床現場への影響と課題", summary: "AIがどのように画像診断を革新しているか、その精度向上、診断時間の短縮、そして今後の倫理的課題について深掘りします。", image: "画像 (124).jpg" },
            { year: 2021, month: 11, title: "地域医療における医師の役割：過疎地医療の現状と未来", summary: "高齢化と人口減少が進む地域での医療提供の現状、医師に求められる多岐にわたる役割、そして持続可能な地域医療の構築策を考察します。", image: "画像 (125).jpg" },
            { year: 2021, month: 10, title: "最新の感染症対策ガイドライン：病院での実践と注意点", summary: "新型感染症の脅威が増す中、病院での標準的な感染症対策、隔離プロトコル、医療従事者の安全確保策を詳述します。", image: "画像 (126).jpg" },
            { year: 2021, month: 10, title: "開業医が知っておくべき税務知識：節税と経理のポイント", summary: "開業医にとって不可欠な税務知識。医療法人化のメリット・デメリット、節税対策、日々の経理処理の効率化について解説します。", image: "画像 (127).jpg" },
            { year: 2021, month: 10, title: "医療過誤を防ぐためのチーム医療：コミュニケーションの重要性", summary: "医療現場でのヒューマンエラーを最小限に抑えるためのチーム内コミュニケーションの強化、安全文化の醸成について事例を交えて紹介します。", image: "画像 (128).jpg" },
            { year: 2021, month: 9, title: "ジェネリック医薬品の現状と課題：処方と患者指導のポイント", summary: "ジェネリック医薬品の普及状況、品質と安全性に関する議論、医師が患者へ説明する際のポイント、経済的側面について考察します。", image: "画像 (129).jpg" },
            { year: 2021, month: 9, title: "若手医師のためのキャリアプランニング：専門医取得から独立まで", summary: "キャリアの選択肢が多様化する中で、若手医師が自身の専門性を確立し、理想のキャリアパスを描くためのロードマップを提案します。", image: "画像 (130).jpg" },
            { year: 2021, month: 9, title: "オンライン診療の導入事例と法的側面：メリット・デメリット", summary: "オンライン診療の全国的な導入が進む中、成功事例、導入時の法的留意点、そして患者と医師双方にとっての利点と課題を検証します。", image: "画像 (131).jpg" },
            { year: 2021, month: 8, title: "患者エンゲージメントを高めるコミュニケーション術：信頼関係の構築", summary: "患者が治療に積極的に参加するための、医師からの効果的な情報提供、共感的な傾聴、相互理解を深めるコミュニケーション手法を習得します。", image: "画像 (132).jpg" },
            { year: 2021, month: 8, title: "先進医療技術の倫理的側面：ゲノム編集と生命倫理", summary: "急速に進歩する再生医療やゲノム編集技術が提起する倫理的問題、社会的な合意形成の必要性、医師の果たすべき役割について議論します。", image: "画像 (133).jpg" },
            { year: 2021, month: 8, title: "医師のためのメンタルヘルスケア：バーンアウト予防とストレス管理", summary: "多忙な医療現場で心身の健康を保つためのメンタルヘルス対策。ストレス兆候の早期発見、自己ケア、専門家サポートの活用法を紹介します。", image: "画像 (134).jpg" },
            { year: 2021, month: 7, title: "COVID-19：初期対応と感染拡大の抑制策の検証", summary: "未知のウイルスに対し、各国の初期対応がどうであったか、感染拡大を抑制するために講じられた具体的な施策とその効果を分析します。", image: "画像 (135).jpg" },
            { year: 2021, month: 7, title: "テレワークとオンライン診療の急拡大：コロナ禍が変えた医療の形", summary: "COVID-19パンデミックが加速させたオンライン診療とテレワーク導入。その利便性と課題、今後の定着について掘り下げます。", image: "画像 (136).jpg" },
            { year: 2021, month: 7, title: "医療従事者の精神的負担とサポート体制：パンデミックの影で", summary: "最前線で奮闘する医療従事者が直面した精神的ストレスの実態と、彼らを支えるために国内外で構築されたサポートプログラムを紹介します。", image: "画像 (137).jpg" },
            { year: 2021, month: 6, title: "パンデミック下の医療体制強化策：病床確保と人材配置", summary: "予期せぬ医療需要の急増に対し、政府や医療機関がどのように病床を確保し、医療人材を最適に配置したか、その課題と教訓を検証します。", image: "画像 (138).jpg" },
            { year: 2021, month: 6, title: "COVID-19ワクチン開発の進捗と期待：最新研究レビュー", summary: "世界中で進められたCOVID-19ワクチンの開発競争。様々なタイプのワクチンのメカニズム、臨床試験データ、そして今後の展望を概説します。", image: "画像 (139).jpg" },
            { year: 2021, month: 6, title: "医療機関におけるBCP（事業継続計画）：パンデミックからの教訓", summary: "災害や感染症流行時に医療機能を維持するためのBCPの重要性。コロナ禍で明らかになった課題と、今後のBCP策定・見直しのポイントを解説します。", image: "画像 (140).jpg" },
            { year: 2021, month: 5, title: "新しい生活様式と医療の未来：感染症時代の健康管理", summary: "マスク着用、手洗い、ソーシャルディスタンスなど、新しい生活様式が常態化する中で、医療がどのように変化し、人々の健康管理に貢献していくかを探ります。", image: "画像 (141).jpg" },
            { year: 2021, month: 5, title: "遠隔医療技術の可能性と課題：地域格差解消への貢献", summary: "遠隔医療技術が持つ、医療過疎地域の課題解決への可能性と、技術的・法的な課題、そして普及に向けたロードマップについて考察します。", image: "画像 (142).jpg" },
            { year: 2021, month: 5, title: "グローバルな感染症対策協力：国際機関の役割と日本の貢献", summary: "国境を越える感染症に対し、WHOをはじめとする国際機関が果たす役割、そして日本が国際社会にどのように貢献してきたかをレビューします。", image: "画像 (143).jpg" },
            { year: 2021, month: 4, title: "医療現場におけるデジタル化の推進：電子カルテからAIまで", summary: "デジタル技術が医療現場にもたらす変革。電子カルテの普及、AIによる診断支援、そしてIoTデバイスを活用した遠隔モニタリングの動向を追います。", image: "画像 (144).jpg" },
            { year: 2021, month: 4, title: "COVID-19と併存疾患管理：慢性疾患患者への影響と治療戦略", summary: "COVID-19が慢性疾患を持つ患者に与えた影響、およびパンデミック下での適切な疾患管理戦略、治療プロトコルの調整について議論します。", image: "画像 (145).jpg" },
            { year: 2021, month: 4, title: "地域医療連携の新たな形：ポストコロナ時代の医療供給体制", summary: "感染症流行を経て、地域医療連携の重要性が再認識されています。病院と診療所、介護施設が連携し、住民を支える新たな医療供給体制の構築を探ります。", image: "画像 (146).jpg" },
            { year: 2021, month: 3, title: "COVID-19ワクチン接種プログラムの進展と副反応の実態", summary: "ワクチン接種が本格化する中、接種率の向上策、期待される集団免疫、そして懸念される副反応や長期的な安全性に関する最新情報を解説します。", image: "画像 (147).jpg" },
            { year: 2021, month: 3, title: "「ロングCOVID」の病態と治療アプローチ：新たな医療課題", summary: "COVID-19回復後も続く様々な症状（ロングCOVID）について、その複雑な病態生理、診断基準、そして多岐にわたる治療アプローチを紹介します。", image: "画像 (148).jpg" },
            { year: 2021, month: 3, title: "医療DX推進のためのデータ活用：匿名加工情報とPBR", summary: "医療DXの基盤となる医療データの利活用。匿名加工情報を用いた研究、患者ベースド・レジストリ（PBR）の構築と意義について掘り下げます。", image: "画像 (149).jpg" },
            { year: 2021, month: 2, title: "ウィズコロナ時代の外来診療：感染対策と患者安心への工夫", summary: "感染リスクを最小限に抑えつつ、患者が安心して受診できる外来診療のあり方。動線分離、換気対策、オンライン問診の活用などを紹介します。", image: "画像 (150).jpg" },
            { year: 2021, month: 2, title: "医療資源の最適配分と公平性：パンデミック下での意思決定", summary: "限られた医療資源をどのように配分するかという倫理的・実践的課題。トリアージの原則、公平なアクセスの確保、医療者の負担軽減策について議論します。", image: "画像 (151).jpg" },
            { year: 2021, month: 2, title: "パンデミックがもたらした医療教育の変化：オンライン化とシミュレーション", summary: "COVID-19が医療教育に与えた影響。オンライン講義への移行、バーチャルリアリティを活用したシミュレーション教育の導入事例を検証します。", image: "画像 (152).jpg" },
            { year: 2021, month: 1, title: "電子カルテシステムの最新動向：クラウド化と連携強化", summary: "進化する電子カルテシステム。クラウドベースのEHRのメリット、他システムとの連携強化、そしてデータ共有の未来について概説します。", image: "画像 (153).jpg" },
            { year: 2021, month: 1, title: "ポストコロナにおける医療の課題：医療費増大と持続可能性", summary: "パンデミック後の医療現場が直面する課題。累積する医療費の増大、医療提供体制の維持、そして持続可能な医療システムの構築に向けた提言をします。", image: "画像 (154).jpg" },
            { year: 2021, month: 1, title: "感染症流行と医療経済：パンデミックが変えた医療費構造", summary: "感染症流行が医療経済に与えた具体的な影響。医療費の変動、新たな支出項目、そして保険制度への影響について経済学的視点から分析します。", image: "画像 (155).jpg" },
            
            // 2020年
            { year: 2020, month: 11, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (156).jpg" },
            { year: 2020, month: 11, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (157).jpg" },
            { year: 2020, month: 11, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (158).jpg" },
            { year: 2020, month: 10, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (159).jpg" },
            { year: 2020, month: 10, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (160).jpg" },
            { year: 2020, month: 10, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (161).jpg" },
            { year: 2020, month: 9, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (162).jpg" },
            { year: 2020, month: 9, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (163).jpg" },
            { year: 2020, month: 9, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (164).jpg" },
            { year: 2020, month: 8, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (165).jpg" },
            { year: 2020, month: 8, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (166).jpg" },
            { year: 2020, month: 8, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (167).jpg" },
            { year: 2020, month: 7, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (168).jpg" },
            { year: 2020, month: 7, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (169).jpg" },
            { year: 2020, month: 7, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (170).jpg" },
            { year: 2020, month: 6, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (171).jpg" },
            { year: 2020, month: 6, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (172).jpg" },
            { year: 2020, month: 6, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (173).jpg" },
            { year: 2020, month: 5, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (174).jpg" },
            { year: 2020, month: 5, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (175).jpg" },
            { year: 2020, month: 5, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (176).jpg" },
            { year: 2020, month: 4, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (177).jpg" },
            { year: 2020, month: 4, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (178).jpg" },
            { year: 2020, month: 4, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (179).jpg" },
            { year: 2020, month: 3, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (180).jpg" },
            { year: 2020, month: 3, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (181).jpg" },
            { year: 2020, month: 3, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (182).jpg" },
            { year: 2020, month: 2, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (183).jpg" },
            { year: 2020, month: 2, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (184).jpg" },
            { year: 2020, month: 2, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (185).jpg" },
            { year: 2020, month: 1, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (186).jpg" },
            { year: 2020, month: 1, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (187).jpg" },
            { year: 2020, month: 1, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (188).jpg" },

            // 2019年
            { year: 2019, month: 11, title: "医師の働き方改革：QOL向上のための実践的アプローチ", summary: "長時間労働の是正から、ワークライフバランスの実現に向けた具体的な施策と、医療機関での導入事例を解説します。", image: "画像 (189).jpg" },
            { year: 2019, month: 11, title: "AIを活用した画像診断の最前線：臨床現場への影響と課題", summary: "AIがどのように画像診断を革新しているか、その精度向上、診断時間の短縮、そして今後の倫理的課題について深掘りします。", image: "画像 (190).jpg" },
            { year: 2019, month: 11, title: "地域医療における医師の役割：過疎地医療の現状と未来", summary: "高齢化と人口減少が進む地域での医療提供の現状、医師に求められる多岐にわたる役割、そして持続可能な地域医療の構築策を考察します。", image: "画像 (191).jpg" },
            { year: 2019, month: 10, title: "最新の感染症対策ガイドライン：病院での実践と注意点", summary: "新型感染症の脅威が増す中、病院での標準的な感染症対策、隔離プロトコル、医療従事者の安全確保策を詳述します。", image: "画像 (192).jpg" },
            { year: 2019, month: 10, title: "開業医が知っておくべき税務知識：節税と経理のポイント", summary: "開業医にとって不可欠な税務知識。医療法人化のメリット・デメリット、節税対策、日々の経理処理の効率化について解説します。", image: "画像 (193).jpg" },
            { year: 2019, month: 10, title: "医療過誤を防ぐためのチーム医療：コミュニケーションの重要性", summary: "医療現場でのヒューマンエラーを最小限に抑えるためのチーム内コミュニケーションの強化、安全文化の醸成について事例を交えて紹介します。", image: "画像 (194).jpg" },
            { year: 2019, month: 9, title: "ジェネリック医薬品の現状と課題：処方と患者指導のポイント", summary: "ジェネリック医薬品の普及状況、品質と安全性に関する議論、医師が患者へ説明する際のポイント、経済的側面について考察します。", image: "画像 (195).jpg" },
            { year: 2019, month: 9, title: "若手医師のためのキャリアプランニング：専門医取得から独立まで", summary: "キャリアの選択肢が多様化する中で、若手医師が自身の専門性を確立し、理想のキャリアパスを描くためのロードマップを提案します。", image: "画像 (196).jpg" },
            { year: 2019, month: 9, title: "オンライン診療の導入事例と法的側面：メリット・デメリット", summary: "オンライン診療の全国的な導入が進む中、成功事例、導入時の法的留意点、そして患者と医師双方にとっての利点と課題を検証します。", image: "画像 (197).jpg" },
            { year: 2019, month: 8, title: "患者エンゲージメントを高めるコミュニケーション術：信頼関係の構築", summary: "患者が治療に積極的に参加するための、医師からの効果的な情報提供、共感的な傾聴、相互理解を深めるコミュニケーション手法を習得します。", image: "画像 (198).jpg" },
            { year: 2019, month: 8, title: "先進医療技術の倫理的側面：ゲノム編集と生命倫理", summary: "急速に進歩する再生医療やゲノム編集技術が提起する倫理的問題、社会的な合意形成の必要性、医師の果たすべき役割について議論します。", image: "画像 (199).jpg" },
            { year: 2019, month: 8, title: "医師のためのメンタルヘルスケア：バーンアウト予防とストレス管理", summary: "多忙な医療現場で心身の健康を保つためのメンタルヘルス対策。ストレス兆候の早期発見、自己ケア、専門家サポートの活用法を紹介します。", image: "画像 (200).jpg" },
            { year: 2019, month: 7, title: "COVID-19：初期対応と感染拡大の抑制策の検証", summary: "未知のウイルスに対し、各国の初期対応がどうであったか、感染拡大を抑制するために講じられた具体的な施策とその効果を分析します。", image: "画像 (201).jpg" },
            { year: 2019, month: 7, title: "テレワークとオンライン診療の急拡大：コロナ禍が変えた医療の形", summary: "COVID-19パンデミックが加速させたオンライン診療とテレワーク導入。その利便性と課題、今後の定着について掘り下げます。", image: "画像 (202).jpg" },
            { year: 2019, month: 7, title: "医療従事者の精神的負担とサポート体制：パンデミックの影で", summary: "最前線で奮闘する医療従事者が直面した精神的ストレスの実態と、彼らを支えるために国内外で構築されたサポートプログラムを紹介します。", image: "画像 (203).jpg" },
            { year: 2019, month: 6, title: "パンデミック下の医療体制強化策：病床確保と人材配置", summary: "予期せぬ医療需要の急増に対し、政府や医療機関がどのように病床を確保し、医療人材を最適に配置したか、その課題と教訓を検証します。", image: "画像 (204).jpg" },
            { year: 2019, month: 6, title: "COVID-19ワクチン開発の進捗と期待：最新研究レビュー", summary: "世界中で進められたCOVID-19ワクチンの開発競争。様々なタイプのワクチンのメカニズム、臨床試験データ、そして今後の展望を概説します。", image: "画像 (205).jpg" },
            { year: 2019, month: 6, title: "医療機関におけるBCP（事業継続計画）：パンデミックからの教訓", summary: "災害や感染症流行時に医療機能を維持するためのBCPの重要性。コロナ禍で明らかになった課題と、今後のBCP策定・見直しのポイントを解説します。", image: "画像 (206).jpg" },
            { year: 2019, month: 5, title: "新しい生活様式と医療の未来：感染症時代の健康管理", summary: "マスク着用、手洗い、ソーシャルディスタンスなど、新しい生活様式が常態化する中で、医療がどのように変化し、人々の健康管理に貢献していくかを探ります。", image: "画像 (207).jpg" },
            { year: 2019, month: 5, title: "遠隔医療技術の可能性と課題：地域格差解消への貢献", summary: "遠隔医療技術が持つ、医療過疎地域の課題解決への可能性と、技術的・法的な課題、そして普及に向けたロードマップについて考察します。", image: "画像 (208).jpg" },
            { year: 2019, month: 5, title: "グローバルな感染症対策協力：国際機関の役割と日本の貢献", summary: "国境を越える感染症に対し、WHOをはじめとする国際機関が果たす役割、そして日本が国際社会にどのように貢献してきたかをレビューします。", image: "画像 (209).jpg" },
            { year: 2019, month: 4, title: "医療現場におけるデジタル化の推進：電子カルテからAIまで", summary: "デジタル技術が医療現場にもたらす変革。電子カルテの普及、AIによる診断支援、そしてIoTデバイスを活用した遠隔モニタリングの動向を追います。", image: "画像 (210).jpg" },
            { year: 2019, month: 4, title: "COVID-19と併存疾患管理：慢性疾患患者への影響と治療戦略", summary: "COVID-19が慢性疾患を持つ患者に与えた影響、およびパンデミック下での適切な疾患管理戦略、治療プロトコルの調整について議論します。", image: "画像 (211).jpg" },
            { year: 2019, month: 4, title: "地域医療連携の新たな形：ポストコロナ時代の医療供給体制", summary: "感染症流行を経て、地域医療連携の重要性が再認識されています。病院と診療所、介護施設が連携し、住民を支える新たな医療供給体制の構築を探ります。", image: "画像 (212).jpg" },
            { year: 2019, month: 3, title: "COVID-19ワクチン接種プログラムの進展と副反応の実態", summary: "ワクチン接種が本格化する中、接種率の向上策、期待される集団免疫、そして懸念される副反応や長期的な安全性に関する最新情報を解説します。", image: "画像 (213).jpg" },
            { year: 2019, month: 3, title: "「ロングCOVID」の病態と治療アプローチ：新たな医療課題", summary: "COVID-19回復後も続く様々な症状（ロングCOVID）について、その複雑な病態生理、診断基準、そして多岐にわたる治療アプローチを紹介します。", image: "画像 (214).jpg" },
            { year: 2019, month: 3, title: "医療DX推進のためのデータ活用：匿名加工情報とPBR", summary: "医療DXの基盤となる医療データの利活用。匿名加工情報を用いた研究、患者ベースド・レジストリ（PBR）の構築と意義について掘り下げます。", image: "画像 (215).jpg" },
            { year: 2019, month: 2, title: "ウィズコロナ時代の外来診療：感染対策と患者安心への工夫", summary: "感染リスクを最小限に抑えつつ、患者が安心して受診できる外来診療のあり方。動線分離、換気対策、オンライン問診の活用などを紹介します。", image: "画像 (216).jpg" },
            { year: 2019, month: 2, title: "医療資源の最適配分と公平性：パンデミック下での意思決定", summary: "限られた医療資源をどのように配分するかという倫理的・実践的課題。トリアージの原則、公平なアクセスの確保、医療者の負担軽減策について議論します。", image: "画像 (217).jpg" },
            { year: 2019, month: 2, title: "パンデミックがもたらした医療教育の変化：オンライン化とシミュレーション", summary: "COVID-19が医療教育に与えた影響。オンライン講義への移行、バーチャルリアリティを活用したシミュレーション教育の導入事例を検証します。", image: "画像 (218).jpg" },
            { year: 2019, month: 1, title: "電子カルテシステムの最新動向：クラウド化と連携強化", summary: "進化する電子カルテシステム。クラウドベースのEHRのメリット、他システムとの連携強化、そしてデータ共有の未来について概説します。", image: "画像 (219).jpg" },
            { year: 2019, month: 1, title: "ポストコロナにおける医療の課題：医療費増大と持続可能性", summary: "パンデミック後の医療現場が直面する課題。累積する医療費の増大、医療提供体制の維持、そして持続可能な医療システムの構築に向けた提言をします。", image: "画像 (220).jpg" },
            { year: 2019, month: 1, title: "感染症流行と医療経済：パンデミックが変えた医療費構造", summary: "感染症流行が医療経済に与えた具体的な影響。医療費の変動、新たな支出項目、そして保険制度への影響について経済学的視点から分析します。", image: "画像 (221).jpg" },
        ];

        // Firebaseのグローバル変数
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

        let app;
        let db;
        let auth;
        let userId = 'anonymous'; // 匿名ユーザーID
        let isAdmin = false; // 管理者ステータス
        
        let currentArticles = blogArticles; // ローカルのブログ記事データを直接使用

        // --- Firebaseの初期化と認証 ---
        async function initializeFirebase() {
            try {
                app = initializeApp(firebaseConfig);
                db = getFirestore(app);
                auth = getAuth(app);

                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        userId = user.uid;
                        console.log("Firebase認証成功。ユーザーID:", userId);
                    } else {
                        console.log("ユーザーがサインインしていません。匿名サインインを試行します。");
                        try {
                            if (initialAuthToken) {
                                await signInWithCustomToken(auth, initialAuthToken);
                            } else {
                                await signInAnonymously(auth);
                            }
                        } catch (error) {
                            console.error("Firebase匿名サインイン失敗:", error);
                        }
                    }
                });
            } catch (error) {
                console.error("Firebase初期化失敗:", error);
            }
        }

        // --- UIレンダリング関数 ---
        function renderArticles() {
            const blogGrid = document.getElementById('blogGrid');
            if (!blogGrid) {
                console.error('blogGrid要素が見つかりません。');
                return;
            }
        
            blogGrid.innerHTML = '';

            const articlesByYearMonth = {};
            currentArticles.forEach(article => {
                const year = article.year;
                const month = article.month;
                if (!articlesByYearMonth[year]) articlesByYearMonth[year] = {};
                if (!articlesByYearMonth[year][month]) articlesByYearMonth[year][month] = [];
                articlesByYearMonth[year][month].push(article);
            });

            const sortedYears = Object.keys(articlesByYearMonth).sort((a, b) => b - a);

            sortedYears.forEach(year => {
                const yearBlock = document.createElement('div');
                yearBlock.className = 'bg-white rounded-xl shadow-lg p-6 mb-8';
                
                const yearHeader = document.createElement('h3');
                yearHeader.className = 'text-2xl font-bold text-primary-blue blog-header collapsed flex items-center gap-2 cursor-pointer';
                yearHeader.innerHTML = `<svg class="icon-medium transform transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><span>${year}年</span>`;
                yearBlock.appendChild(yearHeader);
                
                const monthsContainer = document.createElement('div');
                monthsContainer.className = 'months-container space-y-4 hidden';
                
                const sortedMonths = Object.keys(articlesByYearMonth[year]).sort((a, b) => b - a);
                sortedMonths.forEach(month => {
                    const monthBlock = document.createElement('div');
                    monthBlock.className = 'bg-gray-50 rounded-lg shadow-sm p-4';
                    
                    const monthHeader = document.createElement('h4');
                    monthHeader.className = 'text-xl font-semibold text-secondary-blue blog-header collapsed flex items-center gap-2 cursor-pointer';
                    monthHeader.innerHTML = `<svg class="icon-small transform transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><span>${parseInt(month) + 1}月</span>`;
                    monthBlock.appendChild(monthHeader);
                    
                    const articlesContainer = document.createElement('div');
                    articlesContainer.className = 'articles-container space-y-4 hidden';

                    articlesByYearMonth[year][month].forEach(article => {
                        const articleElement = document.createElement('div');
                        articleElement.className = 'card p-6';
                        articleElement.innerHTML = `
                            <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">${article.title}</h3>
                            <p class="text-medium-gray-text mb-4 text-sm">${article.summary}</p>
                            ${article.image ? `<img src="${article.image}" alt="[ブログ記事のイメージ]" class="w-full h-auto rounded-lg mb-4">` : ''}
                            <a href="#" class="button-primary inline-block text-center read-more-link" data-title="${article.title}" data-summary="${article.summary}" data-image="${article.image}">
                                <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                続きを読む
                            </a>
                        `;
                        articlesContainer.appendChild(articleElement);
                    });
                    
                    monthBlock.appendChild(articlesContainer);
                    monthsContainer.appendChild(monthBlock);

                    monthHeader.addEventListener('click', () => {
                        const icon = monthHeader.querySelector('svg');
                        articlesContainer.classList.toggle('hidden');
                        icon.classList.toggle('rotate-90');
                    });
                });
                
                yearBlock.appendChild(monthsContainer);
                blogGrid.appendChild(yearBlock);

                yearHeader.addEventListener('click', () => {
                    const icon = yearHeader.querySelector('svg');
                    monthsContainer.classList.toggle('hidden');
                    icon.classList.toggle('rotate-90');
                });
            });
        }


        // --- 管理者パネルUI ---
        function renderAdminArticleList() {
            const adminArticleList = document.getElementById('adminArticleList');
            if (!adminArticleList) return;

            adminArticleList.innerHTML = '';

            currentArticles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'p-4 border border-medium-gray rounded-lg bg-white shadow-sm mb-3';
                articleElement.innerHTML = `
                    <div class="flex justify-between items-center mb-2">
                        <h5 class="text-lg font-semibold text-dark-gray-text">${article.title}</h5>
                        <div>
                            <button data-id="${article.id}" class="edit-article-btn admin-button mr-2">編集</button>
                            <button data-id="${article.id}" class="delete-article-btn admin-button delete">削除</button>
                        </div>
                    </div>
                    <p class="text-sm text-medium-gray-text mb-2">${article.summary}</p>
                    <div class="edit-form hidden mt-4">
                        <input type="text" class="edit-title-input admin-input" value="${article.title}">
                        <textarea class="edit-summary-input admin-input h-20 resize-y">${article.summary}</textarea>
                        <label for="editArticleImage-${article.id}" class="block text-dark-gray-text font-semibold mb-2 mt-4">画像ファイル名</label>
                        <input type="text" id="editArticleImage-${article.id}" class="edit-image-input admin-input" value="${article.image || ''}">
                        <button data-id="${article.id}" class="save-edit-btn admin-button mr-2">保存</button>
                        <button class="cancel-edit-btn admin-button delete">キャンセル</button>
                    </div>
                `;
                adminArticleList.appendChild(articleElement);
            });

            adminArticleList.querySelectorAll('.edit-article-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const parent = e.target.closest('.p-4');
                    parent.querySelector('.edit-form').classList.remove('hidden');
                    e.target.classList.add('hidden');
                });
            });

            adminArticleList.querySelectorAll('.cancel-edit-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const parent = e.target.closest('.p-4');
                    parent.querySelector('.edit-form').classList.add('hidden');
                    parent.querySelector('.edit-article-btn').classList.remove('hidden');
                });
            });

            adminArticleList.querySelectorAll('.save-edit-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = e.target.dataset.id;
                    const parent = e.target.closest('.p-4');
                    const newTitle = parent.querySelector('.edit-title-input').value;
                    const newSummary = parent.querySelector('.edit-summary-input').value;
                    const newImage = parent.querySelector('.edit-image-input').value;
                    updateArticle(id, newTitle, newSummary, newImage);
                    parent.querySelector('.edit-form').classList.add('hidden');
                    parent.querySelector('.edit-article-btn').classList.remove('hidden');
                });
            });

            adminArticleList.querySelectorAll('.delete-article-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    if (confirm('この記事を削除してもよろしいですか？')) {
                        const id = e.target.dataset.id;
                        deleteArticle(id);
                    }
                });
            });
        }


        // --- 管理者ログイン/パネルロジック ---
        const adminLoginBtn = document.getElementById('adminLoginBtn');
        const adminPanelBtn = document.getElementById('adminPanelBtn');
        const adminLoginModal = document.getElementById('adminLoginModal');
        const adminPasswordInput = document.getElementById('adminPasswordInput');
        const adminLoginError = document.getElementById('adminLoginError');
        const loginSubmitBtn = document.getElementById('loginSubmitBtn');
        const loginCancelBtn = document.getElementById('loginCancelBtn');
        const adminPanelModal = document.getElementById('adminPanelModal');
        const closeAdminPanelBtn = document.getElementById('closeAdminPanelBtn');
        const addArticleBtn = document.getElementById('addArticleBtn');

        adminLoginBtn.addEventListener('click', () => {
            adminLoginModal.classList.add('active');
            adminPasswordInput.value = '';
            adminLoginError.classList.add('hidden');
        });

        loginSubmitBtn.addEventListener('click', () => {
            const password = adminPasswordInput.value;
            if (password === 'esora243') {
                isAdmin = true;
                adminLoginModal.classList.remove('active');
                adminLoginBtn.classList.add('hidden');
                adminPanelBtn.classList.remove('hidden');
                renderAdminArticleList();
            } else {
                adminLoginError.classList.remove('hidden');
            }
        });

        loginCancelBtn.addEventListener('click', () => {
            adminLoginModal.classList.remove('active');
        });

        adminPanelBtn.addEventListener('click', () => {
            if (isAdmin) {
                adminPanelModal.classList.add('active');
                renderAdminArticleList();
            }
        });

        closeAdminPanelBtn.addEventListener('click', () => {
            adminPanelModal.classList.remove('active');
        });

        addArticleBtn.addEventListener('click', () => {
            const title = document.getElementById('newArticleTitle').value;
            const summary = document.getElementById('newArticleSummary').value;
            const image = document.getElementById('newArticleImage').value;
            if (title && summary) {
                // Firebaseに記事を追加する代わりに、ローカル配列にプッシュ
                blogArticles.push({
                    title,
                    summary,
                    image,
                    year: new Date().getFullYear(),
                    month: new Date().getMonth(),
                    id: `local-${blogArticles.length}` // ローカルIDを割り当て
                });
                renderArticles
