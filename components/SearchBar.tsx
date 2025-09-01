export default function SearchBar({ value, onChange }: any) {
  return (
    <input
      type="text"
      placeholder="記事タイトルや内容で検索..."
      className="w-full p-3 rounded-lg border border-blue-100 dark:border-blue-800 mb-4 focus:outline-blue-300"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}