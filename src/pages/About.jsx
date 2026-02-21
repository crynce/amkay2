import { motion } from "framer-motion";
import { Target, Eye, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <title>About Us | Amkay Industries</title>
      <meta
        name="description"
        content="Established in 2007, Amkay Industries provides precision manufacturing & engineering excellence."
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Us
          </motion.h1>
          <p className="page-subtitle">
            Precision Manufacturing & Engineering Excellence
          </p>
          <div className="est-badge">Established 2007</div>
        </div>
      </section>

      {/* Who We Are & Founder */}
      <section className="section bg-light">
        <div className="container about-split">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Amkay Industries is a pioneer in the field of precision
              manufacturing. We specialize in producing automotive and
              non-automotive turned, machined, and injection moulding components
              of the highest quality.
            </p>
            <p>
              With state-of-the-art facilities located in Gurugram, Haryana, our
              commitment to rigorous quality assurance and timely delivery has
              earned us a reputation as an "A" Grade supplier and long-term
              partner for Pan-India clients.
            </p>

            <motion.div
              className="founder-box"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>The Visionary</h3>
              <p>
                <strong>Mr. Kavinder Singh</strong> founded Amkay Industries
                with a vision to revolutionize precision engineering. Bringing
                over 30+ years of deep industry experience, his leadership has
                steered the company towards unparalleled growth, innovation, and
                unwavering customer trust.
              </p>
            </motion.div>
          </div>
          <div className="about-vision">
            <motion.div
              className="vision-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Eye size={36} className="vision-icon" />
              <h3>Our Vision</h3>
              <blockquote>
                "To serve the manufacturing industry with high quality
                manufacturing processes through using latest technology while
                maintaining cost effectiveness."
              </blockquote>
            </motion.div>
            <motion.div
              className="vision-card mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Target size={36} className="vision-icon" />
              <h3>Our Motto</h3>
              <p className="motto-text">
                "Quality Manufacturing at Economical Cost."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="section org-section">
        <div className="container">
          <div className="section-head text-center">
            <h2>Organization Structure</h2>
            <p>
              A streamlined hierarchy ensuring operational excellence across all
              departments. You can drag to pan and use the controls to zoom.
            </p>
          </div>

          <div className="org-tree-wrapper">
            <TransformWrapper
              initialScale={window.innerWidth < 768 ? 0.4 : 0.8}
              minScale={0.2}
              maxScale={2}
              centerOnInit={true}
              wheel={{ step: 0.1 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="zoom-controls">
                    <button
                      className="zoom-btn"
                      onClick={() => zoomIn()}
                      title="Zoom In"
                    >
                      <ZoomIn size={20} />
                    </button>
                    <button
                      className="zoom-btn"
                      onClick={() => zoomOut()}
                      title="Zoom Out"
                    >
                      <ZoomOut size={20} />
                    </button>
                    <button
                      className="zoom-btn"
                      onClick={() => resetTransform()}
                      title="Reset"
                    >
                      <Maximize size={20} />
                    </button>
                  </div>
                  <TransformComponent
                    wrapperClass="zoom-wrapper"
                    contentClass="zoom-content"
                  >
                    <div className="tree">
                      <ul>
                        <li>
                          <div className="node head-node">
                            <strong>Organization Head</strong>
                            <span>Mr. Kavinder Singh</span>
                          </div>
                          <ul>
                            <li>
                              <div className="node dept-node">
                                Sales &<br />
                                Marketing
                              </div>
                            </li>
                            <li>
                              <div className="node dept-node">
                                Design &<br />
                                Development
                              </div>
                            </li>
                            <li>
                              <div className="node dept-node">
                                Production &<br />
                                Maintenance
                              </div>
                              <ul>
                                <li>
                                  <div className="node sub-node">
                                    Production
                                    <br />
                                    Head
                                  </div>
                                </li>
                                <li>
                                  <div className="node sub-node">
                                    Maintenance
                                    <br />
                                    Incharge
                                  </div>
                                </li>
                                <li>
                                  <div className="node sub-node">
                                    Store / Dispatch
                                    <br />
                                    Incharge
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="node dept-node">
                                Quality &<br />
                                HRD
                              </div>
                              <ul>
                                <li>
                                  <div className="node sub-node">
                                    QA / Mgmt
                                    <br />
                                    Rep.
                                  </div>
                                </li>
                                <li>
                                  <div className="node sub-node">
                                    HR
                                    <br />
                                    Incharge
                                  </div>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="node dept-node">
                                Purchase
                                <br />
                                Incharge
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
