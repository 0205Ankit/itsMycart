import { useState } from "react";
import itemList from "../json/itemList.json";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

export default function SeasonalProducts() {
  const [items, setItems] = useState(itemList.data.slice(0, 6));
  const [checked, setChecked] = useState(true);

  const handleTypeChangeHandler = (type: string) => {
    type === "featured" ? setChecked(true) : setChecked(false);
    const filteredItems = itemList.data.filter((item) => item.type === type);
    setItems(filteredItems);
  };

  return (
    <>
      <div className="flex gap-5 w-10/12 mx-auto max-[1280px]:flex-col">
        <div className="rounded-2xl dark:bg-lightThemeDark border-[2px] h-fit border-themeYellow p-10">
          <p className="font-light text-2xl">Special Offer</p>
          <div className="flex justify-center">
            <img src="/gameConsole.png" />
          </div>
          <p className="font-semibold text-blue-500 text-center">
            Game Console Controller + USB 3.0 Cable
          </p>
          <p className="text-2xl font-light text-center mt-5">$99.00</p>
        </div>
        {/* --------------------------------------------------------------------- */}
        <div className="w-[70%] max-[1280px]:w-full">
          <div className="flex w-full justify-center font-light text-xl gap-10 border-b-[1px] py-2 border-gray-300">
            <div>
              <input
                type="radio"
                name="type"
                id="featured"
                className="peer hidden"
                checked={checked}
              />
              <label
                htmlFor="featured"
                onClick={() => handleTypeChangeHandler("featured")}
                className="peer-checked:font-semibold peer-checked:border-b-[2px] py-2 cursor-pointer peer-checked:border-themeYellow "
              >
                Featured
              </label>
            </div>
            {/* ---------- */}
            <div>
              <input
                type="radio"
                name="type"
                id="onSale"
                className="peer hidden"
              />
              <label
                htmlFor="onSale"
                onClick={() => handleTypeChangeHandler("onSale")}
                className="peer-checked:font-semibold peer-checked:border-b-[2px] py-2 cursor-pointer peer-checked:border-themeYellow "
              >
                On Sale
              </label>
            </div>
            {/* ----------- */}
            <div>
              <input
                type="radio"
                name="type"
                id="topRated"
                className="peer hidden"
              />
              <label
                htmlFor="topRated"
                onClick={() => handleTypeChangeHandler("topRated")}
                className="peer-checked:font-semibold peer-checked:border-b-[2px] py-2 cursor-pointer peer-checked:border-themeYellow "
              >
                Top Rated
              </label>
            </div>
            {/* ------------ */}
          </div>
          {/* --------------------------------------------------------------------- */}
          <div className="flex w-full flex-wrap justify-around">
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group p-5 basis-[33%] max-[1280px]:basis-[50%] max-[800px]:basis-[100%] hover:shadow-2xl bg-themeWhite dark:bg-themeDark dark:hover:bg-lightThemeDark hover:z-[20] max-h-fit cursor-pointer relative"
                >
                  <p className="font-light text-xs">{item.categories}</p>
                  <p className="font-semibold text-blue-500 mt-3 mb-5 h-[50px]">
                    {item.name}
                  </p>
                  <img src={item.img} className="min-h-[200px] max-h-[200px]" />
                  <div className="flex justify-between items-center mt-5">
                    {item.discountPrice ? (
                      <div className="relative">
                        <s className="text-xs text-gray-400 absolute top-[-50%] left-0">
                          ${item.price}
                        </s>
                        <p className="text-2xl font-light text-red-500">
                          ${item.discountPrice}
                        </p>
                      </div>
                    ) : (
                      <p className="text-2xl font-light ">${item.price}</p>
                    )}
                    <a href="#" className="relative w-fit readmore">
                      <BsFillArrowRightCircleFill className="text-3xl fill-gray-200 group-hover:fill-themeYellow " />
                    </a>
                  </div>
                  <div className="w-full hidden group-hover:flex  pt-3 mt-5 gap-5 justify-center border-t-[1px] border-gray-300">
                    <span className="group cursor-pointer flex items-center gap-2 text-sm text-gray-300 hover:text-themeText">
                      <AiOutlineHeart /> Wishlist
                    </span>
                    <span className="group text-sm cursor-pointer flex items-center gap-2 text-gray-300 hover:text-themeText">
                      <BiGitCompare /> Compare
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
