function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <section className="footer-brand-block">
          <h2>Sotota Pharmacy</h2>
          <p>
            Family care, livestock support, and doctor request services in one responsive platform.
          </p>

          <div className="footer-social" aria-label="Social links">
            <a href="https://example.com" aria-label="Website">🌐</a>
            <a href="https://example.com" aria-label="Twitter">🐦</a>
            <a href="https://example.com" aria-label="Facebook">📘</a>
            <a href="https://example.com" aria-label="Instagram">📸</a>
          </div>
        </section>

        <nav className="footer-column" aria-label="Services links">
          <h6>Services</h6>
          <a href="#home">Home</a>
          <a href="/medicine">Medicine corner</a>
          <a href="/livestock">Livestock care</a>
          <a href="/doctor-request">Doctor request</a>
        </nav>

        <nav className="footer-column" aria-label="Company links">
          <h6>Company</h6>
          <a href="#polli-cikisok">Team</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/breeding">Breeding</a>
          <a href="/livestock-advice">Advice</a>
        </nav>

        <nav className="footer-column" aria-label="Legal links">
          <h6>Contact</h6>
          <a href="tel:01724608599">01724608599</a>
          <a href="tel:01923775964">019237759614</a>
          <a href="mailto:info@sototapharmacy.com">info@sototapharmacy.com</a>
        </nav>
      </div>

      <div className="site-footer-bottom">
        © {new Date().getFullYear()} Sotota Pharmacy. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;