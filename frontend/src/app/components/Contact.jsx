import SocialsBar from "./SocialsBar";

export default function Contact() {
  return (
    <div className="flex flex-col items-center px-[1.4rem] pb-[6rem]">
      <p className="text-[1.6rem] text-gray-500 text-center pb-[2rem]">
        Get in touch if you&apos;re looking for a versatile developer either
        directly or on the socials. I&apos;m always happy to connect and
        collaborate.
      </p>
      <div className="mb-[2rem]">
        <a
          className="text-[1.4rem]"
          href="mailto:jake.edward.godsall@gmail.com"
        >
          jake.edward.godsall@gmail.com
        </a>
      </div>
      <SocialsBar />
    </div>
  );
}
