import { motion } from "framer-motion";
import ZoneCard from "./ZoneCard";
import { menuZones } from "@/data/menuData";

const StickmanWorld = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">

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
