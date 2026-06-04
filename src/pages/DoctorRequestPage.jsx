import { ROLE_LABELS, ROLES } from '../roleAccess'
import { useRole } from '../roleContext'

function DoctorRequestPage() {
  const { role } = useRole()
  const isInternalRole = role === ROLES.DOCTOR || role === ROLES.ADMIN

  return (
    <section className="content-page">
      <h1>ডাক্তার ডাকুন</h1>
      <p>বাড়ি ভিজিট রিকোয়েস্টের জন্য নিচের তথ্য দিন।</p>
      <div className="role-banner inline">
        <span className="role-badge">{ROLE_LABELS[role]}</span>
        <span>{isInternalRole ? 'Internal follow-up tools enabled' : 'Customer request form enabled'}</span>
      </div>

      {isInternalRole ? (
        <div className="info-grid role-panel">
          <article className="info-card">
            <h3>আজকের রিকোয়েস্ট</h3>
            <p>জরুরি ফলো-আপ এবং ভিজিট অগ্রাধিকার তালিকা</p>
          </article>
          <article className="info-card">
            <h3>ভিজিট স্ট্যাটাস</h3>
            <p>Assigned, on the way, completed</p>
          </article>
          <article className="info-card">
            <h3>ডাক্তার নোট</h3>
            <p>রোগীর বা খামারের পরবর্তী পদক্ষেপ</p>
          </article>
        </div>
      ) : null}

      <form className="request-form" onSubmit={(event) => event.preventDefault()}>
        <label>
          আপনার নাম
          <input type="text" placeholder="নাম লিখুন" />
        </label>
        <label>
          মোবাইল নাম্বার
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
        <button type="submit">রিকোয়েস্ট পাঠান.</button>
      </form>
    </section>
  )
}

export default DoctorRequestPage
