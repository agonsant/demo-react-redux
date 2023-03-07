import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Card from '../../shared/components/Card/Card';
import Loading from '../../shared/components/Loading/Loading';
import { APIStatus } from '../../shared/models/api-status';
import { getAllByPageAsync, selectCharacters } from './characters-slice';

const CharacterListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 1rem;
`;

const CharacterList = () => {
  const charactersState = useAppSelector(selectCharacters);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllByPageAsync(1));
  }, [dispatch]);

  const generateCharacterComponent = () => {
    switch (charactersState.status) {
      case APIStatus.LOADING:
        return <Loading />;
      case APIStatus.ERROR:
        return <p role="paragraph">Error</p>;
      default:
        return (
          <CharacterListContainer>
            {charactersState.characters.map(character => (
              <li key={character.id}>
                <Card imgUrl={character.imgUrl} name={character.name} />
              </li>
            ))}
          </CharacterListContainer>
        );
    }
  };

  return <>{generateCharacterComponent()}</>;
};

export default CharacterList;
