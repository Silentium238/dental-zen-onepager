import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Як правильно доглядати за зубами",
    excerpt: "Основні правила гігієни порожнини рота, які допоможуть зберегти здоров'я ваших зубів на довгі роки.",
    category: "Гігієна",
    readTime: "5 хв",
    date: "15.12.2024",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Сучасні методи відбілювання зубів",
    excerpt: "Огляд безпечних та ефективних способів відбілювання зубів в домашніх умовах та в клініці.",
    category: "Косметологія",
    readTime: "7 хв",
    date: "12.12.2024",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Імплантація зубів: що потрібно знати",
    excerpt: "Повний посібник з імплантації зубів: показання, протипоказання, етапи процедури.",
    category: "Імплантація",
    readTime: "10 хв",
    date: "10.12.2024",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Профілактика карієсу у дітей",
    excerpt: "Як захистити дитячі зуби від карієсу та прищепити правильні звички гігієни з раннього віку.",
    category: "Дитяча стоматологія",
    readTime: "6 хв",
    date: "08.12.2024",
    image: "https://images.unsplash.com/photo-1606811841689-5ae32d232c9a?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Бректи: види та особливості",
    excerpt: "Порівняння різних типів брекет-систем та їх ефективності для виправлення прикусу.",
    category: "Ортодонтія",
    readTime: "8 хв",
    date: "05.12.2024",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Харчування для здоров'я зубів",
    excerpt: "Які продукти корисні для зубів, а яких варто уникати для підтримки здоров'я порожнини рота.",
    category: "Харчування",
    readTime: "4 хв",
    date: "03.12.2024",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=250&fit=crop"
  }
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter text-black mb-4 md:mb-6 uppercase">Статті</h2>
          <p className="text-base sm:text-lg text-black max-w-[435px] mx-auto leading-tight tracking-normal font-normal">
            Корисна інформація про стоматологію, здоров'я зубів та сучасні методи лікування.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <Card 
              key={article.id} 
              className="border border-black shadow-none hover:border-red-600 transition-all duration-300 bg-white rounded-none group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm uppercase">
                  {article.category}
                </div>
              </div>
              
              <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-4">
                <CardTitle className="text-lg sm:text-xl font-semibold text-black uppercase leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-black leading-tight tracking-normal font-normal mb-3 sm:mb-4 text-sm sm:text-base">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs sm:text-sm text-black mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Button
                  className="w-full bg-black hover:bg-red-600 text-white rounded-none uppercase h-[36px] sm:h-[40px] text-sm sm:text-[16px] font-normal group-hover:border-red-600 transition-all duration-300"
                >
                  <span>Читати статтю</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button
            className="bg-black hover:bg-red-600 text-white rounded-none uppercase h-[44px] sm:h-[50px] text-base sm:text-[18px] font-normal px-6 sm:px-8"
          >
            Всі статті
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
