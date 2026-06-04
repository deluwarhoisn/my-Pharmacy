import { ROLE_LABELS } from '../roleAccess'
import { useRole } from '../roleContext'

function DashboardPage() {
  const { role } = useRole()

  return (
    <section className="content-page">
      <h1>ড্যাশবোর্ড</h1>
      <p>Sotota Pharmacy সেবার সারসংক্ষেপ</p>
      <div className="role-banner inline">
        <span className="role-badge">{ROLE_LABELS[role]}</span>
        <span>Dashboard access granted</span>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <h3>আজকের কল.</h3>
          <strong>42</strong>
        </article>
        <article className="stat-card">
          <h3>হোম ভিজিট রিকোয়েস্ট.</h3>
          <strong>17</strong>
        </article>
        <article className="stat-card">
          <h3>প্রাণিসম্পদ কেস</h3>
          <strong>26</strong>
        </article>
        <article className="stat-card">
          <h3>মেডিসিন অর্ডার</h3>
          <strong>58</strong>
        </article>
      </div>

      <div className="info-grid">
        <article className="info-card">
          <h3>Admin Queue</h3>
          <p>Pending approvals, role management, and branch oversight</p>
        </article>
        <article className="info-card">
          <h3>Doctor Queue</h3>
          <p>Active cases, visit assignments, and follow-ups</p>
        </article>
      </div>
    </section>
  )
}

export default DashboardPage
