import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamImage from "@/assets/dental-team.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">О нашей клинике</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Более 15 лет мы заботимся о здоровье ваших зубов, используя современные методы лечения и создавая комфортную атмосферу для каждого пациента.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-none shadow-lg bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Опытная команда</h3>
                <p className="text-muted-foreground mb-4">
                  Наши врачи имеют многолетний опыт работы и регулярно повышают свою квалификацию, 
                  изучая новейшие методы лечения и технологии.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">15+ лет опыта</Badge>
                  <Badge variant="secondary">Сертифицированные специалисты</Badge>
                  <Badge variant="secondary">Постоянное обучение</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-background">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Современное оборудование</h3>
                <p className="text-muted-foreground mb-4">
                  Мы используем передовые технологии: цифровую рентгенографию, 
                  лазерное лечение, 3D-сканирование для точной диагностики и комфортного лечения.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Цифровая диагностика</Badge>
                  <Badge variant="secondary">Лазерные технологии</Badge>
                  <Badge variant="secondary">3D-сканирование</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img 
              src={teamImage} 
              alt="Команда стоматологической клиники"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm">Довольных пациентов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;