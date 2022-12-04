import Button from 'components/Button'
import { useState } from 'react'
import maskIp from './formtIp'
import * as S from './style'

const InputForm = () => {
  const [ip, setIp] = useState('')

  function handleIp(e: React.ChangeEvent<HTMLInputElement>) {
    const inputIp = e.target.value
    const formatIp = maskIp(inputIp)

    setIp(formatIp)
  }

  return (
    <S.ContainerInput>
      <S.Input
        value={ip}
        onChange={handleIp}
        placeholder="Digite o IP"
        maxLength={15}
      />
      <Button small>Buscar</Button>
    </S.ContainerInput>
  )
}

export default InputForm
