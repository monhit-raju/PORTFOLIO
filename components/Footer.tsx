"use client"

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              Designed & Developed with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{' '}
              <span className="text-primary font-semibold">Monhit Raju</span>
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} L Monhit Raju. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
