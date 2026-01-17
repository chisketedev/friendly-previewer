import { Phone, MapPin } from "lucide-react";
import { RESTAURANT_NAME } from "@/data/menuData";
import chichoLogo from "@/assets/chicho-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src={chichoLogo} 
                alt="Chicho" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="font-architects text-2xl text-primary">
                {RESTAURANT_NAME}
              </h3>
            </div>
            <p className="font-patrick text-muted-foreground">
              Donde cada bocado cuenta una historia deliciosa
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-architects text-xl text-primary mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="tel:968742743"
                className="flex items-center justify-center md:justify-end gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-patrick">968 742 743</span>
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-patrick">Av. Ciudad de Mataró, 14, 30430 Cehegín, Murcia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-8 rounded-xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.8!2d-1.7981!3d38.0903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63f8d8b3f0a8c5%3A0x0!2sAv.%20Ciudad%20de%20Matar%C3%B3%2C%2014%2C%2030430%20Ceheg%C3%ADn%2C%20Murcia!5e0!3m2!1ses!2ses!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de La Tapizzería de Chicho"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="font-patrick text-muted-foreground text-sm">
            © {new Date().getFullYear()} {RESTAURANT_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
