import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PHONE_NUMBER } from "@/data/menuData";
import chichoLogo from "@/assets/chicho-logo.png";

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
              {/* Chicho mascot */}
              <motion.img
                src={chichoLogo}
                alt="Chicho"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div>
                <h1 className="font-architects text-lg md:text-xl leading-tight">
                  <span className="italic font-bold text-gradient">La Tapizzería</span>
                  {" "}
                  <span className="font-bold text-primary">de Chicho</span>
                </h1>
              </div>
            </motion.div>
          </Link>

          {/* Phone */}
          <motion.a
            href="tel:968742743"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-patrick text-primary font-bold text-sm md:text-base whitespace-nowrap">
              968 742 743
            </span>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
