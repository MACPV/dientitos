import { BlurFade } from "./magicui/blur-fade";

export default function Servicios() {
  const services = [
    {
      title: "Limpieza Dental",
      description: "Eliminamos la placa y el sarro para mantener tus dientes y encías saludables con técnicas profesionales.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Extracciones",
      description: "Procedimientos seguros y con mínimo dolor para extracciones simples y complejas con anestesia local.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-red-500 to-red-600"
    },
    {
      title: "Blanqueamiento Dental",
      description: "Devuelve el brillo natural a tu sonrisa con nuestros tratamientos de blanqueamiento profesional.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Restauraciones",
      description: "Reparamos dientes dañados con materiales de alta calidad y técnicas modernas para resultados duraderos.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-green-500 to-green-600"
    },
    {
      title: "Incrustaciones",
      description: "Soluciones estéticas y funcionales para dientes con daños moderados, preservando la estructura dental.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V5a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Consulta General",
      description: "Evaluación completa de tu salud bucal y plan de tratamiento personalizado según tus necesidades.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-teal-500 to-teal-600"
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-15"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200 mb-6">
            <span className="text-teal-700 text-sm font-medium">Servicios Profesionales</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Nuestros</span>
            <span className="text-gradient"> Servicios</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios dentales utilizando las técnicas más avanzadas, 
            tecnología de vanguardia y materiales de la más alta calidad para garantizar tu bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <BlurFade
              key={index}
              duration={0.6}
              delay={index * 0.1}
              blur="4px"
              offset={8}
              direction="up"
            >
              <div className="group bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden card-hover border border-gray-100">
                {/* Header con gradiente */}
                <div className={`h-1 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  {/* Icono */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  {/* Contenido */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Call to action sutil */}
                  <div className="flex items-center text-teal-600 font-medium group-hover:text-teal-700 transition-colors duration-300">
                    <span className="text-sm">Más información</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-700 to-teal-800 rounded-2xl p-8 md:p-12 text-white shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿No encuentras el servicio que necesitas?
            </h3>
            <p className="text-teal-100 mb-8 max-w-2xl mx-auto">
              Contáctanos para una consulta personalizada. Evaluaremos tu caso y te brindaremos la mejor solución para tu salud dental.
            </p>
            <a 
              href="#cita" 
              className="inline-flex items-center bg-white text-teal-700 font-medium px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consulta Personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}