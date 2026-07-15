import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-16 px-6">
      
      {/* Contenedor principal */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12 md:gap-24 max-w-5xl">
        
        {/* Foto con borde irregular "cozy" */}
        <motion.div 
          initial={{ opacity: 0, rotate: 5 }}
          animate={{ opacity: 1, rotate: 0 }}
          className="relative"
        >
          <div className="w-64 h-72 md:w-80 md:h-96 bg-dali-rose/20 rounded-[40px] rotate-3 absolute -top-4 -right-4"></div>
          <img 
            src="/foto-perfil.png" 
            alt="Dali"
            className="relative w-64 h-72 md:w-80 md:h-96 object-cover rounded-[30px] border-4 border-white shadow-2xl shadow-dali-dark/10"
          />
        </motion.div>

        {/* Textos con paleta suave */}
        <div className="text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-dali-rose/20 text-dali-toast font-bold text-sm uppercase tracking-widest mb-6"
          >
            Diseño web con alma ✨
          </motion.div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl text-dali-dark tracking-tight leading-[1.1]">
            Transformo ideas en <br/>
            <span className="text-dali-toast italic">experiencias cozy</span>
          </h1>
          
          <p className="mt-6 text-xl text-dali-dark/70 max-w-md font-medium leading-relaxed">
            Hola, soy Dali. Creo webs minimalistas, cálidas y funcionales. 
            Menos ruido, más diseño, mucha esencia. ☕
          </p>

          <div className="mt-10 flex gap-4 justify-center md:justify-start">
            <a href="#servicios" className="bg-dali-dark text-white px-8 py-4 rounded-full font-bold hover:bg-dali-toast transition-all">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}