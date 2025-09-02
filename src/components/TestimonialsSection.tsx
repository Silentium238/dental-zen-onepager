import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";

const testimonials = [
  {
    name: "Анна М.",
    image: patient1,
    rating: 5,
    text: "Прекрасная клиника! Врачи очень внимательные и профессиональные. Лечение прошло абсолютно безболезненно. Теперь обращаюсь только сюда!"
  },
  {
    name: "Михаил К.",
    image: patient2,
    rating: 5,
    text: "Делал имплантацию зубов. Очень доволен результатом! Современное оборудование, квалифицированные врачи. Рекомендую всем!"
  },
  {
    name: "Елена Р.",
    image: null,
    rating: 5,
    text: "Отличный сервис и качество лечения. Особенно понравилась профессиональная чистка зубов. Персонал очень дружелюбный и заботливый."
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Отзывы наших пациентов</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Мы гордимся доверием наших пациентов и стремимся превзойти их ожидания каждый день.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background"
            >
              <CardContent className="p-8 text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Patient Info */}
                <div className="flex items-center justify-center space-x-4">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">Пациент</p>
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