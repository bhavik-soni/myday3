import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import LoginPrompt from "../components/login/LoginPrompt";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <NavBar />
    <LoginPrompt />
    <Footer />
  </div>
);
