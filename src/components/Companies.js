import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGear, faChevronLeft, faArrowRight, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { fetchCompanies } from '../redux/companies/companiesSlice';
import style from '../styles/Companies.module.css';
import ICONS from '../assets/incons';

function Companies({ sector }) {
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies(sector));
  }, [dispatch, sector]);

  if (!companies.length) {
    return (
      <section className="animated">
        <header>
          <div>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
            </NavLink>
          </div>
          <div>Stock Screaner</div>
          <div><FontAwesomeIcon icon={faGear} /></div>
        </header>
        <div className={style.companiesHeaderContainer}>
          <FontAwesomeIcon icon={ICONS[sector]} />
          <div>{sector}</div>
        </div>
        <div className="loading">
          <span>Loading</span>
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      </section>
    );
  }

  return (
    <section className="animated">
      <header>
        <div>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavLink>
        </div>
        <div>Stock Screaner</div>
        <div><FontAwesomeIcon icon={faGear} /></div>
      </header>
      <div className={style.companiesHeaderContainer}>
        <FontAwesomeIcon icon={ICONS[sector]} />
        <div>{sector}</div>
      </div>

      <section className={style.companiesContainer}>
        {
          companies.map((company) => {
            const url = encodeURI(`/company/${company.symbol}`);

            return (
              <NavLink to={url} key={company.symbol} className="animated">
                <div className={style.symbol}>{company.symbol}</div>
                <div className={style.info}>
                  <div>{company.companyName}</div>
                  <div>{company.price}</div>
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
