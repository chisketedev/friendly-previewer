import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { PHONE_NUMBER } from "@/data/menuData";

const FloatingCallButton = () => {
  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, "")}`;
  };

  return (
    <motion.button
      onClick={handleCall}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-full bg-gradient-to-r from-primary to-chicho-gold-light text-primary-foreground font-bold shadow-xl hover:shadow-2xl transition-shadow"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 10, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
      >
        <Phone className="w-6 h-6" />
      </motion.div>
      <span className="hidden sm:inline font-architects text-lg">
        ¡Llámanos!
      </span>
    </motion.button>
  );
};

export default FloatingCallButton;
