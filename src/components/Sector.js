import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function Sector({ sector, change }) {
  const url = encodeURI(`sectors/${sector}`);
  return (
    <NavLink to={url}>
      <h1>{sector}</h1>
      <span>{change}</span>
    </NavLink>
  );
}

Sector.propTypes = {
  sector: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
};

export default Sector;
