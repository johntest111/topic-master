export default function LoadingPanel() {
  return (
    <div className="flex flex-col items-center gap-4 animate-fade-in">
      <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
      <div className="text-gray-400 text-sm">AI 正在思考中...</div>
    </div>
  );
}
