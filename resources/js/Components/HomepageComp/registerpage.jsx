import { useState } from "react";

export default function EsewaRegistration({ onClose }) {
  const [gender, setGender] = useState("Male");
  const esewaLogo = "/assets/logo.png";
  const [showPromo, setShowPromo] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [captchaDone, setCaptchaDone] = useState(false);
  const [form, setForm] = useState({ fullName: "", email: "", mobile: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .esewa-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          padding: 20px;
          z-index: 1000;
          overflow-y: auto;
        }

        .esewa-modal {
          display: flex;
          width: 100%;
          max-width: 860px;
          min-height: 620px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,0,0,0.28);
        }

        /* ── LEFT PANEL ── */
        .left-panel {
          width: 46%;
          background: #3cb648;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 44px 36px;
          position: relative;
          flex-shrink: 0;
        }

        .close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255,255,255,0.18);
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          color: white;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          font-family: 'Inter', sans-serif;
        }
        .close-btn:hover { background: rgba(255,255,255,0.3); }

        .logo-img {
          width: 150px;
          object-fit: contain;
          margin-bottom: 30px;
          filter: brightness(0) invert(1);
        }

        .left-heading {
          font-size: 28px;
          font-weight: 800;
          color: white;
          line-height: 1.22;
          letter-spacing: -0.5px;
          text-align: center;
          margin-bottom: 14px;
        }

        .left-sub {
          font-size: 13.5px;
          color: rgba(255,255,255,0.82);
          line-height: 1.7;
          text-align: center;
          margin-bottom: 36px;
        }

        .progress-bar {
          display: flex;
          gap: 6px;
          justify-content: center;
        }
        .prog-seg {
          height: 4px;
          border-radius: 99px;
          background: rgba(255,255,255,0.3);
        }
        .prog-seg.active { background: white; }
        .prog-seg:nth-child(1) { width: 42px; }
        .prog-seg:nth-child(2) { width: 20px; }
        .prog-seg:nth-child(3) { width: 20px; }

        /* ── RIGHT PANEL ── */
        .right-panel {
          width: 54%;
          background: white;
          padding: 36px 38px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow-y: auto;
        }

        .form-title {
          font-size: 24px;
          font-weight: 800;
          color: #111;
          letter-spacing: -0.4px;
          margin-bottom: 3px;
        }

        .form-sub {
          font-size: 12.5px;
          color: #aaa;
          margin-bottom: 20px;
          font-weight: 400;
        }

        .field-group {
          margin-bottom: 13px;
        }

        .field-label {
          display: block;
          font-size: 12.5px;
          font-weight: 600;
          color: #444;
          margin-bottom: 5px;
          letter-spacing: 0.1px;
        }

        .field-input {
          width: 100%;
          padding: 9px 12px;
          border: 1.5px solid #e3e3e3;
          border-radius: 8px;
          font-size: 13px;
          color: #222;
          outline: none;
          background: #fafafa;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.18s, background 0.18s;
        }
        .field-input:focus { border-color: #3cb648; background: white; }
        .field-input::placeholder { color: #bbb; }

        .gender-row {
          display: flex;
          gap: 8px;
        }

        .gender-btn {
          flex: 1;
          padding: 8px 4px;
          border: 1.5px solid #ddd;
          background: #f3f3f3;
          border-radius: 8px;
          font-size: 12.5px;
          font-weight: 700;
          color: #666;
          cursor: pointer;
          transition: all 0.15s;
          font-family: 'Inter', sans-serif;
        }
        .gender-btn:hover {
          border-color: #3cb648;
          background: #f0fbf1;
          color: #2e7d32;
        }
        .gender-btn.selected {
          border-color: #3cb648;
          background: #f0fbf1;
          color: #2e7d32;
        }

        .promo-box {
          border: 1.5px solid #3cb648;
          border-radius: 9px;
          background: #f4fcf4;
          padding: 10px 14px;
          text-align: center;
          cursor: pointer;
          margin: 13px 0;
          transition: background 0.15s;
        }
        .promo-box:hover { background: #e8f8e9; }
        .promo-label {
          font-size: 13px;
          font-weight: 600;
          color: #3cb648;
        }

        .promo-input {
          width: 100%;
          border: none;
          background: transparent;
          outline: none;
          text-align: center;
          font-size: 13px;
          color: #3cb648;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        .promo-input::placeholder { color: #80c683; }

        .tc-row {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 12px;
        }
        .tc-check {
          width: 14px;
          height: 14px;
          margin-top: 2px;
          accent-color: #3cb648;
          flex-shrink: 0;
          cursor: pointer;
        }
        .tc-text {
          font-size: 11.5px;
          color: #666;
          line-height: 1.55;
        }
        .tc-link {
          color: #3cb648;
          text-decoration: none;
          font-weight: 600;
        }
        .tc-link:hover { text-decoration: underline; }

        .captcha-box {
          border: 1.5px solid #e0e0e0;
          border-radius: 8px;
          background: #fafafa;
          padding: 11px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .captcha-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .captcha-checkbox {
          width: 20px;
          height: 20px;
          border: 2px solid #ccc;
          border-radius: 3px;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.15s;
          flex-shrink: 0;
        }
        .captcha-checkbox.checked { border-color: #3cb648; }

        .captcha-text {
          font-size: 13px;
          color: #444;
          font-weight: 500;
        }

        .captcha-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }
        .captcha-logo-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: conic-gradient(#4285f4 0deg 120deg, #34a853 120deg 240deg, #ea4335 240deg 360deg);
        }
        .captcha-logo-label {
          font-size: 9px;
          color: #aaa;
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        .create-btn {
          width: 100%;
          padding: 13px;
          background: #3cb648;
          border: none;
          border-radius: 9px;
          color: white;
          font-size: 14.5px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.4px;
          transition: background 0.15s, transform 0.1s;
        }
        .create-btn:hover { background: #34a33f; }
        .create-btn:active { background: #2e8f38; transform: scale(0.99); }
      `}</style>

      <div className="esewa-overlay">
        <div className="esewa-modal">

          {/* ── LEFT PANEL ── */}
          <div className="left-panel">
            <button className="close-btn" aria-label="Close" onClick={onClose}>✕</button>

            <img src={esewaLogo} alt="eSewa" className="logo-img" />

            <h1 className="left-heading">Simple &amp; Fast<br />Payment</h1>
            <p className="left-sub">
              Way to recharge your mobile &amp;<br />
              make utility bill payments<br />
              instantly via eSewa.
            </p>

            <div className="progress-bar">
              <div className="prog-seg active" />
              <div className="prog-seg" />
              <div className="prog-seg" />
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="right-panel">
            <h2 className="form-title">Registration</h2>
            <p className="form-sub">Register and Get your Free Mobile Account Instantly!</p>

            {/* Full Name */}
            <div className="field-group">
              <label className="field-label" htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                className="field-input"
                type="text"
                placeholder="Enter full name"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="field-group">
              <label className="field-label" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                className="field-input"
                type="email"
                placeholder="eg.youremail@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* Mobile */}
            <div className="field-group">
              <label className="field-label" htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                className="field-input"
                type="tel"
                placeholder="98########"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="field-group">
              <label className="field-label">Gender</label>
              <div className="gender-row">
                {["Male", "Female", "Other"].map((g) => (
                  <button
                    key={g}
                    className={`gender-btn${gender === g ? " selected" : ""}`}
                    onClick={() => setGender(g)}
                    type="button"
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Promo Code */}
            <div
              className="promo-box"
              onClick={() => setShowPromo(true)}
            >
              {showPromo ? (
                <input
                  className="promo-input"
                  type="text"
                  placeholder="Enter promo code..."
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <span className="promo-label">Have Promocode ?</span>
              )}
            </div>

            {/* Terms */}
            <div className="tc-row">
              <input
                type="checkbox"
                className="tc-check"
                id="tc"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label className="tc-text" htmlFor="tc">
                I agree to the{" "}
                <a href="#" className="tc-link">Terms &amp; Conditions</a>
                {" "}and{" "}
                <a href="#" className="tc-link">Privacy Policy</a>
                {" "}of eSewa.
              </label>
            </div>

            {/* reCAPTCHA */}
            <div className="captcha-box">
              <div className="captcha-left">
                <div
                  className={`captcha-checkbox${captchaDone ? " checked" : ""}`}
                  onClick={() => setCaptchaDone(!captchaDone)}
                  role="checkbox"
                  aria-checked={captchaDone}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === " " && setCaptchaDone(!captchaDone)}
                >
                  {captchaDone && (
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <polyline
                        points="2,6 5,9 10,3"
                        fill="none"
                        stroke="#3cb648"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span className="captcha-text">I'm not a robot</span>
              </div>
              <div className="captcha-logo">
                <div className="captcha-logo-icon" />
                <span className="captcha-logo-label">reCAPTCHA</span>
              </div>
            </div>

            {/* Submit */}
            <button className="create-btn" type="button">
              Create
            </button>
          </div>

        </div>
      </div>
    </>
  );
}