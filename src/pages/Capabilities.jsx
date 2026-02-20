import { motion } from "framer-motion";
import { Settings, Zap, Building2, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import "./Capabilities.css";

const capabilities = [
  {
    title: "Precision Turning (Traub)",
    desc: "High-speed mass production of precision components with extremely tight tolerances using advanced Traub machines.",
    features: [
      "High Volume Production",
      "Cost Effective",
      "Consistent Accuracy",
    ],
  },
  {
    title: "CNC Turning & VMC Machining",
    desc: "Complex geometrical profiles handled with unmatched precision utilizing modern CNC and VMC centers.",
    features: ["Complex Profiles", "Tight Tolerances", "Quick Changeovers"],
  },
  {
    title: "Plastic Injection Moulding",
    desc: "State-of-the-art 80T & 60T moulding machines dedicated to premium engineering plastics components.",
    features: ["80T & 60T Capacity", "Engineering Plastics", "Insert Moulding"],
  },
  {
    title: "Precision Finishing",
    desc: "Secondary operations including centerless and surface grinding to achieve the exact specified finish.",
    features: ["Centerless Grinding", "Surface Grinding", "Super Finishing"],
  },
];

const photos = [
  {
    label: "CNC Turning Centers",
    url: "https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Plastic Injection Moulding",
    url: "https://images.unsplash.com/photo-1611078813357-197e8841dae1?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Secondary Operations",
    url: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800",
  },
  {
    label: "Traub Machines",
    url: "https://images.unsplash.com/photo-1504917595217-d4dc5eba2a29?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Capabilities() {
  return (
    <div className="capabilities-page">
      <Helmet>
        <title>Facilities & Capabilities | Amkay Industries</title>
        <meta
          name="description"
          content="Explore Amkay Industries' manufacturing capabilities including CNC machining, precise turning, and injection moulding spanning across a 10,000 Sq. Ft. facility."
        />
      </Helmet>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Capabilities & Infrastructure
          </motion.h1>
          <p className="page-subtitle">
            State-of-the-art facilities dedicated to precision and scale.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container cap-layout">
          {/* Main Content Area */}
          <div className="cap-main">
            <div className="section-head">
              <h2>Core Capabilities</h2>
              <p>
                We leverage advanced machinery and expert engineering to deliver
                high-quality components.
              </p>
            </div>

            <div className="cap-list">
              {capabilities.map((cap, idx) => (
                <motion.div
                  className="cap-detail-card"
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="cap-icon-box">
                    <Settings size={32} />
                  </div>
                  <div className="cap-info">
                    <h3>{cap.title}</h3>
                    <p>{cap.desc}</p>
                    <ul className="cap-features">
                      {cap.features.map((feature, fIdx) => (
                        <li key={fIdx}>
                          <CheckCircle size={16} /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="cap-sidebar">
            <motion.div
              className="snapshot-widget sticky-widget"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Infrastructure Snapshot</h3>
              <ul className="snapshot-list">
                <li>
                  <Building2 size={24} className="snapshot-icon" />
                  <div>
                    <strong>10,000 Sq. Ft.</strong>
                    <span>Manufacturing Facility</span>
                  </div>
                </li>
                <li>
                  <Zap size={24} className="snapshot-icon" />
                  <div>
                    <strong>125 KVA</strong>
                    <span>Power Load</span>
                  </div>
                </li>
                <li>
                  <Zap size={24} className="snapshot-icon" />
                  <div>
                    <strong>62.5 KVA & 125 KVA</strong>
                    <span>100% DG Power Backup</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center">
            <h2>Manufacturing Facility</h2>
            <p>
              A glimpse inside our production floors ensuring zero-defect
              manufacturing.
            </p>
          </div>

          <div className="photo-grid">
            {photos.map((photo, idx) => (
              <motion.div
                className="photo-card"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="photo-frame">
                  <img src={photo.url} alt={photo.label} loading="lazy" />
                  <div className="photo-overlay">
                    <h4>{photo.label}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
