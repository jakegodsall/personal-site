import SkillItem from "./SkillItem";

const SKILLS = [
  {
    name: "JavaScript",
    icon: "assets/iconsSkill/javascript.svg",
  },
  {
    name: "React.js",
    icon: "assets/iconsSkill/react.svg",
  },
  {
    name: "Next.js",
    icon: "assets/iconsSkill/nextjs.svg",
  },
  {
    name: "TailwindCSS",
    icon: "assets/iconsSkill/tailwind.svg",
  },
  {
    name: "Python",
    icon: "assets/iconsSkill/python.svg",
  },
  {
    name: "Django",
    icon: "assets/iconsSkill/django.svg",
  },
  {
    name: "MySQL",
    icon: "assets/iconsSkill/mysql.svg",
  },
  {
    name: "PHP",
    icon: "assets/iconsSkill/php.svg",
  },
  {
    name: "Laravel",
    icon: "assets/iconsSkill/laravel.svg",
  },
  {
    name: "Swift",
    icon: "assets/iconsSkill/swift.svg",
  },
];

export default function Skills() {
  return (
    <section>
      <h2 className="text-[2.4rem] font-semibold mb-[2.4rem]">Skills</h2>
      <p className="text-[1.6rem] leading-[2.6rem] text-gray-600 mb-[4rem]">
        The technologies I use on a daily basis:
      </p>
      <ul className="flex items-end gap-[2rem] flex-wrap justify-center">
        {SKILLS.map((skill, idx) => (
          <li key={idx}>
            <SkillItem name={skill.name} icon={skill.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
}
