import { Phone, MapPin, Clock } from "lucide-react";
import { PHONE_NUMBER, RESTAURANT_NAME } from "@/data/menuData";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="text-4xl">👨‍🍳</span>
              <h3 className="font-architects text-2xl text-primary">
                {RESTAURANT_NAME}
              </h3>
            </div>
            <p className="font-patrick text-muted-foreground">
              Donde cada bocado cuenta una historia deliciosa
            </p>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="font-architects text-xl text-primary mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-patrick">{PHONE_NUMBER}</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-patrick">Tu barrio favorito</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="font-architects text-xl text-primary mb-4">Horario</h4>
            <div className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <div className="font-patrick">
                <p>Lun - Dom</p>
                <p className="text-foreground">12:00 - 00:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="font-patrick text-muted-foreground text-sm">
            © {new Date().getFullYear()} {RESTAURANT_NAME}. Hecho con ❤️ y mucho queso
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
