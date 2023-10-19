import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function MiniCards() {
  return (
    <>
      <div className="w-10/12 mx-auto gap-5 flex justify-between my-10">
        <div className="p-5 flex gap-5 bg-[#F5F5F5] dark:bg-lightThemeDark max-[1280px]:hidden">
          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-resized.png"
            className="max-[800px]:w-[100px]"
          />
          <div>
            <p className="text-xl font-light">
              CATCH BIG <span className="font-semibold">DEALS</span> ON THE
              CAMERAS
            </p>
            <a href="#" className="text-semibold flex mt-2 items-center gap-2">
              Shop now{" "}
              <IoIosArrowDroprightCircle className="fill-themeYellow text-2xl" />
            </a>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////// */}
        <div className="p-5 flex gap-5 bg-[#F5F5F5] dark:bg-lightThemeDark max-[800px]:hidden">
          <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop.png" />
          <div>
            <p className="text-xl font-light">
              TABLETS, SMARTPHONES{" "}
              <span className="font-semibold">AND MORE</span>
            </p>
            <a href="#" className="text-semibold flex mt-2 items-center gap-2">
              Shop now{" "}
              <IoIosArrowDroprightCircle className="fill-themeYellow text-2xl" />
            </a>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////// */}
        <div className="p-5 flex gap-5 bg-[#F5F5F5] dark:bg-lightThemeDark">
          <img
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/desktop.png"
            className="max-[800px]:w-[150px]"
          />
          <div>
            <p className="text-xl font-light">
              SHOP THE <span className="font-semibold">HOTTEST</span> PRODUCTS
            </p>
            <a href="#" className="text-semibold flex mt-2 items-center gap-2">
              Shop now{" "}
              <IoIosArrowDroprightCircle className="fill-themeYellow text-2xl" />
            </a>
          </div>
        </div>
        {/* //////////////////////////////////////////////////////////////// */}
      </div>
    </>
  );
}
