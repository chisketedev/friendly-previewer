import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MenuZone } from "@/data/menuData";

interface ZoneCardProps {
  zone: MenuZone;
  index: number;
}

const ZoneCard = ({ zone, index }: ZoneCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: "easeOut"
      }}
      className="will-change-transform"
    >
      <Link to={`/menu/${zone.slug}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-chicho-gold/30 hover:border-chicho-gold transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 transform-gpu">
          {/* Food image */}
          <div className="relative h-32 sm:h-40 overflow-hidden">
            <img 
              src={zone.image} 
              alt={zone.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          
          {/* Zone name - simplified neon effect on mobile */}
          <div className="relative px-2 pb-4 sm:pb-6 -mt-6 sm:-mt-8">
            <h3 className="font-architects text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center neon-text-optimized break-words leading-tight">
              {zone.name}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ZoneCard;
