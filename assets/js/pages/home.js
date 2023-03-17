import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <NavBar />
    <Footer />
  </div>
);
