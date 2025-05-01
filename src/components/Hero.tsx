import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    return (
        <section id="inicio" className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-4">
                            Cuidamos tu sonrisa con profesionalismo
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            En Alarcón Dental Care ofrecemos servicios odontológicos de calidad para toda la familia en un ambiente
                            cómodo y acogedor.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#cita"
                                className="bg-teal-800 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-teal-700 transition-colors"
                            >
                                Agendar Cita
                            </Link>
                            <Link
                                href="#servicios"
                                className="border border-teal-800 text-teal-800 px-6 py-3 rounded-lg font-medium text-center hover:bg-teal-50 transition-colors"
                            >
                                Nuestros Servicios
                            </Link>
                        </div>
                    </div>

                    {/* Contenedor de imagen mejorado para móviles */}
                    <div className="md:w-1/2 w-full mt-8 md:mt-0">
                        <div className="relative w-full h-64 md:h-80 mx-auto max-w-sm md:max-w-md rounded-lg shadow-xl overflow-hidden">
                            {/* Imagen con sizes para optimización */}
                            <Image
                                src="/images/alarcon.webp"
                                alt="Dr. Jonathan Alarcón"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />

                            {/* Overlay para mejorar la legibilidad del texto */}
                            <div className="absolute inset-0 bg-teal-800/30"></div>

                            {/* Tarjeta de información */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 p-4 rounded-lg shadow-lg">
                                <p className="text-teal-800 font-semibold">Dr. Jonathan Alarcón</p>
                                <p className="text-gray-600 text-sm">Cirujano Dentista</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}