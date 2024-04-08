export default function LogItem({ id, createdDate, project, content, skills }) {
  function getTimeFromDateTime(dateTime) {
    const obj = new Date(dateTime);
    const hours = String(obj.getHours()).padStart(2, "0");
    const minutes = String(obj.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <div>
      <div className="flex items-center">
        <p className="mr-[1.6rem] italic text-[#6b6b6b] text-[1.2rem]">
          {getTimeFromDateTime(createdDate)}
        </p>
        <p className="font-bold text-[1.2rem]">{project}</p>
      </div>
      <p className="text-[1.5rem] ">{content}</p>
    </div>
  );
}
