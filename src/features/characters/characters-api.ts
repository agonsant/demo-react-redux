import { Characters, People, PeopleResponse } from './characters-model';

const getIdFromCharacter = (character: People): string => {
  const urlSplitted = character.url.split('/');
  return urlSplitted[urlSplitted.length - 2];
};

export const getAllCharactersByPage = async (
  page: number = 1,
): Promise<Characters> => {
  const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
  const characters: PeopleResponse = await response.json();
  return {
    count: characters.count,
    characters: characters.results.map(character => {
      const id = getIdFromCharacter(character);
      return {
        ...character,
        id,
        imgUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
      };
    }),
  };
};
