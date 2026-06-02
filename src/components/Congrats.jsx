import FloatingBg from './FloatingBg'

export default function Congrats({ onNext }) {
  return (
    <section className="page congrats-page">
      <FloatingBg variant="party" count={16} />

      <div className="congrats-inner">
        <div className="cake-emoji">🎂</div>
        <h1 className="congrats-title">Happy Birthday,<br />Malika!</h1>
        <p className="congrats-msg">
          Today is your birthday and I wish you all the best wishes in this
          world. Love you ❤️
        </p>

        <div className="flower-row" aria-hidden="true">
          <span className="flower" style={{ animationDelay: '0s' }}>🌸</span>
          <span className="flower" style={{ animationDelay: '0.3s' }}>🌷</span>
          <span className="flower" style={{ animationDelay: '0.6s' }}>🌹</span>
          <span className="flower" style={{ animationDelay: '0.9s' }}>🌺</span>
          <span className="flower" style={{ animationDelay: '1.2s' }}>💐</span>
        </div>

        <button className="next-btn" onClick={onNext}>
          Continue →
        </button>
      </div>

      <p className="birth-date">20.08.2011</p>
    </section>
  )
}
