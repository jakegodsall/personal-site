"use client";

import { useState, useEffect } from "react";

import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    async function getPortfolioData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }

    async function fetchData() {
      const data = await getPortfolioData("http://0.0.0.0:8000/api/portfolio");
      setPortfolioData(data);
    }

    fetchData();
  }, []);

  console.log(portfolioData);

  return (
    <div>
      <h2 className="text-[2.4rem] font-semibold mb-[2.4rem]">My Work</h2>
      <ul className="flex flex-col items-center">
        {portfolioData.map((portfolio) => (
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
