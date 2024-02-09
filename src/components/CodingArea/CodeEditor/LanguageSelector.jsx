import { useState } from "react";
import { AiOutlineFullscreen, AiOutlineSetting } from "react-icons/ai";
import { RxReset } from "react-icons/rx";

function LanguageSelector({ Problem }) {
  return (
    <div className="flex items-center justify-between rounded h-11 w-full">
      <div className="flex items-center text-white">
        <button className="flex cursor-pointer items-center rounded focus:outline-none bg-gray-100 text-black hover:bg-gray-200  px-2 py-1.5 font-medium">
          <div className="flex items-center px-1">
            <div className="text-xs text-black dark:text-gray-950">
              JavaScript
            </div>
          </div>
        </button>
      </div>

      <div className="flex items-center m-2">
        <button className="preferenceBtn group">
          <div className="h-4 w-4 text-black font-bold text-lg">
            <RxReset />
          </div>
          <div className="preferenceBtn-tooltip">Reset</div>
        </button>

        <button className="preferenceBtn group">
          <div className="h-4 w-4 text-black font-bold text-lg">
            <AiOutlineSetting />
          </div>
          <div className="preferenceBtn-tooltip">Settings</div>
        </button>

        <button className="preferenceBtn group">
          <div className="h-4 w-4 text-blackfont-bold text-lg">
            <AiOutlineFullscreen />
          </div>
          <div className="preferenceBtn-tooltip">Full Screen</div>
        </button>
      </div>
    </div>
  );
}

export default LanguageSelector;
