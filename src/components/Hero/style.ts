import styled from 'styled-components'
import background from 'assets/background-hero.png'

export const Header = styled.header`
  background-image: url(${background.src});
  height: 687px;
  width: 100%;
`

export const Title = styled.h1`
  color: var(--green);
  font-size: 6.4rem;
  font-weight: bold;
`
