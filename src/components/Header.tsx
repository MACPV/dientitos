import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="relative w-18 h-18 mr-3">
                        <Image
                            src="/images/logo2.avif"
                            alt="Alarcón Dental Care Logo"
                            fill
                            sizes="5rem"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-xl font-bold text-teal-800">
                        Alarcón Dental Care
                    </span>
                </div>
                <nav className="hidden md:flex space-x-8">
                    <Link
                        href="#inicio"
                        className="text-teal-800 hover:text-teal-600 font-medium"
                    >
                        Inicio
                    </Link>
                    <Link
                        href="#servicios"
                        className="text-teal-800 hover:text-teal-600 font-medium"
                    >
                        Servicios
                    </Link>
                    <Link
                        href="#equipo"
                        className="text-teal-800 hover:text-teal-600 font-medium"
                    >
                        Equipo
                    </Link>
                </nav>
                <Link
                    href="#cita"
                    className="bg-teal-800 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-colors"
                >
                    Agendar Cita
                </Link>
            </div>
        </header>
    )
}
