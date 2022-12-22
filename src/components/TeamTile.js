import { React } from "react";
import { Link } from "react-router-dom";
import "./TeamTile.scss";

const TeamTile = ({ teamName }) => {
  return (
    <Link to={`/teams/${teamName}`}>
      <div className="TeamTile">
        <h1>{teamName}</h1>
      </div>
    </Link>
  );
};

export default TeamTile;
