"use client";

import { motion } from "framer-motion";
import { User, Scissors, Flower2, Sparkles, Eye, Ruler } from "lucide-react";

const services = [
  {
    title: "SOBRANCELHAS",
    price: "R$25",
    duration: "30 min",
    icon: Ruler,
  },
  {
    title: "LASH LIFT",
    price: "R$80",
    duration: "1 hora",
    icon: Eye,
  },
  {
    title: "CABELO",
    price: "R$60+",
    duration: "Varia",
    icon: Scissors,
  },
  {
    title: "UNHAS",
    price: "R$40+",
    duration: "1 hora",
    icon: Sparkles,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 tracking-wider text-dark">
          SERVIÇOS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-cream/30 p-10 text-center border border-rose-gold/10 hover:border-rose-gold/30 transition-colors group"
            >
              <div className="mb-6 flex justify-center">
                <service.icon className="w-12 h-12 text-rose-gold group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-serif mb-4 tracking-widest text-dark">{service.title}</h3>
              <p className="text-dark/60 text-sm mb-1">A partir de {service.price}</p>
              <p className="text-dark/40 text-xs uppercase tracking-tighter">{service.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
