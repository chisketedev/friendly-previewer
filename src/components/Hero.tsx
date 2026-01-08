import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-zones");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating food emojis */}
        {["🍕", "🍔", "🍟", "🥖", "🍝", "🍰", "🥩", "🍤"].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl md:text-6xl opacity-20"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${15 + (i * 15) % 70}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          {/* Main title */}
          <motion.h1
            className="font-architects text-5xl md:text-7xl lg:text-8xl text-gradient mb-6"
            animate={{ 
              textShadow: [
                "0 0 20px hsl(var(--primary) / 0.3)",
                "0 0 40px hsl(var(--primary) / 0.5)",
                "0 0 20px hsl(var(--primary) / 0.3)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            La Tapizzería
          </motion.h1>
          
          <motion.p
            className="font-architects text-3xl md:text-4xl text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            de Chicho
          </motion.p>

          <motion.p
            className="font-patrick text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Pizzas artesanales, hamburguesas gourmet, tapas y mucho más...
            <br />
            <span className="text-primary">¡Todo hecho con amor!</span>
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToMenu}
            className="sketch-border px-8 py-4 bg-primary text-primary-foreground font-architects text-xl hover:bg-primary/90 transition-colors animate-pulse-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            ¡Ver Menú! 🍕
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
