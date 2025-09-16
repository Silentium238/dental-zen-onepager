import heroImage from "@/assets/dental-hero.jpg";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useImageContext } from "@/contexts/ImageContext";
import { useCallbackContext } from "@/contexts/CallbackContext";
import simsRoom from "@/assets/simsRoom.png";
import dentalRoom from "@/assets/dental-hero.jpg";

const DentalHero = () => {
  const { currentImageSet } = useImageContext();
  const { openCallback } = useCallbackContext();
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Выбираем изображение в зависимости от текущего набора
  const backgroundImage = currentImageSet === 'simsRoom' ? simsRoom : dentalRoom;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Red Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-red-600/20"></div>
      </div>

      {/* Red Blur Effects */}
      <div className="absolute left-0 w-[30vw] md:w-[500px] h-[500px] bg-red-600 blur-4xl opacity-70 z-0"></div>
      <div className="absolute right-0 w-[30vw] md:w-[500px] h-[500px] bg-red-600 blur-4xl opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          <span className="text-red-600">Дентал</span> Клінік
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 max-w-2xl mx-auto drop-shadow-lg">
          Сучасна стоматологія для здорової та красивої посмішки
        </p>
        
        <p className="text-base sm:text-lg text-white mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg px-4">
          Більше 15 років досвіду в стоматології. Використовуємо передові технології та індивідуальний підхід до кожного пацієнта.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button 
            onClick={openCallback}
            style={{backgroundColor: 'white'}}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto bg-white hover:border-red-600 hover:text-red-600 text-black rounded-none uppercase px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300"
          >
            Записатися на прийом
          </Button>
          
          <Button 
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-white text-black hover:bg-red-600 hover:text-white rounded-none uppercase px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300"
          >
            Наші послуги
          </Button>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Button
          onClick={scrollToNextSection}
          variant="ghost"
          className="text-white hover:text-red-600 transition-colors animate-bounce"
        >
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
        </Button>
      </div>
    </section>
  );
};

export default DentalHero;