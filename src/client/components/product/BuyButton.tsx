interface BuyButtonProps {
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

export function BuyButton({ onClick, disabled = false, loading = false }: BuyButtonProps) {
  return (
    <button
      className="buy-button"
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Processing...' : 'Buy Now'}
    </button>
  )
}
