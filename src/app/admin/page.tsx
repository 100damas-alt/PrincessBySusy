import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | PrincessBySusy",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blush/30">
      <div className="bg-white p-8 shadow-xl max-w-md w-full border border-rose-gold/10">
        <h1 className="text-3xl font-serif mb-8 text-center text-dark">Admin Login</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-dark/70 mb-1 uppercase tracking-widest">Usuário</label>
            <input 
              type="text" 
              className="w-full p-3 border border-cream bg-cream/50 focus:outline-none focus:border-rose-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-dark/70 mb-1 uppercase tracking-widest">Senha</label>
            <input 
              type="password" 
              className="w-full p-3 border border-cream bg-cream/50 focus:outline-none focus:border-rose-gold transition-colors"
            />
          </div>
          <button 
            type="button"
            className="w-full py-4 bg-dark text-white uppercase tracking-widest text-sm hover:bg-rose-gold transition-colors duration-300"
          >
            Entrar
          </button>
        </form>
        <p className="mt-8 text-center text-[10px] uppercase tracking-widest text-dark/40">
          Acesso Restrito - Princess By Susy
        </p>
      </div>
    </div>
  );
}
