
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", 
    "Node.js", "Python", "HTML/CSS",
    "Redux", "Next.js", "MongoDB",
    "Express", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-section-pattern bg-center">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="mt-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-2/5 order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden border border-portfolio-purple/30 shadow-xl">
              <AspectRatio ratio={3/4} className="bg-gray-100 w-full h-full">
                <div className="w-full h-full bg-gradient-to-tr from-portfolio-darkblue to-portfolio-purple/50 flex items-center justify-center">
                  {/* Replace with your actual image when available */}
                  <div className="text-6xl font-bold text-white">JD</div>
                </div>
              </AspectRatio>
            </div>
          </div>

          <div className="md:w-3/5 order-1 md:order-2">
            <p className="mb-6 text-lg leading-relaxed">
              Hello! I'm John, a passionate software developer with a love for creating elegant solutions
              to complex problems. My journey in tech began during college when I built my first website,
              and I've been hooked ever since.
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              With <span className="text-portfolio-purple font-semibold">8+ years of experience</span> in software development, 
              I've had the privilege of working with diverse teams on a variety of projects, from e-commerce platforms 
              to data visualization tools. My focus is on building performant, accessible, and user-friendly applications.
            </p>
            <p className="mb-8 text-lg leading-relaxed">
              When I'm not coding, you'll find me hiking in the mountains, experimenting with new recipes,
              or diving into a good book. I believe in continuous learning and am currently exploring 
              machine learning and AI integration in web applications.
            </p>

            <h3 className="text-2xl font-bold mb-5 text-gradient inline-block">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="skill-tag bg-gray-100/70 hover:bg-portfolio-purple hover:text-white"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
