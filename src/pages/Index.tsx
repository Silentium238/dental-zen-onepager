import Navigation from "@/components/Navigation";
import DentalHero from "@/components/DentalHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactsSection from "@/components/ContactsSection";
import CallbackWidget from "@/components/CallbackWidget";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import FloatingPhoneButton from "@/components/FloatingPhoneButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div id="hero">
        <DentalHero />
      </div>
      
      <AboutSection />
      <ServicesSection />
      <ArticlesSection />
      <TestimonialsSection />
      <ContactsSection />
      
      {/* Callback Widget Section
      <section id="callback" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1350px] mx-auto px-4 md:px-6">
          <CallbackWidget />
        </div>
      </section> */}
      
      {/* <BookingForm /> */}
      <Footer />
      
      {/* Плавающая кнопка телефона */}
      <FloatingPhoneButton />
    </div>
  );
};

export default Index;
