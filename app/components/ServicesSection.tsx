import { motion } from 'framer-motion'
import { Calculator, Globe, Database, ArrowRight, Sparkles, TrendingUp, Users, Zap, Rocket, Clock } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

export default function ServicesSection() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const services = [
        {
            icon: <Calculator className="h-10 w-10" />,
            title: "Intelligente Lead-Formulare",
            description: "Verwandeln Sie Besucher in Kunden mit maßgeschneiderten Formularen, die begeistern.",
            features: [
                "ROI-Kalkulatoren die verkaufen",
                "Multi-Step Formulare mit Fortschrittsanzeige",
                "Intelligente Berechnungen in Echtzeit",
                "Automatische Lead-Qualifizierung"
            ],
            highlight: true,
            gradient: "from-purple-600 to-blue-600",
            cta: "Mehr erfahren",
            link: "/lead-generation",
            price: "ab 499€",
            stats: [
                { icon: <TrendingUp className="h-4 w-4" />, label: "Mehr Leads", value: "Garantiert" },
                { icon: <Users className="h-4 w-4" />, label: "100% Custom", value: "Keine Templates" }
            ]
        },
        {
            icon: <Rocket className="h-10 w-10" />,
            title: "MVP Development",
            description: "Von der Idee zum fertigen Produkt in Rekordzeit. Perfekt für Startups und neue Geschäftsideen.",
            features: [
                "Next.js & Firebase Stack",
                "Von Basic bis Advanced MVP",
                "Schnelle Markteinführung",
                "Skalierbare Architektur"
            ],
            highlight: true,
            gradient: "from-blue-600 to-cyan-600",
            cta: "MVP starten",
            link: "/mvp-development",
            price: "ab 1.999€",
            stats: [
                { icon: <Clock className="h-4 w-4" />, label: "Time to Market", value: "4-8 Wochen" },
                { icon: <Zap className="h-4 w-4" />, label: "Tech Stack", value: "Modern & Skalierbar" }
            ]
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Web Development",
            description: "Moderne Websites und Landing Pages mit erstklassiger Performance und Design.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: <Database className="h-8 w-8" />,
            title: "Full-Stack Lösungen",
            description: "Komplette Web-Anwendungen von der Idee bis zur fertigen Lösung.",
            skills: ["Node.js", "Express", "Firebase", "API Integration"],
            gradient: "from-orange-500 to-red-500"
        }
    ]

    return (
        <section id="services" className="py-20 px-4 bg-slate-950/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Sparkles className="h-4 w-4" />
                        Services & Spezialisierungen
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                        Was ich für Sie entwickle
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Von intelligenten Lead-Formularen über MVP-Entwicklung bis zu kompletten Web-Lösungen
                    </p>
                </motion.div>

                {/* Featured Services Grid (2 Spalten für Hauptservices) */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-8 mb-8"
                >
                    {services.filter(s => s.highlight).map((service, index) => (
                        <motion.div key={service.title} variants={fadeInUp}>
                            <Card className="relative h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 border-slate-700 overflow-hidden group hover:border-slate-600 transition-all duration-300">
                                {/* Highlight Badge */}

                                {/* Animated background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                                <CardContent className="p-8 relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className={`text-white bg-gradient-to-r ${service.gradient} p-4 rounded-2xl`}
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <div className="text-right">
                                            <p className="text-sm text-slate-400">Startpreis</p>
                                            <p className="text-2xl font-bold text-white">{service.price}</p>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-white">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-300 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        {service.features && service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <div className="mt-1">
                                                    <div className={`h-2 w-2 bg-gradient-to-r ${service.gradient} rounded-full`} />
                                                </div>
                                                <span className="text-slate-300 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-slate-700/50">
                                        {service.stats && service.stats.map((stat, idx) => (
                                            <div key={idx}>
                                                <div className={`flex items-center gap-2 text-${idx === 0 ? 'green' : 'blue'}-400 mb-1`}>
                                                    {stat.icon}
                                                    <span className="text-sm font-medium">{stat.label}</span>
                                                </div>
                                                <p className="text-xs text-slate-400">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-all duration-300 group`}
                                        onClick={() => window.open(service.link)}
                                    >
                                        {service.cta}
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Regular Services Grid (2 Spalten für weitere Services) */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {services.filter(s => !s.highlight).map((service, index) => (
                        <motion.div key={service.title} variants={fadeInUp}>
                            <Card className="h-full bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                                <CardContent className="p-6 relative z-10">
                                    <div className={`text-white mb-4 bg-gradient-to-r ${service.gradient} p-3 rounded-xl w-fit group-hover:scale-110 transition-transform`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 text-white">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-300 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {service.skills && service.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="bg-slate-700/50 text-slate-300 border-slate-600"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600">
                        <h3 className="text-2xl font-semibold mb-4 text-white">
                            Nicht sicher, welche Lösung Sie brauchen?
                        </h3>
                        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                            Lassen Sie uns in einem kostenlosen Gespräch herausfinden, wie ich Ihnen am besten helfen kann.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                            onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
                        >
                            Kostenlose Beratung vereinbaren
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
