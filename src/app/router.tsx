import { createBrowserRouter } from 'react-router-dom';
import CharacterList from '../features/characters/CharacterList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterList />,
  },
]);
