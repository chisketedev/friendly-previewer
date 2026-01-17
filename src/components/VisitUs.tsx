import { motion } from "framer-motion";
import { Clock, Phone, MapPin, Bike } from "lucide-react";

const VisitUs = () => {
  const phoneNumber = "tel:+34968742743";

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-architects text-5xl md:text-6xl lg:text-7xl neon-text mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tú eliges
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Visitar el local */}
          <motion.div
            className="bg-background rounded-2xl p-6 sketch-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="font-architects text-xl text-foreground">En el local</h3>
            </div>
            
            <div className="font-patrick text-lg space-y-2">
              <div className="flex items-center justify-center gap-2 text-muted-foreground mb-3">
                <Clock className="w-4 h-4" />
                <span>Horario</span>
              </div>
              <p className="text-muted-foreground text-sm">Martes a Domingo</p>
              <div className="space-y-1">
                <div>
                  <span className="text-primary font-bold">Mañanas:</span>
                  <span className="text-foreground ml-2">10:00 - 15:30</span>
                </div>
                <div>
                  <span className="text-primary font-bold">Tardes:</span>
                  <span className="text-foreground ml-2">19:00 - 23:30</span>
                </div>
              </div>
              <p className="text-muted-foreground text-xs mt-3">Lunes cerrado</p>
            </div>
          </motion.div>

          {/* Recoger en local */}
          <motion.div
            className="bg-background rounded-2xl p-6 sketch-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="font-architects text-xl text-foreground">Para recoger</h3>
            </div>
            
            <div className="font-patrick text-lg space-y-3">
              <p className="text-muted-foreground">
                Llama y recoge tu pedido en el local
              </p>
              <a
                href={phoneNumber}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-patrick hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                968 742 743
              </a>
              <p className="text-muted-foreground text-sm">
                ¡Listo en minutos!
              </p>
            </div>
          </motion.div>

          {/* Servicio a domicilio */}
          <motion.div
            className="bg-background rounded-2xl p-6 sketch-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bike className="w-6 h-6 text-primary" />
              <h3 className="font-architects text-xl text-foreground">A domicilio</h3>
            </div>
            
            <div className="font-patrick text-lg space-y-3">
              <p className="text-muted-foreground">
                Te lo llevamos a casa
              </p>
              <a
                href={phoneNumber}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full font-patrick hover:bg-primary/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                968 742 743
              </a>
              <p className="text-muted-foreground text-sm">
                Consulta zona de reparto
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
