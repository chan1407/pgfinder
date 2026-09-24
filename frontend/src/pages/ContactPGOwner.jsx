import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ContactPGOwner() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pg, setPg] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPG = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`http://localhost:3000/api/pgs/${id}`);

        if (!response.ok) {
          throw new Error("PG not found");
        }

        const data = await response.json();
        setPg(data);
      } catch (err) {
        console.error("Error fetching PG:", err);
        setError("Unable to load PG details.");
      } finally {
        setLoading(false);
      }
    };

    fetchPG();
  }, [id]);

  if (loading) {
    return (
      <div className="contact-owner-loading">Loading PG owner details...</div>
    );
  }

  if (error || !pg) {
    return (
      <div className="contact-owner-error">
        <h2>PG Not Found</h2>

        <p>Sorry, we couldn't find the requested PG details.</p>

        <button onClick={() => navigate(-1)}>← Go Back</button>
      </div>
    );
  }

  const ownerPhone = pg.ownerPhone || "";
  const ownerEmail = pg.ownerEmail || "";
  const whatsappNumber = ownerPhone.replace(/\D/g, "");

  return (
    <div className="contact-owner-page">
      <div className="contact-owner-container">
        {/* Back Button */}
        <button className="contact-owner-back" onClick={() => navigate(-1)}>
          ← Back to PG Details
        </button>

        {/* Header */}
        <div className="contact-owner-header">
          <span>PG OWNER</span>

          <h1>Contact PG Owner</h1>

          <p>Get in touch directly with the PG owner</p>
        </div>

        {/* PG Summary */}
        <div className="contact-pg-summary">
          <h2>{pg.name}</h2>

          <p className="contact-pg-location">📍 {pg.location}</p>

          <div className="contact-pg-info">
            <span>₹{pg.rent}/month</span>

            <span>{pg.roomType}</span>

            <span>⭐ {pg.rating}</span>
          </div>
        </div>

        {/* Owner Card */}
        <div className="contact-owner-card">
          {/* Owner Header */}
          <div className="contact-owner-title">
            <div className="contact-owner-avatar">👤</div>

            <div>
              <h2>{pg.ownerName || "PG Owner"}</h2>

              <p>Property Owner</p>
            </div>
          </div>

          {/* Owner Details */}
          <div className="contact-owner-details">
            {/* Phone */}
            <div className="contact-owner-detail">
              <span className="contact-owner-detail-icon">📞</span>

              <small>Phone</small>

              <strong>{ownerPhone || "Not available"}</strong>
            </div>

            {/* Email */}
            <div className="contact-owner-detail">
              <span className="contact-owner-detail-icon">✉️</span>

              <small>Email</small>

              <strong>{ownerEmail || "Not available"}</strong>
            </div>

            {/* Location */}
            <div className="contact-owner-detail">
              <span className="contact-owner-detail-icon">📍</span>

              <small>Location</small>

              <strong>{pg.location}</strong>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="contact-owner-actions">
            {/* Call */}
            <a
              href={ownerPhone ? `tel:${ownerPhone}` : "#"}
              className="contact-owner-action contact-owner-call"
            >
              <span>📞</span>

              <div>
                <strong>Call Owner</strong>
                <small>{ownerPhone || "Unavailable"}</small>
              </div>
            </a>

            {/* Email */}
            <a
              href={ownerEmail ? `mailto:${ownerEmail}` : "#"}
              className="contact-owner-action contact-owner-email"
            >
              <span>✉️</span>

              <div>
                <strong>Email Owner</strong>
                <small>Send an email</small>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappNumber ? `https://wa.me/91${whatsappNumber}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-owner-action contact-owner-whatsapp"
            >
              <span>💬</span>

              <div>
                <strong>WhatsApp</strong>
                <small>Chat with owner</small>
              </div>
            </a>
          </div>

          {/* Safety Message */}
          <div className="contact-owner-safety">
            <span>🛡️</span>

            <span>
              For your safety, verify the property and owner details before
              making any payment.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPGOwner;
