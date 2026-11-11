export function CloseIcon({ size = 22, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 5l14 14M19 5 5 19" />
    </svg>
  )
}

export function DropMark({ size = 22, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 2.4c3.9 4.8 6.4 8 6.4 11.5a6.4 6.4 0 1 1-12.8 0C5.6 10.4 8.1 7.2 12 2.4Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9.2 14.2c.2 1.8 1.5 3.1 3.3 3.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
