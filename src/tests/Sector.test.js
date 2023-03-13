import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Sector from '../components/Sector';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={store}>
          <Sector sector="Basic Materials" change="0.75157%" />
        </Provider>,
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
