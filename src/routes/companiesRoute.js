import { useParams } from 'react-router-dom';
import Companies from '../components/Companies';

function CompaniesRoute() {
  const { sector } = useParams();

  return (
    <section>
      <Companies sector={sector} />
    </section>
  );
}

export default CompaniesRoute;
