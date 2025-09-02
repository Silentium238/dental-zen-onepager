import Navigation from "@/components/Navigation";
import DentalHero from "@/components/DentalHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ArticlesSection from "@/components/ArticlesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactsSection from "@/components/ContactsSection";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

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
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
