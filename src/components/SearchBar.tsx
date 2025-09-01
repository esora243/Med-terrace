export default function SearchBar({ searchText, onSearch }) {
  return (
    <input
      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 mb-3"
      type="text"
      placeholder="記事タイトルやキーワード検索..."
      value={searchText}
      onChange={e => onSearch(e.target.value)}
    />
  );
}