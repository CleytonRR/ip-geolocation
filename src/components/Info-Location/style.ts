import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  margin: 64px 0 120px;
  display: flex;
  justify-content: center;

  & div + div {
    margin-left: 64px;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;

  & > p {
    font-size: 20px;
    margin-left: 1.6rem;
  }
`
