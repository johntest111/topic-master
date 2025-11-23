export default function ResultBreakdown({ data }) {
  const items = [
    { label: "话题热度", key: "heat", max: 35 },
    { label: "情绪强度", key: "emotion", max: 40 },
    { label: "商业价值", key: "money", max: 25 },
  ];

  return (
    <div className="glass p-4 rounded-2xl space-y-4">
      {items.map((item) => (
        <div key={item.key}>
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>{item.label}</span>
            <span>
              {data[item.key]} / {item.max}
            </span>
          </div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 transition-all"
              style={{ width: `${(data[item.key] / item.max) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

