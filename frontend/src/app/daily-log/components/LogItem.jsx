import Image from "next/image";

export default function LogItem({
  id,
  datetime,
  project,
  content,
  skills,
  withDate,
}) {
  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th"; // covers 4th to 20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function mapMonthNumberToStringRepresentation(month) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthNames[month];
  }

  function getTimeFromDateTime(datetime) {
    const obj = new Date(datetime);
    const hours = String(obj.getHours()).padStart(2, "0");
    const minutes = String(obj.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  function getDateTimeFromDateTime(datetime) {
    const obj = new Date(datetime);
    const date = obj.getDate();
    const month = obj.getMonth();
    const hours = String(obj.getHours()).padStart(2, "0");
    const minutes = String(obj.getMinutes()).padStart(2, "0");

    return `${date}${getOrdinalSuffix(
      date
    )} ${mapMonthNumberToStringRepresentation(month)} ${hours}:${minutes}`;
  }

  return (
    <div>
      <div className="flex items-center">
        <p className="mr-[1.6rem] italic text-[#6b6b6b] text-[1.2rem]">
          {withDate
            ? getDateTimeFromDateTime(datetime)
            : getTimeFromDateTime(datetime)}
        </p>
        <p className="font-bold text-[1.2rem]">{project}</p>
        <ul className="ml-auto flex items-center gap-[1rem]">
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
