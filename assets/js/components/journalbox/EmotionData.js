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
    const colorParam = emotionScores[i];
    emotionScoreElements.push(
      <div
        key={key}
        className="px-3 py-1"
        style={{
          backgroundColor: `rgb(255, ${255 * (1 - 0.5 * colorParam)}, ${
            255 * (1 - 0.5 * colorParam)
          })`,
          color: "black",
        }}
      >
        {`${key}  ${roundTo(1, emotionScores[i] * 100)}%`}
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center
                opacity-100 bg-gray-300 dark:bg-gray-800 dark:text-white rounded-md"
    >
      <div className="w-[100%] px-2 py-2">
        <button onClick={onExit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-8 h-8"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
      <div className="px-20 pb-2 text-[1.25rem]">
        {`Strength: ${roundTo(1, Math.log(softmaxDenom))}`}
      </div>
      <div className="px-5 pb-5">{emotionScoreElements}</div>
    </div>
  );
}
