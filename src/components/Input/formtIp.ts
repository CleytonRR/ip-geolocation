const maskIp = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d{3})(\d{2,3})(\d{2,3})/, '$1.$2.$3.$4')
}

export default maskIp
