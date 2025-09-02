import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Д</span>
              </div>
              <span className="text-xl font-bold">Дентал Клиник</span>
            </div>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Современная стоматологическая клиника с индивидуальным подходом к каждому пациенту. 
              Мы заботимся о здоровье ваших зубов уже более 15 лет.
            </p>
            <div className="flex items-center space-x-1 text-sm text-background/70">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              <span>для ваших улыбок</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <div className="space-y-2">
              {[
                { label: "О нас", id: "about" },
                { label: "Услуги", id: "services" },
                { label: "Отзывы", id: "testimonials" },
                { label: "Контакты", id: "contacts" },
                { label: "Записаться", id: "booking" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const section = document.getElementById(link.id);
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-background/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80 text-sm">
                  г. Москва, ул. Примерная, д. 123
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+74951234567" 
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@dentalclinic.ru" 
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  info@dentalclinic.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Дентал Клиник. Все права защищены.
            </p>
            <button
              onClick={scrollToTop}
              className="text-background/60 hover:text-primary transition-colors text-sm"
            >
              Наверх ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;