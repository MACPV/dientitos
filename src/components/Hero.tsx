import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-teal-50 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200">
                                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                                <span className="text-teal-700 text-sm font-medium">Atención personalizada</span>
                            </div>
                            
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-gray-900">Cuidamos tu</span>
                                <br />
                                <span className="text-gradient">sonrisa</span>
                                <br />
                                <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl">con excelencia</span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Servicios odontológicos de vanguardia con tecnología moderna y un equipo altamente calificado para toda tu familia.
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#cita" className="btn-primary">
                                <span className="flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Agendar Cita
                                </span>
                            </Link>
                            <Link href="#servicios" className="btn-secondary">
                                <span className="flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Ver Servicios
                                </span>
                            </Link>
                        </div>
                        
                        <div className="flex items-center space-x-8 pt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-teal-700">500+</div>
                                <div className="text-sm text-gray-600">Pacientes satisfechos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-teal-700">5+</div>
                                <div className="text-sm text-gray-600">Años de experiencia</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-teal-700">100%</div>
                                <div className="text-sm text-gray-600">Dedicación</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="relative">
                            {/* Contenedor principal de la imagen */}
                            <div className="relative w-full max-w-lg mx-auto">
                                <div className="relative h-96 md:h-[500px] rounded-3xl shadow-elegant overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200">
                                    <Image
                                        src="/images/alarcon.webp"
                                        alt="Dr. Jonathan Alarcón - Cirujano Dentista"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover"
                                        priority
                                    />
                                    
                                    {/* Overlay sutil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 via-transparent to-transparent"></div>
                                </div>
                                
                                {/* Tarjeta de información flotante */}
                                <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-2xl shadow-elegant max-w-xs">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Dr. Jonathan Alarcón</p>
                                            <p className="text-sm text-teal-700 font-medium">Cirujano Dentista</p>
                                            <p className="text-xs text-gray-500">COP: 12345</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Elementos decorativos */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-200 rounded-full opacity-60"></div>
                                <div className="absolute top-1/4 -right-8 w-16 h-16 bg-blue-200 rounded-full opacity-40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}