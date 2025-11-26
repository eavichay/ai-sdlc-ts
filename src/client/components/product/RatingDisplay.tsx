import { StarIcon } from '../icons/StarIcon'

interface RatingDisplayProps {
  score: number
  reviewCount: number
}

export function RatingDisplay({ score, reviewCount }: RatingDisplayProps) {
  return (
    <div className="rating-display">
      <StarIcon filled />
      <span className="rating-score">{score.toFixed(1)}</span>
      <span className="rating-reviews">({reviewCount.toLocaleString()})</span>
    </div>
  )
}
