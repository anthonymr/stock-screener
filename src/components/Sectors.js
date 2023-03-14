import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { fetchSectors } from '../redux/sectors/sectorsSlice';
import Sector from './Sector';
import stocks from '../assets/images/stocks2.jpg';
import style from '../styles/Sectors.module.css';

function Sectors() {
  const { sectors } = useSelector((state) => state.sectors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSectors());
  }, [dispatch]);

  const isLight = [0, 3, 4, 7, 8];

  return (
    <section>
      <header>
        <div />
        <div>Stock Screaner</div>
        <div><FontAwesomeIcon icon={faGear} /></div>
      </header>
      <div className="picture-container">
        <img src={stocks} alt="stock market" />
      </div>
      <h2>Economical Sectors</h2>
      <div className={style.sectorsWrapper}>
        <section className={style.sectorsContainer}>
          {
            sectors.map((sector, index) => {
              const className = isLight.includes(index % 10)
                ? 'is-light'
                : 'is-dark';

              return (
                <Sector
                  key={sector.sector}
                  sector={sector.sector}
                  change={sector.changesPercentage}
                  className={className}
                />
              );
            })
          }
        </section>
      </div>
    </section>
  );
}

export default Sectors;
