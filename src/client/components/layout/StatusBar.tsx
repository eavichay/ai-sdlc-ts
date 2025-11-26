export function StatusBar() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  })

  return (
    <div className="status-bar">
      <div className="status-bar-left">
        <span>{currentTime}</span>
      </div>
      <div className="status-bar-right">
        <span>📶</span>
        <span>📡</span>
        <span>🔋</span>
      </div>
    </div>
  )
}
