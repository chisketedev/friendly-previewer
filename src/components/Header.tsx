import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PHONE_NUMBER, RESTAURANT_NAME } from "@/data/menuData";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and name */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Chicho mascot emoji placeholder */}
              <motion.div
                className="text-4xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                👨‍🍳
              </motion.div>
              <div>
                <h1 className="font-architects text-xl md:text-2xl text-primary leading-tight">
                  {RESTAURANT_NAME}
                </h1>
                <p className="font-patrick text-xs text-muted-foreground hidden sm:block">
                  Pizzería & Tapas Artesanales
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Contact info */}
          <div className="flex items-center gap-4">
            {/* Location - hidden on very small screens */}
            <motion.div
              className="hidden md:flex items-center gap-2 text-muted-foreground"
              whileHover={{ color: "hsl(var(--primary))" }}
            >
              <MapPin className="w-4 h-4" />
              <span className="font-patrick text-sm">Tu barrio favorito</span>
            </motion.div>

            {/* Phone */}
            <motion.a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-patrick text-primary font-bold text-sm md:text-base">
                {PHONE_NUMBER}
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
