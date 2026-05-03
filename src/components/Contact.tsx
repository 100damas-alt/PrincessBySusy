"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Camera } from "lucide-react";

export function Contact() {
  const hours = [
    { day: "Segunda", time: "9:00 AM – 6:00 PM" },
    { day: "Terça", time: "9:00 AM – 6:00 PM" },
    { day: "Quarta", time: "9:00 AM – 6:00 PM" },
    { day: "Quinta", time: "9:00 AM – 6:00 PM" },
    { day: "Sexta", time: "9:00 AM – 6:00 PM" },
    { day: "Sábado", time: "10:00 AM – 4:00 PM" },
    { day: "Domingo", time: "Fechado" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-8 md:p-16 shadow-sm border border-blush/10">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 tracking-wider">
            CONTATO
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="aspect-video bg-cream relative mb-8 overflow-hidden grayscale">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975870293095!2d-46.65512692346981!3d-23.561703163396987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1704067200000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/5511999999999"
                  className="flex items-center gap-4 p-4 bg-cream/50 hover:bg-cream transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-rose-gold" />
                  <span className="text-sm font-medium">WhatsApp</span>
                </a>
                <a
                  href="tel:+5511999999999"
                  className="flex items-center gap-4 p-4 bg-cream/50 hover:bg-cream transition-colors group"
                >
                  <Phone className="w-5 h-5 text-rose-gold" />
                  <span className="text-sm font-medium">+55 (11) 9999-9999</span>
                </a>
                <a
                  href="mailto:contato@princessbysusy.com"
                  className="flex items-center gap-4 p-4 bg-cream/50 hover:bg-cream transition-colors group col-span-1 md:col-span-2"
                >
                  <Mail className="w-5 h-5 text-rose-gold" />
                  <span className="text-sm font-medium">contato@princessbysusy.com</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-8 text-rose-gold">Horário de Funcionamento</h3>
              <div className="space-y-4">
                {hours.map((item) => (
                  <div key={item.day} className="flex justify-between items-center border-b border-cream pb-2">
                    <span className="text-sm font-medium">{item.day}</span>
                    <span className="text-sm text-dark/60">{item.time}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex justify-end gap-6">
                <a href="https://www.facebook.com/princessbysusy/" target="_blank" rel="noopener noreferrer" className="text-dark/40 hover:text-rose-gold transition-colors">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 3.656 10.995 8.788 12.608v-8.919H5.537v-3.689h3.251v-2.811c0-3.208 1.907-4.979 4.834-4.979 1.401 0 2.867.25 2.867.25v3.153h-1.615c-1.589 0-2.085.986-2.085 1.998v2.389h3.553l-.568 3.689h-2.985v8.919C20.344 23.068 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/princessbysusy/" target="_blank" rel="noopener noreferrer" className="text-dark/40 hover:text-rose-gold transition-colors">
                  <Camera className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
