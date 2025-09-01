import { useState } from "react";
const presetQuestions = [
  "求人情報について",
  "クリニック譲渡について",
  "キャリアの相談がしたい",
  "記事を探してほしい"
];
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    { sender: "bot", text: "こんにちは！どうぞご質問ください。" }
  ]);
  const [input, setInput] = useState("");
  const handleSend = (q?: string) => {
    const question = q || input;
    if (!question) return;
    setMsgs(prev => [
      ...prev,
      { sender: "user", text: question },
      { sender: "bot", text: (question.includes("求人") ? "最新の求人情報はこちら！" : "ご質問ありがとうございます。順次ご案内します。") }
    ]);
    setInput("");
  };
  return (
    <>
      <button className="fixed bottom-5 right-6 bg-blue-400 hover:bg-blue-600 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-3xl z-40" onClick={() => setOpen(!open)}>💬</button>
      {open &&
        <div className="fixed bottom-24 right-6 bg-white dark:bg-blue-800 rounded-2xl shadow-2xl w-80 max-w-[95vw] p-4 flex flex-col z-50 border border-blue-100 dark:border-blue-700">
          <div className="flex justify-between mb-2">
            <span className="font-bold text-primary-blue dark:text-blue-100">MedReachサポート</span>
            <button onClick={() => setOpen(false)} className="text-blue-400 text-xl">&times;</button>
          </div>
          <div className="flex-1 overflow-auto mb-3 max-h-48">
            {msgs.map((m, i) => (
              <div key={i} className={`mb-2 flex ${m.sender === "bot" ? "justify-start" : "justify-end"}`}>
                <div className={`${m.sender === "bot" ? "bg-blue-100 text-blue-800" : "bg-blue-400 text-white"} px-4 py-2 rounded-2xl max-w-[70%]`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap mb-2">
            {presetQuestions.map(q => (
              <button key={q} className="bg-blue-50 text-blue-800 rounded-full px-3 py-1 text-xs hover:bg-blue-200" onClick={() => handleSend(q)}>{q}</button>
            ))}
          </div>
          <div className="flex gap-2">
            <input className="flex-1 rounded-l-xl border border-blue-200 px-3 py-2 text-sm" value={input} onChange={e => setInput(e.target.value)} placeholder="質問を入力..." />
            <button className="bg-blue-400 px-4 py-2 rounded-r-xl text-white font-bold" onClick={() => handleSend()}>送信</button>
          </div>
        </div>
      }
    </>
  );
}