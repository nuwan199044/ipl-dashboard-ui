import { React } from "react";
import { Link } from 'react-router-dom';
import './YearSelector.scss';

const YearSelector = ({teamName}) => {
  let years = [];
  const startYear = 2008;
  const endYear = 2020;

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <ol className="YearSelector">
      {years.map((year, index) => (
        <li key={index}>
            <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ol>
  );
};

export default YearSelector;
