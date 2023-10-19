export default function Poster2() {
  return (
    <div className="flex w-[60%] max-[800px]:w-[100%] float-right h-[400px] max-[800px]:h-[220px] gap-20 max-[800px]:gap-5 max-[800px]:translate-x-0 -translate-x-[10%] pl-5">
      <div className="my-10">
        <p className="font-semibold text-xl max-[800px]:text-xs text-blue-500">
          SHOP TO GET WHAT YOU LOVE
        </p>
        <p className="text-5xl font-light max-[800px]:text-sm mt-2 tracking-wider">
          TIMEPIECES THAT MAKE A STATEMENT UPTO{" "}
          <span className="font-semibold">40 % OFF</span>
        </p>
        <button className="font-light max-[800px]:text-sm w-fit mt-5 max-[800px]:mt-2 bg-themeYellow px-5 py-2 max-[800px]:py-1 rounded-lg">
          Start Buying
        </button>
      </div>
      <img
        src="/phones.png"
        className="translate-y-[25%] scale-110 max-[800px]:scale-100 -translate-x-[20%] max-[800px]:translate-x-0"
      />
    </div>
  );
}
