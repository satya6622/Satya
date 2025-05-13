
import { useState } from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "Tech Innovators Inc.",
      position: "Senior Frontend Developer",
      duration: "Jan 2020 - Present",
      description: [
        "Lead a team of 5 developers to build and maintain multiple client-facing applications",
        "Architected and implemented a component library that reduced development time by 40%",
        "Optimized application performance resulting in 60% faster load times",
        "Mentored junior developers and conducted code reviews"
      ],
    },
    {
      company: "Digital Solutions LLC",
      position: "Full Stack Developer",
      duration: "Mar 2017 - Jan 2020",
      description: [
        "Developed and maintained RESTful APIs for various client projects",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Collaborated with UX designers to improve user experience",
        "Integrated third-party services and APIs into existing applications"
      ],
    },
    {
      company: "Web Craft Studios",
      position: "Junior Developer",
      duration: "Jun 2015 - Mar 2017",
      description: [
        "Assisted in developing and maintaining client websites",
        "Implemented designs from Figma and Adobe XD mockups",
        "Fixed bugs and improved performance of existing websites",
        "Participated in daily stand-ups and sprint planning meetings"
      ],
    },
  ];

  return (
    <section id="experience" className="bg-portfolio-lightgray py-16 md:py-24">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-portfolio-purple" size={28} />
          <h2 className="section-title">Work Experience</h2>
        </div>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/4">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {experiences.map((exp, index) => (
                <Button
                  key={exp.company}
                  variant={activeTab === index ? "default" : "outline"}
                  className={`whitespace-nowrap md:whitespace-normal ${
                    activeTab === index ? "bg-portfolio-purple" : "border-portfolio-purple text-portfolio-purple"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </Button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-3/4 bg-white p-6 rounded-lg shadow-md">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`${activeTab === index ? "block" : "hidden"} animate-fade-in`}
              >
                <h3 className="text-2xl font-bold">
                  {exp.position} <span className="text-portfolio-purple">@ {exp.company}</span>
                </h3>
                <p className="text-gray-500 mb-4">{exp.duration}</p>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-portfolio-purple mr-2 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
