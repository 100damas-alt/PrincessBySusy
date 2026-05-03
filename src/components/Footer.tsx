export function Footer() {
  return (
    <footer className="py-12 px-6 bg-dark text-white/60">
      <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-8">
        <div className="text-xl font-serif font-bold text-white tracking-wider">
          PRINCESS BY SUSY
        </div>
        
        <div className="flex gap-8 text-xs uppercase tracking-[0.2em]">
          <a href="https://www.instagram.com/princessbysusy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://www.facebook.com/princessbysusy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
          <a href="#services" className="hover:text-white transition-colors">Serviços</a>
          <a href="#contact" className="hover:text-white transition-colors">Contato</a>
        </div>
        
        <div className="text-[10px] uppercase tracking-widest text-center md:text-right">
          &copy; {new Date().getFullYear()} Princess By Susy. Todos os direitos reservados.<br />
          Desenvolvido com carinho.
        </div>
      </div>
    </footer>
  );
}
