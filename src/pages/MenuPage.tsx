import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import FloatingCallButton from "@/components/FloatingCallButton";
import { getZoneBySlug, RESTAURANT_NAME } from "@/data/menuData";

const MenuPage = () => {
  const { zone } = useParams<{ zone: string }>();
  const menuZone = getZoneBySlug(zone || "");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [zone]);
  if (!menuZone) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-architects text-4xl text-primary mb-4">Zona no encontrada</h1>
          <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link to="/">
            <motion.div
              className="inline-flex items-center gap-2 text-primary hover:text-chicho-gold-light transition-colors mb-8"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-patrick text-lg">Volver</span>
            </motion.div>
          </Link>

          {/* Zone header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-6xl mb-4 block">{menuZone.emoji}</span>
            <h1 className="font-architects text-5xl text-primary mb-2">{menuZone.name}</h1>
            <p className="font-patrick text-xl text-muted-foreground">{menuZone.description}</p>
            <div className="section-divider max-w-xs mx-auto" />
          </motion.div>

          {/* Categories */}
          {menuZone.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="font-architects text-3xl text-primary mb-6 sketch-border-subtle inline-block px-4 py-2">
                {category.name}
              </h2>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    className="flex flex-wrap justify-between items-start gap-2 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors border border-border/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.1 + itemIndex * 0.05 }}
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-architects text-xl text-foreground">{item.name}</h3>
                      {item.description && (
                        <p className="font-patrick text-muted-foreground text-sm mt-1">{item.description}</p>
                      )}
                    </div>
                    <div className="flex gap-2 flex-wrap justify-end">
                      {item.prices ? (
                        <>
                          <span className="price-badge text-xs">P: {item.prices.small?.toFixed(2)}€</span>
                          <span className="price-badge text-xs">M: {item.prices.medium?.toFixed(2)}€</span>
                          <span className="price-badge text-xs">G: {item.prices.large?.toFixed(2)}€</span>
                        </>
                      ) : item.price ? (
                        <span className="price-badge">{item.price.toFixed(2)}€</span>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      
      {/* Simple footer for menu pages */}
      <footer className="bg-secondary/30 border-t border-border py-6 text-center">
        <p className="font-patrick text-muted-foreground text-sm">
          © {new Date().getFullYear()} {RESTAURANT_NAME}. Todos los derechos reservados.
        </p>
      </footer>
      
      <FloatingCallButton />
    </div>
  );
};

export default MenuPage;
