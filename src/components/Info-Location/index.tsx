import Image from 'next/image'

import * as S from './style'
import country from 'assets/country.svg'
import city from 'assets/city.svg'

const InfoLocation = () => {
  return (
    <S.Container>
      <S.InfoBox>
        <Image src={country} alt="Pointer Map" />
        <p>Brazil</p>
      </S.InfoBox>
      <S.InfoBox>
        <Image src={city} alt="Two builders" />
        <p>Santa Catarina</p>
      </S.InfoBox>
    </S.Container>
  )
}

export default InfoLocation
