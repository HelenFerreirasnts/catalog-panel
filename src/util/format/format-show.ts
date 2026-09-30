const statusLabels: Record<string, string> = {
  Ended: 'Encerrada',
  Running: 'Em exibição',
  'To Be Determined': 'A definir',
}

export const formatStatus = (status: string) => {
  return statusLabels[status] ?? status
}

export const formatRating = (rating: number | null) => {
  if (rating === null) return 'Sem nota'
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(rating)
}

export const formatPremiered = (value: string) => {
  if (!value) return 'Data não informada'

  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('pt-BR').format(date)
}
