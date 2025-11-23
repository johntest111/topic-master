export default function ResultTitles({ titles }) {
  return (
    <div className="glass p-4 rounded-2xl">
      <div className="text-indigo-300 font-bold mb-3">推荐标题</div>

      <div className="space-y-2">
        {titles.map((t, i) => (
          <div
            key={i}
            className="p-3 bg-slate-900/40 border border-slate-700 rounded-lg text-gray-200 hover:border-indigo-500 transition cursor-pointer text-sm"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
