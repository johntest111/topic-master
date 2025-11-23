export default function ResultComment({ comment }) {
  return (
    <div className="glass p-4 rounded-2xl border-l-4 border-indigo-500">
      <div className="text-indigo-400 font-semibold mb-2">点评</div>
      <div className="text-gray-300 leading-relaxed text-sm">
        {comment}
      </div>
    </div>
  );
}

