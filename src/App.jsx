import { useState } from "react";
import InputPanel from "./components/InputPanel";
import LoadingPanel from "./components/LoadingPanel";
import ResultScoreCard from "./components/ResultScoreCard";
import ResultBreakdown from "./components/ResultBreakdown";
import ResultComment from "./components/ResultComment";
import ResultTitles from "./components/ResultTitles";
import { mockAIAnalysis } from "./utils/aiMock";

export default function App() {
  const [step, setStep] = useState("input");
  const [result, setResult] = useState(null);

  async function handleAnalyze(text) {
    if (!text.trim()) return;
    setStep("loading");
    const data = await mockAIAnalysis(text);
    setResult(data);
    setStep("result");
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6 flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        {step === "input" && <InputPanel onAnalyze={handleAnalyze} />}

        {step === "loading" && <LoadingPanel />}

        {step === "result" && result && (
          <div className="space-y-6 animate-fade-in-up">
            <ResultScoreCard score={result.score} />
            <ResultBreakdown data={result.breakdown} />
            <ResultComment comment={result.comment} />
            <ResultTitles titles={result.titles} />

            <button
              className="w-full py-3 text-gray-400 hover:text-white text-sm"
              onClick={() => setStep("input")}
            >
              测试下一个
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

