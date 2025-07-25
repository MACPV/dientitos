import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/10 rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Sección principal */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Logo y descripción */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center mb-6 group">
                                <div className="relative w-14 h-14 mr-4 bg-white/10 rounded-2xl p-2 group-hover:scale-110 transition-transform duration-300">
                                    <Image 
                                        src="/images/logo2.avif" 
                                        alt="Alarcón Dental Care Logo" 
                                        fill 
                                        sizes="56px" 
                                        className="object-contain" 
                                    />
                                </div>
                                <div>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">
                                        Alarcón Dental Care
                                    </span>
                                    <p className="text-teal-200 text-sm">Cuidando tu sonrisa</p>
                                </div>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                                Cuidamos de tu sonrisa con profesionalismo, tecnología de vanguardia y un equipo altamente calificado. 
                                Tu salud dental es nuestra prioridad.
                            </p>

                            {/* Información de contacto */}
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+51 924 179 171</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Lun - Vie: 9:00 - 19:00 | Sáb: 9:00 - 14:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Enlaces rápidos */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white">Enlaces Rápidos</h3>
                            <ul className="space-y-3">
                                {[
                                    { href: "#inicio", label: "Inicio" },
                                    { href: "#servicios", label: "Servicios" },
                                    { href: "#cita", label: "Agendar Cita" },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link 
                                            href={link.href} 
                                            className="text-gray-300 hover:text-teal-300 transition-colors duration-300 flex items-center group"
                                        >
                                            <svg className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Redes sociales */}
                        <div>
                            <h3 className="text-lg font-bold mb-6 text-white">Síguenos</h3>
                            <div className="space-y-4">
                                <a
                                    href="https://instagram.com/alarcon_dentalcare"
                                    className="flex items-center text-gray-300 hover:text-pink-400 transition-colors duration-300 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Síguenos en Instagram"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">Instagram</div>
                                        <div className="text-sm text-gray-400">@alarcon_dentalcare</div>
                                    </div>
                                </a>

                                <a
                                    href="https://wa.me/51924179171"
                                    className="flex items-center text-gray-300 hover:text-green-400 transition-colors duration-300 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contáctanos por WhatsApp"
                                >
                                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-medium">WhatsApp</div>
                                        <div className="text-sm text-gray-400">Mensaje directo</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-gray-700/50"></div>

                {/* Copyright */}
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Alarcón Dental Care. Todos los derechos reservados.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span>Hecho con ❤️ para tu sonrisa</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}