"use client";

import { useState } from "react";

export default function Home() {
  const [issue, setIssue] = useState("Pothole");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [report, setReport] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!location.trim() || !description.trim()) {
      alert("Please enter the location and describe the problem.");
      return;
    }

    setReport({
      id: "CF-" + Date.now().toString().slice(-6),
      issue,
      location,
      description,
      status: "Ready for review",
    });
  }

  return (
    <main className="civic-app">
      <header className="civic-navbar">
        <a className="civic-brand" href="#">
          <span className="brand-icon">C</span>
          CivicFix<span className="brand-ai"> AI</span>
        </a>

        <a className="nav-link" href="#report">
          Report an Issue ↗
        </a>
      </header>

      <section className="civic-hero">
        <div className="hero-badge">
          <span className="live-dot"></span>
          TECHNOLOGY FOR BETTER COMMUNITIES
        </div>

        <h1>
          Your city.
          <br />
          <span>Your voice. Real change.</span>
        </h1>

        <p className="civic-subtitle">
          Spot a civic problem? Report it in minutes.
          Help make your neighbourhood cleaner, safer, and better for everyone.
        </p>

        <a className="primary-button" href="#report">
          Report a Problem <span>→</span>
        </a>

        <div className="civic-highlights">
          <div>
            <span className="highlight-icon">📍</span>
            <strong>Location-based</strong>
            <small>Identify the affected area</small>
          </div>

          <div>
            <span className="highlight-icon">🤖</span>
            <strong>AI-assisted</strong>
            <small>Understand reported issues</small>
          </div>

          <div>
            <span className="highlight-icon">🌱</span>
            <strong>Community-first</strong>
            <small>Work towards better cities</small>
          </div>
        </div>
      </section>

      <section className="report-section" id="report">
        <div className="section-heading">
          <span className="section-label">TAKE ACTION</span>
          <h2>Report a civic issue</h2>
          <p>Tell us what is happening in your neighbourhood.</p>
        </div>

        <form className="report-card" onSubmit={handleSubmit}>
          <div className="form-heading">
            <div className="form-icon">✦</div>
            <div>
              <h3>Issue details</h3>
              <p>Provide accurate information about the problem.</p>
            </div>
          </div>

          <label htmlFor="issue">Type of issue</label>

          <select
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
          >
            <option value="Pothole">🛣️ Road pothole</option>
            <option value="Garbage">🗑️ Garbage accumulation</option>
            <option value="Water Leakage">💧 Water leakage</option>
            <option value="Broken Streetlight">💡 Broken streetlight</option>
            <option value="Drainage">🌊 Drainage problem</option>
            <option value="Other">📍 Other civic issue</option>
          </select>

          <label htmlFor="location">Location</label>

          <input
            id="location"
            type="text"
            placeholder="e.g. Near college gate, Nagpur"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label htmlFor="description">Describe the problem</label>

          <textarea
            id="description"
            rows={4}
            placeholder="What happened? How does it affect people?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="photo">Upload a photo (optional)</label>

          <label className="upload-box" htmlFor="photo">
            <span className="upload-icon">＋</span>
            <strong>
              {photo ? photo.name : "Choose a photo"}
            </strong>
            <small>Upload an image of the civic issue</small>
          </label>

          <input
            id="photo"
            className="file-input"
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files?.[0] || null)}
          />

          {photo && (
            <button
              className="remove-photo"
              type="button"
              onClick={() => setPhoto(null)}
            >
              Remove selected photo
            </button>
          )}

          <button className="submit-button" type="submit">
            Generate Issue Report <span>→</span>
          </button>

          <p className="privacy-note">
            Demo project · No complaint is sent to a government authority.
          </p>
        </form>

        {report && (
          <div className="report-result" aria-live="polite">
            <div className="result-top">
              <span className="result-check">✓</span>
              <div>
                <span className="section-label">REPORT PREVIEW</span>
                <h3>Your issue report is ready</h3>
              </div>
            </div>

            <div className="result-id">
              Reference ID: <strong>{report.id}</strong>
            </div>

            <p><strong>Issue:</strong> {report.issue}</p>
            <p><strong>Location:</strong> {report.location}</p>
            <p><strong>Description:</strong> {report.description}</p>
            <p><strong>Status:</strong> {report.status}</p>

            <p className="privacy-note">
              This is a local preview, not an officially submitted complaint.
              AI analysis will be integrated in the next step.
            </p>
          </div>
        )}
      </section>

      <footer className="civic-footer">
        <a className="civic-brand" href="#">
          <span className="brand-icon">C</span>
          CivicFix<span className="brand-ai"> AI</span>
        </a>
        <p>Small actions. Better neighbourhoods.</p>
        <small>Built for a smarter, more responsive community.</small>
      </footer>
    </main>
  );
}