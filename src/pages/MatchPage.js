import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailCard from "../components/MatchDetailCard";

const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  if (!matches) return null;
  return (
    <div className="MatchPage">
      {matches.map((match, index) => (
        <MatchDetailCard key={index} match={match} teamName={teamName} />
      ))}
    </div>
  );
};

export default MatchPage;
