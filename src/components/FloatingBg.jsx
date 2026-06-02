// Decorative floating background — hearts & petals drifting upward.
// `variant` picks the emoji set so each page feels a little different.

const VARIANTS = {
  hearts: ['❤️', '💕', '💖', '💗', '🌸'],
  petals: ['🌸', '🌷', '🌹', '💐', '🌺'],
  party: ['🎉', '🎊', '✨', '💖', '🌸'],
}

export default function FloatingBg({ variant = 'hearts', count = 14 }) {
  const emojis = VARIANTS[variant] ?? VARIANTS.hearts

  // Deterministic-ish spread so items don't all line up.
  const items = Array.from({ length: count }, (_, i) => {
    const left = (i * 37) % 100
    const delay = (i % 7) * 1.3
    const duration = 9 + (i % 5) * 2.5
    const size = 16 + (i % 4) * 9
    const emoji = emojis[i % emojis.length]
    return { left, delay, duration, size, emoji, key: i }
  })

  return (
    <div className="floating-bg" aria-hidden="true">
      {items.map((it) => (
        <span
          key={it.key}
          className="floating-item"
          style={{
            left: `${it.left}%`,
            fontSize: `${it.size}px`,
            animationDelay: `${it.delay}s`,
            animationDuration: `${it.duration}s`,
          }}
        >
          {it.emoji}
        </span>
      ))}
    </div>
  )
}
