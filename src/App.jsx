

import './App.css'
import { useState } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <header className="site-header">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Sotota Pharmacy home">
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
          </a>

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
              <li><a href="#home">হোম</a></li>

              <li className="has-dropdown">
                <button type="button" className="drop-trigger">মেডিসিন কর্নার</button>
                <ul className="dropdown" aria-label="মেডিসিন কর্নার সেকশন">
                  <li><a href="#general-meds">সাধারণ ঔষধ</a></li>
                  <li><a href="#supplements">সাপ্লিমেন্ট</a></li>
                  <li><a href="#first-aid">ফার্স্ট এইড</a></li>
                </ul>
              </li>

              <li className="has-dropdown">
                <button type="button" className="drop-trigger">প্রাণিসম্পদ সেবা</button>
                <ul className="dropdown" aria-label="প্রাণিসম্পদ সেবা সেকশন">
                  <li><a href="#cattle-goats">গরু ও ছাগল</a></li>
                  <li><a href="#poultry">হাঁস-মুরগি</a></li>
                  <li><a href="#vet-advice">ওষুধ ও পরামর্শ</a></li>
                </ul>
              </li>

              <li><a href="#breeding">কৃত্রিম প্রজনন</a></li>
              <li><a className="visit-btn" href="#home-visit">ডাক্তার ডাকুন</a></li>
            </ul>

            <a className="call-btn" href="tel:01724608599" aria-label="Emergency helpline">
              হেল্পলাইন: 01724608599 / 01923775964
            </a>
          </div>
        </nav>
      </header>

      <main className="hero-placeholder" id="home">
        <h1>পরিবার, খামার ও পোষা প্রাণীর জন্য একসাথে বিশ্বস্ত সেবা</h1>
      </main>

      <section className="polli-page" id="polli-cikisok" aria-label="Polli Cikisok team">
        <div className="polli-head">
          <h2>আমাদের পল্লী চিকিৎসক টিম</h2>
          <p>Sotota Pharmacy এর সাথে যুক্ত অভিজ্ঞ সেবাদাতা</p>
        </div>

        <div className="polli-grid">
          <article className="polli-card">
            <h3>Polli Cikisok Asikur Rohman Sofi</h3>
            <p>গ্রাম পর্যায়ে প্রাণিসম্পদ ও সাধারণ চিকিৎসা পরামর্শ।</p>
          </article>

          <article className="polli-card">
            <h3>Polli Cikisok Mojibur Rohman</h3>
            <p>খামারভিত্তিক চিকিৎসা সহায়তা ও জরুরি সেবা সহযোগিতা।</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App
