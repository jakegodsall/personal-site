import Link from "next/link";

export default function MobileMenu() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-20"></div>
      <div className="absolute right-0 bg-white z-30 w-[80%] h-full bottom-0 pt-[8rem]">
        <hr className="w-full h-[0.2rem] bg-grey-600" />
        <ul className="flex flex-col gap-[2.5rem] uppercase text-[1.8em] tracking-[-5%] ml-[3.2rem] py-[2rem]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="portfolio/">Portfolio</Link>
          </li>
          <li>
            <Link href="blog/">Blog</Link>
          </li>
          <li>
            <Link href="daily-log/">Daily Log</Link>
          </li>
          <li>
            <Link href="contact/">Contact</Link>
          </li>
        </ul>
        <hr className="w-full h-[0.2rem] bg-grey-600" />
      </div>
    </>
  );
}
