function roundTo(digits, x) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
    useGrouping: false,
  }).format(x);
}

export default function EmotionData({ data, onExit }) {
  let emotionScores = Object.values(data);
  let softmaxDenom = 0;
  emotionScores = emotionScores.map((x) => {
    softmaxDenom += Math.exp(x);
    return Math.exp(x);
  });
  emotionScores = emotionScores.map((x) => x / softmaxDenom);

  const emotionScoreElements = [];
  for (let i = 0; i < Object.keys(data).length; i++) {
    const key = Object.keys(data)[i];
    emotionScoreElements.push(
      <div key={key}>
        {`${key}: ${roundTo(3, data[key])} ` +
          `(${roundTo(1, emotionScores[i] * 100)}%)`}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center
                opacity-100 bg-gray-500 dark:bg-slate-800 dark:text-white rounded-md"
    >
      <div className="w-[100%] px-2 py-2">
        <button onClick={onExit}>{/* change this to svg later */}X</button>
      </div>
      <div className="px-5 pb-5">{emotionScoreElements}</div>
    </div>
  );
}
