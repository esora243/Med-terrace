import React from "react";

export default function ArticleModal({ article, onClose }: any) {
  if (!article) return null;
  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white dark:bg-blue-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-3 right-4 text-2xl text-blue-400 hover:text-blue-600" onClick={onClose}>&times;</button>
        <img src={article.image} alt={article.title} className="rounded-xl mb-4 w-full h-40 object-cover" />
        <div className="flex gap-2 mb-2">
          <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs">{article.category}</span>
          <span className="text-xs text-blue-400">{article.date}</span>
        </div>
        <h2 className="text-2xl font-bold text-primary-blue dark:text-blue-100 mb-2">{article.title}</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags && article.tags.map((tag: string) => (
            <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{tag}</span>
          ))}
        </div>
        <p className="text-gray-700 dark:text-blue-200 mb-4 whitespace-pre-wrap">{article.body}</p>
        <div className="text-xs text-gray-400 font-bold">執筆者: {article.author}</div>
      </div>
    </div>
  );
}