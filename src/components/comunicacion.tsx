"use client";

import React from "react";

export function Comunicacion() {
    return (
        <section id="cita" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-teal-800 mb-2">
                        Agenda tu Cita
                    </h2>
                    <div className="w-20 h-1 bg-teal-800 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Selecciona el servicio que necesitas y contáctanos directamente por
                        WhatsApp o llamada.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-6">
                    <div>
                        <label
                            htmlFor="service"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Servicio que necesitas
                        </label>
                        <select
                            id="service"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                            aria-label="Selecciona un servicio dental"
                        >
                            <option value="">Selecciona un servicio</option>
                            <option value="Limpieza Dental">Limpieza Dental</option>
                            <option value="Extracciones">Extracciones</option>
                            <option value="Blanqueamiento Dental">
                                Blanqueamiento Dental
                            </option>
                            <option value="Restauraciones">Restauraciones</option>
                            <option value="Incrustaciones">Incrustaciones</option>
                            <option value="Consulta General">Consulta General</option>
                        </select>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        {/* Botón WhatsApp */}
                        <a
                            id="whatsapp-link"
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                const servicio = document.getElementById(
                                    "service"
                                ) as HTMLSelectElement;
                                const valor = servicio?.value;
                                if (!valor) {
                                    alert("Por favor selecciona un servicio antes de continuar.");
                                    return;
                                }
                                const mensaje = `Hola, quisiera agendar una cita para el servicio de ${valor}.`;
                                const numero = "51924179171"; 
                                const url = `https://wa.me/${numero}?text=${encodeURIComponent(
                                    mensaje
                                )}`;
                                window.open(url, "_blank");
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                            Contactar por WhatsApp
                        </a>

                        {/* Botón llamada */}
                        <a
                            href="tel:+51924179171"
                            className="flex-1 text-center bg-teal-700 hover:bg-teal-800 text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            Llamar Ahora
                        </a>
                    </div>

                    <p className="text-sm text-gray-500 text-center mt-4">
                        Horario de atención: Lunes a Viernes 9:00 - 19:00 | Sábados 9:00 -
                        14:00
                    </p>
                </div>
            </div>
        </section>
    );
}
