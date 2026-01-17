import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const VisitUs = () => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-architects text-3xl md:text-4xl text-primary mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¡Ven a visitarnos!
        </motion.h2>

        <motion.div
          className="bg-background rounded-2xl p-8 sketch-border inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h3 className="font-architects text-xl text-foreground">Horario</h3>
          </div>
          
          <div className="font-patrick text-lg space-y-2">
            <p className="text-muted-foreground">Martes a Domingo</p>
            <div className="flex flex-col md:flex-row md:gap-8 justify-center">
              <div>
                <span className="text-primary font-bold">Mañanas:</span>
                <span className="text-foreground ml-2">10:00 - 15:30</span>
              </div>
              <div>
                <span className="text-primary font-bold">Tardes:</span>
                <span className="text-foreground ml-2">19:00 - 23:30</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mt-4">Lunes cerrado</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitUs;
