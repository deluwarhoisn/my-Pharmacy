function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MyCompany</h2>
          <p className="text-sm opacity-80">
            We build modern web solutions with React, Node.js and clean UI design.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4">
            <a className="hover:text-primary transition">🌐</a>
            <a className="hover:text-primary transition">🐦</a>
            <a className="hover:text-primary transition">📘</a>
            <a className="hover:text-primary transition">📸</a>
          </div>
        </div>

        {/* Services */}
        <nav>
          <h6 className="footer-title mb-3">Services</h6>
          <div className="flex flex-col gap-2">
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
        </nav>

        {/* Company */}
        <nav>
          <h6 className="footer-title mb-3">Company</h6>
          <div className="flex flex-col gap-2">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </nav>

        {/* Legal */}
        <nav>
          <h6 className="footer-title mb-3">Legal</h6>
          <div className="flex flex-col gap-2">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </div>

      {/* Bottom line */}
      <div className="text-center mt-10 text-sm opacity-60">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;