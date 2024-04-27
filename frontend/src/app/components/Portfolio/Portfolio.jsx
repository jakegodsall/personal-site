import PortfolioItem from "./PortfolioItem";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Fiskil",
    image: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "TailwindCSS",
      "Figma",
      "Cypress",
      "Git",
    ],
    liveSiteUrl: "a",
    githubURL: "d",
  },
];

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-[2.4rem] font-semibold mb-[2.4rem]">My Work</h2>
      <ul className="flex flex-col items-center">
        {DUMMY_DATA.map((portfolio) => (
          <li key={portfolio.id} className="w-full">
            <PortfolioItem
              title={portfolio.title}
              description={portfolio.description}
              skills={portfolio.skills}
              liveSiteUrl={portfolio.liveSiteUrl}
              githubUrl={portfolio.githubURL}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
