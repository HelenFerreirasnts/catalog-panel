export const formatCount = (value: number) => {
  return new Intl.NumberFormat('pt-BR').format(value)
}
