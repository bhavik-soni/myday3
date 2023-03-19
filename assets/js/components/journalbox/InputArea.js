import { React, useState, useEffect, useRef } from "react";
import SaveIndicator from "../saveindicator/SaveIndicator";
import { debounce } from "lodash";
import axios from "axios";

export default function InputArea() {
  const authorId = 2; // should come from django auth
  const [saveStatus, setSaveStatus] = useState("saved");
  const [inputContent, setInputContent] = useState("");

  // Retrieve the input content from the database when the component mounts
  useEffect(() => {
    axios
      .get(`/journal/api/entry/author/${authorId}`)
      .then((response) => {
        console.log(`This is from the DB: ${JSON.stringify(response.data)}`);
        setInputContent(response.data.entries[0].content);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Debounce the input content change handler
  const debouncedSaveInputContent = debounce(saveInputContent, 1000);
  const intervalRef = useRef(null);

  // Retrieve the CSRF token from the HTML code
  const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;

  // Update the input content and store it in the database
  const handleInputContentChange = (e) => {
    const newInputContent = e.target.value;
    setInputContent(newInputContent);
    setSaveStatus("saving"); // set status to 'saving' when the user is typing

    clearInterval(intervalRef.current);
    intervalRef.current = setTimeout(() => {
      debouncedSaveInputContent.cancel(); // cancel the debounce function to prevent it from executing
      debouncedSaveInputContent(newInputContent); // execute the save function immediately
      setSaveStatus("saved"); // set status to 'saved' after executing the save function
    }, 1300);
  };

  // function to make call to the api to save the input content
  function saveInputContent(inputContent) {
    axios
      .post(
        "/journal/api/entry/",
        { author: authorId, content: inputContent },
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        setSaveStatus("error"); // set status to 'error' if the API call fails
      });
  }

  return (
    <>
      <textarea
        id="input"
        value={inputContent}
        rows="8"
        onChange={handleInputContentChange}
        className="relative w-full px-0 text-md text-gray-800 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400"
        placeholder="Write your thoughts..."
        required
      ></textarea>

      <div className="absolute bottom-2.5 left-3">
        <SaveIndicator saveStatus={saveStatus} />
      </div>
    </>
  );
}
