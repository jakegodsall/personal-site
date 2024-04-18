"use client";

import { useState, useEffect } from "react";

import LogItem from "./components/LogItem";

export default function DailyLogPage() {
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    async function getDailyLogs(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    async function fetchData() {
      const data = await getDailyLogs("http://0.0.0.0:8000/api/daily-entries/");
      setLogData(data);
    }

    fetchData();
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today.getTime() - 86400000);
  const sevenDaysAgo = new Date(today.getTime() - 864000000 * 7);

  const todayData = logData.filter((item) => {
    const itemDate = new Date(item.datetime);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate.getTime() === today.getTime();
  });

  const yesterdayData = logData.filter((item) => {
    const itemDate = new Date(item.datetime);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate.getTime() === yesterday.getTime();
  });

  const last7DaysData = logData.filter((item) => {
    const itemDate = new Date(item.datetime);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate >= sevenDaysAgo && itemDate < yesterday;
  });

  return (
    <main className="px-[1.6rem] md:px-[3.5rem] pt-[3.5rem]">
      <h1 className="text-[3.2rem] font-semibold mb-[3rem]">Daily Log</h1>
      <h2 className="text-[2.2rem] font-semibold mb-[1.6rem]">Today</h2>
      <ul className="flex flex-col mb-[2rem] gap-[0.8rem]">
        {todayData.map((log) => (
          <li key={log.id}>
            <LogItem
              project={log.project}
              datetime={log.datetime}
              content={log.content}
              skills={log.skills}
            />
          </li>
        ))}
      </ul>
      <h2 className="text-[2.2rem] font-semibold mb-[1.6rem]">Yesterday</h2>
      <ul className="flex flex-col mb-[2rem] gap-[0.8rem]">
        {yesterdayData.map((log) => (
          <li key={log.id}>
            <LogItem
              project={log.project}
              datetime={log.datetime}
              content={log.content}
              skills={log.skills}
            />
          </li>
        ))}
      </ul>
      <h2 className="text-[2.2rem] font-semibold mb-[1.6rem]">Last 7 days</h2>
      <ul className="flex flex-col mb-[2rem] gap-[0.8rem]">
        {last7DaysData.map((log) => (
          <li key={log.id}>
            <LogItem
              project={log.project}
              datetime={log.datetime}
              content={log.content}
              skills={log.skills}
              withDate={true}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
