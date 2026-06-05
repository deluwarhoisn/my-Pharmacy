import { useState } from 'react'

function CheckoutPage() {
  const [prescriptionFile, setPrescriptionFile] = useState(null)

  return (
    <section className="content-page checkout-page">
      <h1>Checkout</h1>
      <p>Prescription upload করে medicine order complete করুন।</p>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            নাম
            <input type="text" placeholder="আপনার নাম" />
          </label>

          <label>
            মোবাইল নাম্বার
            <input type="tel" placeholder="01XXXXXXXXX" />
          </label>

          <label>
            ডেলিভারি ঠিকানা
            <textarea rows="3" placeholder="বাড়ি / গ্রাম / এলাকা" />
          </label>

          <label>
            প্রেসক্রিপশন আপলোড
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(event) => setPrescriptionFile(event.target.files?.[0] ?? null)}
            />
          </label>

          <div className="upload-note" aria-live="polite">
            {prescriptionFile ? (
              <span>Selected file: {prescriptionFile.name}</span>
            ) : (
              <span>Supported: JPG, PNG, PDF</span>
            )}
          </div>

          <label>
            পেমেন্ট পদ্ধতি
            <select defaultValue="cod">
              <option value="cod">Cash on delivery</option>
              <option value="bkash">bKash / Nagad</option>
              <option value="card">Card</option>
            </select>
          </label>

          <button type="submit">Place order</button>
        </form>

        <aside className="checkout-summary" aria-label="Order summary">
          <h2>Order summary</h2>
          <div className="summary-row">
            <span>Prescription medicines</span>
            <strong>৳ 420</strong>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <strong>৳ 60</strong>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <strong>৳ 480</strong>
          </div>
          <p>
            প্রেসক্রিপশন যাচাই শেষে অর্ডার কনফার্ম করা হবে। জরুরি হলে হেল্পলাইনে কল করুন।
          </p>
        </aside>
      </div>
    </section>
  )
}

export default CheckoutPage