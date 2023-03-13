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

  let className = 'is-light';
  let isLight = true;

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
              if (index === 0) {
                isLight = false;
              } else if (index % 2 !== 0) {
                if (!isLight) className = 'is-dark';
                else if (isLight) className = 'is-light';
              } else if (index % 2 === 0) {
                if (!isLight) {
                  className = 'is-dark';
                  isLight = true;
                } else if (isLight) {
                  className = 'is-light';
                  isLight = false;
                }
              }

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
