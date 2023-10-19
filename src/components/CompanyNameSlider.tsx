export default function CompanyNameSlider() {
  return (
    <div className="w-10/12 mx-auto flex gap-10 mt-20 mb-10  border-t-[1px] border-b-[1px] border-gray-300 overflow-hidden ">
      <div className="auto-slider animate-slide flex py-5 w-full">
        <div className="flex items-center w-full">
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest1.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest2.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest3.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest4.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest5.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest6.png"
          />
        </div>
        {/* ----------------------------Repeating the image for infinite effect-------------------------------- */}
        <div className="flex items-center translate-x-full w-full max-[1280px]:hidden">
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest1.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest2.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest3.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest4.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest5.png"
          />
          <img
            className="cursor-pointer"
            src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest6.png"
          />
        </div>
      </div>
    </div>
  );
}
