import { useState } from "react";
import { RevelOnScroll } from "../RevelOnScroll";
import emailjs from "emailjs-com";
 
export const Contact = () => {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
  const SERVICE_ID =import.meta.env.VITE_SERVICE_ID ;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY =import.meta.env.VITE_PUBLIC_KEY;
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(() => {
      alert("Message sent!");
    })
    .catch((_err)=>{
        alert("OOps! something went wrong!")
    })
    ;
    setFormData({name:"",email:"",message:""});
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <RevelOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  text-center">
            Get In Touch
          </h2>{" "}
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-none focus:outline-none hover:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                value={formData.name}
                onChange={(e)=>setFormData({...formData, name:e.target.value})}
                required
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-none focus:outline-none hover:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
                required
              />
            </div>
            <div className="relative">
              <textarea
                type="message"
                id="message"
                name="message"
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition-none focus:outline-none hover:border-blue-500 focus:bg-blue-500/5"
                placeholder="your message..."
                value={formData.message}
                onChange={(e)=>setFormData({...formData, message:e.target.value})}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Submit
            </button>
          </form>
        </div>
      </RevelOnScroll>
    </section>
  );
};
