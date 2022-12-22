import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";
import "./MatchPage.scss";
import YearSelector from "../components/YearSelector";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  if (!matches) return null;
  return (
    <div className="MatchPage">
      <div className="year-selector">
        <h4>Select Year</h4>
        <YearSelector teamName={teamName} />
      </div>
      <div>
        <h1>{teamName} macthes in {year}</h1>
        {matches.map((match, index) => (
          <MatchDetailCard key={index} match={match} teamName={teamName} />
        ))}
      </div>
    </div>
  );
};

export default MatchPage;
