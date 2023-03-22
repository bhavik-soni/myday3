export default function EmotionData({ data, onExit }) {
  const emotionScores = [];
  for (const key of Object.keys(data)) {
    emotionScores.push(<div id={key}>{`${key}: ${data[key]}`}</div>);
  }

  return (
    <div
      className="flex flex-col items-center
                opacity-100 bg-gray-500 dark:bg-slate-800 dark:text-white rounded-md"
    >
      <div className="w-[100%] px-2 py-2">
        <button onClick={onExit}>{/* change this to svg later */}X</button>
      </div>
      <div className="px-5 pb-5">{emotionScores}</div>
    </div>
  );
}
