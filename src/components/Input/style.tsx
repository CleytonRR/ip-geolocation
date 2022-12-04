import styled from 'styled-components'

export const ContainerInput = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12rem;
`

export const Input = styled.input`
  outline: none;
  padding: 1.6rem;
  font-size: 2rem;
  border: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  &::placeholder {
    font-size: 2rem;
    color: rgba(30, 32, 25, 0.14);
  }
`
