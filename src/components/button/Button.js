import styled from 'styled-components';

import { string, func } from 'prop-types';

export const Button = ({ children, onClick }) => {
  return <ButtonNaruto onClick={onClick}>{children}</ButtonNaruto>;
};

Button.propTypes = {
  children: string,
  onClick: func,
};

const ButtonNaruto = styled.button`
  background-color: #dc872c;
  color: white;
  border: none;
  border-radius: 0;
  font-size: 1.5em;
  padding: 10px 20px;
  cursor: pointer;
  box-shadow: 3px 3px #333;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #a40000;
  }
`;
