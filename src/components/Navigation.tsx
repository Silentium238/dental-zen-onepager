import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useImageContext } from "@/contexts/ImageContext";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const { toggleImageSet, currentImageSet } = useImageContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Головна", id: "hero" },
    { label: "Про нас", id: "about" },
    { label: "Послуги", id: "services" },
    { label: "Статті", id: "articles" },
    { label: "Відгуки", id: "testimonials" },
    { label: "Контакти", id: "contacts" },
  ];

  return (
    <div
      className="z-50 bg-white w-full opacity-100 relative"
      ref={headerRef}
    >
      <nav className="z-50 bg-white max-w-full opacity-100 rounded-none border-0 lg:border-b lg:border-black py-0 md:shadow-none" style={{ borderWidth: '0 0 1px 0' }}>
        <div className={`flex justify-around md:justify-between w-full max-w-[1350px] h-[60px] mx-auto items-center px-4 md:px-6 ${isMobileMenuOpen ? 'border-b border-black' : ''}`}>
          {/* Logo */}
          <button
            onClick={() => {
              scrollToSection("hero");
              toggleImageSet();
            }}
            className="text-2xl md:text-3xl font-bold text-black hover:text-red-600 transition-colors"
            title={`Переключити на ${currentImageSet === 'simsRoom' ? 'dentalRoom' : 'simsRoom'} изображения`}
          >
            ДЕНТАЛ_
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row space-x-3 lg:space-x-6 xl:space-x-8 xl:mr-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[14px] lg:text-[16px] xl:text-[18px] h-[38px] text-black hover:text-red-600 transition-colors duration-200 font-normal uppercase group whitespace-nowrap"
              >
                {item.label}
                <span className="group-hover:animate-blink text-2xl lg:text-3xl font-bold relative bottom-[2px] lg:bottom-[3px] opacity-0 group-hover:opacity-100">
                  _
                </span>
              </button>
            ))}
            
            <button
              onClick={() => scrollToSection("callback")}
              className="bg-black hover:bg-red-600 text-white w-[180px] lg:w-[200px] xl:w-[210px] h-[38px] tracking-wide rounded-none uppercase text-[14px] lg:text-[16px] xl:text-[18px] font-normal transition-all duration-300 whitespace-nowrap"
            >
              Записатися_
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black hover:text-red-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col w-full bg-white z-50 border-t border-black">
              {navItems.map((item, index) => (
                <li
                  key={item.id}
                  className="font-medium border-b border-black"
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="w-full h-[50px] px-6 text-left text-black hover:text-red-600 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="font-medium">
                <button
                  onClick={() => scrollToSection("callback")}
                  className="w-full h-[50px] bg-black text-white hover:bg-red-600 transition-colors"
                >
                  Записатися_
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;