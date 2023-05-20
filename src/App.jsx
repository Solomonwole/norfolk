import { ToastContainer } from "react-toastify";
import RouterPage from "./router/RouterPage";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <RouterPage />
      <ToastContainer />
    </>
  );
}

export default App;
