import {Github, Linkedin, Mail} from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950/80 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Mathis Kräkel
                        </h3>
                        <p className="text-slate-400">
                            Softwareentwickler mit Fokus auf innovative digitale Lösungen.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Schnelle Links</h4>
                        <div className="space-y-2">
                            <a href="#about" className="block text-slate-400 hover:text-blue-400 transition-colors">Über mich</a>
                            <a href="#services" className="block text-slate-400 hover:text-blue-400 transition-colors">Services</a>
                            <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition-colors">Projekte</a>
                            <a href="#testimonials" className="block text-slate-400 hover:text-blue-400 transition-colors">Referenzen</a>
                            <a href="/mvp-development" className="block text-slate-400 hover:text-blue-400 transition-colors">MVP Development</a>
                            <a href="/lead-generation" className="block text-slate-400 hover:text-blue-400 transition-colors">Lead Generation</a>
                            <a href="#contact" className="block text-slate-400 hover:text-blue-400 transition-colors">Kontakt</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Verbinden</h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/mkraekel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-400 transition-colors"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mathis-krkel-b286b325a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-blue-400 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="mailto:mathis@kraekel.com"
                                className="text-slate-400 hover:text-blue-400 transition-colors"
                            >
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                    <p>&copy; 2025 Mathis Kräkel. Alle Rechte vorbehalten.</p>
                    <a href={"/impressum"}>Impressum</a>
                </div>
            </div>
        </footer>
    )
}
