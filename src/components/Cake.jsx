import { useState } from 'react'
import FloatingBg from './FloatingBg'

export default function Cake({ onNext }) {
  const [blown, setBlown] = useState(false)

  function blow() {
    if (blown) return
    setBlown(true)
    setTimeout(() => onNext(), 2200)
  }

  return (
    <section className="page cake-page">
      <FloatingBg variant="party" count={12} />

      <div className="cake-inner">
        <h2 className="cake-heading">Make a wish… 🌟</h2>

        {/* Each piece animates in with a staggered delay to "build" the cake. */}
        <div className={`cake-scene ${blown ? 'blown' : ''}`}>
          <div className="candle">
            <span className="flame" />
            <span className="smoke" />
            <span className="wick" />
          </div>
          <div className="cake-layer layer-top" />
          <div className="cake-layer layer-mid" />
          <div className="cake-layer layer-bottom" />
          <div className="cake-plate" />
        </div>

        <p className="cake-text">
          {blown ? 'Wish made 💫 happy birthday!' : 'Make your wish and blow it out'}
        </p>

        <button className="blow-btn" onClick={blow} disabled={blown}>
          {blown ? '🌬️ ...' : '🌬️ Blow out the candle'}
        </button>
      </div>
    </section>
  )
}
