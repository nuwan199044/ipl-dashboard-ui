import { React, useEffect, useState } from "react";
import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import { useParams } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from 'react-router-dom';
import "./TeamPage.scss";

const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });
  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);
      const data = await response.json();
      setTeam(data);
    };
    fetchTeam();
  }, [teamName]);

  if (!team || team.error) {
    return <h2>Team Not Found</h2>;
  }
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{team.teamName}</h1>
      </div>
      <div className="win-loss-section">
        Wins / Losses
        <PieChart
          data={[
            { title: "Losses", value: team.totalWins, color: "#a34d5d" },
            { title: "Wins", value: team.totalMatches - team.totalWins, color: "#4da375" }
          ]}
        />
      </div>
      <div className="match-detail-section">
        <h3>Latest Matches</h3>
        <MatchDetailCard match={team.matches[0]} teamName={team.teamName} />
      </div>
      {team.matches.slice(1).map((obj, index) => (
        <MatchSmallCard key={index} match={obj} teamName={team.teamName} />
      ))}
      <div className="more-link">
        <Link to={`/teams/${teamName}/matches/2020`}>More ></Link>
      </div>
    </div>
  );
};

export default TeamPage;
