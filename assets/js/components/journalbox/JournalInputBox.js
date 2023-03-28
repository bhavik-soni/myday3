import React, { useState } from "react";
import EmotionClassifier from "./EmotionClassifier";
import InputArea from "./InputArea";
import TopRowSvgButton from "./TopRowSvgButton";
import axios from "axios";
import EmotionData from "./EmotionData";

export default function JournalInputBox() {
  const [inputContent, setInputContent] = useState("");
  const [emotionData, setEmotionData] = useState(null);
  const [showEmotionData, setShowEmotionData] = useState(false);
  const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;

  function handleEmotionClassifierClick(inputContent) {
    axios
      .post(
        "/journal/api/emotion-classification/",
        { content: inputContent },
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      )
      .then((response) => {
        setShowEmotionData(true);
        setEmotionData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleEmotionDataExit() {
    setShowEmotionData(false);
  }

  return (
    <>
      {showEmotionData ? (
        <>
          <div
            className="absolute top-0 right-0 bottom-0 left-0
                        z-10 bg-white opacity-25"
          ></div>
          <div
            className="absolute top-0 right-0 bottom-0 left-0
                        z-20 flex justify-center items-center"
          >
            <EmotionData data={emotionData} onExit={handleEmotionDataExit} />
          </div>
        </>
      ) : null}

      <form class="m-4">
        <div class="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
              <div className="flex items-center space-x-1 sm:pr-4">
                <TopRowSvgButton
                  svgPath="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                  hoverText="Attach file"
                />
                <TopRowSvgButton
                  svgPath="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  hoverText="Embed map"
                />
                <TopRowSvgButton
                  svgPath="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  hoverText="Upload image"
                />
                <TopRowSvgButton
                  svgPath="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  hoverText="Format code"
                />
                <TopRowSvgButton
                  svgPath="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                  hoverText="Add emoji"
                />
              </div>
              <div className="flex flex-wrap items-center space-x-1 sm:pl-4">
                <TopRowSvgButton
                  svgPath="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  hoverText="Add list"
                />
                <TopRowSvgButton
                  svgPath="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  hoverText="Settings"
                />
                <TopRowSvgButton
                  svgPath="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  hoverText="Timeline"
                />
                <TopRowSvgButton
                  svgPath="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  hoverText="Download"
                />
              </div>
              <div className="flex items-center ml-3 space-x-1 sm:pr-4">
                <EmotionClassifier
                  onClick={() => handleEmotionClassifierClick(inputContent)}
                />
              </div>
            </div>
            <button
              type="button"
              className="items-bottom group relative flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white sm:ml-auto"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Full screen</span>
              <div
                role="tooltip"
                className="invisible absolute z-10 mt-8 mr-11 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 hover:visible group-hover:visible group-hover:opacity-100 dark:bg-gray-700"
              >
                Show full screen
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </button>
          </div>
          <div className="relative px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800 selection:bg-fuchsia-300 selection:text-fuchsia-900">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <InputArea
              inputContent={inputContent}
              setInputContent={setInputContent}
            />
          </div>
        </div>
      </form>
    </>
  );
}
