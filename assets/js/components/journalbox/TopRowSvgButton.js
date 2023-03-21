export default function TopRowSvgButton({ svgPath, hoverText, onClick }) {
  return (
    <button
      type="button"
      class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
      title={hoverText}
      onClick={onClick}
    >
      <svg
        aria-hidden="true"
        class="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" d={svgPath} clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">{hoverText}</span>
    </button>
  );
}
