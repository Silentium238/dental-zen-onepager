import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">ДЕНТАЛ_</h3>
            <p className="text-white/80 mb-3 md:mb-4 leading-tight tracking-normal font-normal text-sm md:text-base">
              Ваша надійна стоматологічна клініка в Івано-Франківську. Ми пропонуємо повний спектр стоматологічних послуг 
              з використанням сучасних технологій та досвідчених спеціалістів.
            </p>
            <div className="flex items-center text-white/80 text-sm md:text-base">
              <span>Зроблено з</span>
              <Heart className="w-4 h-4 mx-2 text-red-600 fill-red-600" />
              <span>для вашої посмішки</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase">Швидкі посилання</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-red-600 transition-colors text-sm md:text-base">Про нас</a></li>
              <li><a href="#services" className="text-white/80 hover:text-red-600 transition-colors text-sm md:text-base">Послуги</a></li>
              <li><a href="#articles" className="text-white/80 hover:text-red-600 transition-colors text-sm md:text-base">Статті</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-red-600 transition-colors text-sm md:text-base">Відгуки</a></li>
              <li><a href="#contacts" className="text-white/80 hover:text-red-600 transition-colors text-sm md:text-base">Контакти</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 uppercase">Контакти</h4>
            <div className="space-y-2 text-white/80 text-sm md:text-base">
              <p>Івано-Франківськ, вулиця Незалежності, 17</p>
              <p className="hover:text-red-600 transition-colors">
                <a href="tel:+380670001212">+38 (067) 000 12 12</a>
              </p>
              <p className="hover:text-red-600 transition-colors">
                <a href="mailto:info@dentalclinic.ua">info@dentalclinic.ua</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-white/60">
          <p className="text-xs md:text-sm">&copy; 2025 Дентал Клінік. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;