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
      title: "Заявку відправлено!",
      description: "Ми зв'яжемося з вами найближчим часом для підтвердження запису.",
    });

    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="booking" className="py-12 md:py-20 bg-white">
      <div className="max-w-[1350px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl tracking-tighter text-black mb-4 md:mb-6 uppercase">Записатися на прийом</h2>
          <p className="text-base sm:text-lg text-black max-w-[435px] mx-auto leading-tight tracking-normal font-normal">
            Заповніть форму нижче, і ми зв'яжемося з вами для підтвердження запису та уточнення деталей.
          </p>
        </div>

        <Card className="border border-black shadow-none bg-white rounded-none">
          <CardHeader className="text-center pb-6 md:pb-8">
            <CardTitle className="text-xl md:text-2xl text-black uppercase">
              Онлайн запис до лікаря
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-black text-sm md:text-base">
                    <User className="w-4 h-4 text-red-600" />
                    Ім'я та прізвище *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Введіть ваше ім'я"
                    required
                    className="h-10 md:h-12 border-black focus:ring-red-600 rounded-none bg-white"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2 text-black text-sm md:text-base">
                    <Phone className="w-4 h-4 text-red-600" />
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+38 (___) ___-__-__"
                    required
                    className="h-10 md:h-12 border-black focus:ring-red-600 rounded-none bg-white"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2 text-black text-sm md:text-base">
                    <Calendar className="w-4 h-4 text-red-600" />
                    Бажана дата
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="h-10 md:h-12 border-black focus:ring-red-600 rounded-none bg-white"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Time */}
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2 text-black text-sm md:text-base">
                    <Clock className="w-4 h-4 text-red-600" />
                    Бажаний час
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    className="h-10 md:h-12 border-black focus:ring-red-600 rounded-none bg-white"
                  />
                </div>
              </div>

              {/* Comment */}
              <div className="space-y-2">
                <Label htmlFor="comment" className="flex items-center gap-2 text-black text-sm md:text-base">
                  <MessageSquare className="w-4 h-4 text-red-600" />
                  Коментар
                </Label>
                <Textarea
                  id="comment"
                  name="comment"
                  placeholder="Опишіть ваші побажання або проблему..."
                  className="min-h-[80px] md:min-h-[100px] border-black focus:ring-red-600 rounded-none bg-white"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 py-3 md:py-6 bg-black hover:bg-red-600 text-white rounded-none uppercase transition-all duration-300"
                >
                  {isLoading ? "Відправляємо..." : "Відправити заявку"}
                </Button>
              </div>

              <p className="text-xs md:text-sm text-black text-center mt-4">
                * Обов'язкові поля. Ми зв'яжемося з вами протягом 30 хвилин у робочий час.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;