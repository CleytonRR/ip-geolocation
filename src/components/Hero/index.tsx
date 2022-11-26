import Button from 'components/Button'
import * as S from './style'
import Render3D from 'components/EarthRender'

const Hero = () => {
  return (
    <>
      <S.Header>
        <div>
          <S.Title>Geo-Localização por IP </S.Title>
          <Button>Comece agora</Button>
        </div>
        <Render3D />
      </S.Header>
    </>
  )
}

export default Hero
