import { motion } from "framer-motion";

import {
  Box,
  Briefcase,
  Cpu,
  Factory,
  Lightbulb,
  Package,
  Settings,
  Star,
  TrendingUp,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import "./Clients.css";

const clientList = [
  {
    name: "Bando India",
    industry: "Automotive Belts & Transmission",
    icon: <Settings size={28} />,
  },
  {
    name: "Paramjyoti Movers",
    industry: "Automotive Plastic Mouldings",
    icon: <Truck size={28} />,
  },
  {
    name: "Uno Minda EV Systems",
    industry: "Automotive EV Systems",
    icon: <Zap size={28} />,
  },
  {
    name: "Lumax Industries",
    industry: "Automotive Lighting",
    icon: <Lightbulb size={28} />,
  },
  {
    name: "Moonlight Automat",
    industry: "Automation & Control",
    icon: <Cpu size={28} />,
  },
  {
    name: "Meenakshi Polymers",
    industry: "Polymer Solutions",
    icon: <Box size={28} />,
  },
  {
    name: "ACE Engineering Tech",
    industry: "Engineering Services",
    icon: <Briefcase size={28} />,
  },
  {
    name: "Everfine Plastics",
    industry: "Precision Molding",
    icon: <Package size={28} />,
  },
  {
    name: "Sonakshi Industries",
    industry: "Manufacturing",
    icon: <Factory size={28} />,
  },
];

export default function Clients() {
  return (
    <div className="clients-page">
      <>
        <title>Our Clients | Amkay Industries</title>
        <meta
          name="description"
          content="Trusted by leading industry giants across automotive and industrial manufacturing sectors."
        />
      </>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Clients
          </motion.h1>
          <p className="page-subtitle">
            Trusted by industry leaders across India.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="client-stats-bar">
        <div className="container stat-bar-container">
          <div className="stat-bar-item">
            <Users size={32} className="stat-icon" />
            <div className="stat-info">
              <h4>10+ Years</h4>
              <p>Avg. Client Retention</p>
            </div>
          </div>
          <div className="stat-bar-item">
            <Star size={32} className="stat-icon" />
            <div className="stat-info">
              <h4>"A" Grade</h4>
              <p>Consistent Supplier Rating</p>
            </div>
          </div>
          <div className="stat-bar-item">
            <TrendingUp size={32} className="stat-icon" />
            <div className="stat-info">
              <h4>Pan-India</h4>
              <p>Supply Network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-head text-center">
            <h2>Partners in Excellence</h2>
            <p>
              We are proud to serve and collaborate with top-tier organizations.
            </p>
          </div>

          <div className="client-grid">
            {clientList.map((client, idx) => (
              <motion.div
                className="client-card"
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="client-icon-wrap">{client.icon}</div>
                <h3>{client.name}</h3>
                <span className="industry-badge">{client.industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Placeholder or Call to action */}
      <section className="section">
        <div className="container text-center max-w-2xl mx-auto">
          <h2>Join Our Network</h2>
          <p
            className="mb-4 text-gray"
            style={{ maxWidth: "600px", margin: "0 auto 2rem" }}
          >
            Experience the benchmark of precision manufacturing. Let's discuss
            how we can partner to elevate your supply chain reliability.
          </p>
          <a href="/contact" className="btn-primary">
            Become a Partner
          </a>
        </div>
      </section>
    </div>
  );
}
