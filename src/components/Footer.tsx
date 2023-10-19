import {
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
  BsInstagram,
  BsPinterest,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";

const linkStyles = "font-light mt-2 cursor-pointer";

export default function Footer() {
  return (
    <>
      <div className="w-10/12 mx-auto flex justify-between max-[1280px]:hidden">
        <div>
          <h1 className="text-[40px] font-bold tracking-tight -translate-y-1">
            electro<span className="text-6xl text-themeYellow">.</span>
          </h1>
          <div className="flex items-center gap-5 mt-5">
            <img src="/headphones.svg" className="w-[60px]" />
            <div>
              <p className="text-xs font-light">
                Got Questions ? Call us 24/7!
              </p>
              <p className="text-2xl font-light">
                (800) 8001-8588, (0600) 874 548
              </p>
            </div>
          </div>
          <div className="my-14">
            <p className="text-sm font-semibold">Contact Info</p>
            <p className="font-light">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
            <div className="flex gap-4 mt-5 items-center text-2xl">
              <BsFacebook className="cursor-pointer" />
              <BsWhatsapp className="cursor-pointer" />
              <BsInstagram className="cursor-pointer" />
              <BsTwitter className="cursor-pointer" />
              <BsLinkedin className="cursor-pointer" />
              <BsPinterest className="cursor-pointer" />
              <BsYoutube className="cursor-pointer" />
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------ */}
        <div>
          <p className="font-semibold mb-5">Find it Fast</p>
          <p className={linkStyles}>Laptops & Computers</p>
          <p className={linkStyles}>Cameras & Photography</p>
          <p className={linkStyles}>Smart Phones & Tablets</p>
          <p className={linkStyles}>Video Games & Consoles</p>
          <p className={linkStyles}>TV & Audio</p>
          <p className={linkStyles}>Gadgets</p>
          <p className={linkStyles}>Waterproof Headphones</p>
        </div>
        <div className="mt-10">
          <p className={linkStyles}>About</p>
          <p className={linkStyles}>Contact</p>
          <p className={linkStyles}>Wishlist</p>
          <p className={linkStyles}>Compare</p>
          <p className={linkStyles}>FAQ</p>
          <p className={linkStyles}>Store Directory</p>
        </div>
        <div>
          <p className="font-semibold mb-5">Customer Care</p>
          <p className={linkStyles}>My Account</p>
          <p className={linkStyles}>Track your Order</p>
          <p className={linkStyles}>Customer Service</p>
          <p className={linkStyles}>Returns/Exchange</p>
          <p className={linkStyles}>FAQs</p>
          <p className={linkStyles}>Product Support</p>
        </div>
      </div>

      <div className="hidden max-[1280px]:block bg-themeText">
        <h1 className="text-[40px] text-center pt-5 font-bold tracking-tight text-themeWhite -translate-y-1">
          electro<span className="text-6xl text-themeYellow">.</span>
        </h1>
        <p className="text-xs font-light text-center text-themeWhite">
          Got Questions ? Call us 24/7!
        </p>
        <p className="text-2xl font-light w-[50%] mx-auto pb-10 pt-2 text-center text-themeWhite">
          (800) 8001-8588,(0600) 874 548
        </p>
      </div>
    </>
  );
}
