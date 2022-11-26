import Button from 'components/Button'
import * as S from './style'

const InputForm = () => {
  return (
    <S.ContainerInput>
      <S.Input placeholder="Digite o IP" />
      <Button small>Buscar</Button>
    </S.ContainerInput>
  )
}

export default InputForm
