export default function ResultScoreCard({ score }) {
  const color =
    score >= 85
      ? "text-green-400"
      : score >= 70
      ? "text-yellow-300"
      : "text-red-400";

  return (
    <div className="glass p-6 rounded-2xl text-center">
      <div className="text-gray-400 text-sm mb-2 tracking-wider">总分</div>

      <div className={`text-6xl font-black ${color}`}>
        {score}
        <span className="text-xl text-gray-500">/100</span>
      </div>
    </div>
  );
}

