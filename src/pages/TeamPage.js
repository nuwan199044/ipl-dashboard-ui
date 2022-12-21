import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { useParams } from 'react-router-dom';

const TeamPage = () => {
  const [team, setTeam] = useState({matches: []});
  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}`
      );
      const data = await response.json();
      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  if(!team || team.error) {
    return <h2>Team Not Found</h2>;
  }
  return (
    <div className="TeamPage">
      <h2>{team.teamName}</h2>
      <MatchDetailCard match={team.matches[0]}  teamName={team.teamName} />
      {team.matches.slice(1).map((obj,index) => <MatchSmallCard key={index} match={obj} teamName={team.teamName} />)}
    </div>
  );
};

export default TeamPage;
