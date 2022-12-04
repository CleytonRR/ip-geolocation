import React from 'react'
import * as S from './style'

type ButtonProps = {
  children?: React.ReactNode
  small?: boolean
}

const Button = ({ children, small }: ButtonProps) => {
  return <S.Button small={small}>{children}</S.Button>
}

export default Button
