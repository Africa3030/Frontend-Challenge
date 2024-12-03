import Image from "next/image";

const Header = () => {
  return (
    <div className="sticky right-0 top-0 height-[65px] w-full z-50 flex flex-row items-center justify-center bg-[#233253]">
      <div className="max-w-full w-[1200px] flex flex-row items-center justify-between">
        <div className="w-[115px] h-auto sm::w-[124px] sm:h-[39px] md:w-full md:h-full">
          <Image
            src="/images/logos/logoDanelfinPlus.svg"
            alt="Danelfin plus logo"
            width={149}
            height={46}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
