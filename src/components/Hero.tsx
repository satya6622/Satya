
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [text, setText] = useState("");
  const phrases = ["Software Developer", "UI/UX Designer", "Problem Solver"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const typingEffect = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(50); // Faster deletion
      } else {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(100); // Normal typing speed
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1500); // Pause at the end
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setTypingSpeed(200); // Small pause before typing the next word
      }
    };

    const timer = setTimeout(typingEffect, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases, typingSpeed]);

  return (
    <section id="home" className="relative bg-hero-pattern bg-portfolio-darkblue text-white pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="section-container flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <div className="md:w-3/5 animate-fade-in">
          <p className="text-portfolio-purple mb-2 font-medium">Hello, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">John Doe</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-2 h-14">
            I'm a <span className="text-gradient">{text}</span>
            <span className="animate-pulse ml-1">|</span>
          </h2>
          <p className="text-gray-300 max-w-lg mb-8 text-lg">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently focused on creating accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:shadow-lg hover:shadow-portfolio-purple/20 transition-all px-8 py-6">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10 px-8 py-6">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex gap-4 mt-10">
            {/* Social Icons */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-portfolio-purple transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 md:mt-0 md:w-2/5 flex justify-center animate-fade-right">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center relative 
                          bg-gradient-to-br from-portfolio-purple to-portfolio-teal p-1">
              <div className="w-full h-full rounded-full bg-portfolio-darkblue flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-gradient animate-float">JD</div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-4 border-portfolio-teal bg-portfolio-darkblue 
                           flex items-center justify-center glass-card shadow-lg">
              <span className="text-xl font-semibold">8+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2 text-gray-300">Scroll Down</span>
        <ChevronDown className="h-5 w-5 text-gray-300" />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,197.3C672,192,768,160,864,165.3C960,171,1056,213,1152,229.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
