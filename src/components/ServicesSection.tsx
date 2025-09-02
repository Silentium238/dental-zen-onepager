import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Stethoscope, 
  Sparkles, 
  Heart, 
  Shield, 
  Smile, 
  Zap 
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Лечение зубов",
    description: "Современные методы лечения кариеса, пульпита и других заболеваний зубов с использованием безболезненных технологий.",
    color: "text-primary"
  },
  {
    icon: Sparkles,
    title: "Профессиональная чистка",
    description: "Удаление зубного камня и налета, полировка зубов для поддержания здоровья полости рта.",
    color: "text-secondary-foreground"
  },
  {
    icon: Heart,
    title: "Имплантация зубов",
    description: "Установка качественных имплантов для восстановления утраченных зубов с гарантией на долгие годы.",
    color: "text-accent-foreground"
  },
  {
    icon: Smile,
    title: "Отбеливание зубов",
    description: "Безопасное профессиональное отбеливание для создания красивой белоснежной улыбки.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Протезирование",
    description: "Изготовление коронок, мостов и съемных протезов для восстановления функции жевания.",
    color: "text-secondary-foreground"
  },
  {
    icon: Zap,
    title: "Детская стоматология",
    description: "Специализированный подход к лечению детей с комфортной и дружелюбной атмосферой.",
    color: "text-accent-foreground"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Полный спектр стоматологических услуг для поддержания здоровья ваших зубов и создания красивой улыбки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 bg-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-muted rounded-full w-16 h-16 flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;