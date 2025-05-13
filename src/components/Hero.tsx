
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative bg-portfolio-darkblue text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="section-container flex flex-col items-center md:items-start md:flex-row md:justify-between">
        <div className="md:w-3/5 animate-fade-in">
          <p className="text-portfolio-purple mb-2">Hello, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">John Doe</h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-300 mb-6">I build things for the web.</h2>
          <p className="text-gray-300 max-w-lg mb-8">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently focused on creating accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-portfolio-purple hover:bg-portfolio-purple/80">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-2/5 flex justify-center animate-fade-right">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-portfolio-purple/20 overflow-hidden flex items-center justify-center">
              {/* Replace with your actual image */}
              <div className="text-6xl font-bold text-portfolio-purple">JD</div>
              {/* You can also use a real image:
              <img src="/your-profile-image.jpg" alt="John Doe" className="w-full h-full object-cover" /> 
              */}
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border-4 border-portfolio-purple bg-portfolio-darkblue flex items-center justify-center">
              <span className="text-xl font-semibold">8+ Years Experience</span>
            </div>
          </div>
        </div>
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
