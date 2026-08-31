import { useState } from "react";

function Profile() {
  const storedUser = localStorage.getItem("user");

  const user = storedUser
    ? JSON.parse(storedUser)
    : {
        name: "Guest User",
        email: "guest@example.com",
        phone: "Not available",
      };
  if (storedUser) {
    try {
      user = JSON.parse(storedUser);
    } catch (error) {
      console.error("Corrupted user data in localStorage", error);
    }
  }

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(user.name || "");

  const [phone, setPhone] = useState(user.phone || "");

  const [location, setLocation] = useState(user.location || "Chennai");

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      phone,
      location,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    setIsEditing(false);

    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <section className="profile-header">
        <div className="profile-avatar">
          {name ? name.charAt(0).toUpperCase() : "U"}
        </div>

        <div className="profile-header-info">
          <h1>{name || "User"}</h1>

          <p>{user.email}</p>

          <span className="profile-status">✓ Active Member</span>
        </div>

        <button
          className="edit-profile-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </section>

      {/* Main Content */}
      <section className="profile-content">
        {/* Personal Information */}
        <div className="profile-card">
          <div className="card-heading">
            <div>
              <p className="section-tag">ACCOUNT</p>

              <h2>Personal Information</h2>
            </div>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <label>Full Name</label>

              {isEditing ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              ) : (
                <div className="profile-value">{name || "Not provided"}</div>
              )}
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <div className="profile-value disabled">{user.email}</div>
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              {isEditing ? (
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              ) : (
                <div className="profile-value">{phone || "Not provided"}</div>
              )}
            </div>

            <div className="form-group">
              <label>Preferred Location</label>

              {isEditing ? (
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              ) : (
                <div className="profile-value">📍 {location}</div>
              )}
            </div>
          </div>

          {isEditing && (
            <button className="save-profile-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>

        {/* Preferences */}
        <div className="profile-card">
          <div className="card-heading">
            <div>
              <p className="section-tag">PREFERENCES</p>

              <h2>PG Preferences</h2>
            </div>
          </div>

          <div className="preference-grid">
            <div className="preference-item">
              <span>👤</span>

              <div>
                <small>Preferred For</small>
                <strong>Students</strong>
              </div>
            </div>

            <div className="preference-item">
              <span>💰</span>

              <div>
                <small>Budget</small>
                <strong>₹5,000 - ₹10,000</strong>
              </div>
            </div>

            <div className="preference-item">
              <span>🛏️</span>

              <div>
                <small>Room Type</small>
                <strong>Single / Double</strong>
              </div>
            </div>

            <div className="preference-item">
              <span>🍽️</span>

              <div>
                <small>Food</small>
                <strong>Required</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Account Statistics */}
        <div className="profile-card">
          <div className="card-heading">
            <div>
              <p className="section-tag">ACTIVITY</p>

              <h2>My PG Activity</h2>
            </div>
          </div>

          <div className="activity-grid">
            <div className="activity-item">
              <h3>12</h3>
              <p>PGs Viewed</p>
            </div>

            <div className="activity-item">
              <h3>4</h3>
              <p>Favorites</p>
            </div>

            <div className="activity-item">
              <h3>2</h3>
              <p>Enquiries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
