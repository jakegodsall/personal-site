import Link from "next/link";
import { motion } from "framer-motion";

export default function MobileMenu({ handleCloseMobileMenu }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        exit={{ opacity: 0 }}
        className="fixed top-0 left-0 w-full h-full bg-black z-20"
        onClick={handleCloseMobileMenu}
      ></motion.div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute right-0 bg-white z-30 w-[80%] h-full bottom-0 pt-[8rem]"
      >
        <hr className="w-full h-[0.2rem] bg-grey-600" />
        <ul className="flex flex-col gap-[2.5rem] uppercase text-[1.8em] tracking-[-5%] ml-[3.2rem] py-[2rem]">
          <li>
            <Link onClick={handleCloseMobileMenu} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMobileMenu} href="portfolio/">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMobileMenu} href="blog/">
              Blog
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMobileMenu} href="daily-log/">
              Daily Log
            </Link>
          </li>
          <li>
            <Link onClick={handleCloseMobileMenu} href="contact/">
              Contact
            </Link>
          </li>
        </ul>
        <hr className="w-full h-[0.2rem] bg-grey-600" />
      </motion.div>
    </>
  );
}
