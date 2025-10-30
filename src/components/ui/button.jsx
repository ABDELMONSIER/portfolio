export function Button({ children, ...props }) {
  return (
    <button {...props} className={`px-6 py-3 rounded-lg font-semibold transition-all ${props.className || ''}`}>
      {children}
    </button>
  )
}
