import AllDepartmentList from "./AllDepartmentLists";
import { IoIosArrowDown } from "react-icons/io";

export default function LinksBar() {
  return (
    <div className="w-10/12 mx-auto h-[30px] flex items-start justify-between my-5 text-sm font-semibold max-[1280px]:hidden">
      <div className="w-[25%]">
        <AllDepartmentList />
      </div>
      <div className="flex w-[40%] py-3 justify-between items-center">
        <a href="#" className="flex items-center gap-1 text-red-600">
          All Pages <IoIosArrowDown />
        </a>
        <a href="#" className="flex items-center gap-1">
          Featured Brands
        </a>
        <a href="#" className="flex items-center gap-1">
          Trending Styles
        </a>
        <a href="#" className="flex items-center gap-1">
          Gift Cards
        </a>
      </div>
      <a href="#" className="font-semibold py-3">
        Free Shipping on Orders $50+
      </a>
    </div>
  );
}
