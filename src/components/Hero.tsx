import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import chichoLogo from "@/assets/chicho-logo.png";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-zones");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Reduced emojis for better mobile performance
  const emojis = ["🍕", "🍔", "🍟", "🥖"];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration - reduced and optimized */}
      <div className="absolute inset-0 overflow-hidden">
        {emojis.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-6xl opacity-20 will-change-transform"
            style={{
              left: `${15 + (i * 20) % 70}%`,
              top: `${20 + (i * 18) % 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          {/* Title above logo */}
          <motion.h1
            className="font-architects text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="italic font-bold text-gradient">La Tapizzería</span>
            {" "}
            <span className="font-bold text-primary">de Chicho</span>
          </motion.h1>

          {/* Large Chicho Logo - simplified animation */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <img
              src={chichoLogo}
              alt="Chicho - La Tapizzería"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          <motion.p
            className="font-patrick text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Pizzas artesanales, hamburguesas gourmet, tapas y mucho más...
            <br />
            <span className="text-primary font-bold">¡Todo hecho con amor!</span>
          </motion.p>

          {/* CTA Button - removed infinite animation */}
          <motion.button
            onClick={scrollToMenu}
            className="sketch-border px-8 py-4 bg-primary text-primary-foreground font-architects text-xl font-bold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ¡Ver Menú! 🍕
          </motion.button>
        </motion.div>

        {/* Scroll indicator - simplified */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6 }}
        >
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
