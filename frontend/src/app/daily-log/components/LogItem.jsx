import Image from "next/image";

export default function LogItem({ id, datetime, project, content, skills }) {
  function getTimeFromDateTime(datetime) {
    const obj = new Date(datetime);
    const hours = String(obj.getHours()).padStart(2, "0");
    const minutes = String(obj.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <div>
      <div className="flex items-center">
        <p className="mr-[1.6rem] italic text-[#6b6b6b] text-[1.2rem]">
          {getTimeFromDateTime(datetime)}
        </p>
        <p className="font-bold text-[1.2rem]">{project}</p>
        <ul>
          {skills.map((skill, idx) => (
            <li key={idx}>
              <Image
                src={skill.icon_url}
                alt={skill.name}
                width="20"
                height="20"
              />
            </li>
          ))}
        </ul>
      </div>
      <p className="text-[1.5rem] ">{content}</p>
    </div>
  );
}
