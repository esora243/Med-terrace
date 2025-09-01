import React from "react";

export default function ArticleModal({ article, onClose }) {
  if (!article) return null;
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
        <button className="absolute top-3 right-5 text-2xl text-gray-500 hover:text-red-500" onClick={onClose}>×</button>
        <h2 className="text-xl font-bold mb-2 text-primary-blue dark:text-blue-300">{article.title}</h2>
        <p className="mb-4 text-gray-800 dark:text-gray-200">{article.summary}</p>
        {article.image &&
          <img src={article.image} alt={article.title} className="rounded-lg mb-3" />
        }
        <div className="text-xs text-gray-400">公開: {article.year}年{article.month+1}月</div>
      </div>
    </div>
  );
}