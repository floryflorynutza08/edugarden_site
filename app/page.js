"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [showParentsModal, setShowParentsModal] = useState(false);
const [educatoriOpen, setEducatoriOpen] = useState(false);
const [gradiniteOpen, setGradiniteOpen] = useState(false);
const [showTrust, setShowTrust] = useState(false);



  // (opțional) blochează scroll-ul pe fundal când e deschis modalul
  useEffect(() => {
    if (showParentsModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [showParentsModal]);
  return (
    <main>
      {/* ===== NAVBAR ===== */}
<header className="eg-nav">
  <div className="eg-nav-inner">
    <Link href="/" className="eg-logo">
  <img 
    src="/images/logo.png" 
    alt="EduGarden Logo" 
    className="eg-logo-img" 
    style={{ height: "60px", marginRight: "10px" }} 
  />
  <span className="eg-logo-text">EduGarden</span>
</Link>

<div className="eg-nav-actions">
  <Link className="eg-cta-top" href="#discover">Descoperă EduGarden</Link>
  <Link className="eg-lang-btn" href="/en">EN</Link>
</div>


  </div>
</header>


      {/* ===== HERO ===== */}
      <section className="eg-hero" id="acasa">
        <div className="eg-hero-inner">
          <h1 className="eg-hero-title">
            EduGarden – legătura zilnică
            <br />dintre părinți și grădinițe
          </h1>
          <p className="eg-hero-subtitle">
            Fiecare zi la grădiniță este o poveste. Fiecare zâmbet, fiecare moment, fiecare pas contează.
            Meriți să o trăiești alături de copilul tău.
          </p>
          <Link className="eg-cta-main" href="#discover">Descoperă EduGarden</Link>
        </div>
      </section>

      {/* ===== POVESTE (Părinți / Educatori + Viziune) ===== */}
      <section className="eg-section" id="poveste">
        <div className="eg-container">
          <h2 className="eg-section-title">Povești care aduc liniște</h2>

          <div className="eg-story-grid">
            {/* Col stânga: textele */}
            <article className="eg-story">
              <h3 className="eg-kicker">💚 Pentru părinți</h3>
              <p>
                EduGarden s-a născut din dragostea noastră pentru copii și din respectul pentru părinți.
                La suprafață este o aplicație, o soluție digitală pentru grădinițe, dar în esență este o
                declarație de grijă — pentru copii, pentru părinți, pentru educatori, pentru tot ceea ce
                înseamnă educație în primii ani de viață. EduGarden este un gest de iubire, un mod prin care
                părintele poate fi acolo, chiar și de la distanță.
              </p>

              <h3 className="eg-kicker">💚 Pentru educatori</h3>
              <p>
                Grădinițele care aleg EduGarden nu aleg doar o aplicație, ci aleg încrederea și respectul
                pentru părinți. Aleg să fie aproape de familie, zi de zi.
              </p>

              <h3 className="eg-kicker">🌈 Viziune</h3>
              <p>
                Visul nostru este ca fiecare copil să fie văzut, iar fiecare părinte să simtă că este acolo.
                EduGarden este începutul unei noi generații de grădinițe — una în care conexiunea contează.
              </p>
            </article>

            {/* Col dreapta: 2 imagini (a 3-a eliminată) */}
            <div className="eg-story-media">
  <img src="/images/parents.jpg" alt="Părinți fericiți" className="eg-photo eg-photo-large" />
  <img src="/images/girl-paint.jpg" alt="Fetiță pictând" className="eg-photo eg-photo-large" />
</div>
          </div>
        </div>
      </section>

{/* ===== CTA + CARDS ===== */}
<section className="eg-cta-band" id="gradinite">
  <div className="eg-container">
    {/* Titlul central ca un buton lung verde */}
    <div className="eg-cta-title">Descoperă EduGarden</div>

    <div className="eg-cards-grid">
      <article className="eg-card">
        <h3>PENTRU PĂRINȚI</h3>
        <ul className="eg-bullets">
          <li>Imagini și vești în timp real</li>
          <li>Amintiri care nu se pierd</li>
          <li>Liniște și siguranță</li>
        </ul>
        <button
  type="button"
  className="eg-card-btn"
  onClick={() => setShowParentsModal(true)}
>
  Vezi beneficiile
</button>
      </article>

      <article className="eg-card">
        <h3>PENTRU EDUCATORI</h3>
        <ul className="eg-bullets">
          <li>Mai puțin stres administrativ</li>
          <li>Apreciere și sprijin</li>
          <li>Comunicare simplă</li>
        </ul>
        <button className="eg-card-btn" onClick={() => setEducatoriOpen(true)}>
  Vezi cum te ajută
</button>

      </article>

      <article className="eg-card">
        <h3>PENTRU GRĂDINIȚE</h3>
        <ul className="eg-bullets">
          <li>Transparență și încredere</li>
          <li>Imagine modernă</li>
          <li>Timp câștigat pentru copii</li>
        </ul>
        <button className="eg-card-btn" onClick={() => setGradiniteOpen(true)}>
  Vezi cum funcționează
</button>
      </article>
    </div>
  </div>
</section>
{/* === MODAL PENTRU PĂRINȚI === */}
{showParentsModal && (
  <div className="eg-modal-overlay" onClick={() => setShowParentsModal(false)}>
    <div className="eg-modal" onClick={(e) => e.stopPropagation()}>
      <button
        className="eg-modal-close"
        onClick={() => setShowParentsModal(false)}
        aria-label="Închide"
      >
        ×
      </button>

      <h2>PENTRU PĂRINȚI</h2>

      <h3> Grija fiecărui părinte</h3>
      <p>
        Te întrebi dacă a mâncat? Dacă doarme liniștit? Dacă râde și se joacă cu ceilalți?
        EduGarden îți răspunde, clipă de clipă. Vezi imagini, primești vești, simți că ești
        alături de el, chiar și de la distanță.
      </p>
      <hr />

      <h3> Amintiri care nu se pierd</h3>
      <p>
        Copilăria trece repede. Zilele pline de culoare devin amintiri. Cu EduGarden,
        aceste clipe rămân la tine pentru totdeauna.
      </p>
      <hr />

      <h3> Liniștea ta, bucuria lui</h3>
      <p>
        Când știi că totul este bine, ziua ta devine mai ușoară. Ai încrederea că micuțul
        tău e îngrijit, fericit și în siguranță.
      </p>
      <hr />

      <h3> Nu rata nicio clipă din copilăria lui</h3>
      <p>
        EduGarden îți aduce zâmbetele, emoțiile și momentele de bucurie direct în inimă,
        chiar dacă nu ești acolo.
      </p>
    </div>
  </div>
)}

{/* === MODAL: PENTRU EDUCATORI === */}
{educatoriOpen && (
  <div className="eg-modal-overlay" onClick={() => setEducatoriOpen(false)}>
    <div className="eg-modal" onClick={(e) => e.stopPropagation()}>
      <button
        className="eg-modal-close"
        onClick={() => setEducatoriOpen(false)}
        aria-label="Închide"
      >
        ×
      </button>

      <h2 className="eg-modal-title">PENTRU EDUCATORI</h2>

      <div className="eg-modal-copy">
        <h3>EduGarden – vocea și sprijinul educatorilor</h3>
        <hr />

        <h3>Munca voastră merită să fie văzută</h3>
        <p>
          Zi de zi construiți caractere, învățați răbdare, empatie și curaj.
          Părinții văd doar o mică parte din ceea ce faceți. EduGarden deschide
          ușa clasei și arată întreaga poveste.
        </p>
        <hr />

        <h3>Mai puțin stres, mai mult timp pentru copii</h3>
        <p>
          EduGarden preia grija mesajelor repetate și a întrebărilor constante.
          Părinții sunt informați, voi aveți liniștea de a vă concentra pe ceea
          ce contează cu adevărat – copiii.
        </p>
        <hr />

        <h3>Dincolo de manuale, în sufletul copiilor</h3>
        <p>
          Cei mici nu învață doar litere și cifre, ci și cum să fie prieteni,
          cum să împartă și cum să viseze. Prin EduGarden, părinții văd aceste
          lecții de viață și le apreciază la adevărata valoare.
        </p>
        <hr />

        <h3>Recunoaștere și apreciere</h3>
        <p>
          De multe ori, munca educatorilor rămâne în umbră. Cu EduGarden, fiecare
          activitate, fiecare poveste împărtășită cu părinții devine dovada că
          ceea ce faceți contează enorm. Astfel, munca voastră este văzută și
          apreciată, iar părinții sunt mai aproape de copii.
        </p>
      </div>

      <div className="eg-modal-actions">
        <button className="eg-modal-primary" onClick={() => setEducatoriOpen(false)}>
          Închide
        </button>
      </div>
    </div>
  </div>
)}
{/* === MODAL: PENTRU GRĂDINIȚE === */}
{gradiniteOpen && (
  <div className="eg-modal-overlay" onClick={() => setGradiniteOpen(false)}>
    <div className="eg-modal" onClick={(e) => e.stopPropagation()}>
      <button
        className="eg-modal-close"
        onClick={() => setGradiniteOpen(false)}
        aria-label="Închide"
      >
        ×
      </button>

      <h2 className="eg-modal-title">PENTRU GRĂDINIȚE</h2>

      <div className="eg-modal-copy">
        <h3>EduGarden nu este doar o aplicație</h3>
        <p>
          Este un instrument care aduce claritate, eficiență și transparență
          într-un sistem care, în multe grădinițe, încă funcționează pe hârtie
          și WhatsApp.
        </p>
        <hr />

        <h3>Reducerea timpului administrativ</h3>
        <p>
          EduGarden reduce drastic timpul petrecut pe activități administrative:
          prezență, comunicare cu părinții, organizarea activităților.
          Educatoarele câștigă timp, iar acest timp este oferit copiilor.
        </p>
        <hr />

        <h3>Consolidarea încrederii părinților</h3>
        <p>
          EduGarden consolidează încrederea părinților în grădiniță, iar
          încrederea părinților înseamnă stabilitate, recomandări și imagine bună
          pentru instituție.
        </p>
        <hr />

        <h3>Alege EduGarden</h3>
        <p>
          Pentru că fiecare copil merită să fie văzut, iar fiecare părinte merită
          să știe.
        </p>
      </div>

      <div className="eg-modal-actions">
        <button className="eg-modal-primary" onClick={() => setGradiniteOpen(false)}>
          Închide
        </button>
      </div>
    </div>
  </div>
)}

{/* ===== TESTIMONIALE ===== */}
<section className="eg-testimonials" id="testimonials">
  <div className="eg-testimonials-title">TESTIMONIALE</div>
  <div className="eg-testimonials-subtitle">Ce spun părinții și educatorii</div>

  <div className="eg-testimonials-grid">
    <div className="eg-testimonial">
      <div className="eg-testimonial-header">Claudiu M. <br />Părinte</div>
      <p>Un ajutor extraordinar pentru noi, părinții. Văd zilnic ce face copilul meu la grădiniță. Recomand!</p>
    </div>

    <div className="eg-testimonial">
      <div className="eg-testimonial-header">Ana R. <br />Părinte</div>
      <p>Este minunat să primesc imagini și vești în timp real. Simt că sunt mereu aproape de copilul meu. Recomand!</p>
    </div>

    <div className="eg-testimonial">
      <div className="eg-testimonial-header">Simona D. <br />Educatoare</div>
      <p>Simplu și eficient. Îmi organizez ușor activitățile și păstrez legătura cu părinții. Comunicarea este mult mai ușoară acum.</p>
    </div>

    <div className="eg-testimonial">
      <div className="eg-testimonial-header">Ana S. <br />Director</div>
      <p>Părinții sunt mai liniștiți, iar echipa este mai organizată. Se vede în feedback și în recomandări.</p>
    </div>
  </div>
</section>

{/* ===== ELEMENTE DE ÎNCREDERE (secțiune) ===== */}
<section className="eg-trust">
  <div className="eg-trust-inner">
    <h2 className="eg-trust-title">ELEMENTE DE ÎNCREDERE</h2>
    <p className="eg-trust-sub">Siguranță, transparență și control pentru datele tale</p>

    <button
      className="eg-btn-white"
      onClick={() => setShowTrust(true)}
      aria-haspopup="dialog"
      aria-controls="trust-modal"
    >
      Vezi detalii
    </button>
  </div>
</section>

{/* === Modal Elemente de încredere === */}
{showTrust && (
  <div className="eg-modal">
    <div className="eg-modal-content">
      <button className="eg-modal-close" onClick={() => setShowTrust(false)}>×</button>
      <h3 className="eg-modal-title">Elemente de încredere</h3>
     <ul className="eg-modal-list">
  <li>
    <span className="eg-modal-term">Conform GDPR (UE 2016/679)</span>
    <span className="eg-modal-desc">
      colectăm minimul necesar, cu transparență și consimțământ; ai dreptul la acces, portabilitate și ștergere.
    </span>
  </li>

  <li>
    <span className="eg-modal-term">Confidențialitate pentru copii</span>
    <span className="eg-modal-desc">
      fotografiile și datele sunt vizibile doar pentru părinți/conturile autorizate.
    </span>
  </li>

  <li>
    <span className="eg-modal-term">Securitate tehnică</span>
    <span className="eg-modal-desc">
      comunicații criptate (HTTPS), parole protejate, control pe roluri, jurnale de acces și copii de siguranță periodice.
    </span>
  </li>

  <li>
    <span className="eg-modal-term">Găzduire în UE</span>
    <span className="eg-modal-desc">
      datele sunt stocate în spațiul UE/SEE pentru conformitate.
    </span>
  </li>

  <li>
    <span className="eg-modal-term">Proprietatea datelor</span>
    <span className="eg-modal-desc">
      grădinița și părinții dețin datele; poți solicita export sau ștergere oricând.
    </span>
  </li>

  <li>
    <span className="eg-modal-term">Dezvoltat în România</span>
    <span className="eg-modal-desc">
      suport în limba română, politici clare și documentație accesibilă.
    </span>
  </li>

  <li>
    <span className="eg-modal-term">Documente</span>
    <span className="eg-modal-desc">
      Politica de confidențialitate și Termeni și condiții disponibile pe site.
    </span>
  </li>
</ul>
    </div>
  </div>
)}

{/* ==== FINAL CTA ==== */}
<section className="eg-final-cta" id="descarca">
  <div className="eg-container">
    <h2 className="eg-final-title">Gata să vezi EduGarden în acțiune?</h2>
    <Link href="#"
       className="eg-final-btn"
       role="button"
       aria-label="Descarcă aplicația acum">
      Descarcă aplicația acum
    </Link>
  </div>
</section>

{/* ==== FOOTER LIGHT ==== */}
<footer className="eg-footer">
  <div className="eg-footer-inner">
    <div className="eg-footer-brand">
      <img src="/images/logo.png" alt="EduGarden Logo" className="eg-footer-logo-img" />
      <span className="eg-footer-name">EduGarden</span>
      <div className="eg-made">
        Creat cu <span className="eg-heart" aria-hidden="true">❤</span> în România
      </div>
      <div className="eg-copy">© {new Date().getFullYear()} EduGarden</div>
    </div>

    <nav className="eg-footer-links" aria-label="Documente legale">
      <Link href="/politica-confidentialitate">Politică de confidențialitate</Link>
      <Link href="/termeni-conditii">Termeni & condiții</Link>
      <Link href="/acord-prelucrare-date">Acord prelucrare date (GDPR)</Link>
    </nav>

    <div className="eg-footer-contact">
      {/* Schimbi ușor adresele când ai domeniul */}
      <div>
        <span className="eg-contact-label">Email contact:</span>
        <Link href="mailto:edugardencontact@gmail.com">edugardencontact@gmail.com</Link>
      </div>
      
      <div>
        <span className="eg-contact-label">Telefon:</span>
        <span className="eg-contact-muted">în curând</span>
      </div>
    </div>
  </div>
</footer>


    </main>
  )
}
