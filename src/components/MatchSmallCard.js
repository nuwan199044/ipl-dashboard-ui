import { React } from "react";
import { Link } from "react-router-dom";
import './MatchDetailCard.scss';

const MatchSmallCard = ({ match, teamName }) => {
  if (!match) return null;
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const isMatchWon = teamName === match.winner;

  return (
    <div
      className={
        isMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"
      }
    >
      <span className="vs">vs</span>
      <h1>
        <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link>
      </h1>
      <p className="match-result">
        {match.winner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
};

export default MatchSmallCard;
