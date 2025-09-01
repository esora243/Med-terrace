export default function CategoryFilter({ categories, selected, onSelect }: any) {
  return (
    <div className="flex gap-3 flex-wrap mb-6">
      <button className={`py-1 px-4 rounded-full ${selected === "" ? "bg-blue-200 text-primary-blue" : "bg-blue-50 text-blue-800"} font-semibold text-xs`} onClick={() => onSelect("")}>全て</button>
      {categories.map((cat: string) => (
        <button
          key={cat}
          className={`py-1 px-4 rounded-full ${selected === cat ? "bg-blue-200 text-primary-blue" : "bg-blue-50 text-blue-800"} font-semibold text-xs`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}