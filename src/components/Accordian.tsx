import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DepartmentType } from "../types";

const listStyle =
  "py-3 px-5 border-b-[1px] border-gray-300 cursor-pointer font-light";

export default function Accordian({ item }: { item: DepartmentType }) {
  const [clicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <>
      <div
        className={`${listStyle} flex justify-between items-center`}
        onClick={clickHandler}
      >
        {item.name}
        {clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
      {clicked && (
        <>
          {item.categories.map((category, index) => {
            return (
              <div key={index}>
                <div className={`${listStyle} font-semibold bg-zinc-200`}>
                  {category.name}
                </div>
                {category.type.map((type, i) => {
                  return (
                    <a href="#" key={i}>
                      <div
                        className={`${listStyle} hover:bg-gray-300 bg-zinc-200`}
                      >
                        {type}
                      </div>
                    </a>
                  );
                })}
              </div>
            );
          })}
        </>
      )}
    </>
  );
}
