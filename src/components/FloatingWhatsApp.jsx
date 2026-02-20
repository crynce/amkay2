import "./FloatingWhatsApp.css";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918527927333"
      className="floating-wa"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
      </svg>
    </a>
  );
}
