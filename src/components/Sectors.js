import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSectors } from '../redux/sectors/sectorsSlice';
import Sector from './Sector';

function Sectors() {
  const { sectors } = useSelector((state) => state.sectors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectors());
  }, [dispatch]);

  return (
    <>
      {
        sectors.map((sector) => (
          <Sector
            key={sector.sector}
            sector={sector.sector}
            change={sector.changesPercentage}
          />
        ))
      }
    </>
  );
}

export default Sectors;
