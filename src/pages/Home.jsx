// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ShieldCheck,
  Calendar,
  Users,
  Star,
  Truck,
  ArrowRight,
  CheckCircle,
  DollarSign,
} from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./Home.css";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const capabilities = [
  {
    title: "Precision Turning",
    desc: "High-accuracy components using Traub machines.",
  },
  {
    title: "CNC & VMC",
    desc: "Complex geometrical profiles with tight tolerances.",
  },
  {
    title: "Injection Moulding",
    desc: "Premium engineering plastics moulding.",
  },
  {
    title: "Precision Finishing",
    desc: "Centerless & surface grinding operations.",
  },
];

const products = [
  {
    name: "Turned Components",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Machined Parts",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "Aluminum Heat Sinks",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  },
];

const clients = [
  "Bando India",
  "Paramjyoti Movers",
  "Uno Minda EV Systems",
  "Lumax Industries",
  "Moonlight Automat",
  "Meenakshi Polymers",
  "ACE Engineering Tech",
  "Everfine Plastics",
  "Sonakshi Industries",
];

export default function Home() {
  return (
    <div className="home-page">
      <title>Amkay Industries | Precision Manufacturing Quality</title>
      <meta
        name="description"
        content="ISO 9001:2015 certified manufacturing company based in Gurugram, India, specializing in turned components, CNC machining, and plastic injection moulding."
      />

      {/* 1. Hero Section - V2 Modernized */}
      <section className="hero">
        <div className="hero-container text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="hero-content"
          >
            <motion.div variants={fadeUpVariant} className="hero-badge-modern">
              <ShieldCheck size={18} />
              <span>ISO 9001:2015 Certified Enterprise</span>
            </motion.div>

            <motion.h1 variants={fadeUpVariant} className="hero-heading">
              Precision Engineering
              <br />
              <span className="text-gradient">Redefined.</span>
            </motion.h1>

            <motion.p variants={fadeUpVariant} className="hero-tagline">
              Delivering high-accuracy turned components, CNC machining, and
              premium injection moulding with uncompromising quality at
              economical costs.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="hero-ctas justify-center"
            >
              <Link to="/products" className="btn-primary btn-lg">
                Explore Portfolio
              </Link>
              <Link to="/contact" className="btn-secondary btn-lg">
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bento Box Stats Overlay */}
        <div className="container relative z-10 hero-bento-offset">
          <motion.div
            className="bento-grid"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="bento-card bento-stat">
              <div className="stat-value">
                <CountUp end={30} duration={2} enableScrollSpy />+
              </div>
              <div className="stat-label">
                Years of Manufacturing Excellence
              </div>
            </div>
            <div className="bento-card bento-stat">
              <div className="stat-value">
                <CountUp
                  end={10000}
                  separator=","
                  duration={2}
                  enableScrollSpy
                />
              </div>
              <div className="stat-label">Sq. Ft. Advanced Facility</div>
            </div>
            <div className="bento-card bento-dark">
              <h3 className="text-accent mb-2">Zero Defects</h3>
              <p className="text-gray-300 text-sm">
                Rigorous QA process ensuring flawless delivery across pan-India
                automotive networks.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="trust-bar">
        <div className="container trust-container">
          <div className="trust-item">
            <ShieldCheck size={22} /> ISO 9001:2015
          </div>
          <div className="trust-item">
            <Calendar size={22} /> Est. 2007
          </div>
          <div className="trust-item">
            <Users size={22} /> 10+ Year Client Retention
          </div>
          <div className="trust-item">
            <Star size={22} /> "A" Grade Supplier
          </div>
          <div className="trust-item">
            <Truck size={22} /> Pan-India Network
          </div>
        </div>
      </section>

      {/* 3. About Preview */}
      <section className="section bg-light">
        <div className="container">
          <motion.div
            className="about-preview"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="about-content">
              <h2>Precision Manufacturing & Engineering Excellence</h2>
              <p>
                Amkay Industries has been at the forefront of precision
                manufacturing since 2007. We specialize in delivering
                high-quality machined and turned components for diverse
                industrial applications.
              </p>
              <blockquote className="vision-quote">
                "To serve the manufacturing industry with high quality
                manufacturing processes through using latest technology while
                maintaining cost effectiveness."
              </blockquote>
              <Link to="/about" className="link-cta">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1533749047139-189de3cf06d3?auto=format&fit=crop&q=80&w=800"
                alt="Precision Machining"
                className="rounded-img shadow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Capabilities Highlights */}
      <section className="section">
        <div className="container">
          <div className="section-head text-center">
            <h2>Our Capabilities</h2>
            <p>
              State-of-the-art infrastructure ensuring precision at every step.
            </p>
          </div>
          <div className="capabilities-grid">
            {capabilities.map((cap, idx) => (
              <motion.div
                className="cap-card"
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="cap-icon-wrap">
                  <CheckCircle size={28} />
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/capabilities" className="btn-primary">
              See All Capabilities <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Product Portfolio Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head text-center">
            <h2>Product Portfolio</h2>
            <p>
              Engineered to exact specifications across automotive and
              industrial sectors.
            </p>
          </div>
          <div className="products-preview-grid">
            {products.map((prod, idx) => (
              <motion.div
                className="prod-preview-card"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <div className="prod-img-box">
                  <img src={prod.image} alt={prod.name} />
                </div>
                <div className="prod-info">
                  <h3>{prod.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link
              to="/products"
              className="btn-secondary"
              style={{
                color: "var(--primary-dark)",
                borderColor: "var(--primary-dark)",
              }}
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="section theme-dark">
        <div className="container">
          <div className="section-head text-center">
            <h2>Why Choose Amkay?</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <ShieldCheck
                size={40}
                className="why-icon"
                color="var(--accent)"
              />
              <h3>Quality Assurance</h3>
              <p>
                Rigorous multi-stage inspections utilizing advanced measuring
                instruments for zero defects.
              </p>
            </div>
            <div className="why-card">
              <Truck size={40} className="why-icon" color="var(--accent)" />
              <h3>On-Time Delivery</h3>
              <p>
                Optimized production planning ensures your supply chain never
                faces a bottleneck.
              </p>
            </div>
            <div className="why-card">
              <DollarSign
                size={40}
                className="why-icon"
                color="var(--accent)"
              />
              <h3>Cost-Effective</h3>
              <p>
                Economical solutions driven by high lean manufacturing and
                reduced material wastages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Ticker Marquee */}
      <section className="section client-ticker-section">
        <div className="container">
          <h3 className="ticker-title">Trusted By Industry Leaders</h3>
        </div>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="client-marquee"
        >
          {clients.map((client, idx) => (
            <div className="client-brand" key={idx}>
              <span className="client-name">{client}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* 8. CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-banner-container">
          <div className="cta-text">
            <h2>Let's build quality together.</h2>
            <p>
              Partner with Amkay Industries for your next precision
              manufacturing requirement.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a href="tel:+918527927333" className="btn-outline-white">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
