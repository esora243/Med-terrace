export default function ArticleCard({ article, onClick }: any) {
  return (
    <div
      className="bg-white dark:bg-blue-900 rounded-xl shadow hover:shadow-xl transition p-5 cursor-pointer flex flex-col gap-2 border border-blue-100 dark:border-blue-800"
      onClick={() => onClick(article)}
    >
      <img src={article.image} alt={article.title} className="w-full h-40 object-cover rounded-lg mb-3" loading="lazy" />
      <div className="flex gap-2 mb-1">
        <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs">{article.category}</span>
        <span className="text-xs text-blue-400">{article.date}</span>
      </div>
      <h2 className="text-lg font-bold text-primary-blue dark:text-blue-100">{article.title}</h2>
      <p className="text-gray-600 dark:text-blue-200 text-sm">{article.summary}</p>
      <div className="flex flex-wrap gap-1 mt-2">
        {article.tags.map((tag: string) => (
          <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{tag}</span>
        ))}
      </div>
    </div>
  );
}