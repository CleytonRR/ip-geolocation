import styled from 'styled-components'

interface ButtonProps {
  small?: boolean
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  background-color: ${(props) =>
    props.small ? 'var(--purple)' : 'var(--yellow)'};
  color: var(--black);
  border-radius: 14px;
  margin-top: 64px;
  width: 235px;
  height: 64px;
  border: none;
  font-size: 2.4rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0px 3px 8px rgba(28, 27, 45, 0.75);
  transition: all 200ms ease-in;

  &:hover {
    background-color: var(--green);
  }
`
