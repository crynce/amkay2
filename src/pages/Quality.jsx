import {
  ShieldCheck,
  Ruler,
  Microscope,
  Gauge,
  GitBranch,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Quality.css";

const instruments = [
  "Digital Vernier Caliper (Mitutoyo)",
  "Digital Micrometer",
  "Profile Projector",
  "Magnetic V-Block",
  "Puppy Dial Indicator",
  "Slip Gauge Box",
  "Digital Height Gauge",
  "Length Gauge",
  "Precision Weighing Balance",
  "Bore Gauge",
  "Thread Plug & Ring Gauges",
];

const processFlow = [
  {
    phase: "In-Coming",
    title: "Raw Material Inspection",
    desc: "Rigorous checking of raw materials against metallurgy and dimensional standards before acceptance.",
    icon: <Microscope size={32} />,
  },
  {
    phase: "In-Process",
    title: "Production Monitoring",
    desc: "Continuous patrol inspections, statistical process control (SPC), and strict adherence to control plans.",
    icon: <GitBranch size={32} />,
  },
  {
    phase: "Pre-Dispatch",
    title: "Final Quality Check",
    desc: "100% final inspection for critical dimensions and visual parameters prior to packaging.",
    icon: <ShieldCheck size={32} />,
  },
];

export default function Quality() {
  return (
    <div className="quality-page">
      <Helmet>
        <title>Quality Assurance | Amkay Industries</title>
        <meta
          name="description"
          content="Discover Amkay Industries' rigorous quality policy and state-of-the-art measuring instruments ensuring zero defects in all precision components."
        />
      </Helmet>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Quality Assurance
          </motion.h1>
          <p className="page-subtitle">Zero compromise. Zero defects.</p>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section">
        <div className="container policy-container">
          <motion.div
            className="policy-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ShieldCheck size={80} className="badge-icon-lg" />
            <h3>ISO 9001:2015</h3>
            <p>Certified Company</p>
          </motion.div>

          <div className="policy-text">
            <h2>Our Quality Policy</h2>
            <blockquote className="policy-quote">
              "Amkay Industries is committed to enhance customer satisfaction by
              manufacturing automotive & non-automotive turned, machined &
              injection moulding components of high quality at the right time &
              in required quantity."
            </blockquote>
            <p className="policy-commitment">
              We continually improve our Quality Management System by engaging
              employees at all levels, upgrading technology, and fostering a
              culture of precision.
            </p>
          </div>
        </div>
      </section>

      {/* QA Process Flow */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head text-center">
            <h2>Our Quality Process</h2>
            <p>
              A systematic three-tier approach to guarantee flawless components.
            </p>
          </div>

          <div className="process-nodes">
            {processFlow.map((step, idx) => (
              <motion.div
                className="process-card"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className="process-icon">{step.icon}</div>
                <div className="process-phase">{step.phase}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {idx < processFlow.length - 1 && (
                  <div className="process-arrow">
                    <ArrowRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Measuring Instruments */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center">
            <h2>Testing & Measuring Instruments</h2>
            <p>
              Equipped with standardized and calibrated instruments for ultimate
              accuracy.
            </p>
          </div>

          <div className="instruments-grid">
            {instruments.map((inst, idx) => (
              <motion.div
                className="inst-item"
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Gauge size={20} className="inst-icon" />
                <span>{inst}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
