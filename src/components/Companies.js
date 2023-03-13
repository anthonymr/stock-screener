import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { fetchCompanies } from '../redux/companies/companiesSlice';

function Companies({ sector }) {
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(sector);
    dispatch(fetchCompanies(sector));
  }, [dispatch, sector]);

  return (
    <>
      {
        companies.map((company) => (
          <div key={company.symbol}>
            {company.symbol}
            {company.companyName}
            {company.price}
            {company.beta}
          </div>
        ))
      }
    </>
  );
}

Companies.propTypes = {
  sector: PropTypes.string.isRequired,
};

export default Companies;
