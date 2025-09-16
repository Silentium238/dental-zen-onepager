import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter text-black mb-4 md:mb-6 uppercase">Контакти</h2>
          <p className="text-base sm:text-lg text-black max-w-[435px] mx-auto leading-tight tracking-normal font-normal">
            Зв'яжіться з нами зручним способом або відвідайте нашу клініку. Ми завжди раді допомогти вам!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <Card className="border border-black shadow-none bg-white rounded-none">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-3 md:space-x-4 pb-3 md:pb-4">
                <div className="p-2 md:p-3 bg-red-600">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl text-black uppercase">Адреса</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-black leading-tight tracking-normal font-normal text-sm md:text-base">
                  м. Київ, вул. Хрещатик, 1<br />
                  ТЦ "Медичний", 2 поверх
                </p>
              </CardContent>
            </Card>

            <Card className="border border-black shadow-none bg-white rounded-none">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-3 md:space-x-4 pb-3 md:pb-4">
                <div className="p-2 md:p-3 bg-red-600">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl text-black uppercase">Телефон</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-black text-sm md:text-base">
                  <a href="tel:+380441234567" className="hover:text-red-600 transition-colors">
                    +38 (044) 123-45-67
                  </a>
                </p>
                <p className="text-xs md:text-sm text-black mt-1">
                  Цілодобова запис
                </p>
              </CardContent>
            </Card>

            <Card className="border border-black shadow-none bg-white rounded-none">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-3 md:space-x-4 pb-3 md:pb-4">
                <div className="p-2 md:p-3 bg-red-600">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl text-black uppercase">Email</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-black text-sm md:text-base">
                  <a href="mailto:info@dentalclinic.ua" className="hover:text-red-600 transition-colors">
                    info@dentalclinic.ua
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border border-black shadow-none bg-white rounded-none">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-3 md:space-x-4 pb-3 md:pb-4">
                <div className="p-2 md:p-3 bg-red-600">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <CardTitle className="text-lg md:text-xl text-black uppercase">Години роботи</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1 text-black text-sm md:text-base">
                  <p>Пн-Пт: 9:00 - 21:00</p>
                  <p>Сб-Нд: 10:00 - 18:00</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-4 md:space-y-6">
            <Card className="border border-black shadow-none bg-white rounded-none h-full">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl text-black uppercase">Як до нас дістатися</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border border-black h-64 md:h-80 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.0!2d30.5234!3d50.4501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0e033ecbe9%3A0x57a4dffefec77da0!2sKhreshchatyk%2C%20Kyiv%2C%20Ukraine!5e0!3m2!1sen!2sua!4v1635780000000!5m2!1sen!2sua"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Розташування клініки"
                  />
                </div>
                <div className="mt-3 md:mt-4 text-xs md:text-sm text-black">
                  <p className="mb-1 md:mb-2">🚇 Найближча станція метро: "Хрещатик" (5 хв пішки)</p>
                  <p>🚗 Парковка: Безкоштовна для пацієнтів</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;