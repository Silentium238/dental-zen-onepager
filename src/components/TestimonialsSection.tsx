import { Card, CardContent } from "@/components/ui/card";
import SharpStar from "@/components/ui/sharp-star";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";

const testimonials = [
  {
    name: "Анна М.",
    image: patient1,
    rating: 5,
    text: "Чудова клініка! Лікарі дуже уважні та професійні. Лікування пройшло абсолютно безболісно. Тепер звертаюся тільки сюди!"
  },
  {
    name: "Михайло К.",
    image: patient2,
    rating: 5,
    text: "Робив імплантацію зубів. Дуже задоволений результатом! Сучасне обладнання, кваліфіковані лікарі. Рекомендую всім!"
  },
  {
    name: "Олена Р.",
    image: null,
    rating: 5,
    text: "Відмінний сервіс та якість лікування. Особливо сподобалася професійна чистка зубів. Персонал дуже дружній та турботливий."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter text-black mb-4 md:mb-6 uppercase">Відгуки наших пацієнтів</h2>
          <p className="text-base sm:text-lg text-black max-w-[435px] mx-auto leading-tight tracking-normal font-normal">
            Ми пишаємося довірою наших пацієнтів та прагнемо перевершити їх очікування кожного дня.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border border-black shadow-none bg-white rounded-none"
            >
              <CardContent className="p-6 md:p-8 text-center">
                {/* Stars */}
                <div className="flex justify-center mb-4 md:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SharpStar key={i} className="w-4 h-4 md:w-5 md:h-5 text-red-600" size={20} filled={true} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-black mb-4 md:mb-6 leading-tight tracking-normal font-normal italic text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center justify-center space-x-3 md:space-x-4">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 object-cover border-2 border-black"
                    />
                  ) : (
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-black flex items-center justify-center">
                      <span className="text-white font-semibold text-base md:text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-black uppercase text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-black">Пацієнт</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;