import { useState } from "react";

export default function InputPanel({ onAnalyze }) {
  const [text, setText] = useState("");

  return (
    <div className="glass p-6 rounded-2xl animate-fade-in">
      <label className="block text-gray-400 mb-2 text-sm">
        输入你的选题
      </label>

      <textarea
        className="w-full bg-slate-900/40 border border-slate-700 rounded-xl p-4 text-gray-200 h-32 focus:border-indigo-500 outline-none"
        placeholder="例如：华为最新芯片发布背后的真正原因..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => onAnalyze(text)}
        className="w-full mt-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition font-semibold text-white"
      >
        开始分析
      </button>
    </div>
  );
}
