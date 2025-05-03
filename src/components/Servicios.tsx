import { BlurFade } from "./magicui/blur-fade";


export default function Servicios() {

  return (

    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-2">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-teal-800 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios dentales utilizando las técnicas más avanzadas y materiales de alta
            calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Limpieza Dental",
              description: "Eliminamos la placa y el sarro para mantener tus dientes y encías saludables.",
            },
            {
              title: "Extracciones",
              description: "Procedimientos seguros y con mínimo dolor para extracciones simples y complejas.",
            },
            {
              title: "Blanqueamiento Dental",
              description: "Devuelve el brillo a tu sonrisa con nuestros tratamientos de blanqueamiento.",
            },
            {
              title: "Restauraciones",
              description: "Reparamos dientes dañados con materiales de alta calidad y durabilidad.",
            },
            {
              title: "Incrustaciones",
              description: "Soluciones estéticas y funcionales para dientes con daños moderados.",
            },
            {
              title: "Consulta General",
              description: "Evaluación completa de tu salud bucal y plan de tratamiento personalizado.",
            },
          ].map((service, index) => (
            <BlurFade
              key={index}
              duration={0.6}
              delay={index * 0.1}
              blur="4px"
              offset={8}
              direction="up"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-2 bg-teal-800"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-teal-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}