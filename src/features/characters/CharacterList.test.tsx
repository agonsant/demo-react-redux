import { render, screen, waitFor } from '@testing-library/react';
import CharacterList from './CharacterList';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import { errorHandlers } from '../../mocks/handlers';

describe('Given a CharacterList Component', () => {
  describe('When component loads and API responds with characters', () => {
    test('Then it should show loading and after response should render the list', async () => {
      render(
        <Provider store={store}>
          <CharacterList />
        </Provider>,
      );
      const loadingElement = await screen.findByRole('img');
      expect(loadingElement).toHaveAttribute('alt', 'Wating for data loading');
      await waitFor(async () => {
        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(2);
      });
    });
  });

  describe('When component loads and API responds with error', () => {
    test('Then it should show loading and after response should render the error message', async () => {
      server.use(...errorHandlers);
      render(
        <Provider store={store}>
          <CharacterList />
        </Provider>,
      );
      const loadingElement = await screen.findByRole('img');
      expect(loadingElement).toHaveAttribute('alt', 'Wating for data loading');
      await waitFor(async () => {
        const errorMessage = await screen.findByRole('paragraph');
        expect(errorMessage).toHaveTextContent('Error');
      });
    });
  });
});
