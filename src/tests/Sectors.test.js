import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Sectors from '../components/Sectors';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Sectors />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
