import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Products.css";

const categories = [
  "All",
  "Turned Components",
  "Machined Parts",
  "Aluminum Heat Sinks",
  "Special Items",
];

const allProducts = [
  {
    id: 1,
    name: "Threaded Fittings",
    category: "Turned Components",
    image:
      "https://images.unsplash.com/photo-1605809765371-d61ccfa07a9a?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Traub Turned Parts",
    category: "Turned Components",
    image:
      "https://images.unsplash.com/photo-1542461971-ce91f7aeb1ea?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "CNC Turned Parts",
    category: "Turned Components",
    image:
      "https://images.unsplash.com/photo-1581092334863-7185ee6666ba?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Special Items",
    category: "Special Items",
    image:
      "https://images.unsplash.com/photo-1616422285623-1454dd1af0d2?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    name: "Automotive Machined Parts",
    category: "Machined Parts",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    name: "Heat Sink for Inverter",
    category: "Aluminum Heat Sinks",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 7,
    name: "Extruded Heat Sink",
    category: "Aluminum Heat Sinks",
    image:
      "https://images.unsplash.com/photo-1620286801984-bad3eb0f9372?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 8,
    name: "Heat Sink for EV Chargers",
    category: "Aluminum Heat Sinks",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bbf1494674?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);

  return (
    <div className="products-page">
      <title>Our Products | Amkay Industries</title>
      <meta
        name="description"
        content="View our extensive portfolio of precision turned components, automotive machined parts, and aluminum heat sinks."
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Products
          </motion.h1>
          <p className="page-subtitle">
            Precision engineered to your exact specifications.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          {/* Category Filter Bar */}
          <div className="filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div layout className="products-grid">
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="product-card cursor-pointer"
                  key={product.id}
                >
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                    <div className="product-badge">{product.category}</div>
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="no-products text-center">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
