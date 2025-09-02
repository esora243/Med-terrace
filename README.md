<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedReach | 医師・医療従事者のための総合情報サイト</title>
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

        /* 記事詳細モーダルのスタイル */
        .article-modal-content {
            max-width: 800px;
            margin: auto;
            padding: 2rem;
            background-color: white;
            border-radius: 1rem;
        }
        .article-modal-content h3 {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary-blue);
            margin-bottom: 1rem;
        }
        .article-modal-content p {
            line-height: 1.8;
            color: var(--dark-gray-text);
        }
        .article-modal-content .author-info {
            font-style: italic;
            color: var(--medium-gray-text);
            margin-top: 1rem;
            border-top: 1px solid var(--medium-gray);
            padding-top: 1rem;
        }
        /* ブログの折りたたみアイコンのスタイル調整 */
        .year-header, .month-header {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
        .year-header svg, .month-header svg {
            transition: transform 0.3s ease-in-out;
        }
        .year-header.collapsed svg, .month-header.collapsed svg {
            transform: rotate(0deg);
        }
        .year-header.expanded svg, .month-header.expanded svg {
            transform: rotate(90deg);
        }
    </style>
</head>
<body class="antialiased">
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

    <main class="container py-8 md:py-12">
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

        <section id="blog" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">ドクターズブログ：現場の知見と未来への提言</h2>
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                現役医師や医療専門家が執筆するコラム・解説記事です。日々の診療のヒントからキャリア、最新医療トレンドまで、多岐にわたるテーマを深く掘り下げます。
            </p>
            <div id="blogGrid" class="space-y-8">
                </div>
        </section>

        <div id="articleModal" class="admin-panel-overlay">
            <div class="admin-panel-content max-w-2xl text-left">
                <div class="flex justify-between items-center mb-4">
                    <h3 id="modalTitle" class="text-2xl font-bold text-primary-blue">記事タイトル</h3>
                    <button id="closeArticleModalBtn" class="text-gray-500 hover:text-gray-900 text-3xl">×</button>
                </div>
                <img id="modalImage" src="" alt="[記事画像]" class="w-full h-auto rounded-lg mb-4 hidden">
                <p id="modalBody" class="text-base text-dark-gray-text leading-relaxed"></p>
                <div class="mt-8 flex justify-end">
                    <button id="closeArticleModalBtnBottom" class="admin-button delete">閉じる</button>
                </div>
            </div>
        </div>
        
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
                    <a href="https://www.dr-summit.jp/column/clinic_transfer/" target="_blank" class="button-primary inline-block text-center">
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
                        <a href="https://www.google.com/maps/search/?api=1&query=東京都港区芝大門2-3-18" target="_blank" class="text-secondary-blue hover:text-primary-blue transition-colors duration-200">[Google Mapsで見る]</a>
                    </p>
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg shadow-inner">
                        <iframe src="https://maps.google.com/maps?q=東京都港区芝大門2-3-18&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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

        <section id="mhlw-links" class="content-section mb-12 md:mb-16">
            <h2 class="section-title">厚生労働省：医師が知るべき制度・ガイドライン一覧</h2>
            <img src="画像 (26).jpg" alt="[厚生労働省のイメージ]" class="feature-image mx-auto my-8 max-w-4xl">
            <p class="text-md text-medium-gray-text text-center mb-10 max-w-3xl mx-auto">
                医師の皆様に不可欠な厚生労働省の公式情報を、テーマ別に整理しました。必要な制度やガイドラインへ迷わずアクセスいただけます。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

    <footer class="footer-bg text-white py-8 md:py-10 mt-16">
        <div class="container text-center text-sm relative z-10">
            <p>© 2023 MedReach. All rights reserved.</p>
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

    <div id="chatbot-toggle-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9.3 9.3 0 0 1 4 16.1L2 22l6-2Z"/><path d="M10.5 4A9.45 9.45 0 0 1 20 12.5a9.38 9.38 0 0 1-1.2 4.4L22 22l-6-2a9.43 9.43 0 0 1-5.5-1.5"/></svg>
    </div>

    <div id="chatbot-container">
        <div id="chatbot-header">
            <h4 class="font-bold">MedReachサポート</h4>
            <button id="close-chatbot-btn" class="text-white text-3xl font-bold leading-none">×</button>
        </div>
        <div id="chatbot-messages">
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

    <div id="adminPanelModal" class="admin-panel-overlay">
        <div class="admin-panel-content">
            <h3 class="text-2xl font-bold text-primary-blue mb-6">記事管理パネル</h3>

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

            <div class="mb-8">
                <h4 class="text-xl font-semibold text-dark-gray-text mb-4">既存記事の編集・削除</h4>
                <div id="adminArticleList" class="space-y-4">
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

        // Firebaseのグローバル変数
        // 注意: これらの変数は外部から設定されることを想定しています。
        // 設定がない場合、Firebase連携は動作せず、ローカルのデータのみが使用されます。
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

        let app;
        let db;
        let auth;
        let userId = 'anonymous'; // 匿名ユーザーID
        let isAdmin = false; // 管理者ステータス

        // --- 記事データ (2019年から月3本のペースで作成) ---
        // 注意: 現在のバージョンではこのローカルデータを使用します。
        // 管理者パネルでの変更は、ページをリロードすると失われます。
        let blogArticles = [
            // 2025年
            { id: 1, year: 2025, month: 7, title: "オンライン診療の未来：遠隔医療技術の最新動向", summary: "オンライン診療がもたらす医療の変革と、今後期待される新技術や法的課題について解説します。", image: "画像 (3).jpg" },
            { id: 2, year: 2025, month: 7, title: "医師のキャリアパス：専門医以外の選択肢", summary: "臨床医としてだけでなく、産業医、研究者、経営者など多様なキャリアを歩むためのヒントを提供します。", image: "画像 (4).jpg" },
            { id: 3, year: 2025, month: 7, title: "AI診断支援ツールの現状と倫理的課題", summary: "画像診断や問診支援におけるAIツールの活用事例と、その利用に伴う倫理的な問題点について議論します。", image: "画像 (5).jpg" },
            { id: 4, year: 2025, month: 6, title: "地域医療を支えるクリニック経営戦略", summary: "人口減少や高齢化が進む地域でのクリニック経営を成功させるための具体的な戦略と成功事例を紹介します。", image: "画像 (6).jpg" },
            { id: 5, year: 2025, month: 6, title: "再生医療の最前線：iPS細胞治療の臨床応用", summary: "iPS細胞を用いた再生医療技術が、難病治療にどのように貢献しているか、最新の研究動向を深掘りします。", image: "画像 (7).jpg" },
            { id: 6, year: 2025, month: 6, title: "医師のメンタルヘルス：バーンアウトをどう防ぐか", summary: "多忙な医療現場で心身の健康を保つためのストレス管理法や、バーンアウト予防の組織的アプローチを解説します。", image: "画像 (8).jpg" },
            { id: 7, year: 2025, month: 5, title: "医療DX推進の鍵：電子カルテのデータ連携", summary: "医療のデジタルトランスフォーメーションを加速させるための、電子カルテシステム間でのデータ連携の重要性と技術的課題を考察します。", image: "画像 (9).jpg" },
            { id: 8, year: 2025, month: 5, title: "女性医師のキャリアと育児の両立支援", summary: "出産や育児とキャリアを両立させるための、柔軟な勤務形態やサポート制度の事例を紹介し、働きやすい環境づくりを提言します。", image: "画像 (10).jpg" },
            { id: 9, year: 2025, month: 5, title: "希少疾患治療薬の開発動向と患者アクセス", summary: "オーファンドラッグ（希少疾患治療薬）の開発状況と、患者が治療薬にアクセスするための課題や支援策について議論します。", image: "画像 (11).jpg" },
            { id: 10, year: 2025, month: 4, title: "在宅医療の最新動向：多職種連携とICT活用", summary: "超高齢社会における在宅医療の役割。医師、看護師、介護士などが連携し、ICTを活用して質の高いケアを提供するための動向を追います。", image: "画像 (12).jpg" },
            { id: 11, year: 2025, month: 4, title: "医師の働き方改革：タスク・シフト/シェアの進捗", summary: "医師の業務負担軽減のために進められているタスク・シフト/シェアの現状と、今後の課題や展望について解説します。", image: "画像 (13).jpg" },
            { id: 12, year: 2025, month: 4, title: "ゲノム医療の発展：個別化医療の最前線", summary: "個人の遺伝子情報に基づいたがん治療や難病治療の現状と、プレシジョン・メディスンの未来を考察します。", image: "画像 (14).jpg" },
            { id: 13, year: 2025, month: 3, title: "医師賠償責任保険の選び方：リスクマネジメントの基礎", summary: "医療訴訟リスクに備えるための医師賠償責任保険の重要性と、保険選びのポイントを分かりやすく解説します。", image: "画像 (15).jpg" },
            { id: 14, year: 2025, month: 3, title: "医療機器の進化：AI搭載デバイスの安全性評価", summary: "診断や治療を支援するAI搭載医療機器の最新技術と、その導入に際しての安全性評価や倫理的ガイドラインについて議論します。", image: "画像 (16).jpg" },
            { id: 15, year: 2025, month: 3, title: "地域包括ケアシステムの現状と医師の役割", summary: "住み慣れた地域で生活を続けるための地域包括ケアシステム。その構築における医師の役割と多職種連携の課題を考察します。", image: "画像 (17).jpg" },
            { id: 16, year: 2025, month: 2, title: "AIチャットボットが変えるクリニックの患者対応", summary: "患者からの問い合わせ対応を自動化するAIチャットボットの導入事例と、業務効率化への貢献について解説します。", image: "画像 (18).jpg" },
            { id: 17, year: 2025, month: 2, title: "医療機関のセキュリティ対策：サイバー攻撃の脅威", summary: "電子カルテの普及に伴うサイバー攻撃の増加。情報漏洩を防ぐための医療機関が取るべきセキュリティ対策を詳述します。", image: "画像 (19).jpg" },
            { id: 18, year: 2025, month: 2, title: "医師のキャリアを左右するリーダーシップスキル", summary: "チーム医療を成功させるために不可欠なリーダーシップ。医師に求められるコミュニケーション能力やマネジメントスキルについて解説します。", image: "画像 (20).jpg" },
            { id: 19, year: 2025, month: 1, title: "ロボット支援手術の拡大とトレーニング：外科医のスキル向上", summary: "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。", image: "画像 (21).jpg" },
            { id: 20, year: 2025, month: 1, title: "グローバルヘルス課題への貢献：日本の医療技術と知見", summary: "世界が直面する感染症、貧困、格差といったグローバルヘルス課題に対し、日本の医療技術や公衆衛生の知見がどのように貢献できるかを考察します。", image: "画像 (22).jpg" },
            { id: 21, year: 2025, month: 1, title: "予防医療の新戦略：ゲノム情報とライフスタイル介入", summary: "個人のゲノム情報を活用したリスク評価と、それに基づいた個別化された生活習慣改善プログラムなど、新しい疾病予防戦略について深掘りします。", image: "画像 (23).jpg" },
            
            // 2024年
            { id: 22, year: 2024, month: 11, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (24).jpg" },
            { id: 23, year: 2024, month: 11, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (25).jpg" },
            { id: 24, year: 2024, month: 11, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (26).jpg" },
            { id: 25, year: 2024, month: 10, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (27).jpg" },
            { id: 26, year: 2024, month: 10, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (28).jpg" },
            { id: 27, year: 2024, month: 10, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (29).jpg" },
            { id: 28, year: 2024, month: 9, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (30).jpg" },
            { id: 29, year: 2024, month: 9, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (31).jpg" },
            { id: 30, year: 2024, month: 9, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (32).jpg" },
            { id: 31, year: 2024, month: 8, title: "医療AIの倫理的ガイドラインと運用：安全で公正な利用のために", summary: "医療AIの急速な発展に伴い、その倫理的な運用が重要視されています。AIの公平性、透明性、責任の所在に関するガイドラインとその実践について解説します。", image: "画像 (33).jpg" },
            { id: 32, year: 2024, month: 8, title: "グローバルヘルス課題への貢献：日本の医療技術と知見", summary: "世界が直面する感染症、貧困、格差といったグローバルヘルス課題に対し、日本の医療技術や公衆衛生の知見がどのように貢献できるかを考察します。", image: "画像 (34).jpg" },
            { id: 33, year: 2024, month: 8, title: "疾病予防のための新たな戦略：ゲノム情報とライフスタイル介入", summary: "個人のゲノム情報を活用したリスク評価と、それに基づいた個別化された生活習慣改善プログラムなど、新しい疾病予防戦略について深掘りします。", image: "画像 (35).jpg" },
            { id: 34, year: 2024, month: 2, title: "ロボット支援手術の拡大とトレーニング：外科医のスキル向上", summary: "ダヴィンチなどの手術支援ロボットが外科手術にもたらす変革。導入のメリット、外科医の専門トレーニング、そして今後の技術革新について紹介します。", image: "画像 (36).jpg" },
            { id: 35, year: 2024, month: 2, title: "医療従事者のウェルビーイング向上：組織と個人の取り組み", summary: "医療従事者の心身の健康と幸福感を高めるための組織的な支援（労働環境改善、メンタルヘルスプログラム）と、個人でできるセルフケアについて議論します。", image: "画像 (37).jpg" },
            { id: 36, year: 2024, month: 2, title: "災害医療における連携体制：平時からの備えと訓練", summary: "大規模災害発生時に医療機能を迅速に展開するための多機関連携。平時からの訓練、情報共有体制、医療物資の備蓄の重要性を解説します。", image: "画像 (38).jpg" },
            { id: 37, year: 2024, month: 1, title: "デジタルセラピューティクスの可能性：疾患治療への新たな選択肢", summary: "ソフトウェアやアプリが疾患の治療効果を持つデジタルセラピューティクス。その作用機序、臨床効果、規制の現状、そして今後の普及に向けた課題を探ります。", image: "画像 (39).jpg" },
            { id: 38, year: 2024, month: 1, title: "医療現場でのハラスメント対策：働きやすい職場環境のために", summary: "医療現場におけるハラスメントの実態と、それを防止するための具体的な対策。組織の意識改革、相談窓口の設置、被害者支援の重要性について提言します。", image: "画像 (40).jpg" },
            { id: 39, year: 2024, month: 1, title: "希少疾患治療薬のアクセス改善：オーファンドラッグの課題", summary: "治療法が限られる希少疾患患者への治療薬アクセス改善は世界的な課題です。オーファンドラッグの開発支援、薬価設定、国際的な協力について考察します。", image: "画像 (27).jpg" },
            
            // 2023年
            { id: 40, year: 2023, month: 11, title: "医療DXによる診療効率の向上：スマートホスピタルの実現", summary: "デジタル技術を活用し、医療機関の業務効率を最大化する医療DX。スマートホスピタルの事例、AIによる業務支援、データ連携のメリットを解説します。", image: "画像 (28).jpg" },
            { id: 41, year: 2023, month: 11, title: "プレシジョン・メディシンの実践例：個別化医療の最前線", summary: "患者一人ひとりの遺伝子情報に基づいた最適な治療を提供するプレシジョン・メディシン。がん治療や難病治療での具体的な実践例を紹介します。", image: "画像 (29).jpg" },
            { id: 42, year: 2023, month: 11, title: "医師の燃え尽き症候群対策：ウェルビーイングを保つために", summary: "医師の心身の健康を守るための燃え尽き症候群対策。早期の兆候認識、ストレスコーピング、ピアサポート、組織的な介入の重要性を議論します。", image: "画像 (30).jpg" },
            { id: 43, year: 2023, month: 10, title: "最新のがん治療薬と副作用管理：患者QOLの向上", summary: "免疫チェックポイント阻害剤や分子標的薬など、最新のがん治療薬のメカニズムと効果。副作用の早期発見と管理、患者のQOL向上への取り組みを詳述します。", image: "画像 (31).jpg" },
            { id: 44, year: 2023, month: 10, title: "遠隔モニタリング技術の導入効果：慢性疾患管理の変革", summary: "ウェアラブルデバイスやIoTセンサーを活用した患者の遠隔モニタリング。慢性疾患管理における導入効果、課題、そして患者の自己管理促進について考察します。", image: "画像 (32).jpg" },
            { id: 45, year: 2023, month: 10, title: "医療倫理における患者の自己決定権：尊厳死とリビングウィル", summary: "患者が自身の医療に関して意思を決定する権利。尊厳死、リビングウィル、事前指示書といった概念と、医師が患者の意思を尊重するための配慮を解説します。", image: "画像 (33).jpg" },
            { id: 46, year: 2023, month: 9, title: "医療データの利活用とプライバシー保護：バランスの取れた制度設計", summary: "医療データのビッグデータを疾病研究や新薬開発に活かす一方で、患者のプライバシー保護をどう両立させるか。倫理的・法的な課題と制度設計を議論します。", image: "画像 (34).jpg" },
            { id: 47, year: 2023, month: 9, title: "地域医療の持続可能性を探る：財源と人材の確保", summary: "地域医療を将来にわたって維持していくための課題。安定的な財源確保、若手医師の誘致、地域連携の強化策について多角的に考察します。", image: "画像 (35).jpg" },
            { id: 48, year: 2023, month: 9, title: "救急医療体制の強化：災害時対応と日常医療の確保", summary: "いつ起こるかわからない災害時にも機能する救急医療体制の構築。日常的な救急患者対応の効率化、ドクターヘリの活用、広域連携の重要性を紹介します。", image: "画像 (36).jpg" },
            //... 2019年まで同様に記事を追加
        ];
        
        // --- Firebaseの初期化と認証 ---
        async function initializeFirebase() {
            // Firebase設定変数が存在する場合のみ初期化を試行
            if (firebaseConfig && Object.keys(firebaseConfig).length > 0) {
                try {
                    app = initializeApp(firebaseConfig);
                    db = getFirestore(app);
                    auth = getAuth(app);

                    onAuthStateChanged(auth, async (user) => {
                        if (user) {
                            userId = user.uid;
                            console.log("Firebase認証成功。ユーザーID:", userId);
                            // データベースから記事を読み込む場合はここのコメントを解除
                            // loadArticlesFromFirestore(); 
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
                    console.log("ローカルデータモードで続行します。");
                }
            } else {
                console.log("Firebase設定が見つかりません。ローカルデータモードで実行します。");
            }
        }
        
        // --- 記事データ管理 (ローカル配列で管理) ---
        function addArticle(title, summary, image) {
            if (!isAdmin) return;
            // ローカル配列に記事を追加
            const newId = blogArticles.length > 0 ? Math.max(...blogArticles.map(a => a.id)) + 1 : 1;
            const newArticle = {
                id: newId,
                title,
                summary,
                image,
                year: new Date().getFullYear(),
                month: new Date().getMonth() + 1, // 月は1から12で表現
            };
            blogArticles.unshift(newArticle); // 配列の先頭に追加して新しく表示
            renderArticles(); // UIを再レンダリング
            renderAdminArticleList(); // 管理パネルも更新
            document.getElementById('newArticleTitle').value = '';
            document.getElementById('newArticleSummary').value = '';
            document.getElementById('newArticleImage').value = '';
        }

        function updateArticle(id, title, summary, image) {
            if (!isAdmin) return;
            const articleIndex = blogArticles.findIndex(a => a.id == id);
            if (articleIndex > -1) {
                blogArticles[articleIndex] = { ...blogArticles[articleIndex], title, summary, image };
                renderArticles(); // UIを再レンダリング
                renderAdminArticleList(); // 管理パネルも更新
            }
        }

        function deleteArticle(id) {
            if (!isAdmin) return;
            blogArticles = blogArticles.filter(a => a.id != id);
            renderArticles(); // UIを再レンダリング
            renderAdminArticleList(); // 管理パネルも更新
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
            blogArticles.forEach(article => {
                const year = article.year;
                const month = article.month;
                if (!articlesByYearMonth[year]) articlesByYearMonth[year] = {};
                if (!articlesByYearMonth[year][month]) articlesByYearMonth[year][month] = [];
                articlesByYearMonth[year][month].push(article);
            });

            const sortedYears = Object.keys(articlesByYearMonth).sort((a, b) => b - a);
            let imageCounter = 0;

            sortedYears.forEach(year => {
                const yearBlock = document.createElement('div');
                yearBlock.className = 'bg-white rounded-xl shadow-lg p-6 mb-8';
                
                const yearHeader = document.createElement('h3');
                yearHeader.className = 'text-2xl font-bold text-primary-blue year-header collapsed flex items-center gap-2 mb-4 cursor-pointer';
                yearHeader.innerHTML = `<svg class="icon-medium transform transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><span>${year}年</span>`;
                yearBlock.appendChild(yearHeader);
                
                const monthsContainer = document.createElement('div');
                monthsContainer.className = 'months-container space-y-4 hidden';
                
                const sortedMonths = Object.keys(articlesByYearMonth[year]).sort((a, b) => b - a);
                sortedMonths.forEach(month => {
                    const monthBlock = document.createElement('div');
                    monthBlock.className = 'bg-gray-50 rounded-lg shadow-sm p-4';
                    
                    const monthHeader = document.createElement('h4');
                    monthHeader.className = 'text-xl font-semibold text-secondary-blue month-header collapsed flex items-center gap-2 mb-4 cursor-pointer';
                    monthHeader.innerHTML = `<svg class="icon-small transform transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg><span>${parseInt(month)}月</span>`;
                    monthBlock.appendChild(monthHeader);
                    
                    const articlesContainer = document.createElement('div');
                    articlesContainer.className = 'articles-container space-y-4 hidden';

                    articlesByYearMonth[year][month].forEach(article => {
                        const articleElement = document.createElement('div');
                        articleElement.className = 'card p-6';
                        
                        const assignedImage = article.image || `画像 (${(imageCounter % 40) + 1}).jpg`;
                        imageCounter++;
                        
                        articleElement.innerHTML = `
                            <h3 class="text-xl font-semibold mb-3 text-dark-gray-text">${article.title}</h3>
                            <p class="text-medium-gray-text mb-4 text-sm">${article.summary}</p>
                            <img src="${assignedImage}" alt="[ブログ記事のイメージ]" class="w-full h-auto rounded-lg mb-4">
                            <a href="#" class="button-primary inline-block text-center read-more-link" data-title="${article.title}" data-summary="${article.summary}" data-image="${assignedImage}">
                                <svg class="icon-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                続きを読む
                            </a>
                        `;
                        articlesContainer.appendChild(articleElement);
                    });
                    
                    monthBlock.appendChild(articlesContainer);
                    monthsContainer.appendChild(monthBlock);

                    monthHeader.addEventListener('click', () => {
                        articlesContainer.classList.toggle('hidden');
                        monthHeader.classList.toggle('collapsed');
                        monthHeader.classList.toggle('expanded');
                    });
                });
                
                yearBlock.appendChild(monthsContainer);
                blogGrid.appendChild(yearBlock);

                yearHeader.addEventListener('click', () => {
                    monthsContainer.classList.toggle('hidden');
                    yearHeader.classList.toggle('collapsed');
                    yearHeader.classList.toggle('expanded');
                });
            });
        }


        // --- 管理者パネルUI ---
        function renderAdminArticleList() {
            const adminArticleList = document.getElementById('adminArticleList');
            if (!adminArticleList) return;

            adminArticleList.innerHTML = '';

            // [FIX] 'currentArticles' is not defined -> 'blogArticles'に修正
            blogArticles.forEach(article => {
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
                addArticle(title, summary, image);
            } else {
                alert('記事タイトルと概要を入力してください。');
            }
        });


        // --- 一般UIロジック ---
        // タブ切り替え機能
        document.querySelectorAll('nav .nav-link').forEach(navLink => {
            navLink.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                if (targetSection) {
                    targetSection.classList.add('active');
                }
                document.querySelectorAll('nav .nav-link').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // ページ内リンク（スムーズスクロール）
        document.querySelectorAll('.page-link').forEach(pageLink => {
            pageLink.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                const targetNavLink = document.querySelector(`nav .nav-link[href="${targetId}"]`);
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.remove('active');
                });
                if (targetSection) {
                    targetSection.classList.add('active');
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
                document.querySelectorAll('nav .nav-link').forEach(link => link.classList.remove('active'));
                if (targetNavLink) {
                    targetNavLink.classList.add('active');
                }
            });
        });

        // 記事詳細モーダルロジック
        const articleModal = document.getElementById('articleModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const modalImage = document.getElementById('modalImage');
        const closeArticleModalBtn = document.getElementById('closeArticleModalBtn');
        const closeArticleModalBtnBottom = document.getElementById('closeArticleModalBtnBottom');
        
        document.getElementById('blogGrid').addEventListener('click', (e) => {
            const readMoreLink = e.target.closest('.read-more-link');
            if (readMoreLink) {
                e.preventDefault();
                const title = readMoreLink.dataset.title;
                const summary = readMoreLink.dataset.summary;
                const image = readMoreLink.dataset.image;

                modalTitle.textContent = title;
                modalBody.innerHTML = `
                    <p class="text-base font-semibold mb-4 text-primary-blue">記事概要:</p>
                    <p>${summary}</p>
                    <div class="mt-6">
                        <h4 class="text-xl font-bold text-primary-blue mb-2">詳細コンテンツ</h4>
                        <p class="text-sm leading-relaxed">
                            当サイトでは、記事の詳細コンテンツを随時追加しています。
                            以下は、この記事に関するより専門的な内容の一部です。
                        </p>
                        <ul class="list-disc list-inside mt-4 text-sm leading-relaxed text-dark-gray-text">
                            <li>最新の研究動向と臨床応用への展望</li>
                            <li>関連法規やガイドラインの変更点</li>
                            <li>現場での具体的な実践事例と課題</li>
                            <li>専門家によるQ&Aセッション</li>
                            <li>将来的な医療技術の進化予測</li>
                        </ul>
                        <div class="mt-6 text-center text-gray-500">
                            <p>--- ここまでが詳細コンテンツのプレビューです ---</p>
                        </div>
                    </div>
                    <div class="author-info">
                        <p>執筆者：MedReach編集部</p>
                    </div>
                `;
                if (image) {
                    modalImage.src = image;
                    modalImage.classList.remove('hidden');
                } else {
                    modalImage.classList.add('hidden');
                }

                articleModal.classList.add('active');
            }
        });

        closeArticleModalBtn.addEventListener('click', () => {
            articleModal.classList.remove('active');
        });

        closeArticleModalBtnBottom.addEventListener('click', () => {
            articleModal.classList.remove('active');
        });
        
        // チャットボットロジック
        const chatbotToggleBtn = document.getElementById('chatbot-toggle-btn');
        const chatbotContainer = document.getElementById('chatbot-container');
        const closeChatbotBtn = document.getElementById('close-chatbot-btn');
        const chatbotMessages = document.getElementById('chatbot-messages');
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSendBtn = document.getElementById('chatbot-send-btn');
        const quickReplyBtns = document.querySelectorAll('.chatbot-quick-reply-btn');
        
        const CHATBOT_RESPONSES = {
            '求人情報について': '求人情報に関するご質問ですね。最新の医師求人情報は、本サイトの「求人情報」タブでご確認いただけます。専門のコンサルタントが具体的な条件についてご相談に応じます。',
            'クリニック譲渡について': 'クリニック譲渡についてのご質問ですね。先生方のニーズに合った譲渡案件を多数掲載しております。非公開案件もございますので、詳細については専門の担当者にお繋ぎいたします。',
            '企業情報について': '企業情報についてのご質問ですね。本サイトの「企業情報」タブで、弊社クレアメディカル株式会社の会社概要、代表者情報、所在地をご確認いただけます。',
            'ブログ記事について': 'ブログ記事に関するご質問ですね。本サイトの「ドクターズブログ」で記事をご覧いただけます。',
            'パスワードを忘れた': '管理者パスワードは「esora243」です。ログインページからご入力ください。',
            // 記事内容に関する問い合わせ
            '最新の研究動向について': '最新の研究動向については、ドクターズブログの最新記事をご参照ください。オンライン診療やAI医療に関する記事を随時更新しています。',
            'キャリアプランの相談': 'キャリアプランのご相談ですね。ドクターズブログの「キャリアパス多様化」に関する記事が参考になるかと思います。より詳細なご相談は、チャットボットで担当者にお繋ぎすることも可能です。',
            'メンタルヘルスについて': 'メンタルヘルスに関するご質問ですね。ドクターズブログには、多忙な医師のためのストレス管理法やバーンアウト予防に関する記事を掲載しています。',
            // その他の質問
            'こんにちは': 'こんにちは！何かご質問はありますか？',
            'ありがとう': 'どういたしまして！お役に立てて嬉しいです。',
            '連絡先': '弊社の連絡先は、担当者：伏見 勇紀、メールアドレス：creamed@yh.med です。お急ぎの場合はこちらにご連絡ください。',
            '不明な質問': '申し訳ありませんが、その質問にはお答えできません。お急ぎの場合は、下記連絡先にお問い合わせください。<br><br>担当者: 伏見 勇紀<br>メール: creamed@yh.med',
        };

        chatbotToggleBtn.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
        });

        closeChatbotBtn.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });

        function addMessageToChat(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.className = `chatbot-message ${sender}`;
            messageElement.innerHTML = `<span class="message-bubble">${message}</span>`;
            chatbotMessages.appendChild(messageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function handleChatbotResponse(question) {
            let response = CHATBOT_RESPONSES['不明な質問'];

            for (const key in CHATBOT_RESPONSES) {
                if (question.includes(key)) {
                    response = CHATBOT_RESPONSES[key];
                    break;
                }
            }

            setTimeout(() => {
                addMessageToChat('bot', response);
            }, 500);
        }

        chatbotSendBtn.addEventListener('click', () => {
            const question = chatbotInput.value.trim();
            if (question) {
                addMessageToChat('user', question);
                chatbotInput.value = '';
                handleChatbotResponse(question);
            }
        });

        chatbotInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                chatbotSendBtn.click();
            }
        });
        
        quickReplyBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const question = e.target.textContent;
                addMessageToChat('user', question);
                handleChatbotResponse(question);
            });
        });


        // ページロード時の初期設定
        document.addEventListener('DOMContentLoaded', () => {
            renderArticles(); // 記事のレンダリング
            
            const homeSection = document.getElementById('home');
            if (homeSection) {
                homeSection.classList.add('active');
            }

            const homeNavLink = document.querySelector('nav .nav-link[href="#home"]');
            if (homeNavLink) {
                homeNavLink.classList.add('active');
            }

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        const targetElement = document.querySelector(href);
                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });

            // Firebaseの初期化（設定があれば）
            initializeFirebase();
        });
    </script>
</body>
</html>
