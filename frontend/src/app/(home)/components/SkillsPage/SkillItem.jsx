import Image from "next/image";

export default function SkillItem({ name, icon }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={icon}
        alt={name}
        width="40"
        height="40"
        className="mb-[0.6rem]"
      />
      <p className="text-gray-600 text-[1.3rem]">{name}</p>
    </div>
  );
}
