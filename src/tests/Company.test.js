import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../redux/store';
import Company from '../components/Company';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Provider store={store}>
          <Company symbol="BHP" />
        </Provider>,
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
