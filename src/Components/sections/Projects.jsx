import { useState } from "react";
import { RevelOnScroll } from "../RevelOnScroll";
export const Project = () => {
  const topics = [
    {
      title: "Cloud Platform",
      description:
        "Scalable cloud infrastructure management with real-time monitoring and automated scaling",
      tech: ["React", "Node.js", "AWS", "Docker"],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Deploy ML models with real-time predictions and data-driven insights using modern pipelines",
      tech: ["Python", "TensorFlow", "Keras", "AWS Sagemaker"],
    },
    {
      title: "Web Development",
      description:
        "Modern and responsive web app development with seamless UX and optimized performance",
      tech: ["Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
    },
    {
      title: "DevOps & CI/CD",
      description:
        "Streamlined code delivery with continuous integration, automated testing, and deployment pipelines",
      tech: ["GitHub Actions", "Docker", "Kubernetes", "Jenkins"],
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
        <RevelOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center">
          {""}
          Featured Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, key) => {
          return (
            <div
              key={key}
              className="p-6 rouneded-xl border border-white/10 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all hover:rounded-xl space-x-4  "
            >
              <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
              <p>{topic.description}</p>
              <div>
                {topic.tech.map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all "
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-8"
                >
                  View Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
      </RevelOnScroll>
    </section>
  );
};
