import styled from 'styled-components'

interface ButtonProps {
  small?: boolean
}

export const Button = styled.button<ButtonProps>`
  outline: none;
  background-color: ${(props) =>
    props.small ? 'var(--purple)' : 'var(--yellow)'};
  color: ${(props) => (props.small ? 'var(--background)' : 'var(--black)')};
  border-radius: 14px;
  width: ${(props) => (props.small ? '100px' : '235px')};
  height: ${(props) => (props.small ? '55px' : '64px')};
  border: none;
  font-size: ${(props) => (props.small ? '1.6rem' : '2.4rem')};
  font-weight: ${(props) => (props.small ? 'normal' : 'bold')};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.small
      ? '0px 0px 8px rgba(0, 0, 0, 0.25)'
      : '0px 3px 8px rgba(28, 27, 45, 0.75)'};
  transition: all 200ms ease-in;
  margin-left: ${(props) => props.small && '1rem'};

  &:hover {
    background-color: var(--green);
  }
`
