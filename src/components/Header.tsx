import { IoLocationOutline } from "react-icons/io5";
import { BsTruck, BsHandbag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export default function Header() {
  return (
    <div className="border-b-[1px] dark:border-b-[0.1px] border-gray-300 max-[1280px]:hidden">
      <div className="w-10/12 mx-auto py-3 flex justify-between text-[13px] font-light">
        <p>Welcome to Worldwide Electronics Store</p>
        <div className="flex">
          <a
            href="#"
            className="flex gap-2 items-center px-4 border-r-[1px] border-gray-300"
          >
            <IoLocationOutline />
            Store Locator
          </a>
          <a
            href="#"
            className="flex gap-2 items-center px-4 border-r-[1px] border-gray-300"
          >
            <BsTruck />
            Track your Order
          </a>
          <a
            href="#"
            className="flex gap-2 items-center px-4 border-r-[1px] border-gray-300"
          >
            <BsHandbag />
            Shop
          </a>
          <a href="#" className="flex gap-2 items-center pl-4">
            <AiOutlineUser />
            My Accouunt
          </a>
        </div>
      </div>
    </div>
  );
}
