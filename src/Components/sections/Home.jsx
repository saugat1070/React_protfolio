import { useEffect, useState } from "react"

export const Home = ()=>{
    const [header, setHeader] = useState("");
    const text = "I'm Saugat Giri";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setHeader(text.substring(0, index));
            index++;
            if (index > text.length) {
                index = 0;
            }
        }, 200);
        return () => clearInterval(interval);
    },[]);
    return (
        <section id='home' className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400  bg-clip-text text-transparent leading-right relative h-[72px]">
                    {header}
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm full-stack developer who loves creafting clean,<br/>
                    scalable web applications. My goals is to build solutions that after both
                    exceptional performance and a delightful user experience.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded justidy-medium transition relative overflow-hidden hover:-translate-y-2
                     hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] ">
                        View Project
                    </a>
                    <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-2
                     hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/50">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}