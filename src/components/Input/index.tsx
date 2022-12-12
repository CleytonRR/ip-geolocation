import Button from 'components/Button'
import { useState } from 'react'
import client from 'utils/api'
import maskIp from './formtIp'
import * as S from './style'

const InputForm = () => {
  const [ip, setIp] = useState('')

  function handleIp(e: React.ChangeEvent<HTMLInputElement>) {
    const inputIp = e.target.value
    const formatIp = maskIp(inputIp)

    setIp(formatIp)
  }

  async function submitForm(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    const ipLocationInfo = await client.get(`/${ip}`)

    console.log(ipLocationInfo.data)
  }

  return (
    <S.ContainerInput onSubmit={submitForm}>
      <S.Input
        value={ip}
        onChange={handleIp}
        placeholder="Digite o IP"
        maxLength={15}
        required
      />
      <Button small>Buscar</Button>
    </S.ContainerInput>
  )
}

export default InputForm
