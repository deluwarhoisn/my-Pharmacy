function DashboardPage() {
  return (
    <section className="content-page">
      <h1>ড্যাশবোর্ড</h1>
      <p>Sotota Pharmacy সেবার সারসংক্ষেপ</p>

      <div className="stats-grid">
        <article className="stat-card">
          <h3>আজকের কল</h3>
          <strong>42</strong>
        </article>
        <article className="stat-card">
          <h3>হোম ভিজিট রিকোয়েস্ট</h3>
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
          <h3>Polli Cikisok Asikur Rohman Sofi</h3>
          <p>আজকের ভিজিট: 8</p>
        </article>
        <article className="info-card">
          <h3>Polli Cikisok Mojibur Rohman</h3>
          <p>আজকের ভিজিট: 6</p>
        </article>
      </div>
    </section>
  )
}

export default DashboardPage
