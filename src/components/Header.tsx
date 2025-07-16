import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="glass-effect sticky top-0 z-50 py-4 border-b border-gray-100">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center group">
                    <div className="relative w-12 h-12 mr-3 transition-transform duration-300 group-hover:scale-110">
                        <Image
                            src="/images/logo2.avif"
                            alt="Alarcón Dental Care Logo"
                            fill
                            sizes="48px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-gradient">
                            Alarcón Dental Care
                        </span>
                        <span className="text-xs text-teal-600 font-medium">
                            Cuidando tu sonrisa
                        </span>
                    </div>
                </div>
                
                <nav className="hidden md:flex space-x-8">
                    {[
                        { href: "#inicio", label: "Inicio" },
                        { href: "#servicios", label: "Servicios" },
                        { href: "#cita", label: "Contacto" }
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative text-gray-700 hover:text-teal-700 font-medium transition-colors duration-300 group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-teal-800 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </nav>
                
                <Link
                    href="#cita"
                    className="btn-primary text-sm"
                >
                    Agendar Cita
                </Link>
            </div>
        </header>
    )
}
