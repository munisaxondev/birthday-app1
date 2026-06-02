import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Congrats from './components/Congrats'
import Gift from './components/Gift'
import Cake from './components/Cake'
import Letter from './components/Letter'

const PAGES = ['login', 'congrats', 'gift', 'cake', 'letter']

export default function App() {
  const [page, setPage] = useState(0)

  const next = () => setPage((p) => Math.min(p + 1, PAGES.length - 1))

  return (
    <div className="phone">
      {/* Keyed wrapper re-mounts on every page change, replaying the slide-in. */}
      <div key={page} className="page-transition">
        {page === 0 && <Login onUnlock={next} />}
        {page === 1 && <Congrats onNext={next} />}
        {page === 2 && <Gift onNext={next} />}
        {page === 3 && <Cake onNext={next} />}
        {page === 4 && <Letter />}
      </div>
    </div>
  )
}
