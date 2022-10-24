import styled from "styled-components";

export const SearchStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  padding: 2em;
  border-radius: 10px;
`;


export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid #006e52;
  background-color: transparent;
  padding-left: 16px;
  color: #c1c0c9;
  font-size: 1rem;

  &::placeholder {
    font-size: 1rem;
  }

  &:focus {
    outline: none;
  }
`;

export const BotonStyled = styled.button`
  height: 100%;
  border: 2px solid #006e52;
  cursor: pointer;
  margin-left: 16px;
  border-radius: 6px;

  &:hover{
    border: black;
    background-color: #006e52;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;