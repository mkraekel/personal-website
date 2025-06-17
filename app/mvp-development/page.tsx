'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Check, Code, Database, Globe, Zap, ArrowRight, Star, Rocket, Clock, Euro, Shield, Sparkles, TrendingUp, Users, Target, ChevronRight } from 'lucide-react'
import { Navigation } from '../components/navigation'
import { useRef } from 'react'
import Footer from "../components/Footer";

export default function MVPDevelopmentPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

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

  return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white" ref={containerRef}>
        <Navigation />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">

            {/* HERO SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-20 relative"
            >
              <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
              />

              {/* Pain Point */}
              <div className="mb-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-blue-400 text-lg mb-4 font-medium"
                >
                  Von der Idee zum fertigen Produkt
                </motion.p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight">
                  MVP Development<br />in Rekordzeit
                </h1>
              </div>

              {/* Value Proposition */}
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ich entwickle Ihr <strong className="text-white">Minimum Viable Product</strong> mit modernster Technologie.
                <span className="text-blue-400"> Von der Konzeption bis zum Launch in 4-8 Wochen.</span>
              </p>

              {/* Social Proof Teaser */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-center items-center gap-8 mb-12 text-sm text-slate-400"
              >
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-purple-400" />
                  <span>Next.js & Firebase</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>4-8 Wochen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-400" />
                  <span>Skalierbar & Sicher</span>
                </div>
              </motion.div>

              {/* Primary CTA */}
              <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
              >
                <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl"
                />
                <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8 py-6 rounded-xl"
                    onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
                >
                  MVP-Beratung starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <p className="text-xs text-slate-500 mt-3">✓ 30 Min. Strategiegespräch ✓ Konkrete Roadmap ✓ Kostenlos & unverbindlich</p>
            </motion.div>

            {/* PROBLEM SECTION - Warum scheitern so viele Startups? */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Warum scheitern 90% der Startups?</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Die meisten verschwenden Zeit und Geld mit den falschen Prioritäten
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/30 backdrop-blur-sm h-full">
                    <CardHeader>
                      <div className="p-3 rounded-xl bg-red-500/20 w-fit">
                        <Clock className="h-8 w-8 text-red-400" />
                      </div>
                      <CardTitle className="text-red-400">Zu lange Entwicklung</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">Monate oder Jahre in Entwicklung, während die Konkurrenz vorbeizieht</p>
                      <div className="text-2xl font-bold text-red-400">Zeit = Geld</div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/30 backdrop-blur-sm h-full">
                    <CardHeader>
                      <div className="p-3 rounded-xl bg-red-500/20 w-fit">
                        <Euro className="h-8 w-8 text-red-400" />
                      </div>
                      <CardTitle className="text-red-400">Explodierende Kosten</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">Feature-Creep und endlose Iterationen sprengen jedes Budget</p>
                      <div className="text-2xl font-bold text-red-400">Überzogen</div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/30 backdrop-blur-sm h-full">
                    <CardHeader>
                      <div className="p-3 rounded-xl bg-red-500/20 w-fit">
                        <Target className="h-8 w-8 text-red-400" />
                      </div>
                      <CardTitle className="text-red-400">Falscher Fokus</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">Perfektionismus statt Marktvalidierung - niemand will das Produkt</p>
                      <div className="text-2xl font-bold text-red-400">Am Markt vorbei</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* SOLUTION SECTION - Der MVP-Ansatz */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Der smarte MVP-Ansatz</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Fokus auf das Wesentliche - schnell am Markt, schnell validiert
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm relative overflow-hidden p-8">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold mb-6">Ihr Produkt live in 4-8 Wochen</h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">Nur die wichtigsten Features für den Start</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">Echtes Nutzerfeedback statt Vermutungen</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">Skalierbare Architektur für späteren Ausbau</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <Check className="h-6 w-6 text-green-400 flex-shrink-0" />
                          <span className="text-slate-300">Professionelles Design & optimale UX</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
                        <Rocket className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
                        <div className="text-lg text-slate-300">schneller am Markt</div>
                        <div className="text-sm text-slate-400 mt-4">
                          als traditionelle Entwicklung
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* TECH STACK - Moderne Technologie */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">State-of-the-Art Tech Stack</h2>
                <p className="text-xl text-slate-300">Die beste Technologie für Ihr Projekt</p>
              </motion.div>

              <div className="grid md:grid-cols-4 gap-6">
                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                        <Code className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="font-bold mb-2">Next.js 14</h3>
                      <p className="text-sm text-slate-400">React Framework der nächsten Generation</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                        <Database className="h-8 w-8 text-orange-400" />
                      </div>
                      <h3 className="font-bold mb-2">Firebase</h3>
                      <p className="text-sm text-slate-400">Backend, Auth & Realtime Database</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                        <Sparkles className="h-8 w-8 text-purple-400" />
                      </div>
                      <h3 className="font-bold mb-2">TypeScript</h3>
                      <p className="text-sm text-slate-400">Type-Safety & bessere Developer Experience</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                        <Globe className="h-8 w-8 text-green-400" />
                      </div>
                      <h3 className="font-bold mb-2">Vercel</h3>
                      <p className="text-sm text-slate-400">Blitzschnelles Hosting & Deployment</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* PACKAGES - MVP Pakete */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Wählen Sie Ihr MVP-Paket</h2>
                <p className="text-xl text-slate-300">Transparent, fair und auf Ihre Bedürfnisse zugeschnitten</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Starter MVP */}
                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full relative">
                    <CardHeader>
                      <CardTitle className="text-2xl">Starter MVP</CardTitle>
                      <CardDescription className="text-slate-400">Perfekt für erste Ideen</CardDescription>
                      <div className="text-4xl font-bold mt-4">1.999€</div>
                      <div className="text-slate-400">Festpreis</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Landing Page + Core Feature</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Responsive Design</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Firebase Setup</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Deployment</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>4 Wochen Entwicklung</span>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline"                     onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
                      >
                        Jetzt starten
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Professional MVP - Highlighted */}
                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 border-blue-500/50 backdrop-blur-sm h-full relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      BELIEBT
                    </span>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">Professional MVP</CardTitle>
                      <CardDescription className="text-slate-400">Für ernsthafte Startups</CardDescription>
                      <div className="text-4xl font-bold mt-4">3.999€</div>
                      <div className="text-slate-400">Festpreis</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Alles aus Starter</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>User Authentication</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Dashboard/Admin Panel</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Analytics Integration</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>6 Wochen + 2 Wochen Support</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                              onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}

                      >
                        Empfohlenes Paket
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Enterprise MVP */}
                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full relative">
                    <CardHeader>
                      <CardTitle className="text-2xl">Enterprise MVP</CardTitle>
                      <CardDescription className="text-slate-400">Maximale Features</CardDescription>
                      <div className="text-4xl font-bold mt-4">ab 5.999€</div>
                      <div className="text-slate-400">nach Aufwand</div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Alles aus Professional</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Payment Integration</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>API Development</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Advanced Features</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>8 Wochen + 1 Monat Support</span>
                        </div>
                      </div>
                      <Button className="w-full" variant="outline"                     onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
                      >
                        Anfrage senden
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* PROCESS - Der Weg zum MVP */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Von der Idee zum Launch</h2>
                <p className="text-xl text-slate-300">Mein bewährter Prozess für Ihren Erfolg</p>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    number: "1",
                    title: "Discovery Workshop",
                    description: "Wir definieren gemeinsam Ihre Vision, Ziele und die wichtigsten Features für den MVP",
                    gradient: "from-purple-500/20 to-blue-500/20"
                  },
                  {
                    number: "2",
                    title: "Rapid Prototyping",
                    description: "Schnelle Visualisierung Ihrer Idee mit interaktiven Mockups und User Flows",
                    gradient: "from-blue-500/20 to-cyan-500/20"
                  },
                  {
                    number: "3",
                    title: "Testing & Launch",
                    description: "Gründliche Tests, Optimierung und erfolgreicher Launch mit vollständiger Dokumentation",
                    gradient: "from-green-500/20 to-emerald-500/20"
                  }
                ].map((step, index) => (
                    <motion.div key={step.number} variants={fadeInUp}>
                      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-6">
                            <div className={`bg-gradient-to-br ${step.gradient} rounded-full p-4 flex-shrink-0`}>
                              <span className="text-2xl font-bold">{step.number}</span>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                              <p className="text-slate-300">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* EXAMPLES - Was ist möglich? */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="mb-20"
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">MVP-Beispiele</h2>
                <p className="text-xl text-slate-300">Was alles möglich ist</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">

                <motion.div variants={fadeInUp}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                    <CardHeader>
                      <div className="text-blue-400 font-semibold mb-2">Legal Tech</div>
                      <CardTitle>app.legalbot.de</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-300 mb-4">
                        Digitale Rechtsdienstleistungen, sicheres Mandanten-Dashboard, DPMA-Anbindung,
                        automatisierte Markenanmeldung & Monitoring.
                      </p>
                      <div className="text-sm text-green-400">→ MVP in 6 Wochen entwickelt</div>
                    </CardContent>
                  </Card>
                </motion.div>


              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
  )}
