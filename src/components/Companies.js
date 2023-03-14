import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { fetchCompanies } from '../redux/companies/companiesSlice';
import style from '../styles/Companies.module.css';
import ICONS from '../assets/incons';

function Companies({ sector }) {
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies(sector));
  }, [dispatch, sector]);

  return (
    <section>
      <header>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavLink>
        </div>
        <div>Stock Screaner</div>
        <div><FontAwesomeIcon icon={faGear} /></div>
      </header>
      <div className="header-container">
        <FontAwesomeIcon icon={ICONS[sector]} />
        <div>{sector}</div>
      </div>

      <section className={style.companiesContainer}>
        {
          companies.map((company) => {
            const url = encodeURI(`/company/${company.symbol}`);

            return (
              <NavLink to={url} key={company.symbol}>
                <div className={style.symbol}>{company.symbol}</div>
                <div className={style.info}>
                  <div>{company.companyName}</div>
                  <div>{company.price}</div>
                  <div>{company.beta}</div>
                </div>
                <div className={style.arrowRight}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>

              </NavLink>
            );
          })
        }
      </section>
    </section>
  );
}

Companies.propTypes = {
  sector: PropTypes.string.isRequired,
};

export default Companies;
