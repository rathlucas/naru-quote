import styled from 'styled-components';
import narutoImg from '../images/naruto.png';
import { Quotes } from '../components/quotes/Quotes';

export default function App() {
  return (
    <Content>
      <Quotes quote={'test'} speaker={'test speaker'} />
      <NarutoImg src={narutoImg} alt="Naruto holding a kunai" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
