import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, 
  Sparkles, 
  Anchor, 
  Crown, 
  Sun, 
  Baby 
} from "lucide-react";
import service1 from "@/assets/service1.png";
import service2 from "@/assets/service2.png";
import service3 from "@/assets/service3.png";
import service4 from "@/assets/service4.png";
import service5 from "@/assets/service5.png";
import service6 from "@/assets/service6.png";
import service7 from "@/assets/service7.png";
import service8 from "@/assets/service8.png";

const services = [
  {
    icon: service1,
    title: "Лікування зубів",
    description: "Сучасні методи лікування карієсу, пульпіту та інших захворювань зубів з використанням безболісних технологій.",
    color: "text-red-600"
  },
  {
    icon: service2,
    title: "Професійна чистка",
    description: "Видалення зубного каменю та нальоту, полірування зубів для підтримки здоров'я порожнини рота.",
    color: "text-black"
  },
  {
    icon: service7,
    title: "Лікування пародонтиту",
    description: "Комплексне лікування захворювань пародонту сучасними методами для збереження здоров'я ясен.",
    color: "text-red-600"
  },
  {
    icon: service4,
    title: "Відбілювання зубів",
    description: "Безпечне професійне відбілювання для створення красивої білосніжної посмішки.",
    color: "text-black"
  },
  {
    icon: service5,
    title: "Лікування пародонтозу",
    description: "Комплексне лікування дистрофічних змін у тканинах пародонту для зупинки прогресування захворювання та збереження зубів.",
    color: "text-red-600"
  },
  {
    icon: service8,
    title: "Лікування гінгівіту",
    description: "Ефективне лікування гінгівіту та запалення ясен з використанням сучасних методів терапії.",
    color: "text-black"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter text-black mb-4 md:mb-6 uppercase">Наші послуги</h2>
          <p className="text-base sm:text-lg text-black max-w-[435px] mx-auto leading-tight tracking-normal font-normal">
            Повний спектр стоматологічних послуг для підтримки здоров'я ваших зубів та створення красивої посмішки.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            return (
              <Card 
                key={index} 
                className="border border-black shadow-none transition-all duration-300 bg-white rounded-none"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 md:p-4 bg-white rounded-none w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <img src={service.icon} alt={service.title} className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-semibold text-black uppercase">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-black leading-tight tracking-normal font-normal">
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