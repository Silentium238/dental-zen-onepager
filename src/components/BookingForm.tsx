import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });

    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="py-20 bg-muted">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Записаться на приём</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Заполните форму ниже, и мы свяжемся с вами для подтверждения записи и уточнения деталей.
          </p>
        </div>

        <Card className="border-none shadow-xl bg-background">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl text-foreground">
              Онлайн запись к врачу
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                    <User className="w-4 h-4 text-primary" />
                    Имя и фамилия *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Введите ваше имя"
                    required
                    className="h-12 border-border focus:ring-primary"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-foreground">
                    <Phone className="w-4 h-4 text-primary" />
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="h-12 border-border focus:ring-primary"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 text-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    Желаемая дата
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="h-12 border-border focus:ring-primary"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2 text-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    Желаемое время
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    className="h-12 border-border focus:ring-primary"
                  />
                </div>
              </div>

              {/* Comment */}
              <div className="space-y-2">
                <Label htmlFor="comment" className="flex items-center gap-2 text-foreground">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  Комментарий
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Опишите ваши пожелания или проблему..."
                  className="min-h-[100px] border-border focus:ring-primary"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="w-full md:w-auto text-lg px-12 py-6 rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {isLoading ? "Отправляем..." : "Отправить заявку"}
                </Button>
              </div>

              <p className="text-sm text-muted-foreground text-center mt-4">
                * Обязательные поля. Мы свяжемся с вами в течение 30 минут в рабочее время.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;