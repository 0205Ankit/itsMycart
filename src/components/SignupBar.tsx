import { PiTelegramLogo } from "react-icons/pi";

export default function SignupBar() {
  return (
    <div className="py-3 bg-themeYellow mb-10 dark:text-themeText max-[800px]:hidden">
      <div className="w-10/12 mx-auto flex justify-between items-center">
        <p className="text-xl flex gap-5 items-center">
          <PiTelegramLogo className="text-3xl" />
          Sign Up to Newsletter
        </p>
        <p>
          ...and recieve <strong>$20 coupon for first shopping</strong>
        </p>
        <div className="rounded-3xl w-[40%] justify-between bg-themeWhite overflow-hidden pl-5 flex items-center gap-5">
          <input
            type="text"
            placeholder="Enter your Email Address"
            className="font-light border-none outline-none w-full"
          />
          <span className="px-7 py-2 bg-themeText font-light text-themeWhite">
            SignUp
          </span>
        </div>
      </div>
    </div>
  );
}
