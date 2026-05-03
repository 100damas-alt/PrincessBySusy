"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
              <div className="absolute inset-0 border border-rose-gold/30 rounded-full translate-x-6 translate-y-6" />
              <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop"
                  alt="Susy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-dark text-white p-6 shadow-lg">
                <p className="text-3xl font-serif">10</p>
                <p className="text-[10px] uppercase tracking-widest leading-tight">Anos de<br />Experiência</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-rose-gold mb-4">Sobre Nós</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight text-dark">Susy</h2>
            <p className="text-xl font-serif text-dark/80 mb-6 italic">Especialista em beleza com +10 anos de experiência</p>
            <div className="space-y-6 text-dark/70 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            
            <div className="mt-10">
              <div className="text-rose-gold font-serif text-3xl opacity-50 italic">Susy</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
