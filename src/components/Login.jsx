import { useState } from 'react'
import FloatingBg from './FloatingBg'

// The real passcode lives in .env.local (git-ignored), never in the repo.
const SECRET = String(import.meta.env.VITE_PASSWORD ?? '')

export default function Login({ onUnlock }) {
  const [entry, setEntry] = useState('')
  const [wrong, setWrong] = useState(false)
  const maxLen = SECRET.length || 4

  function press(digit) {
    if (entry.length >= maxLen) return
    const next = entry + digit
    setEntry(next)

    if (next.length === maxLen) {
      if (next === SECRET) {
        // Small pause so the last dot fills before we fly away.
        setTimeout(() => onUnlock(), 350)
      } else {
        setWrong(true)
        setTimeout(() => {
          setWrong(false)
          setEntry('')
        }, 650)
      }
    }
  }

  function del() {
    setEntry((e) => e.slice(0, -1))
  }

  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

  return (
    <section className="page login-page">
      <FloatingBg variant="hearts" count={12} />

      <div className="login-inner">
        <p className="login-eyebrow">A little place just for</p>
        <h1 className="login-title">Malika 💝</h1>
        <p className="login-sub">Enter the code to unlock your surprise</p>

        <div className={`dots ${wrong ? 'shake' : ''}`}>
          {Array.from({ length: maxLen }).map((_, i) => (
            <span key={i} className={`dot ${i < entry.length ? 'filled' : ''}`} />
          ))}
        </div>

        <div className="keypad">
          {keys.map((k, i) =>
            k === '' ? (
              <span key={i} className="key key-empty" />
            ) : k === '⌫' ? (
              <button key={i} className="key key-del" onClick={del} aria-label="delete">
                ⌫
              </button>
            ) : (
              <button key={i} className="key" onClick={() => press(k)}>
                {k}
              </button>
            ),
          )}
        </div>

        <p className="login-hint">Hint: the year a special someone was born 💭</p>
      </div>
    </section>
  )
}
