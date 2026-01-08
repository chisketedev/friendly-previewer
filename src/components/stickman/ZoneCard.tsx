import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ZoneVisuals from "./ZoneVisuals";
import { MenuZone } from "@/data/menuData";

interface ZoneCardProps {
  zone: MenuZone;
  index: number;
}

const ZoneCard = ({ zone, index }: ZoneCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
    >
      <Link to={`/menu/${zone.slug}`}>
        <div className="zone-card group p-6 h-full">
          {/* Visual illustration */}
          <div className="w-24 h-24 mx-auto mb-4">
            <ZoneVisuals zoneId={zone.id} />
          </div>
          
          {/* Zone name */}
          <h3 className="font-architects text-2xl text-primary text-center mb-2 group-hover:text-chicho-gold-light transition-colors">
            {zone.name}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-center text-sm font-patrick">
            {zone.description}
          </p>
          
          {/* Hover indicator */}
          <motion.div
            className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            <span className="text-primary font-architects text-sm">
              Ver menú →
            </span>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ZoneCard;
