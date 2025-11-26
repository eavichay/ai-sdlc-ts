import { useNavigate } from '@tanstack/react-router'
import { BackIcon } from '../icons/BackIcon'
import { HeartIcon } from '../icons/HeartIcon'
import { useState } from 'react'

interface HeaderProps {
  title: string
  onBack?: () => void
  onFavoriteToggle?: (isFavorite: boolean) => void
  initialFavorite?: boolean
}

export function Header({
  title,
  onBack,
  onFavoriteToggle,
  initialFavorite = false,
}: HeaderProps) {
  const navigate = useNavigate()
  const [isFavorite, setIsFavorite] = useState(initialFavorite)

  const handleBack = () => {
    if (onBack) {
      onBack()
    } else {
      navigate({ to: '/' })
    }
  }

  const handleFavoriteToggle = () => {
    const newFavoriteState = !isFavorite
    setIsFavorite(newFavoriteState)
    onFavoriteToggle?.(newFavoriteState)
  }

  return (
    <header className="product-header-nav">
      <button
        className="back-button"
        onClick={handleBack}
        aria-label="Go back"
      >
        <BackIcon />
      </button>
      <h1 className="page-title">{title}</h1>
      <button
        className="favorite-button"
        onClick={handleFavoriteToggle}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        <HeartIcon filled={isFavorite} />
      </button>
    </header>
  )
}
