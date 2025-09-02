import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Контакты</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Свяжитесь с нами удобным способом или посетите нашу клинику. Мы всегда рады помочь вам!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-card">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-4 pb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Адрес</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  г. Москва, ул. Примерная, д. 123<br />
                  ТЦ "Медицинский", 2 этаж
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-4 pb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Телефон</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">
                  <a href="tel:+74951234567" className="hover:text-primary transition-colors">
                    +7 (495) 123-45-67
                  </a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Круглосуточная запись
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-4 pb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">
                  <a href="mailto:info@dentalclinic.ru" className="hover:text-primary transition-colors">
                    info@dentalclinic.ru
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-card">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-4 pb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">Часы работы</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-1 text-muted-foreground">
                  <p>Пн-Пт: 9:00 - 21:00</p>
                  <p>Сб-Вс: 10:00 - 18:00</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-card h-full">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Как до нас добраться</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4266219542!2d37.617734!3d55.755831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sRed%20Square%2C%20Moscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1635780000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Расположение клиники"
                  />
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p className="mb-2">🚇 Ближайшая станция метро: "Примерная" (5 мин пешком)</p>
                  <p>🚗 Парковка: Бесплатная для пациентов</p>
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