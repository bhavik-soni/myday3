import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import JournalInputBox from "../components/journalbox/JournalInputBox";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <NavBar />
    <JournalInputBox />
    <Footer />
  </div>
);
