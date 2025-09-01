import { useState } from "react";
import Head from "next/head";
import { articles as ARTICLES } from "../data/articles";
import ArticleModal from "../components/ArticleModal";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "next-themes";

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredArticles, setFilteredArticles] = useState(ARTICLES);

  // 検索フィルタ
  const handleSearch = (query: string) => {
    setSearchText(query);
    setFilteredArticles(
      ARTICLES.filter(article =>
        article.title.includes(query) ||
        article.summary.includes(query)
      )
    );
  };

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>MedReach | 医師・医療従事者のための総合情報サイト</title>
        <meta name="description" content="医療従事者の知的好奇心とキャリアを支援するプラットフォーム。専門ブログ・求人・譲渡情報・厚労省リンクも。" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen py-10 px-2">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-10 text-primary-blue dark:text-blue-300 text-center">
            MedReach：医師の知的好奇心とキャリアの次なる一歩を繋ぐ
          </h1>
          <SearchBar searchText={searchText} onSearch={handleSearch} />
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {filteredArticles.map((article, idx) => (
              <div key={idx} className="card bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg cursor-pointer transition"
                onClick={() => setSelectedArticle(article)}>
                <h2 className="text-xl font-bold text-dark-gray-text dark:text-gray-50 mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-200 text-sm mb-2">{article.summary}</p>
                {article.image &&
                  <img src={article.image} className="rounded-lg my-2" alt={article.title} />
                }
                <div className="flex justify-end text-xs text-gray-400">
                  {article.year}年 {article.month + 1}月
                </div>
              </div>
            ))}
          </div>
          <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}