import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import teamImage from "@/assets/dental-team.jpg";
import simsTeam from "@/assets/simsTeam.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter text-black mb-4 md:mb-6 uppercase">Про нашу клініку</h2>
          <p className="text-base sm:text-lg text-black max-w-[435px] mx-auto leading-tight tracking-normal font-normal">
            Більше 15 років ми дбаємо про здоров'я ваших зубів, використовуючи сучасні методи лікування та створюючи комфортну атмосферу для кожного пацієнта.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <Card className="border border-black shadow-none bg-white rounded-none">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 uppercase">Досвідчена команда</h3>
                <p className="text-black mb-4 leading-tight tracking-normal font-normal">
                  Наші лікарі мають багаторічний досвід роботи та регулярно підвищують свою кваліфікацію, 
                  вивчаючи найновіші методи лікування та технології.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-black text-white rounded-none border-black hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">15+ років досвіду</Badge>
                  <Badge variant="secondary" className="bg-black text-white rounded-none border-black hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">Сертифіковані спеціалісти</Badge>
                  <Badge variant="secondary" className="bg-black text-white rounded-none border-black hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">Постійне навчання</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-black shadow-none bg-white rounded-none">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4 uppercase">Сучасне обладнання</h3>
                <p className="text-black mb-4 leading-tight tracking-normal font-normal">
                  Ми використовуємо передові технології: цифрову рентгенографію, 
                  лазерне лікування, 3D-сканування для точної діагностики та комфортного лікування.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-black text-white rounded-none border-black hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">Цифрова діагностика</Badge>
                  <Badge variant="secondary" className="bg-black text-white rounded-none border-black hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">Лазерні технології</Badge>
                  <Badge variant="secondary" className="bg-black text-white rounded-none border-black hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer">3D-сканування</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img 
              src={simsTeam} 
              alt="Команда стоматологічної клініки"
              className="w-full h-auto object-cover border border-black"
            />
            <div className="absolute -bottom-4 -left-4 bg-black text-white p-4 md:p-6 border border-black">
              <div className="text-2xl md:text-3xl font-bold">5000+</div>
              <div className="text-xs md:text-sm uppercase">Задоволених пацієнтів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;