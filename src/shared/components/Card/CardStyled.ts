import styled from 'styled-components';

export const CardContainer = styled.article`
  max-width: 320px;
  min-height: 500px;

  :hover {
    background-color: var(--container-bg-hover-primary);
  }
`;

export const CardImg = styled.img`
  height: 70%;
  width: 100%;
`;

export const CardTitle = styled.p`
  padding: 2rem;
`;
