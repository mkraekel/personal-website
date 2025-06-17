'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import Link from "next/link";

export function Navigation() {
  return (
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
            <Link href="/#about" className="hover:text-blue-400 transition-colors">Über mich</Link>
            <Link href="/#services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link href="/#projects" className="hover:text-blue-400 transition-colors">Projekte</Link>
            <Link href="/#testimonials" className="hover:text-blue-400 transition-colors">Referenzen</Link>
            <Link href="/#contact" className="hover:text-blue-400 transition-colors">Kontakt</Link>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
