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

      <div className="header-container">
        <img src={company.image} alt={company.symbol} />
        <div>{company.symbol}</div>
      </div>

      <div>{company.symbol}</div>
      <div>{company.companyName}</div>
      <div>{company.price}</div>
      <div>{company.changes}</div>
      <div>{company.mktCap}</div>
      <div>{company.currency}</div>
      <div>{company.industry}</div>
      <div>{company.description}</div>
      <div>{company.sector}</div>
      <div>{company.image}</div>

    </section>
  );
}

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Company;
