import { useState } from "react";
import { RevelOnScroll } from "../RevelOnScroll";

export const About = () => {
  const frontedSkils = ["React", "TypeScript", "Tailwinds", "HTML", "CSS"];

  const backendSkils = ["Node.js", "Django", "AWS", "MongdoDB", "Postgresql"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevelOnScroll>
      <div className="max-w-3xl max-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center">
          {""}
          About me
        </h2>
        <div className=" rounded-xl border-white/50 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 pt-2 ">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Fronted</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {frontedSkils.map((skil,key)=>(
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        {skil}
                    </span>
                )

                )}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {backendSkils.map((skil,key)=>(
                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        {skil}
                    </span>
                )

                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">👨‍🎓{" "}Education</h3>
                <ul className="text-start list-disc list-inside text-gray-300 space-y-2 ">
                    <li>
                        <strong>BE in Eletronics</strong> XYZ University<br/>
                        (2022-2026)
                    </li>
                    <li>
                        Relevant Coursework: DSA,Web Development
                    </li>
                </ul>
            </div>
            <div className="p-6 rounded-xl border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">👨‍🎓{" "}Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="">Software Enigneer at ABC Corp(2020-present)</h4>
                        <p>Developed and maintained microservices for cloud based applications</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
      </RevelOnScroll>
    </section>
  );
};
