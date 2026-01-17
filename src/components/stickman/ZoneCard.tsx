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
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
    >
      <Link to={`/menu/${zone.slug}`}>
        <div className="group relative overflow-hidden rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-chicho-gold/30 hover:border-chicho-gold transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
          {/* Food image */}
          <div className="relative h-40 overflow-hidden">
            <img 
              src={zone.image} 
              alt={zone.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          
          {/* Zone name with neon effect */}
          <div className="relative px-4 pb-6 -mt-8">
            <h3 className="font-architects text-3xl md:text-4xl text-center neon-text">
              {zone.name}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ZoneCard;
