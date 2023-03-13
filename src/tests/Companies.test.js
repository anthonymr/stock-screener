import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Companies from '../components/Companies';

const mockedSector = encodeURI('Basic Materials');

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={store}>
          <Companies sector={mockedSector} />
        </Provider>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
