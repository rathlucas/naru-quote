import { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

import narutoImg from '../images/naruto.png';

import { Quotes } from '../components/quotes/Quotes';
import { getQuote } from '../services/quotesService/quotesService';

export default function App() {
  const isMounted = useRef(true);

  console.log(isMounted);

  const [quoteState, setQuoteState] = useState({
    quote: 'test',
    speaker: 'speaker',
  });

  const onUpdate = async () => {
    if (isMounted) {
      const quote = await getQuote();
      setQuoteState(quote);
    }
  };

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
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
