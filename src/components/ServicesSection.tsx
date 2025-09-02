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
    title: "Лікування зубів",
    description: "Сучасні методи лікування карієсу, пульпіту та інших захворювань зубів з використанням безболісних технологій.",
    color: "text-red-600"
  },
  {
    icon: Sparkles,
    title: "Професійна чистка",
    description: "Видалення зубного каменю та нальоту, полірування зубів для підтримки здоров'я порожнини рота.",
    color: "text-black"
  },
  {
    icon: Heart,
    title: "Імплантація зубів",
    description: "Встановлення якісних імплантів для відновлення втрачених зубів з гарантією на довгі роки.",
    color: "text-red-600"
  },
  {
    icon: Smile,
    title: "Відбілювання зубів",
    description: "Безпечне професійне відбілювання для створення красивої білосніжної посмішки.",
    color: "text-black"
  },
  {
    icon: Shield,
    title: "Протезування",
    description: "Виготовлення коронок, мостів та знімних протезів для відновлення функції жування.",
    color: "text-red-600"
  },
  {
    icon: Zap,
    title: "Дитяча стоматологія",
    description: "Спеціалізований підхід до лікування дітей з комфортною та дружньою атмосферою.",
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
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="border border-black shadow-none hover:border-red-600 transition-all duration-300 bg-white rounded-none"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 md:p-4 bg-black rounded-none w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <IconComponent className={`w-6 h-6 md:w-8 md:h-8 text-white`} />
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