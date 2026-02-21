import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Col 1: Brand & Info */}
        <div className="footer-col">
          <div className="footer-logo">AMKAY</div>
          <p className="footer-desc">
            Quality Manufacturing at Economical Cost.
            <br />A Precision manufacturing company.
          </p>
          <div className="footer-iso">
            <strong>ISO 9001:2015</strong> Certified Company
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/capabilities">Capabilities</Link>
            </li>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/quality">Quality Assurance</Link>
            </li>
            <li>
              <Link to="/clients">Clients</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact Details */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>
                Khasra No. 735–736, Gali No.-03, Basai Enclave Part-II,
                Gurugram, Haryana
              </span>
            </li>
            <li>
              <Phone size={18} />
              <span>+91 85279 27333</span>
            </li>
            <li>
              <Mail size={18} />
              <span>amkay_2006@yahoo.co.in</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Operations */}
        <div className="footer-col">
          <h4 className="footer-heading">Business Hours</h4>
          <p className="footer-hours">
            Monday - Saturday
            <br />
            9:00 AM - 6:00 PM
            <br />
            <br />
            Sunday: Closed
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Amkay Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
