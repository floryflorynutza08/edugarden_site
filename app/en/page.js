"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HomeEN() {
  // --- STATE identical with RO page ---
  const [showParentsModal, setShowParentsModal] = useState(false);
  const [educatoriOpen, setEducatoriOpen] = useState(false);
  const [gradiniteOpen, setGradiniteOpen] = useState(false);
  const [showTrust, setShowTrust] = useState(false);

  // lock background scroll when a modal is open
  useEffect(() => {
    document.body.style.overflow = (showParentsModal || educatoriOpen || gradiniteOpen || showTrust) ? "hidden" : "";
  }, [showParentsModal, educatoriOpen, gradiniteOpen, showTrust]);

  return (
    <main>
      {/* ===== NAVBAR ===== */}
      <header className="eg-nav">
        <div className="eg-nav-inner">
          <Link href="/en" className="eg-logo">
            <img
              src="/images/logo.png"
              alt="EduGarden Logo"
              className="eg-logo-img"
              style={{ height: "60px", marginRight: "10px" }}
            />
            <span className="eg-logo-text">EduGarden</span>
          </Link>

           {/* === Acțiuni dreapta: CTA + buton limbă === */}
    <div className="eg-actions">
      <Link className="eg-cta-top" href="#discover">Discover EduGarden</Link>
      <button
        className="eg-lang-btn"
        onClick={() => (window.location.href = "/")}
        aria-label="Switch to Romanian"
        title="RO"
      >
        RO
      </button>
    </div>

        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="eg-hero" id="home">
        <div className="eg-hero-inner">
          <h1 className="eg-hero-title">
            EduGarden – the daily connection
            <br /> between parents and kindergartens
          </h1>
          <p className="eg-hero-subtitle">
            Every day in kindergarten is a story. Every smile, every moment, every step matters.
            You deserve to live it close to your child.
          </p>
          <Link className="eg-cta-main" href="#discover">Discover EduGarden</Link>
        </div>
      </section>

      {/* ===== STORY (Parents / Educators / Vision) ===== */}
      <section className="eg-section" id="story">
        <div className="eg-container">
          <h2 className="eg-section-title">Stories that bring peace of mind</h2>

          <div className="eg-story-grid">
            {/* left column text */}
            <article className="eg-story">
              <h3 className="eg-kicker">💚 For parents</h3>
              <p>
                EduGarden was born from our love for children and respect for parents. On the surface it’s an app,
                a digital solution for kindergartens; at its core it’s a statement of care—for children, for parents,
                for educators, for everything early education means. EduGarden is a gesture of love, a way for parents
                to be there, even from a distance.
              </p>

              <h3 className="eg-kicker">💚 For educators</h3>
              <p>
                Kindergartens that choose EduGarden don’t just choose an app; they choose trust and respect for parents.
                They choose to be close to families, every day.
              </p>

              <h3 className="eg-kicker">🌈 Vision</h3>
              <p>
                Our dream is for every child to be seen and every parent to feel present. EduGarden is the beginning of
                a new generation of kindergartens—one where connection matters.
              </p>
            </article>

            {/* right column images */}
            <div className="eg-story-media">
              <img src="/images/parents.jpg" alt="Happy parents" className="eg-photo eg-photo-large" />
              <img src="/images/girl-paint.jpg" alt="Girl painting" className="eg-photo eg-photo-large" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA + CARDS ===== */}
      <section className="eg-cta-band" id="discover">
        <div className="eg-container">
          <div className="eg-cta-title">Discover EduGarden</div>

          <div className="eg-cards-grid">
            <article className="eg-card">
              <h3>FOR PARENTS</h3>
              <ul className="eg-bullets">
                <li>Photos & updates in real time</li>
                <li>Memories that don’t get lost</li>
                <li>Peace of mind & safety</li>
              </ul>
              <button
                type="button"
                className="eg-card-btn"
                onClick={() => setShowParentsModal(true)}
              >
                See benefits
              </button>
            </article>

            <article className="eg-card">
              <h3>FOR EDUCATORS</h3>
              <ul className="eg-bullets">
                <li>Less admin stress</li>
                <li>Recognition & support</li>
                <li>Simple communication</li>
              </ul>
              <button className="eg-card-btn" onClick={() => setEducatoriOpen(true)}>
                See how it helps
              </button>
            </article>

            <article className="eg-card">
              <h3>FOR KINDERGARTENS</h3>
              <ul className="eg-bullets">
                <li>Transparency & trust</li>
                <li>Modern image</li>
                <li>Time gained for children</li>
              </ul>
              <button className="eg-card-btn" onClick={() => setGradiniteOpen(true)}>
                See how it works
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* === MODAL: PARENTS === */}
      {showParentsModal && (
        <div className="eg-modal-overlay" onClick={() => setShowParentsModal(false)}>
          <div className="eg-modal" onClick={(e) => e.stopPropagation()}>
            <button className="eg-modal-close" onClick={() => setShowParentsModal(false)} aria-label="Close">×</button>

            <h2>FOR PARENTS</h2>

            <h3> Every parent’s care</h3>
            <p>
              Wondering if they ate? If they sleep well? If they laugh and play with others?
              EduGarden answers moment by moment. See photos, get updates, feel close—even from afar.
            </p>
            <hr />

            <h3> Memories that don’t fade</h3>
            <p>
              Childhood goes fast. With EduGarden, these colorful days remain with you—forever.
            </p>
            <hr />

            <h3> Your calm, their joy</h3>
            <p>
              When you know everything is fine, your day gets easier. You trust your little one is cared for, happy and safe.
            </p>
            <hr />

            <h3> Don’t miss a moment</h3>
            <p>
              EduGarden brings smiles, emotions and joy straight to your heart—even when you can’t be there.
            </p>
          </div>
        </div>
      )}

      {/* === MODAL: EDUCATORS === */}
      {educatoriOpen && (
        <div className="eg-modal-overlay" onClick={() => setEducatoriOpen(false)}>
          <div className="eg-modal" onClick={(e) => e.stopPropagation()}>
            <button className="eg-modal-close" onClick={() => setEducatoriOpen(false)} aria-label="Close">×</button>

            <h2 className="eg-modal-title">FOR EDUCATORS</h2>

            <div className="eg-modal-copy">
              <h3>EduGarden – your voice & support</h3>
              <hr />

              <h3>Your work deserves to be seen</h3>
              <p>
                Day by day you build character, teach patience, empathy and courage. EduGarden opens the classroom door
                and shows the whole story.
              </p>
              <hr />

              <h3>Less stress, more time for kids</h3>
              <p>
                EduGarden takes over repetitive messages and constant questions. Parents are informed; you focus on what truly matters.
              </p>
              <hr />

              <h3>Beyond textbooks, into children’s hearts</h3>
              <p>
                Kids learn friendship, sharing and dreaming. With EduGarden, parents see these life lessons and value them.
              </p>
              <hr />

              <h3>Recognition & appreciation</h3>
              <p>
                Every activity shared with parents becomes proof your work matters—and is appreciated.
              </p>
            </div>

            <div className="eg-modal-actions">
              <button className="eg-modal-primary" onClick={() => setEducatoriOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* === MODAL: KINDERGARTENS === */}
      {gradiniteOpen && (
        <div className="eg-modal-overlay" onClick={() => setGradiniteOpen(false)}>
          <div className="eg-modal" onClick={(e) => e.stopPropagation()}>
            <button className="eg-modal-close" onClick={() => setGradiniteOpen(false)} aria-label="Close">×</button>

            <h2 className="eg-modal-title">FOR KINDERGARTENS</h2>

            <div className="eg-modal-copy">
              <h3>Not just an app</h3>
              <p>
                A tool bringing clarity, efficiency and transparency where paper & WhatsApp still rule.
              </p>
              <hr />

              <h3>Cut admin time</h3>
              <p>
                Attendance, parent comms, activity organization—reduced. Teachers win time; kids receive it.
              </p>
              <hr />

              <h3>Strengthen parent trust</h3>
              <p>
                Parent trust means stability, recommendations and a strong image for your institution.
              </p>
              <hr />

              <h3>Choose EduGarden</h3>
              <p>
                Because every child deserves to be seen, and every parent deserves to know.
              </p>
            </div>

            <div className="eg-modal-actions">
              <button className="eg-modal-primary" onClick={() => setGradiniteOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== TESTIMONIALS ===== */}
      <section className="eg-testimonials" id="testimonials">
        <div className="eg-testimonials-title">TESTIMONIALS</div>
        <div className="eg-testimonials-subtitle">What parents and educators say</div>

        <div className="eg-testimonials-grid">
          <div className="eg-testimonial">
            <div className="eg-testimonial-header">Claudiu M. <br />Parent</div>
            <p>An extraordinary help for us. I see daily what my child does at kindergarten. I recommend it!</p>
          </div>

          <div className="eg-testimonial">
            <div className="eg-testimonial-header">Ana R. <br />Parent</div>
            <p>It’s wonderful to get photos and updates in real time. I feel closer to my child. Highly recommend!</p>
          </div>

          <div className="eg-testimonial">
            <div className="eg-testimonial-header">Simona D. <br />Educator</div>
            <p>Simple and efficient. I organize activities easily and keep in touch with parents. Communication is easier now.</p>
          </div>

          <div className="eg-testimonial">
            <div className="eg-testimonial-header">Ana S. <br />Director</div>
            <p>Parents are calmer and our team is more organized. It shows in feedback and recommendations.</p>
          </div>
        </div>
      </section>

      {/* ===== TRUST ELEMENTS ===== */}
      <section className="eg-trust">
        <div className="eg-trust-inner">
          <h2 className="eg-trust-title">TRUST ELEMENTS</h2>
          <p className="eg-trust-sub">Safety, transparency & control over your data</p>

          <button
            className="eg-btn-white"
            onClick={() => setShowTrust(true)}
            aria-haspopup="dialog"
            aria-controls="trust-modal"
          >
            See details
          </button>
        </div>
      </section>

      {/* Trust modal */}
      {showTrust && (
        <div className="eg-modal">
          <div className="eg-modal-content">
            <button className="eg-modal-close" onClick={() => setShowTrust(false)}>×</button>
            <h3 className="eg-modal-title">Trust Elements</h3>
            <ul className="eg-modal-list">
              <li>
                <span className="eg-modal-term">GDPR compliant (EU 2016/679)</span>
                <span className="eg-modal-desc">Minimal, transparent data with consent; rights to access, portability, erasure.</span>
              </li>
              <li>
                <span className="eg-modal-term">Children’s privacy</span>
                <span className="eg-modal-desc">Photos & data are visible only to authorized parent accounts.</span>
              </li>
              <li>
                <span className="eg-modal-term">Technical security</span>
                <span className="eg-modal-desc">HTTPS, protected passwords, role-based access, audit logs, backups.</span>
              </li>
              <li>
                <span className="eg-modal-term">EU hosting</span>
                <span className="eg-modal-desc">Data stored in EU/EEA for compliance.</span>
              </li>
              <li>
                <span className="eg-modal-term">Data ownership</span>
                <span className="eg-modal-desc">Kindergartens & parents own the data; export/erasure on request.</span>
              </li>
              <li>
                <span className="eg-modal-term">Built in Romania</span>
                <span className="eg-modal-desc">Support in Romanian; clear policies & accessible docs.</span>
              </li>
              <li>
                <span className="eg-modal-term">Documents</span>
                <span className="eg-modal-desc">Privacy Policy & Terms available on the website.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* ==== FINAL CTA ==== */}
      <section className="eg-final-cta" id="download">
        <div className="eg-container">
          <h2 className="eg-final-title">Ready to see EduGarden in action?</h2>
          <Link
            href="#"
            className="eg-final-btn"
            role="button"
            aria-label="Download the app now"
          >
            Download the app now
          </Link>
        </div>
      </section>

      {/* ==== FOOTER (same structure) ==== */}
      <footer className="eg-footer">
        <div className="eg-footer-inner">
          <div className="eg-footer-brand">
            <img src="/images/logo.png" alt="EduGarden Logo" className="eg-footer-logo-img" />
            <span className="eg-footer-name">EduGarden</span>
            <div className="eg-made">
              Made with <span className="eg-heart" aria-hidden="true">❤</span> in Romania
            </div>
            <div className="eg-copy">© {new Date().getFullYear()} EduGarden</div>
          </div>

          <nav className="eg-footer-links" aria-label="Legal documents">
            <Link href="/en/delete-account">Delete account</Link>
            <Link href="/politica-confidentialitate">Privacy Policy</Link>
            <Link href="/termeni-conditii">Terms & Conditions</Link>
            <Link href="/acord-prelucrare-date">Data Processing Agreement (GDPR)</Link>
          </nav>

          <div className="eg-footer-contact">
            <div>
              <span className="eg-contact-label">Contact email:</span>
              <Link href="mailto:edugardencontact@gmail.com">edugardencontact@gmail.com</Link>
            </div>
            <div>
              <span className="eg-contact-label">Phone:</span>
              <span className="eg-contact-muted">coming soon</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
