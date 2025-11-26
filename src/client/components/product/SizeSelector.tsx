import { useState } from 'react'

type Size = 'S' | 'M' | 'L'

interface SizeSelectorProps {
  onSizeChange?: (size: Size) => void
  defaultSize?: Size
}

export function SizeSelector({
  onSizeChange,
  defaultSize = 'M',
}: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<Size>(defaultSize)

  const sizes: Size[] = ['S', 'M', 'L']

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size)
    onSizeChange?.(size)
  }

  return (
    <div className="size-selector">
      <h3 className="size-title">Size</h3>
      <div className="size-options">
        {sizes.map((size) => (
          <button
            key={size}
            className={`size-option ${selectedSize === size ? 'active' : ''}`}
            onClick={() => handleSizeChange(size)}
            aria-pressed={selectedSize === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
