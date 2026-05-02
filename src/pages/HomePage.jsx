function HomePage() {
  return (
    <>
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
        <footer></footer>
      </section>
    </>
  )
}

export default HomePage
