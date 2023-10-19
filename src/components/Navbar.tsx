import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import Overlay from "./Overlay";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [overlay, setOverlay] = useState<boolean>(false);

  const searchValueHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className="w-10/12 mx-auto flex items-center justify-between gap-5 my-5 max-[1280px]:hidden">
        {/* ------------------------------------------------------------------------ */}
        <div className="flex justify-between items-center w-[25%]">
          <h1 className="text-[40px] font-bold tracking-tight -translate-y-1">
            electro<span className="text-6xl text-themeYellow">.</span>
          </h1>
          <span
            onClick={() => setOverlay(true)}
            className="text-2xl cursor-pointer"
          >
            <RxHamburgerMenu />
          </span>
        </div>
        {/* ------------------------------------------------------------------------ */}
        <div className="w-[45%] flex justify-between h-fit overflow-hidden items-center border-[2px] border-themeYellow rounded-3xl">
          <input
            type="text"
            id="search"
            value={searchValue}
            onChange={searchValueHandler}
            className="border-none outline-none pl-4 pr-2 bg-transparent"
            placeholder="Search for Products"
          />
          <select className="outline-none text-sm mr-2 bg-transparent">
            <option value="">All Categories</option>
            <option value="">Accessories</option>
            <option value="">Cameras & Photography</option>
            <option value="">Computer Components</option>
            <option value="">Gadgets</option>
            <option value="">Home Entertainment</option>
            <option value="">Laptop & Computers</option>
            <option value="">Printers & Ink</option>
            <option value="">Smart Phone & Tablets</option>
            <option value="">Tv & Audio</option>
            <option value="">Video Games & console</option>
            <option value="">Home Theatre</option>
            <option value="">Stereo</option>
            <option value="">Bluetooth Speaker</option>
            <option value="">Headphones</option>
            <option value="">Speakers</option>
          </select>
          <span className="px-4 py-3 bg-themeYellow h-full cursor-pointer dark:text-themeText">
            <BsSearch />
          </span>
        </div>
        {/* ------------------------------------------------------------------------ */}
        <div className="text-2xl font-semibold flex justify-between w-[20%]">
          <a href="#" className="compare relative">
            <BiGitCompare />
          </a>
          <a href="#" className="wishlist relative">
            <AiOutlineHeart />
          </a>
          <a href="#" className="user relative">
            <AiOutlineUser />
          </a>
          <a href="#" className="cart flex items-center relative">
            <BsHandbag />
            <span className="text-xl ml-1">$0.00</span>
            <span className="px-[6px] py-[2px] rounded-full text-xs bg-themeYellow absolute bottom-0 left-0 translate-x-2 translate-y-2">
              0
            </span>
          </a>
        </div>
      </div>
      {/* ---------------------------Mobile Navbar-------------------------- */}
      <div className="py-2 bg-themeYellow dark:text-themeText hidden max-[1280px]:block">
        <div className="w-10/12 mx-auto flex justify-between">
          <div className="flex justify-between items-center gap-5">
            <span
              onClick={() => setOverlay(true)}
              className="text-2xl cursor-pointer"
            >
              <RxHamburgerMenu />
            </span>
            <h1 className="text-3xl font-bold tracking-tight -translate-y-1">
              electro
            </h1>
          </div>
          <div className="flex items-center gap-5 max-[800px]:gap-2 text-2xl">
            <BsSearch />
            <a href="#" className="user relative">
              <AiOutlineUser />
            </a>
            <a href="#" className="cart flex items-center relative">
              <BsHandbag />
              <span className="text-xl ml-1">$0.00</span>
              <span className="px-[6px] py-[2px] rounded-full text-xs bg-themeWhite absolute bottom-0 left-0 translate-x-2 translate-y-2">
                0
              </span>
            </a>
          </div>
        </div>
      </div>

      {overlay && <Overlay setOverlay={setOverlay} />}
    </>
  );
}
