import { useParams } from 'react-router-dom';
import Company from '../components/Company';

function CompanyRoute() {
  const { company } = useParams();

  return (
    <section>
      <Company symbol={company} />
    </section>
  );
}

export default CompanyRoute;
