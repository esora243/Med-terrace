export default function Pagination({ total, page, pageSize, onChange }: {total:number,page:number,pageSize:number,onChange:(n:number)=>void}) {
  const pageCount = Math.ceil(total / pageSize);
  if (pageCount <= 1) return null;
  return (
    <div className="flex gap-2 justify-center my-8">
      {[...Array(pageCount)].map((_, idx) => (
        <button
          key={idx}
          className={`px-3 py-1 rounded-full ${page===idx+1 ? "bg-blue-400 text-white font-bold" : "bg-blue-100 text-blue-700"} `}
          onClick={()=>onChange(idx+1)}
        >{idx+1}</button>
      ))}
    </div>
  );
}