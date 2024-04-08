import LogItem from "./components/LogItem";

const DUMMY_LOGS = [
  {
    id: 1,
    createdDate: "2024-04-08T10:32:00",
    project: "Personal Portfolio",
    content:
      "Implemented a responsive navbar using Flexbox and JavaScript for improved mobile user experience.",
    skills: [
      { id: 1, name: "JavaScript", icon: "/javascript.svg" },
      { id: 2, name: "React", icon: "/react.svg" },
      { id: 3, name: "TailwindCSS", icon: "/tailwind.svg" },
    ],
  },
  {
    id: 2,
    createdDate: "2024-04-08T12:45:00",
    project: "E-commerce Site",
    content:
      "Integrated Stripe payment gateway for processing online payments securely.",
    skills: [
      { id: 4, name: "Stripe", icon: "/stripe.svg" },
      { id: 2, name: "React", icon: "/react.svg" },
      { id: 5, name: "Node.js", icon: "/nodejs.svg" },
    ],
  },
  {
    id: 3,
    createdDate: "2024-04-08T14:30:00",
    project: "Blog Platform",
    content:
      "Developed a custom rich text editor to enhance content creation experience.",
    skills: [
      { id: 1, name: "JavaScript", icon: "/javascript.svg" },
      { id: 6, name: "Quill", icon: "/quill.svg" },
      { id: 3, name: "TailwindCSS", icon: "/tailwind.svg" },
    ],
  },
  {
    id: 4,
    createdDate: "2024-04-08T16:00:00",
    project: "Health Tracker App",
    content:
      "Added a feature for users to track water intake and receive reminders.",
    skills: [
      { id: 2, name: "React", icon: "/react.svg" },
      { id: 7, name: "Redux", icon: "/redux.svg" },
      { id: 3, name: "TailwindCSS", icon: "/tailwind.svg" },
    ],
  },
  {
    id: 5,
    createdDate: "2024-04-08T18:20:00",
    project: "AI Personal Assistant",
    content:
      "Implemented voice recognition feature to interpret and respond to user commands.",
    skills: [
      { id: 8, name: "Python", icon: "/python.svg" },
      { id: 9, name: "TensorFlow", icon: "/tensorflow.svg" },
      { id: 10, name: "Keras", icon: "/keras.svg" },
    ],
  },
];

export default function DailyLogPage() {
  return (
    <main className="px-[1.6rem] md:px-[3.5rem] pt-[3.5rem]">
      <h1 className="text-[3.2rem] font-semibold mb-[3rem]">Daily Log</h1>
      <ul className="flex flex-col gap-[0.8rem]">
        {DUMMY_LOGS.map((log) => (
          <li key={log.id}>
            <LogItem
              project={log.project}
              createdDate={log.createdDate}
              content={log.content}
              skills={log.skills}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
