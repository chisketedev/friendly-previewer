import { motion } from "framer-motion";

const MenuDivider = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          {/* Línea neón */}
          <div className="w-full max-w-2xl h-1 rounded-full bg-chicho-yellow animate-neon-pulse"
            style={{
              boxShadow: "0 0 10px hsl(var(--chicho-yellow)), 0 0 20px hsl(var(--chicho-yellow)), 0 0 40px hsl(var(--chicho-yellow))"
            }}
          />
          
          {/* Título MENÚ */}
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading text-chicho-yellow animate-neon-pulse"
            style={{
              textShadow: "0 0 10px hsl(var(--chicho-yellow)), 0 0 20px hsl(var(--chicho-yellow)), 0 0 40px hsl(var(--chicho-yellow)), 0 0 60px hsl(var(--chicho-yellow))"
            }}
          >
            MENÚ
          </motion.h2>
          
          {/* Línea neón inferior */}
          <div className="w-full max-w-2xl h-1 rounded-full bg-chicho-yellow animate-neon-pulse"
            style={{
              boxShadow: "0 0 10px hsl(var(--chicho-yellow)), 0 0 20px hsl(var(--chicho-yellow)), 0 0 40px hsl(var(--chicho-yellow))"
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MenuDivider;
