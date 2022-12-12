import styled from 'styled-components'

interface ContainerError {
  error?: boolean
}

export const ContainerForm = styled.form<ContainerError>`
  width: 100%;
  display: flex;
  align-items: ${(props) => (props.error ? 'flex-start' : 'center')};
  justify-content: center;
  margin-top: 12rem;
`

export const ContainerInput = styled.div<ContainerError>`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 1.6rem;
    margin-top: 8px;
    margin-left: 4px;
    color: #d13c3c;
    display: ${(props) => (props.error ? 'block' : 'none')};
  }
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
