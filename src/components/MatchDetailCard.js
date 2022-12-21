import { React } from "react";
import { Link } from "react-router-dom";

const MatchDetailCard = ({ match, teamName }) => {
  if (!match) return null;

  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;

  return (
    <div className="MatchDetailCard">
      <h3>Latest Matches</h3>
      <h1>
        vs
        <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link>
      </h1>
      <h2>{match.date}</h2>
      <h3>at {match.venue}</h3>
      <h3>
        {match.winner} won by {match.resultMargin} {match.result}
      </h3>
    </div>
  );
};

export default MatchDetailCard;
