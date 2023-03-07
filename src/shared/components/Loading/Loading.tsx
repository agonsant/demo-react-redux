import styled from 'styled-components';
import loadingGif from '../../../assets/img/loading.gif';

const LoadingImg = styled.img`
  width: 100%;
`;

const Loading = () => {
  return <LoadingImg src={loadingGif} alt="Wating for data loading" />;
};

export default Loading;
