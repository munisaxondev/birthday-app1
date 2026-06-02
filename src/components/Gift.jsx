import { useState } from 'react'
import FloatingBg from './FloatingBg'

export default function Gift({ onNext }) {
  const [opening, setOpening] = useState(false)

  function open() {
    if (opening) return
    setOpening(true)
    // Let the lid pop + sparkles play, then move on.
    setTimeout(() => onNext(), 1400)
  }

  return (
    <section className="page gift-page">
      <FloatingBg variant="hearts" count={12} />

      <div className="gift-inner">
        <h2 className="gift-heading">A gift for you 🎁</h2>

        <button
          className={`gift-box ${opening ? 'opening' : ''}`}
          onClick={open}
          aria-label="Open your gift"
        >
          <span className="gift-sparkles" aria-hidden="true">
            ✨💖✨
          </span>
          <span className="gift-lid" />
          <span className="gift-body" />
          <span className="gift-ribbon-v" />
          <span className="gift-bow">🎀</span>
        </button>

        <p className="gift-text">
          {opening ? 'Opening… 💫' : 'Click and open your gift'}
        </p>
      </div>
    </section>
  )
}
