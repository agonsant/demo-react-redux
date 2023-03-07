import { FC } from 'react';
import { CardContainer, CardImg, CardTitle } from './CardStyled';

interface CardProps {
  imgUrl: string;
  name: string;
}
const Card: FC<CardProps> = ({ name, imgUrl }) => {
  return (
    <CardContainer>
      <CardImg src={imgUrl} alt={`${name} avatar`} />
      <CardTitle>{name}</CardTitle>
    </CardContainer>
  );
};

export default Card;
