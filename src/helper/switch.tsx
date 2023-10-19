import * as Switch from "@radix-ui/react-switch";
import { useState } from "react";

const ToogleSwitch = () => {
  const [dark, setDark] = useState(false);

  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <form>
      <div className="flex items-center">
        <Switch.Root
          onCheckedChange={() => setDark((prev) => !prev)}
          className="w-[110px] h-[38px] bg-zinc-400 rounded-full relative outline-none cursor-pointer"
        >
          <div className="flex absolute dark:text-themeText top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-semibold text-sm gap-4 ">
            <p>Light</p>
            <p>Dark</p>
          </div>
          <Switch.Thumb className="block mx-[5px] absolute top-1/2 -translate-y-1/2 w-[50px] h-[30px] bg-white rounded-full  transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[50px]">
            <span className="w-full h-full text-sm dark:text-themeText font-semibold flex justify-center items-center">
              {dark ? "Dark" : "Light"}
            </span>
          </Switch.Thumb>
        </Switch.Root>
      </div>
    </form>
  );
};

export default ToogleSwitch;
