import { NavLink } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowsSpin,
  faBellConcierge,
  faBolt,
  faBuilding,
  faCoins,
  faEnvelope,
  faGem,
  faIndustry,
  faMicrochip,
  faNotesMedical,
  faShield,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import style from '../styles/Sector.module.css';

function Sector({ sector, change, className }) {
  const icons = {
    'Basic Materials': faGem,
    'Communication Services': faEnvelope,
    'Consumer Cyclical': faArrowsSpin,
    'Consumer Defensive': faShield,
    Energy: faBolt,
    'Financial Services': faCoins,
    Healthcare: faNotesMedical,
    Industrials: faIndustry,
    'Real Estate': faBuilding,
    Technology: faMicrochip,
    Utilities: faBellConcierge,
  };

  const url = encodeURI(`sectors/${sector}`);
  return (
    <NavLink to={url} className={`${style.sector} ${className}`}>
      <div className={style.iconContainer}>
        <FontAwesomeIcon icon={icons[sector]} />
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
      <div className={style.infoContainer}>
        <h3>{sector}</h3>
        <span>{change}</span>
      </div>
    </NavLink>
  );
}

Sector.propTypes = {
  sector: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Sector;
