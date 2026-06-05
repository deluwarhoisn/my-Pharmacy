import { NavLink } from 'react-router-dom'

function MedicinePage() {
  return (
    <section className="content-page">
      <h1>মেডিসিন কর্নার</h1>
      <p>মানুষের সাধারণ ঔষধ, সাপ্লিমেন্ট ও ফার্স্ট এইড সাপোর্ট।</p>

      <div className="checkout-cta">
        <div>
          <strong>প্রেসক্রিপশন থাকলে সরাসরি checkout করুন</strong>
          <p>ডাক্তারি প্রেসক্রিপশন আপলোড করে অর্ডার এগিয়ে নিন।</p>
        </div>
        <NavLink to="/checkout" className="checkout-link">
          Checkout with prescription upload
        </NavLink>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>সাধারণ ঔষধ</h3>
          <p>জ্বর, সর্দি-কাশি, ব্যথা ও নিয়মিত ব্যবহারের ঔষধ।</p>
        </article>
        <article className="info-card">
          <h3>সাপ্লিমেন্ট</h3>
          <p>ভিটামিন, মিনারেল ও স্বাস্থ্য রক্ষার সাপোর্ট প্রোডাক্ট।</p>
        </article>
        <article className="info-card">
          <h3>ফার্স্ট এইড</h3>
          <p>জরুরি প্রাথমিক সেবার প্রয়োজনীয় সামগ্রী।</p>
        </article>
      </div>
    </section>
  )
}

export default MedicinePage
