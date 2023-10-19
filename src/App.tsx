import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LinksBar from "./components/LinksBar";
import MiniCards from "./components/MiniCards";
import Navbar from "./components/Navbar";
import Poster from "./components/Poster";
import SeasonalProducts from "./components/SeasonalProducts";
import SignupBar from "./components/SignupBar";
import CompanyNameSlider from "./components/CompanyNameSlider";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import ToogleSwitch from "./helper/switch";

function App() {
  const moveToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Navbar />
      <LinksBar />
      <Poster />
      <MiniCards />
      <SeasonalProducts />
      <BestSellers />
      <CompanyNameSlider />
      <SignupBar />
      <Footer />
      <span
        onClick={moveToTopHandler}
        className="fixed bottom-10 text-3xl cursor-pointer fill-themeText right-10"
      >
        <BsFillArrowUpCircleFill />
      </span>
      <div className="fixed bottom-[30%] z-[30] -rotate-90 left-0">
        <ToogleSwitch />
      </div>
    </>
  );
}

export default App;
