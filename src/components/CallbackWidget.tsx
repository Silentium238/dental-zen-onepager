import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CallbackWidget = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 минут в секундах
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Таймер обратного отсчета
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          return 30 * 60; // Сброс на 30 минут
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      toast({
        title: "Помилка",
        description: "Будь ласка, введіть номер телефону",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Симуляция отправки запроса
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Заявку прийнято!",
      description: "Ми зателефонуємо вам найближчим часом.",
    });

    setIsLoading(false);
    setPhoneNumber("");
  };

  return (
    <Card className="border border-black shadow-none bg-white !rounded-none max-w-md mx-auto">
      <CardContent className="p-6">
        {/* Заголовок */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-2 uppercase">
            Хочете, зателефонуємо Вам за 30 секунд?
          </h3>
        </div>

        {/* Форма */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <div className="flex-1">
              <Input
                type="tel"
                placeholder="Ваш номер телефону"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-12 border-black focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-red-600 focus:outline-none rounded-none bg-white text-black placeholder:text-gray-500"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-6 bg-red-600 hover:bg-red-700 text-white rounded-none uppercase font-medium transition-all duration-300"
            >
              {isLoading ? "..." : "Зателефонуйте"}
            </Button>
          </div>

          {/* Таймер */}
          <div className="flex items-center justify-center gap-2 text-red-600">
            <Clock className="w-4 h-4" />
            <span className="text-lg font-mono font-bold">
              {formatTime(timeLeft)}
            </span>
          </div>

          {/* Пример номера */}
          <p className="text-sm text-gray-500 text-center">
            Наприклад: 067 000 00 00
          </p>
        </form>

        {/* Статистика */}
        <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Phone className="w-4 h-4" />
            <span>Вільних операторів на лінії: <span className="font-semibold text-black">4</span></span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Замовлень дзвінків за сьогодні: <span className="font-semibold text-black">20+</span></span>
          </div>
        </div>

        {/* Брендинг */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <div className="text-xs text-gray-400">
            <span className="block">ВІРТУАЛЬНА АТС</span>
            <span className="block text-lg font-bold text-black mt-1">binotel</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CallbackWidget;
