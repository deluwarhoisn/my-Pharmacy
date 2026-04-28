
import './App.css'
import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MedicinePage from './pages/MedicinePage'
import LivestockPage from './pages/LivestockPage'
import BreedingPage from './pages/BreedingPage'
import DoctorRequestPage from './pages/DoctorRequestPage'
import DashboardPage from './pages/DashboardPage'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="navbar" aria-label="Primary navigation">
          <NavLink className="brand" to="/" aria-label="Sotota Pharmacy home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 64 64" role="img" focusable="false">
                <circle cx="32" cy="32" r="30" fill="currentColor" opacity="0.12" />
                <path d="M14 33h11v-8h7v8h11v7H32v11h-7V40H14z" fill="currentColor" />
                <circle cx="49" cy="16" r="5" fill="currentColor" />
                <circle cx="57" cy="24" r="4" fill="currentColor" />
                <circle cx="45" cy="25" r="4" fill="currentColor" />
                <path d="M49 22c-4.6 0-8 3.4-8 7.5 0 3.6 3.3 6.6 8 6.6s8-3 8-6.6C57 25.4 53.6 22 49 22z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-text">
              <strong>Sotota Pharmacy</strong>
              <small>Trusted Vet + Human Care</small>
            </span>
          </NavLink>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-wrap ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" onClick={closeMenu}>হোম</NavLink>
              </li>

              <li className="has-dropdown">
                <NavLink className="drop-trigger" to="/medicine" onClick={closeMenu}>মেডিসিন কর্নার</NavLink>
                <ul className="dropdown" aria-label="মেডিসিন কর্নার সেকশন">
                  <li><NavLink to="/medicine" onClick={closeMenu}>সাধারণ ঔষধ</NavLink></li>
                  <li><NavLink to="/medicine" onClick={closeMenu}>সাপ্লিমেন্ট</NavLink></li>
                  <li><NavLink to="/medicine" onClick={closeMenu}>ফার্স্ট এইড</NavLink></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <NavLink className="drop-trigger" to="/livestock" onClick={closeMenu}>প্রাণিসম্পদ সেবা</NavLink>
                <ul className="dropdown" aria-label="প্রাণিসম্পদ সেবা সেকশন">
                  <li><NavLink to="/livestock" onClick={closeMenu}>গরু ও ছাগল</NavLink></li>
                  <li><NavLink to="/livestock" onClick={closeMenu}>হাঁস-মুরগি</NavLink></li>
                  <li><NavLink to="/livestock" onClick={closeMenu}>ওষুধ ও পরামর্শ</NavLink></li>
                </ul>
              </li>

              <li><NavLink to="/breeding" onClick={closeMenu}>কৃত্রিম প্রজনন</NavLink></li>
              <li><NavLink to="/dashboard" onClick={closeMenu}>ড্যাশবোর্ড</NavLink></li>
              <li><NavLink className="visit-btn" to="/doctor-request" onClick={closeMenu}>ডাক্তার ডাকুন</NavLink></li>
            </ul>

            <a className="call-btn" href="tel:01724608599" aria-label="Emergency helpline">
              হেল্পলাইন: 01724608599 / 01923775964
            </a>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/medicine" element={<MedicinePage />} />
        <Route path="/livestock" element={<LivestockPage />} />
        <Route path="/breeding" element={<BreedingPage />} />
        <Route path="/doctor-request" element={<DoctorRequestPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
