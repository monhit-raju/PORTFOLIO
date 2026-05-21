"use client"

import { motion } from 'framer-motion'
import { Github, Linkedin, Code, Download, Mail, ChevronDown } from 'lucide-react'
import Scene3D from './Scene3D'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Scene3D />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-8">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          <span className="text-foreground">{"Hi, I'm "}</span>
          <span className="glow-text text-primary">Monhit Raju</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
        >
          AI & Machine Learning Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building AI-powered intelligent systems and futuristic digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 glow-box"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="/resume.pdf"
            download
            className="group px-8 py-4 bg-secondary/50 text-foreground font-semibold rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 text-foreground font-semibold rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/30 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/monhit-raju"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/monhit-raju-l-347a21314/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://leetcode.com/u/Raju_07"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 group"
          >
            <Code className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
