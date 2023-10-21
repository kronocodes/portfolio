import React from "react";

const Header = () => {
  return (
    <>
    <div className="bg-stone-900 flex justify-center pt-4">
      <div class="border-[1px] border-neutral-700 bg-neutral-800 hover:bg-neutral-[750] flex h-auto w-auto p-[5px] sticky items-center justify-between rounded-full">
        <button class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full">Work</button>
        <button class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full">About</button>
        <button class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full">Playground</button>
        <button class="text-sm text-white hover:bg-neutral-600 w-20 h-9 rounded-l-full rounded-r-full">Contact</button>
      </div>
      </div>
    </>
  );
};

export default Header;
