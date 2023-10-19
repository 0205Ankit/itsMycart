import allDepartment from "../json/allDepartment.json";
import Accordian from "./Accordian";

const listStyle =
  "py-3 px-5 border-b-[1px] border-gray-300 cursor-pointer font-light";

interface OverlayProps {
  setOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}

const Overlay: React.FC<OverlayProps> = ({ setOverlay }) => {
  return (
    <>
      <div
        onClick={() => setOverlay(false)}
        className="fixed w-full top-0 z-40 h-screen backdrop-blur-sm bg-[rgba(0,0,0,0.3)]"
      ></div>
      <div className="w-[25%] animate-slideInFromLeft dark:text-themeText fixed top-0 min-h-screen max-h-screen max-[1200px]:w-[50%] overflow-y-scroll bg-themeWhite z-40">
        <a href="#">
          <div className={listStyle}>Value of the Day</div>
        </a>
        <a href="#">
          <div className={listStyle}>Top 100 Offersa</div>
        </a>
        <a href="#">
          <div className={listStyle}>New Arrivalsa</div>
        </a>
        {allDepartment.data.map((item) => {
          return (
            <div key={item.id}>
              <Accordian item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Overlay;
