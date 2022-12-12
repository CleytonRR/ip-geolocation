import Image from 'next/image'

import * as S from './style'
import countryIcon from 'assets/country.svg'
import cityIcon from 'assets/city.svg'
import { useApiLocation } from 'hooks/useApilocation'

const InfoLocation = () => {
  const { city, country } = useApiLocation()
  return (
    <S.Container>
      <S.InfoBox>
        <Image src={countryIcon} alt="Pointer Map" />
        <p>{country || '-'}</p>
      </S.InfoBox>
      <S.InfoBox>
        <Image src={cityIcon} alt="Two builders" />
        <p>{city || '-'}</p>
      </S.InfoBox>
    </S.Container>
  )
}

export default InfoLocation
