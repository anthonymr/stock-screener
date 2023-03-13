import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { fetchCompany } from '../redux/company/companySlice';

function Company({ symbol }) {
  const { company } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompany(symbol));
  }, [dispatch, symbol]);

  return (
    <article>
      <NavLink to="/">Home</NavLink>
      <div>{ company.symbol }</div>
      <div>{ company.companyName }</div>
      <div>{ company.price }</div>
      <div>{ company.changes }</div>
      <div>{ company.mktCap }</div>
      <div>{ company.currency }</div>
      <div>{ company.industry }</div>
      <div>{ company.description }</div>
      <div>{ company.sector }</div>
      <div>{ company.image }</div>

    </article>
  );
}

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Company;
