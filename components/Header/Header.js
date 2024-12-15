import React from "react";
import headerStyles from "./HeaderStyles";

const Header = () => {
  return (
    <>
      <div className="bg-[#233253] h-[65px] w-full sticky top-0 left-0 z-50 flex flex-row justify-center items-center p-0 m-0">
        <dir className="px-2 m-0 h-full w-[1200px] max-w-full flex flex-row items-center justify-between">
          <a href="/" title="Danelfin - Pick the Best Stocks to Buy with AI">
            <img
              alt="Danelfin AI Stock Picker (Logo)"
              src="https://cdn.danelfin.com/assets/next/images/danelfinLogos/logoDanelfin.svg"
              className="navbar-logo w-[115px] h-auto sm:w-[124px] sm:h-[39px] md:w-full md:h-auto"
            />
          </a>
          <div className="flex flex-row gap-[10px] items-center is-visible">
            <a
              href="/login"
              title="Login | Access our AI-Powered Stock Picking Platform."
            >
              <button
                type="button"
                className="w-[62px] h-[41px] text-center border border-white text-white text-[15px] bg-transparent rounded-md cursor-pointer"
              >
                Log In
              </button>
            </a>
            <a
              href="/pricing"
              title="Join Free | Free Plan to pick the best stocks with the Power of AI."
            >
              <button
                type="button"
                className="w-[82px] h-[41px] text-center text-white text-[15px] font-light bg-[#fb8c09] rounded-md cursor-pointer"
              >
                Start Trial
              </button>
            </a>
          </div>
        </dir>
      </div>
      <style jsx>{headerStyles}</style>
    </>
  );
};

export default Header;
