import FloatingBg from './FloatingBg'

export default function Letter() {
  return (
    <section className="page letter-page">
      <FloatingBg variant="petals" count={16} />

      <div className="letter-inner">
        <div className="flower-row top" aria-hidden="true">
          <span className="flower">🌷</span>
          <span className="flower">🌹</span>
          <span className="flower">🌸</span>
          <span className="flower">💐</span>
          <span className="flower">🌺</span>
        </div>

        <article className="letter-card">
          <h2 className="letter-title">For Malika 💌</h2>
          <p>
            You're turning 15 — a new chapter, a new page, and a new chance to
            discover who you're becoming. ✨
          </p>
          <p>
            Fifteen is more than just a number. It's a year of growth, new
            experiences, unforgettable memories, and opportunities you haven't
            even imagined yet. Don't be afraid to dream big, try new things, make
            mistakes, and learn from them. Every step, whether small or large, is
            helping you become stronger, wiser, and more confident.
          </p>
          <p>
            Keep believing in yourself, even on the days when things feel
            difficult. Your future is filled with possibilities, and you have so
            much potential waiting to shine. Celebrate how far you've come and
            look forward to all the amazing moments still ahead.
          </p>
          <p>
            May this year bring you happiness, success, laughter, beautiful
            memories, and the courage to chase everything that matters to you.
            Happy 15th birthday! 🎂🌟
          </p>
          <p className="letter-sign">With all my love ❤️</p>
        </article>

        <div className="flower-row bottom" aria-hidden="true">
          <span className="flower">🌺</span>
          <span className="flower">💐</span>
          <span className="flower">🌸</span>
          <span className="flower">🌹</span>
          <span className="flower">🌷</span>
        </div>
      </div>
    </section>
  )
}
