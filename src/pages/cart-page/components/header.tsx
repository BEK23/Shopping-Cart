import LeftChevronIcon from "@assets/left-chevron-icon.svg";

export const Header = () => {
  return (
    <div className="mb-6 flex w-full cursor-pointer items-center gap-1 border-b border-[#d0cfcf] pb-6 text-lg font-semibold">
      <img src={LeftChevronIcon} alt="back" /> Shopping Continue
    </div>
  );
};
