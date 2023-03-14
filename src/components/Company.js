import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { fetchCompany } from '../redux/company/companySlice';

function Company({ symbol }) {
  const { company } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(symbol));
  }, [dispatch, symbol]);

  const url = encodeURI(`/sectors/${company.sector}`);

  return (
    <section>
      <header>
        <div>
          <NavLink to={url}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavLink>
        </div>
        <div>Stock Screaner</div>
        <div><FontAwesomeIcon icon={faGear} /></div>
      </header>

      <div className="company-container">
        <div>
          <img src={company.image} alt={company.symbol} />
        </div>
        <div>
          <div className="company-title">{company.symbol}</div>
          <div className="company-changes">{company.changes}</div>
        </div>
      </div>
      <h2>Company name</h2>
      <div className="company-info">{company.companyName}</div>
      <h2>Stock price</h2>
      <div className="company-info">{company.price}</div>
      <h2>Currency</h2>
      <div className="company-info">{company.currency}</div>
      <h2>Industry</h2>
      <div className="company-info">{company.industry}</div>
      <h2>Sector</h2>
      <div className="company-info">{company.sector}</div>
      <h2>Description</h2>
      <p className="company-description">{company.description}</p>
    </section>
  );
}

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Company;
