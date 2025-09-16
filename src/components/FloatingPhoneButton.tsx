import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CallbackWidget from "./CallbackWidget";
import { useCallbackContext } from "@/contexts/CallbackContext";

const FloatingPhoneButton = () => {
  const { isCallbackOpen, openCallback, closeCallback } = useCallbackContext();

  return (
    <>
      {/* Плавающая кнопка телефона */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openCallback}
          className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 slow-pulse"
          size="icon"
        >
          <Phone className="w-8 h-8" />
        </Button>
      </div>

      {/* Модальное окно с CallbackWidget */}
      <Dialog open={isCallbackOpen} onOpenChange={closeCallback}>
        <DialogContent  style={{borderRadius: '0'}} className="max-w-md mx-auto bg-white border border-gray-200 shadow-2xl">
          <DialogHeader className="pb-4">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-lg font-semibold text-gray-800">
                Зворотний дзвінок
              </DialogTitle>
            </div>
          </DialogHeader>
          <div className="px-2">
            <CallbackWidget />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingPhoneButton;
