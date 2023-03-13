import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { fetchCompanies } from '../redux/companies/companiesSlice';

function Companies({ sector }) {
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies(sector));
  }, [dispatch, sector]);

  return (
    <>
      <NavLink to="/">Home</NavLink>
      {
        companies.map((company) => {
          const url = encodeURI(`/company/${company.symbol}`);

          return (
            <NavLink to={url} key={company.symbol}>
              <div>{company.symbol}</div>
              <div>{company.companyName}</div>
              <div>{company.price}</div>
              <div>{company.beta}</div>
            </NavLink>
          );
        })
      }
    </>
  );
}

Companies.propTypes = {
  sector: PropTypes.string.isRequired,
};

export default Companies;
