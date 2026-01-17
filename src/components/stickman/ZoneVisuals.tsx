import { motion } from "framer-motion";

interface ZoneVisualsProps {
  zoneId: string;
  className?: string;
}

const ZoneVisuals = ({ zoneId, className = "" }: ZoneVisualsProps) => {
  const renderVisual = () => {
    switch (zoneId) {
      case "entrantes":
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
          </svg>
        );

      case "pizzas":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
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
            <circle cx="50" cy="50" r="35" fill="hsl(0, 70%, 50%)" opacity="0.8" />
            <circle cx="35" cy="40" r="8" fill="hsl(45, 100%, 70%)" />
            <circle cx="55" cy="35" r="6" fill="hsl(45, 100%, 70%)" />
            <circle cx="60" cy="55" r="7" fill="hsl(45, 100%, 70%)" />
            <motion.circle
              cx="45"
              cy="45"
              r="5"
              fill="hsl(0, 60%, 35%)"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="58" cy="48" r="4" fill="hsl(0, 60%, 35%)" />
          </svg>
        );

      case "hamburguesas":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            <motion.path
              d="M15 45 Q15 20 50 20 Q85 20 85 45 Z"
              fill="hsl(30, 60%, 50%)"
              stroke="hsl(30, 50%, 35%)"
              strokeWidth="2"
              initial={{ y: -30 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            />
            <ellipse cx="35" cy="32" rx="3" ry="2" fill="hsl(45, 80%, 85%)" />
            <ellipse cx="50" cy="28" rx="3" ry="2" fill="hsl(45, 80%, 85%)" />
            <ellipse cx="65" cy="32" rx="3" ry="2" fill="hsl(45, 80%, 85%)" />
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

      case "patatas":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            <motion.path
              d="M25 30 L20 85 L80 85 L75 30 Z"
              fill="hsl(0, 70%, 50%)"
              stroke="hsl(0, 60%, 35%)"
              strokeWidth="2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <line x1="35" y1="35" x2="32" y2="80" stroke="hsl(45, 100%, 55%)" strokeWidth="2" />
            <line x1="50" y1="35" x2="50" y2="80" stroke="hsl(45, 100%, 55%)" strokeWidth="2" />
            <line x1="65" y1="35" x2="68" y2="80" stroke="hsl(45, 100%, 55%)" strokeWidth="2" />
            {[
              { x: 30, y: 15, rotate: -15 },
              { x: 40, y: 10, rotate: 5 },
              { x: 50, y: 8, rotate: -5 },
              { x: 58, y: 12, rotate: 10 },
              { x: 65, y: 18, rotate: 20 },
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

      case "bocadillos":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            <motion.path
              d="M10 50 Q5 40 15 35 L85 35 Q95 40 90 50 Q95 60 85 65 L15 65 Q5 60 10 50 Z"
              fill="hsl(35, 70%, 60%)"
              stroke="hsl(30, 60%, 40%)"
              strokeWidth="2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
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
          </svg>
        );

      case "perritos":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Bun */}
            <motion.path
              d="M15 45 Q10 35 20 30 L80 30 Q90 35 85 45 L85 55 Q90 65 80 70 L20 70 Q10 65 15 55 Z"
              fill="hsl(35, 70%, 55%)"
              stroke="hsl(30, 60%, 40%)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Hot dog */}
            <motion.rect
              x="20"
              y="42"
              width="60"
              height="16"
              rx="8"
              fill="hsl(15, 70%, 45%)"
              stroke="hsl(15, 60%, 35%)"
              strokeWidth="2"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            {/* Mustard */}
            <motion.path
              d="M25 48 Q35 44 45 48 Q55 52 65 48 Q75 44 80 48"
              stroke="hsl(50, 100%, 50%)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </svg>
        );

      case "sandwich":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Top bread slice */}
            <motion.path
              d="M20 25 L80 25 L85 45 L15 45 Z"
              fill="hsl(35, 60%, 70%)"
              stroke="hsl(30, 50%, 50%)"
              strokeWidth="2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Lettuce */}
            <motion.path
              d="M15 48 Q25 42 35 48 Q45 54 55 48 Q65 42 75 48 Q85 54 85 48"
              fill="hsl(120, 60%, 45%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            />
            {/* Tomato */}
            <rect x="18" y="50" width="64" height="8" fill="hsl(0, 70%, 55%)" rx="2" />
            {/* Cheese */}
            <rect x="20" y="58" width="60" height="6" fill="hsl(45, 100%, 60%)" rx="1" />
            {/* Bottom bread slice */}
            <motion.path
              d="M15 65 L85 65 L80 85 L20 85 Z"
              fill="hsl(35, 60%, 70%)"
              stroke="hsl(30, 50%, 50%)"
              strokeWidth="2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </svg>
        );

      case "pasta":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
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
            <circle cx="50" cy="55" r="10" fill="hsl(0, 70%, 45%)" opacity="0.9" />
          </svg>
        );

      case "combinados":
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
            {/* Meat */}
            <motion.ellipse
              cx="35"
              cy="55"
              rx="15"
              ry="10"
              fill="hsl(20, 60%, 40%)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            {/* Egg */}
            <motion.circle
              cx="60"
              cy="50"
              r="10"
              fill="hsl(0, 0%, 95%)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            />
            <circle cx="60" cy="50" r="5" fill="hsl(45, 100%, 55%)" />
            {/* Fries */}
            <motion.rect
              x="50"
              y="60"
              width="5"
              height="15"
              rx="1"
              fill="hsl(45, 90%, 60%)"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
            <motion.rect
              x="58"
              y="62"
              width="5"
              height="13"
              rx="1"
              fill="hsl(45, 90%, 60%)"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55 }}
            />
          </svg>
        );

      case "carnes":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
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
            <motion.path
              d="M25 40 Q20 50 25 60 Q35 70 55 68 Q75 65 78 55 Q80 45 70 38 Q55 32 35 35 Q28 37 25 40 Z"
              fill="hsl(10, 60%, 35%)"
              stroke="hsl(10, 50%, 25%)"
              strokeWidth="2"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
            />
            <line x1="30" y1="45" x2="70" y2="45" stroke="hsl(10, 40%, 25%)" strokeWidth="3" strokeLinecap="round" />
            <line x1="32" y1="55" x2="68" y2="55" stroke="hsl(10, 40%, 25%)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      case "pescados":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            {/* Fish body */}
            <motion.path
              d="M20 50 Q30 30 50 30 Q70 30 80 50 Q70 70 50 70 Q30 70 20 50 Z"
              fill="hsl(200, 60%, 60%)"
              stroke="hsl(200, 50%, 45%)"
              strokeWidth="2"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            {/* Tail */}
            <motion.path
              d="M15 50 L5 35 L10 50 L5 65 Z"
              fill="hsl(200, 60%, 55%)"
              stroke="hsl(200, 50%, 45%)"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            />
            {/* Eye */}
            <circle cx="70" cy="45" r="5" fill="hsl(0, 0%, 100%)" />
            <circle cx="71" cy="45" r="2" fill="hsl(0, 0%, 10%)" />
            {/* Scales pattern */}
            <path d="M35 45 Q40 40 45 45 Q50 50 55 45" stroke="hsl(200, 40%, 50%)" strokeWidth="1" fill="none" />
            <path d="M40 55 Q45 50 50 55 Q55 60 60 55" stroke="hsl(200, 40%, 50%)" strokeWidth="1" fill="none" />
            {/* Bubbles */}
            <motion.circle
              cx="85"
              cy="40"
              r="3"
              fill="hsl(200, 80%, 80%)"
              animate={{ y: [-5, 0, -5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="90"
              cy="50"
              r="2"
              fill="hsl(200, 80%, 80%)"
              animate={{ y: [-5, 0, -5], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </svg>
        );

      case "postres":
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
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
            <path
              d="M50 32 Q55 25 52 20"
              stroke="hsl(120, 50%, 30%)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        );

      default:
        return (
          <svg viewBox="0 0 100 100" className={`w-full h-full ${className}`}>
            <motion.circle
              cx="50"
              cy="50"
              r="35"
              fill="hsl(var(--primary))"
              opacity="0.2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            />
            <text x="50" y="55" textAnchor="middle" fontSize="30">
              🍽️
            </text>
          </svg>
        );
    }
  };

  return renderVisual();
};

export default ZoneVisuals;
