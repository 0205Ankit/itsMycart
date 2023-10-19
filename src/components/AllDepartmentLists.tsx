import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FiList } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import allDepartment from "../json/allDepartment.json";

const AllDepartmentList = () => {
  return (
    <NavigationMenu.Root className="relative text-sm z-10">
      <NavigationMenu.List className="m-0 relative w-full bg-themeWhite rounded-md dark:bg-themeDark">
        <div className="py-3 px-5 w-full m-0 bg-themeYellow dark:text-themeText font-semibold flex items-center gap-2 rounded-[6px_6px_0_0] ">
          <FiList /> All Departments
        </div>
        <div className="w-[90%] mx-auto">
          <a href="#">
            <div className="w-full font-semibold px-1 py-2 border-b-[1px] border-gray-300">
              Value of the Day
            </div>
          </a>
          <a href="#">
            <div className="w-full font-semibold px-1 py-2 border-b-[1px] border-gray-300">
              Top 100 offers
            </div>
          </a>
          <a href="#">
            <div className="w-full font-semibold px-1 py-2 border-b-[1px] border-gray-300">
              New Arrivals
            </div>
          </a>
          {allDepartment.data.map((item) => {
            return (
              <NavigationMenu.Item key={item.id}>
                <NavigationMenu.Trigger className="group relative border-b-[1px] border-gray-300 w-full px-1 py-3 flex select-none items-center justify-between font-light leading-none outline-none">
                  {item.name}
                  <IoIosArrowForward />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="hover-navlinks data-[motion=from-start]:animate-fadeIn data-[motion=from-end]:animate-fadeIn data-[motion=to-start]:animate-fadeOut data-[motion=to-end]:animate-fadeOut absolute bottom-0 min-w-[450px] right-0 translate-x-full  h-[87%] border-t-[2px] dark:bg-themeDark border-themeYellow rounded-md z-10 bg-themeWhite">
                  <div className="p-5 flex basis-1/2 flex-wrap gap-10">
                    {item.categories.map((category, index) => {
                      return (
                        <div key={index}>
                          <p className="font-semibold pb-2 whitespace-nowrap">
                            {category.name}
                          </p>
                          {category.type.map((type, i) => {
                            return (
                              <a href="#" key={i}>
                                <div className="py-2 font-light whitespace-nowrap">
                                  {type}
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            );
          })}
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default AllDepartmentList;
