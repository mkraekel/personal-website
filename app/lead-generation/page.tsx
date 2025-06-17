'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Check, Calculator, Zap, Globe, Mail, ArrowRight, Star, TrendingUp, Users, Target, ArrowDown, LineChart, Clock, Euro, Trophy, ChevronRight, Sparkles, Database, FileSpreadsheet } from 'lucide-react'
import { Navigation } from '../components/navigation'
import { useRef } from 'react'
import Footer from "../components/Footer";

export default function LeadGenerationPage() {
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
      
      <div className="container mx-auto px-4 py-16 mt-10">
        <div className="max-w-6xl mx-auto">

          {/* HERO SECTION - Ehrlicher, aber trotzdem stark */}
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
              className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            />
            
            {/* Pain Point */}
            <div className="mb-8">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-purple-400 text-lg mb-4 font-medium"
              >
                Standardformulare bringen keine Leads?
              </motion.p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent leading-tight">
                Intelligente Formulare<br />die verkaufen
              </h1>
            </div>

            {/* Value Proposition - Ehrlicher */}
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ich entwickle <strong className="text-white">maßgeschneiderte Formularsysteme</strong> mit intelligenten Berechnungen und perfekter User Experience. 
              <span className="text-purple-400"> Keine 08/15 Kontaktformulare - sondern echte Lead-Magneten.</span>
            </p>

            {/* Social Proof Teaser - Realistischer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center items-center gap-8 mb-12 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-green-400" />
                <span>Custom Kalkulatoren</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Live in 7-10 Tagen</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span>100% Maßarbeit</span>
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
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl"
              />
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6 rounded-xl"
                onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
              >
                Kostenloses Erstgespräch vereinbaren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <p className="text-xs text-slate-500 mt-3">✓ 30 Min. Beratung ✓ Konkrete Lösungsansätze ✓ Unverbindlich</p>
          </motion.div>

          {/* PROBLEM SECTION - Das nervt Sie, oder? */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Diese Probleme kennen Sie bestimmt</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Standard-Kontaktformulare funktionieren einfach nicht mehr
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-purple-500/20 w-fit">
                      <TrendingUp className="h-8 w-8 text-purple-400 rotate-180" />
                    </div>
                    <CardTitle>Niemand füllt aus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">Ihre Besucher schauen sich um, aber das langweilige Kontaktformular schreckt ab</p>
                    <div className="text-sm text-slate-400">Kein Mehrwert = Keine Leads</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-blue-500/20 w-fit">
                      <Users className="h-8 w-8 text-blue-400" />
                    </div>
                    <CardTitle>Falsche Zielgruppe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">Die wenigen Anfragen die kommen, passen nicht zu Ihrem Angebot</p>
                    <div className="text-sm text-slate-400">Zeit verschwendet</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-green-500/20 w-fit">
                      <Calculator className="h-8 w-8 text-green-400" />
                    </div>
                    <CardTitle>Kein Wow-Effekt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">Ihre Konkurrenz bietet interaktive Tools, Sie nur ein ödes Formular</p>
                    <div className="text-sm text-slate-400">Chance verpasst</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* SOLUTION SECTION - Was ich für Sie entwickle */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Formulare, die begeistern</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ich entwickle intelligente Formularsysteme, die Ihre Besucher gerne ausfüllen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-purple-500/30 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-purple-500/20 w-fit mb-4">
                      <Calculator className="h-8 w-8 text-purple-400" />
                    </div>
                    <CardTitle className="text-2xl">Intelligente Kalkulatoren</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-6">
                      Zeigen Sie Ihren Besuchern sofort den Mehrwert! Mit maßgeschneiderten Berechnungstools:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">ROI-Rechner für Ihre Dienstleistung</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">Kostenkalkulatoren mit Live-Ergebnissen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">Ersparnis-Rechner die überzeugen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">Individuelle Formeln nach Ihren Vorgaben</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border-blue-500/30 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="p-3 rounded-xl bg-blue-500/20 w-fit mb-4">
                      <FileSpreadsheet className="h-8 w-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-2xl">Multi-Step Formulare</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-6">
                      Führen Sie Ihre Besucher Schritt für Schritt zur Conversion:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">Aufgeteilt in leicht verdauliche Schritte</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">Fortschrittsanzeige motiviert zum Ausfüllen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">Bedingte Logik für relevante Fragen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">Qualifizierung der Leads bereits im Formular</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-8">
              <Card className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-green-400">Perfekte Integration</h3>
                      <p className="text-slate-300 mb-6">
                        Ihre neuen Formulare fügen sich nahtlos in Ihre bestehende Website ein:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Angepasst an Ihr Corporate Design</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Mobile-optimiert für alle Geräte</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>E-Mail Benachrichtigungen</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-green-400" />
                          <span>Datenexport als CSV/Excel</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20">
                        <Database className="h-16 w-16 text-green-400 mx-auto mb-4" />
                        <div className="text-xl font-bold text-green-400 mb-2">Strukturierte Daten</div>
                        <div className="text-sm text-slate-400">
                          Alle Leads sauber organisiert und exportierbar
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* EXAMPLES - Was möglich ist */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Beispiele aus der Praxis</h2>
              <p className="text-xl text-slate-300">So könnten Ihre neuen Lead-Magneten aussehen</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="text-purple-400 font-semibold mb-2">Für Agenturen</div>
                    <CardTitle>Projekt-Kalkulator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Besucher geben Projektumfang ein und erhalten sofort eine Kostenschätzung. 
                      Im Gegenzug hinterlassen sie ihre Kontaktdaten für das detaillierte Angebot.
                    </p>
                    <div className="text-sm text-green-400">→ Lead-Magnet statt Kontaktformular</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="text-blue-400 font-semibold mb-2">Für Berater</div>
                    <CardTitle>Potenzial-Analyse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Multi-Step Formular das die aktuelle Situation analysiert und 
                      Verbesserungspotenzial aufzeigt. Personalisierte Ergebnisse per E-Mail.
                    </p>
                    <div className="text-sm text-green-400">→ Qualifizierte Leads</div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full">
                  <CardHeader>
                    <div className="text-green-400 font-semibold mb-2">Für Shops</div>
                    <CardTitle>Konfigurator</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 mb-4">
                      Produkt-Konfigurator mit Live-Preisberechnung. 
                      Konfiguration wird gespeichert und kann per E-Mail angefordert werden.
                    </p>
                    <div className="text-sm text-green-400">→ Kaufinteressenten sammeln</div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* PROCESS - So arbeite ich */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">In 3 Schritten zu mehr Leads</h2>
              <p className="text-xl text-slate-300">Schnell, unkompliziert und effektiv</p>
            </motion.div>

            <div className="space-y-8">
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-purple-500/20 rounded-full p-4 flex-shrink-0">
                        <span className="text-2xl font-bold text-purple-400">1</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Beratungsgespräch</h3>
                        <p className="text-slate-300">
                          Wir besprechen Ihre Ziele und ich zeige Ihnen, welche Art von Formular 
                          für Ihr Business am besten funktioniert. Gemeinsam entwickeln wir das Konzept.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-blue-500/20 rounded-full p-4 flex-shrink-0">
                        <span className="text-2xl font-bold text-blue-400">2</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Entwicklung</h3>
                        <p className="text-slate-300">
                          Ich entwickle Ihr individuelles Formular mit allen gewünschten Features. 
                          Sie bekommen regelmäßige Updates und können jederzeit Feedback geben.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="bg-green-500/20 rounded-full p-4 flex-shrink-0">
                        <span className="text-2xl font-bold text-green-400">3</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">Integration & Start</h3>
                        <p className="text-slate-300">
                          Ich integriere das Formular in Ihre Website und stelle sicher, dass alles 
                          reibungslos funktioniert. Ab jetzt sammeln Sie qualifizierte Leads!
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* PRICING - Transparente Preise */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Investition in Ihren Erfolg</h2>
              <p className="text-xl text-slate-300">Faire Preise für professionelle Lösungen</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Basic */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full relative">
                  <CardHeader>
                    <CardTitle className="text-2xl">Smart Form Basic</CardTitle>
                    <CardDescription className="text-slate-400">Für den Einstieg</CardDescription>
                    <div className="text-4xl font-bold mt-4">ab 499€</div>
                    <div className="text-slate-400">einmalig</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>1 intelligentes Formular</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Basis-Berechnungen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>E-Mail Integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Mobile-optimiert</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Fertig in 5-7 Tagen</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Anfrage senden
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Professional - Highlighted */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 border-purple-500/50 backdrop-blur-sm h-full relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      EMPFOHLEN
                    </span>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">Smart Form Pro</CardTitle>
                    <CardDescription className="text-slate-400">Der Lead-Magnet</CardDescription>
                    <div className="text-4xl font-bold mt-4">ab 999€</div>
                    <div className="text-slate-400">einmalig</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Multi-Step Formular</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Komplexe Kalkulatoren</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Bedingte Logik</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Datenexport (CSV/Excel)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>2 Wochen Support</span>
                      </div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Jetzt anfragen
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Custom */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm h-full relative">
                  <CardHeader>
                    <CardTitle className="text-2xl">Smart Form Custom</CardTitle>
                    <CardDescription className="text-slate-400">Individuelle Lösung</CardDescription>
                    <div className="text-4xl font-bold mt-4">Individuell</div>
                    <div className="text-slate-400">nach Anforderung</div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Alles aus Pro</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>API-Anbindungen</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>CRM-Integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Mehrere Formulare</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-400" />
                        <span>Langzeit-Support</span>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">
                      Beratung vereinbaren
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <p className="text-sm text-slate-400">
                * Alle Preise verstehen sich zzgl. MwSt. | Finale Preise nach Projektbesprechung
              </p>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-20"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Häufige Fragen</h2>
              <p className="text-xl text-slate-300">Das wollen meine Kunden oft wissen</p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Wie lange dauert die Entwicklung?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Ein einfaches Formular ist in 5-7 Tagen fertig. Komplexere Lösungen mit 
                      Kalkulatoren und Multi-Step-Funktionen brauchen 7-14 Tage. Sie bekommen 
                      während der Entwicklung regelmäßig Updates.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Funktioniert das mit meiner Website?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Ja! Ich entwickle die Formulare so, dass sie sich in jede Website integrieren 
                      lassen - egal ob WordPress, Webflow, eigene Entwicklung oder andere Systeme. 
                      Das Design wird an Ihre CI angepasst.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Was ist mit DSGVO und Datenschutz?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Alle Formulare werden DSGVO-konform entwickelt. Daten werden verschlüsselt 
                      übertragen und nur auf Ihrem Server/E-Mail gespeichert. Auf Wunsch integriere 
                      ich auch Double-Opt-In Prozesse.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Kann ich das Formular später selbst anpassen?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">
                      Bei Bedarf erstelle ich ein einfaches Admin-Panel, mit dem Sie Texte und 
                      Berechnungsparameter selbst anpassen können. Für größere Änderungen stehe 
                      ich natürlich auch nach dem Projekt zur Verfügung.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* FINAL CTA - Der Abschluss */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm p-12">
              <h2 className="text-4xl font-bold mb-6">Bereit für mehr qualifizierte Leads?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Lassen Sie uns in einem kostenlosen Gespräch herausfinden, 
                welche Art von Formular für Ihr Business am besten funktioniert.
              </p>
              
              <div className="flex flex-col items-center gap-6">
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
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-xl"
                  />
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-xl px-12 py-8 rounded-xl"
                    onClick={() => window.open('https://calendly.com/mathis-kraekel-ijhy/30min', '_blank')}
                  >
                    Kostenloses Beratungsgespräch
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
                
                <div className="flex items-center gap-8 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span>30 Min. Beratung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Konkrete Ideen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-400" />
                    <span>Unverbindlich</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* About Me - Persönlicher Touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm p-8">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Hi, ich bin Mathis 👋</h3>
                <p className="text-lg text-slate-300 mb-6">
                  Ich entwickle seit mehreren Jahren individuelle Weblösungen und habe mich 
                  auf intelligente Formulare spezialisiert. Warum? Weil ich gesehen habe, 
                  wie viel Potenzial Unternehmen mit langweiligen Kontaktformularen verschenken.
                </p>
                <p className="text-lg text-slate-300 mb-6">
                  Meine Mission: <strong className="text-white">Formulare entwickeln, die Ihre Besucher 
                  gerne ausfüllen</strong> - mit cleveren Berechnungen, nutzerfreundlichem Design 
                  und echtem Mehrwert.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Sparkles className="h-4 w-4 text-purple-400" />
                    <span>100% Custom Development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span>Schnelle Umsetzung</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Trophy className="h-4 w-4 text-green-400" />
                    <span>Zufriedene Kunden</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />

    </div>
  )
}
