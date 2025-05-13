
const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", 
    "Node.js", "Python", "HTML/CSS",
    "Redux", "Next.js", "MongoDB",
    "Express", "Tailwind CSS", "Git"
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="mt-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <p className="mb-4 text-lg">
              Hello! I'm John, a passionate software developer with a love for creating elegant solutions
              to complex problems. My journey in tech began during college when I built my first website,
              and I've been hooked ever since.
            </p>
            <p className="mb-4 text-lg">
              With 8+ years of experience in software development, I've had the privilege of working with
              diverse teams on a variety of projects, from e-commerce platforms to data visualization tools.
              My focus is on building performant, accessible, and user-friendly applications.
            </p>
            <p className="mb-4 text-lg">
              When I'm not coding, you'll find me hiking in the mountains, experimenting with new recipes,
              or diving into a good book. I believe in continuous learning and am currently exploring 
              machine learning and AI integration in web applications.
            </p>
            <p className="text-lg">
              I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like
              to connect!
            </p>
          </div>
          <div className="md:w-1/3">
            <h3 className="text-xl font-bold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium hover:bg-portfolio-purple hover:text-white transition-colors"
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
