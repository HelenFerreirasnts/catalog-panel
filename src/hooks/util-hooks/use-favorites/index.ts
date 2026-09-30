import { useState } from 'react'

const STORAGE_KEY = 'catalog-favorite-show-ids'

const readStoredFavorites = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []

  try {
    const parsed: unknown = JSON.parse(stored)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is number => typeof item === 'number')
  } catch {
    return []
  }
}

export const useFavorites = () => {
  const [codes, setCodes] = useState<number[]>(readStoredFavorites)

  const toggleFavorite = (id: number) => {
    setCodes((current) => {
      const exists = current.includes(id)
      const next = exists ? current.filter((item) => item !== id) : [...current, id]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }

  const isFavorite = (id: number) => codes.includes(id)

  return { codes, toggleFavorite, isFavorite }
}
