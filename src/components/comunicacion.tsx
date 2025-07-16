"use client";

import React from "react";

export function Comunicacion() {
    return (
        <section id="cita" className="py-20 bg-gradient-to-br from-teal-50 via-white to-blue-50 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-15"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full border border-teal-200 mb-6">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                        <span className="text-teal-700 text-sm font-medium">Disponible ahora</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-gray-900">Agenda tu</span>
                        <span className="text-gradient"> Cita</span>
                    </h2>
                    
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Selecciona el servicio que necesitas y contáctanos directamente. 
                        Te responderemos de inmediato para coordinar tu cita.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-elegant p-8 md:p-12 border border-gray-100">
                        {/* Selector de servicio mejorado */}
                        <div className="mb-8">
                            <label
                                htmlFor="service"
                                className="block text-lg font-semibold text-gray-900 mb-4"
                            >
                                ¿Qué servicio necesitas?
                            </label>
                            <div className="relative">
                                <select
                                    id="service"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-teal-100 focus:border-teal-500 transition-all duration-300 appearance-none bg-white cursor-pointer"
                                    aria-label="Selecciona un servicio dental"
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option value="Limpieza Dental">🦷 Limpieza Dental</option>
                                    <option value="Extracciones">🔧 Extracciones</option>
                                    <option value="Blanqueamiento Dental">✨ Blanqueamiento Dental</option>
                                    <option value="Restauraciones">🛠️ Restauraciones</option>
                                    <option value="Incrustaciones">💎 Incrustaciones</option>
                                    <option value="Consulta General">📋 Consulta General</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Botones de contacto mejorados */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Botón WhatsApp */}
                            <a
                                id="whatsapp-link"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const servicio = document.getElementById("service") as HTMLSelectElement;
                                    const valor = servicio?.value;
                                    if (!valor) {
                                        alert("Por favor selecciona un servicio antes de continuar.");
                                        return;
                                    }
                                    const mensaje = `Hola, quisiera agendar una cita para el servicio de ${valor}.`;
                                    const numero = "51924179171"; 
                                    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
                                    window.open(url, "_blank");
                                }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative flex items-center justify-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-lg">WhatsApp</div>
                                            <div className="text-green-100 text-sm">Respuesta inmediata</div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            {/* Botón llamada */}
                            <a
                                href="tel:+51924179171"
                                className="group relative bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="relative flex items-center justify-center">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-lg">Llamar</div>
                                            <div className="text-teal-100 text-sm">+51 924 179 171</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Información adicional */}
                        <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-2xl p-6 border border-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Horarios</h4>
                                    <p className="text-sm text-gray-600">Lun - Vie: 9:00 - 19:00</p>
                                    <p className="text-sm text-gray-600">Sáb: 9:00 - 14:00</p>
                                </div>
                                
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Respuesta</h4>
                                    <p className="text-sm text-gray-600">Inmediata por WhatsApp</p>
                                    <p className="text-sm text-gray-600">Confirmación rápida</p>
                                </div>
                                
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                                    <p className="text-sm text-gray-600">Fácil acceso</p>
                                    <p className="text-sm text-gray-600">Estacionamiento disponible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
