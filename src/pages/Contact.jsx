import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  ExternalLink,
  PhoneCall,
  MailOpen,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, submit the formData to backend.
    toast.success(
      "Thank you for contacting us! We will get back to you shortly.",
      {
        style: {
          borderRadius: "10px",
          background: "var(--primary-dark)",
          color: "var(--white)",
          border: "1px solid var(--accent)",
        },
        iconTheme: {
          primary: "var(--accent)",
          secondary: "var(--white)",
        },
        duration: 4000,
      },
    );
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      productInterest: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <Toaster position="bottom-center" reverseOrder={false} />
      <title>Contact Us | Amkay Industries</title>
      <meta
        name="description"
        content="Reach out to Amkay Industries for your precision manufacturing requirements. Let's build quality together."
      />

      {/* Split Layout Header / Form */}
      <section className="contact-hero">
        <div className="contact-split contact-left">
          <motion.div
            className="contact-info-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1>Let's build quality together.</h1>
            <p className="contact-subtitle">
              Get in touch with our team of engineering experts to discuss your
              custom manufacturing requirements.
            </p>

            <div className="contact-brand">
              <span className="brand-logo">AMKAY</span>
              <span className="brand-tagline">
                Quality Manufacturing at Economical Cost
              </span>
            </div>

            <div className="brand-iso">
              <ShieldCheck size={24} className="iso-icon" />
              <span>ISO 9001:2015 Certified</span>
            </div>
          </motion.div>
        </div>

        <div className="contact-split contact-right">
          <motion.div
            className="form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2>Request a Quote</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="ABC Corp"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="productInterest">Product Interest</label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                >
                  <option value="">-- Select Interest --</option>
                  <option value="Turned Components">Turned Components</option>
                  <option value="CNC Machined Parts">CNC Machined Parts</option>
                  <option value="Aluminum Heat Sinks">
                    Aluminum Heat Sinks
                  </option>
                  <option value="Injection Moulding">Injection Moulding</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", marginTop: "1rem" }}
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section bg-light">
        <div className="container">
          <div className="contact-cards-grid">
            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="info-icon-box">
                <MapPin size={28} />
              </div>
              <h3>Visit Us</h3>
              <p>
                Khasra No. 735–736, Gali No.-03, Basai Enclave Part-II,
                Gurugram, Haryana, India
              </p>
              <a
                href="https://www.google.com/maps?q=28.4515641,76.9918864"
                target="_blank"
                rel="noopener noreferrer"
                className="info-cta"
              >
                Get Directions <ExternalLink size={16} />
              </a>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="info-icon-box">
                <Phone size={28} />
              </div>
              <h3>Call Us</h3>
              <p>
                +91 85279 27333
                <br />
                +91 98110 XXXXX
              </p>
              <a href="tel:+918527927333" className="info-cta">
                Call Now <PhoneCall size={16} />
              </a>
            </motion.div>

            <motion.div
              className="info-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="info-icon-box">
                <Mail size={28} />
              </div>
              <h3>Email Us</h3>
              <p>
                info@amkayindustries.com
                <br />
                sales@amkayindustries.com
              </p>
              <a href="mailto:info@amkayindustries.com" className="info-cta">
                Send Email <MailOpen size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps?q=28.4515641,76.9918864&output=embed"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Amkay Industries Location"
        ></iframe>
      </section>
    </div>
  );
}
