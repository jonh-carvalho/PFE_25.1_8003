import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function Button({text}) {
    return (
    <>
        <BotaoEstilizado>Clique aqui</BotaoEstilizado>
    </>
    )
}
export default Button;