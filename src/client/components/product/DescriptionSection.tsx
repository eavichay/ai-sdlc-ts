import { useState } from 'react'

interface DescriptionSectionProps {
  description: string
}

export function DescriptionSection({ description }: DescriptionSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const shouldShowReadMore = description.length > 150

  return (
    <div className="description-section">
      <h3 className="description-title">Description</h3>
      <p className={`description-text ${!isExpanded && shouldShowReadMore ? 'collapsed' : ''}`}>
        {description}
      </p>
      {shouldShowReadMore && (
        <button
          className="read-more-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}
