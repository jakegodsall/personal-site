import clsx from "clsx";

export default function HamburgerButton({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <div
      onClick={setMobileMenuOpen}
      className="flex w-[1.8rem] cursor-pointer flex-col gap-[0.3rem]"
    >
      <div
        className={clsx(
          "h-[0.3rem] w-full rounded-full bg-[#000] transition-all duration-300",
          mobileMenuOpen &&
            "translate-y-[0.5rem] rotate-45 transition-all duration-300"
        )}
      ></div>
      <div
        className={clsx(
          "h-[0.3rem] w-full rounded-full bg-[#000] transition-opacity duration-300",
          mobileMenuOpen && "opacity-0 transition-opacity duration-300"
        )}
      ></div>
      <div
        className={clsx(
          "h-[0.3rem] w-full rounded-full bg-[#000] transition-all duration-300",
          mobileMenuOpen &&
            "translate-y-[-0.7rem] rotate-[-45deg] transition-all duration-300"
        )}
      ></div>
    </div>
  );
}
