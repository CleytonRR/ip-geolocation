import Button from 'components/Button'
import { useState } from 'react'
import client from 'utils/api'
import maskIp from './formtIp'
import * as S from './style'

import { ApiResponse } from 'types/ApiResponse'
import { useApiLocation } from 'hooks/useApilocation'

const InputForm = () => {
  const [ip, setIp] = useState('')
  const [error, setError] = useState(false)

  const { updateLocation } = useApiLocation()

  function handleIp(e: React.ChangeEvent<HTMLInputElement>) {
    const inputIp = e.target.value
    const formatIp = maskIp(inputIp)

    setIp(formatIp)
  }

  async function submitForm(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    setError(false)

    try {
      const { data } = await client.get<ApiResponse>(`/${ip}`)

      if (data.message === 'invalid query') {
        setError(true)
        return
      }

      if (data && updateLocation) {
        updateLocation(data)
      }
    } catch (error) {
      setError(true)
    }
  }

  return (
    <S.ContainerForm onSubmit={submitForm} error={error}>
      <S.ContainerInput error={error}>
        <S.Input
          value={ip}
          onChange={handleIp}
          placeholder="Digite o IP"
          maxLength={15}
          required
        />
        <span>Erro ao buscar ip</span>
      </S.ContainerInput>
      <Button small>Buscar</Button>
    </S.ContainerForm>
  )
}

export default InputForm
