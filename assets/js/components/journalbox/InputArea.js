import { React, useState, useEffect } from "react";
import axios from "axios";

export default function InputArea() {
  const authorId = 2;
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

  // Retrieve the CSRF token from the HTML code
  const csrfToken = document.querySelector("[name=csrfmiddlewaretoken]").value;

  // Update the input content and store it in the database
  const handleInputContentChange = (e) => {
    const newInputContent = e.target.value;
    setInputContent(newInputContent);
    axios
      .post(
        "/journal/api/entry/",
        { author: authorId, content: newInputContent },
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
      });
  };

  return (
    <textarea
      id="input"
      value={inputContent}
      rows="8"
      onChange={handleInputContentChange}
      className="relative w-full px-0 text-md text-gray-800 bg-white border-0 dark:bg-gray-800 focus:outline-none dark:text-white dark:placeholder-gray-400"
      placeholder="Write your thoughts..."
      required
    ></textarea>
  );
}
