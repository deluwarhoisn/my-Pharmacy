function DoctorRequestPage() {
  return (
    <section className="content-page">
      <h1>ডাক্তার ডাকুন</h1>
      <p>বাড়ি ভিজিট রিকোয়েস্টের জন্য নিচের তথ্য দিন।</p>

      <form className="request-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          আপনার নাম
          <input type="text" placeholder="নাম লিখুন" />
        </label>
        <label>
          মোবাইল নম্বর
          <input type="tel" placeholder="01XXXXXXXXX" />
        </label>
        <label>
          ঠিকানা
          <input type="text" placeholder="এলাকা / গ্রাম" />
        </label>
        <label>
          সমস্যার বিবরণ
          <textarea rows="4" placeholder="রোগ/সমস্যা সংক্ষেপে লিখুন" />
        </label>
        <button type="submit">রিকোয়েস্ট পাঠান</button>
      </form>
    </section>
  )
}

export default DoctorRequestPage
