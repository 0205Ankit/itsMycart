export default function Poster3() {
  return (
    <div className="flex w-[60%] max-[800px]:w-[100%] float-right h-[400px] max-[800px]:h-[220px] gap-20 max-[800px]:gap-5 max-[800px]:translate-x-0 -translate-x-[10%] pl-5">
      <div className="my-8">
        <p className="text-6xl font-light max-[800px]:text-sm mt-2 tracking-wider">
          THE NEW STANDARD
        </p>
        <p className="font-bold text-sm mt-1 max-[800px]:text-xs">
          UNDER FAVORABLE SMARTWATCHES
        </p>
        <p className="text-sm font-light translate-y-2 max-[800px]:text-xs max-[800px]:translate-y-1">
          FROM
        </p>
        <p className="text-5xl font-semibold max-[800px]:text-xl">
          $
          <sub className="text-6xl max-[800px]:text-xl font-semibold">
            749<sup>99</sup>
          </sub>
        </p>
        <button className="font-light w-fit mt-10 max-[800px]:mt-2 max-[800px]:text-xs bg-themeYellow px-5 py-2 max-[800px]:py-1 rounded-lg">
          Start Buying
        </button>
      </div>
      <img src="/watches.png" className="scale-125 max-[800px]:scale-100" />
    </div>
  );
}
