import { motion } from "framer-motion";

interface ZoneVisualsProps {
  zoneId: string;
  className?: string;
}

const ZoneVisuals = ({ zoneId, className = "" }: ZoneVisualsProps) => {
  const renderVisual = () => {
    switch (zoneId) {
      case "pizzas":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Pizza base */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="hsl(35, 90%, 55%)"
              stroke="hsl(25, 80%, 40%)"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Tomato sauce */}
            <circle cx="50" cy="50" r="35" fill="hsl(0, 70%, 50%)" opacity="0.8" />
            {/* Cheese */}
            <circle cx="35" cy="40" r="8" fill="hsl(45, 100%, 70%)" />
            <circle cx="55" cy="35" r="6" fill="hsl(45, 100%, 70%)" />
            <circle cx="60" cy="55" r="7" fill="hsl(45, 100%, 70%)" />
            <circle cx="40" cy="60" r="6" fill="hsl(45, 100%, 70%)" />
            {/* Pepperoni */}
            <motion.circle
              cx="45"
              cy="45"
              r="5"
              fill="hsl(0, 60%, 35%)"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="58" cy="48" r="4" fill="hsl(0, 60%, 35%)" />
            <circle cx="50" cy="62" r="4" fill="hsl(0, 60%, 35%)" />
            {/* Steam */}
            <motion.path
              d="M30 20 Q35 10, 30 5"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              animate={{ y: [-5, 0, -5], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M50 15 Q55 5, 50 0"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.6"
              animate={{ y: [-5, 0, -5], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        );

      case "pasta":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Bowl */}
            <motion.ellipse
              cx="50"
              cy="70"
              rx="40"
              ry="15"
              fill="hsl(30, 50%, 85%)"
              stroke="hsl(30, 40%, 60%)"
              strokeWidth="2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            <path
              d="M10 70 Q10 90 50 90 Q90 90 90 70"
              fill="hsl(30, 50%, 85%)"
              stroke="hsl(30, 40%, 60%)"
              strokeWidth="2"
            />
            {/* Spaghetti */}
            <motion.path
              d="M25 50 Q30 60, 35 55 Q40 50, 45 60 Q50 70, 55 55"
              stroke="hsl(45, 80%, 65%)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            />
            <path
              d="M35 45 Q45 55, 55 50 Q65 45, 70 55"
              stroke="hsl(45, 80%, 65%)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M40 40 Q50 50, 60 45 Q70 40, 75 50"
              stroke="hsl(45, 80%, 65%)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Sauce */}
            <circle cx="50" cy="55" r="10" fill="hsl(0, 70%, 45%)" opacity="0.9" />
            <circle cx="40" cy="52" r="5" fill="hsl(0, 70%, 45%)" opacity="0.7" />
            {/* Basil */}
            <motion.ellipse
              cx="55"
              cy="48"
              rx="4"
              ry="6"
              fill="hsl(120, 60%, 35%)"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        );

      case "hamburguesas":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Top bun */}
            <motion.path
              d="M15 45 Q15 20 50 20 Q85 20 85 45 Z"
              fill="hsl(30, 60%, 50%)"
              stroke="hsl(30, 50%, 35%)"
              strokeWidth="2"
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            />
            {/* Sesame seeds */}
            <ellipse cx="35" cy="32" rx="3" ry="2" fill="hsl(45, 80%, 85%)" />
            <ellipse cx="50" cy="28" rx="3" ry="2" fill="hsl(45, 80%, 85%)" />
            <ellipse cx="65" cy="32" rx="3" ry="2" fill="hsl(45, 80%, 85%)" />
            {/* Lettuce */}
            <motion.path
              d="M12 50 Q20 45 30 52 Q40 45 50 52 Q60 45 70 52 Q80 45 88 50"
              stroke="hsl(120, 60%, 40%)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            {/* Patty */}
            <motion.rect
              x="18"
              y="55"
              width="64"
              height="12"
              rx="3"
              fill="hsl(20, 50%, 25%)"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            />
            {/* Cheese */}
            <motion.path
              d="M15 55 L20 68 L35 55 L50 68 L65 55 L80 68 L85 55"
              fill="hsl(45, 100%, 55%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            />
            {/* Bottom bun */}
            <motion.path
              d="M15 70 L15 78 Q15 85 50 85 Q85 85 85 78 L85 70 Z"
              fill="hsl(30, 60%, 50%)"
              stroke="hsl(30, 50%, 35%)"
              strokeWidth="2"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </svg>
        );

      case "bocadillos":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Bread outline */}
            <motion.path
              d="M10 50 Q5 40 15 35 L85 35 Q95 40 90 50 Q95 60 85 65 L15 65 Q5 60 10 50 Z"
              fill="hsl(35, 70%, 60%)"
              stroke="hsl(30, 60%, 40%)"
              strokeWidth="2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Crust detail */}
            <path
              d="M15 38 L85 38"
              stroke="hsl(30, 50%, 50%)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M15 62 L85 62"
              stroke="hsl(30, 50%, 50%)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Ham */}
            <motion.rect
              x="20"
              y="42"
              width="60"
              height="8"
              rx="2"
              fill="hsl(350, 60%, 55%)"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3 }}
            />
            {/* Cheese */}
            <motion.rect
              x="22"
              y="50"
              width="56"
              height="6"
              rx="1"
              fill="hsl(45, 100%, 60%)"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 }}
            />
            {/* Lettuce peeking out */}
            <path
              d="M18 56 Q25 60 32 56 Q40 60 48 56"
              stroke="hsl(120, 50%, 45%)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        );

      case "patatas":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Container/cone */}
            <motion.path
              d="M25 30 L20 85 L80 85 L75 30 Z"
              fill="hsl(0, 70%, 50%)"
              stroke="hsl(0, 60%, 35%)"
              strokeWidth="2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Pattern on container */}
            <line x1="35" y1="35" x2="32" y2="80" stroke="hsl(45, 100%, 55%)" strokeWidth="2" />
            <line x1="50" y1="35" x2="50" y2="80" stroke="hsl(45, 100%, 55%)" strokeWidth="2" />
            <line x1="65" y1="35" x2="68" y2="80" stroke="hsl(45, 100%, 55%)" strokeWidth="2" />
            {/* Fries */}
            {[
              { x: 30, y: 15, rotate: -15 },
              { x: 40, y: 10, rotate: 5 },
              { x: 50, y: 8, rotate: -5 },
              { x: 58, y: 12, rotate: 10 },
              { x: 65, y: 18, rotate: 20 },
              { x: 35, y: 22, rotate: -10 },
              { x: 55, y: 20, rotate: 0 },
            ].map((fry, i) => (
              <motion.rect
                key={i}
                x={fry.x}
                y={fry.y}
                width="8"
                height="25"
                rx="2"
                fill="hsl(45, 90%, 60%)"
                stroke="hsl(40, 80%, 45%)"
                strokeWidth="1"
                transform={`rotate(${fry.rotate} ${fry.x + 4} ${fry.y + 12})`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * i + 0.3 }}
              />
            ))}
          </svg>
        );

      case "tapas":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Plate */}
            <motion.ellipse
              cx="50"
              cy="75"
              rx="42"
              ry="12"
              fill="hsl(0, 0%, 95%)"
              stroke="hsl(0, 0%, 75%)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Shrimp/Gamba */}
            <motion.path
              d="M35 45 Q25 50 30 60 Q35 70 45 65 Q50 60 48 55 Q46 50 40 48 Z"
              fill="hsl(15, 80%, 60%)"
              stroke="hsl(15, 70%, 45%)"
              strokeWidth="2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            {/* Shrimp tail */}
            <path
              d="M35 45 Q30 40 35 35 L40 38 Q37 43 35 45"
              fill="hsl(15, 80%, 55%)"
              stroke="hsl(15, 70%, 45%)"
              strokeWidth="1"
            />
            {/* Olive */}
            <motion.circle
              cx="60"
              cy="55"
              r="8"
              fill="hsl(90, 40%, 30%)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            />
            <circle cx="60" cy="55" r="3" fill="hsl(0, 70%, 45%)" />
            {/* Cheese cube */}
            <motion.rect
              x="68"
              y="50"
              width="12"
              height="12"
              rx="2"
              fill="hsl(45, 80%, 70%)"
              stroke="hsl(45, 60%, 50%)"
              strokeWidth="1"
              initial={{ rotate: -45, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.6 }}
            />
            {/* Toothpick */}
            <motion.line
              x1="55"
              y1="30"
              x2="55"
              y2="65"
              stroke="hsl(30, 60%, 50%)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.7 }}
            />
          </svg>
        );

      case "carnes":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Grill lines */}
            {[35, 50, 65].map((y, i) => (
              <motion.line
                key={i}
                x1="15"
                y1={y}
                x2="85"
                y2={y}
                stroke="hsl(0, 0%, 25%)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: i * 0.1 }}
              />
            ))}
            {/* Steak */}
            <motion.path
              d="M25 40 Q20 50 25 60 Q35 70 55 68 Q75 65 78 55 Q80 45 70 38 Q55 32 35 35 Q28 37 25 40 Z"
              fill="hsl(10, 60%, 35%)"
              stroke="hsl(10, 50%, 25%)"
              strokeWidth="2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            />
            {/* Grill marks on steak */}
            <line x1="30" y1="45" x2="70" y2="45" stroke="hsl(10, 40%, 25%)" strokeWidth="3" strokeLinecap="round" />
            <line x1="32" y1="55" x2="68" y2="55" stroke="hsl(10, 40%, 25%)" strokeWidth="3" strokeLinecap="round" />
            {/* Fat marbling */}
            <path d="M35 48 Q45 50 55 48" stroke="hsl(0, 0%, 90%)" strokeWidth="2" fill="none" opacity="0.5" />
            {/* Steam */}
            <motion.path
              d="M40 30 Q45 20 40 10"
              stroke="hsl(0, 0%, 80%)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
              animate={{ y: [-5, 0, -5], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
              d="M60 28 Q65 18 60 8"
              stroke="hsl(0, 0%, 80%)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
              animate={{ y: [-5, 0, -5], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        );

      case "postres":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Cake base */}
            <motion.rect
              x="20"
              y="55"
              width="60"
              height="30"
              rx="5"
              fill="hsl(25, 60%, 45%)"
              stroke="hsl(25, 50%, 30%)"
              strokeWidth="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Frosting layer */}
            <motion.path
              d="M20 55 Q30 48 40 55 Q50 48 60 55 Q70 48 80 55"
              fill="hsl(330, 80%, 85%)"
              stroke="hsl(330, 70%, 70%)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3 }}
            />
            <rect x="20" y="55" width="60" height="8" fill="hsl(330, 80%, 85%)" />
            {/* Cherry on top */}
            <motion.circle
              cx="50"
              cy="40"
              r="8"
              fill="hsl(0, 80%, 45%)"
              stroke="hsl(0, 70%, 35%)"
              strokeWidth="2"
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
            />
            {/* Cherry stem */}
            <path
              d="M50 32 Q55 25 52 20"
              stroke="hsl(120, 50%, 30%)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Sparkles */}
            <motion.circle
              cx="30"
              cy="45"
              r="2"
              fill="hsl(45, 100%, 70%)"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.circle
              cx="70"
              cy="50"
              r="2"
              fill="hsl(45, 100%, 70%)"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="55"
              cy="35"
              r="1.5"
              fill="hsl(45, 100%, 70%)"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            />
          </svg>
        );

      default:
        return (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            🍽️
          </div>
        );
    }
  };

  return (
    <motion.div
      className="w-full h-full"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {renderVisual()}
    </motion.div>
  );
};

export default ZoneVisuals;
