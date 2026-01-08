import { motion } from "framer-motion";
import ZoneCard from "./ZoneCard";
import { menuZones } from "@/data/menuData";

const StickmanWorld = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-architects text-4xl md:text-5xl text-primary mb-4">
            Explora Nuestro Mundo
          </h2>
          <p className="font-patrick text-xl text-muted-foreground max-w-2xl mx-auto">
            Haz clic en cada zona para descubrir nuestras deliciosas creaciones
          </p>
          <div className="section-divider max-w-md mx-auto" />
        </motion.div>

        {/* Zone grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuZones.map((zone, index) => (
            <ZoneCard key={zone.id} zone={zone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickmanWorld;
