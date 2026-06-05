import { ROLE_LABELS, ROLES } from '../roleAccess'
import { useRole } from '../roleContext'

const DOCTORS = [
  {
    name: 'Dr. Amina Rahman',
    specialty: 'General medicine',
    availability: 'Sat - Thu, 9:00 AM - 2:00 PM',
    phone: '01711-000111',
  },
  {
    name: 'Dr. Karim Hossain',
    specialty: 'Livestock care',
    availability: 'Sat - Thu, 3:00 PM - 8:00 PM',
    phone: '01711-000222',
  },
  {
    name: 'Dr. Nusrat Jahan',
    specialty: 'Emergency visit',
    availability: 'Daily, 24/7 on-call',
    phone: '01711-000333',
  },
]

function DoctorRequestPage() {
  const { role } = useRole()
  const isInternalRole = role === ROLES.DOCTOR || role === ROLES.ADMIN
  const replyAlert = isInternalRole
    ? {
        title: 'New patient reply alert',
        message: 'A patient request has been updated and is waiting for doctor response.',
        status: 'Priority response needed',
      }
    : {
        title: 'Doctor reply alert',
        message: 'Your doctor has replied to the latest request. Check the message and next steps below.',
        status: 'Last reply: 10 minutes ago',
      }

  return (
    <section className="content-page">
      <h1>ডাক্তার ডাকুন</h1>
      <p>বাড়ি ভিজিট রিকোয়েস্টের জন্য নিচের তথ্য দিন।</p>
      <div className="role-banner inline">
        <span className="role-badge">{ROLE_LABELS[role]}</span>
        <span>{isInternalRole ? 'Internal follow-up tools enabled' : 'Customer request form enabled'}</span>
      </div>

      <div className="reply-alert" role="status" aria-live="polite">
        <div>
          <strong>{replyAlert.title}</strong>
          <p>{replyAlert.message}</p>
        </div>
        <span>{replyAlert.status}</span>
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

      <div className="info-grid" aria-label="Doctor list">
        {DOCTORS.map((doctor) => (
          <article key={doctor.name} className="info-card">
            <h3>{doctor.name}</h3>
            <p>{doctor.specialty}</p>
            <p>{doctor.availability}</p>
            <p>{doctor.phone}</p>
          </article>
        ))}
      </div>

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
