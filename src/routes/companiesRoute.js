import { useParams } from 'react-router-dom';

function CompaniesRoute() {
  let { sector } = useParams();

  sector = decodeURI(sector);

  return (
    <section>
      companies by
      { sector }
    </section>
  );
}

export default CompaniesRoute;
