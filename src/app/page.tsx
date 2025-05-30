'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Code, Database, Globe, Star, Calendar, ExternalLink, Eye, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
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
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Moderne, responsive Websites mit den neuesten Technologien. Von persönlichen Portfolios bis hin zu komplexen Business-Lösungen.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Apps",
      description: "Full-Stack Entwicklung moderner Web-Anwendungen mit Fokus auf Benutzerfreundlichkeit, Performance und Skalierbarkeit.",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "Professionelles Datenbank-Design und -Optimierung für höchste Performance und Sicherheit.",
      skills: ["MySQL", "Firebase", "Prisma", "NoSQL"]
    }
  ]

  const testimonials = [
    {
      text: "Perfekte Arbeit. Genauso stelle ich mir hervorragende Arbeit vor!",
      author: "Chrisbmental",
      role: "Kunde, Fiverr",
      skills: ["React", "Node.js", "Next.js", "Express.js", "MySQL", "Socket.io"]
    },
    {
      text: "Absolute Empfehlung!",
      author: "Luca Dahms",
      role: "Kunde",
      skills: ["Next.js", "React", "Node.js", "Hero UI"]
    }
  ]

  const stats = [
    { number: "20+", label: "Projekte" },
    { number: "10+", label: "Kunden" },
    { number: "3+", label: "Jahre" },
    { number: "10+", label: "Technologien" }
  ]

  const projects = [
    {
      title: "app.legalbot.de (noch nicht online)",
      description: "Legalbot ist eine moderne Web-App zur digitalen Abwicklung von Rechtsdienstleistungen – mit Fokus auf Markenrecht. Die Plattform ermöglicht eine einfache und sichere Kommunikation zwischen Mandanten und Kanzleien und automatisiert zentrale Prozesse wie Markenanmeldungen und Markenüberwachung. ",
      image: "/legalbot.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Prisma", "Typescript", "Firestore"],
      liveUrl: "https://app.legalbot.de",
      featured: true
    },
    {
      title: "PKV-Tool – Lead-Generierung für die private Krankenversicherung",
      description: "Das PKV-Tool ist eine spezialisierte Webanwendung zur automatisierten Berechnung und Angebotserstellung für private Krankenversicherungen. Interessenten geben ihre persönlichen und beruflichen Daten über ein dynamisches Formular ein – im Hintergrund werden komplexe Tariflogiken berücksichtigt und direkt individuelle Angebote generiert.",
      image: "/pkv-tool.png",
      technologies: ["React", "Next.js", "TailwindCSS", "Hero UI",],
      liveUrl: "https://pkv-tool.vercel.app/",
      // githubUrl: "https://github.com/mkraekel/task-manager",
      featured: true
    },
    {
      title: "Allianz Zahnschutz – Digitale Beratung & Abschlussstrecke für Zahnzusatzversicherungen",
      description: "Diese Webanwendung wurde speziell für die vereinfachte Beratung und den Online-Abschluss von Zahnzusatzversicherungen der Allianz konzipiert. Nutzer erhalten durch wenige gezielte Angaben sofort ein passgenaues Angebot, inklusive Leistungsdetails und direkter Abschlussmöglichkeit – optimiert für Conversions im Versicherungsvertrieb..",
      image: "/allianz-zahnschutz.png",
      technologies: ["NextJS", "React", "HeroUI", "TailwindCSS,"],
      liveUrl: "https://allianz-zahnschutz.de/",
      // githubUrl: "https://github.com/mkraekel/portfolio-cms",
      featured: true
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Mathis Kräkel
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex space-x-8"
            >
              <a href="#about" className="hover:text-blue-400 transition-colors">Über mich</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projekte</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Referenzen</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                Softwareentwickler
              </Badge>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Mathis Kräkel
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ein erfahrener Softwareentwickler, der elegante Lösungen entwickelt
              und beeindruckende digitale Erlebnisse schafft.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Erfahre mehr
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 hover:bg-slate-800"
                onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Buche ein Meeting
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Über mich
              </h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  Hey! Ich bin Mathis, ein engagierter Softwareentwickler und Schüler auf dem Weg zum Abitur.
                  Derzeit arbeite ich bei der Seibert Group, wo ich meine Fähigkeiten in der Softwareentwicklung kontinuierlich erweitere.
                </p>
                <p>
                  Meine Expertise umfasst die Arbeit mit Node.js, TypeScript, React und Next.js.
                  Ich habe wertvolle Erfahrungen mit Atlassian-Tools, Google Cloud, Firebase und BigQuery gesammelt.
                </p>
                <p>
                  Ob bei der Entwicklung skalierbarer Backend-Systeme oder der Gestaltung intuitiver Benutzeroberflächen -
                  ich konzentriere mich darauf, qualitativ hochwertige und effiziente Lösungen zu liefern.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 hover:bg-slate-800"
                  onClick={() => window.open('https://github.com/mkraekel', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-600 hover:bg-slate-800"
                  onClick={() => window.open('https://www.linkedin.com/in/mathis-krkel-b286b325a/', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-blue-400">Frontend</h4>
                    <div className="flex flex-wrap gap-1">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-green-400">Backend</h4>
                    <div className="flex flex-wrap gap-1">
                      {["Node.js", "Express", "REST APIs", "GraphQL"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-purple-400">Database & Cloud</h4>
                    <div className="flex flex-wrap gap-1">
                      {["Firebase", "BigQuery", "Google Cloud", "MySQL"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-orange-400">Tools & Others</h4>
                    <div className="flex flex-wrap gap-1">
                      {["Git", "Jira", "Confluence", "Bitbucket"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Meine Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Professionelle Lösungen für Ihre digitalen Herausforderungen
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={fadeInUp}>
                <Card className="h-full bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Kundenstimmen
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Was meine Kunden über die Zusammenarbeit sagen
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.author} variants={fadeInUp}>
                <Card className="bg-slate-800/30 border-slate-700 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={`rating-star-${testimonial.author}-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-slate-300 mb-4 text-lg italic">
                      "{testimonial.text}"
                    </blockquote>
                    <div className="border-t border-slate-700 pt-4">
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-slate-400 text-sm mb-3">{testimonial.role}</div>
                      <div className="flex flex-wrap gap-1">
                        {testimonial.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Meine Projekte
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Eine Auswahl meiner besten Arbeiten - von E-Commerce-Plattformen bis hin zu komplexen Web-Anwendungen
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
              <Star className="mr-2 h-6 w-6 text-yellow-400" />
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <motion.div key={project.title} variants={fadeInUp}>
                  <Card className="bg-slate-800/30 border-slate-700 overflow-hidden hover:bg-slate-800/50 transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        {/*<Button*/}
                        {/*  size="sm"*/}
                        {/*  variant="secondary"*/}
                        {/*  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"*/}
                        {/*  onClick={() => window.open(project.githubUrl, '_blank')}*/}
                        {/*>*/}
                        {/*  <Github className="h-4 w-4" />*/}
                        {/*</Button>*/}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge key={`${project.title}-${tech}`} variant="secondary" className="bg-slate-700 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                        {/*<Button*/}
                        {/*  size="sm"*/}
                        {/*  variant="outline"*/}
                        {/*  className="border-slate-600 hover:bg-slate-800"*/}
                        {/*  onClick={() => window.open(project.githubUrl, '_blank')}*/}
                        {/*>*/}
                        {/*  <Github className="mr-2 h-4 w-4" />*/}
                        {/*  Code*/}
                        {/*</Button>*/}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/*<h3 className="text-2xl font-semibold mb-8 text-white flex items-center">*/}
            {/*  <FolderOpen className="mr-2 h-6 w-6 text-blue-400" />*/}
            {/*  Weitere Projekte*/}
            {/*</h3>*/}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <motion.div key={project.title} variants={fadeInUp}>
                  <Card className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-slate-300 text-sm mb-3 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={`${project.title}-${tech}`} variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 hover:bg-slate-800 flex-1"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <Eye className="mr-1 h-3 w-3" />
                          Demo
                        </Button>
                        {/*<Button*/}
                        {/*  size="sm"*/}
                        {/*  variant="outline"*/}
                        {/*  className="border-slate-600 hover:bg-slate-800 flex-1"*/}
                        {/*  onClick={() => window.open(project.githubUrl, '_blank')}*/}
                        {/*>*/}
                        {/*  <Github className="mr-1 h-3 w-3" />*/}
                        {/*  Code*/}
                        {/*</Button>*/}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Interessiert an einer Zusammenarbeit?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Haben Sie ein spannendes Projekt? Lassen Sie uns gemeinsam etwas Großartiges erschaffen!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Projekt besprechen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Kontaktieren Sie mich
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Haben Sie ein Projekt im Sinn oder möchten Sie zusammenarbeiten?
              Ich freue mich von Ihnen zu hören.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => window.open('mailto:mathis@kraekel.com', '_blank')}
              >
                <Mail className="mr-2 h-4 w-4" />
                mathis@kraekel.com
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 hover:bg-slate-800"
                onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Buche ein Meeting
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
          </div>
        </div>
      </footer>
    </div>
  )
}
