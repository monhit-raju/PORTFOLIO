"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Passionate <span className="text-primary">AI Engineer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl" />
              
              {/* Profile Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass glow-box">
                <img 
                  src="/profile.jpeg" 
                  alt="L Monhit Raju - AI & ML Engineer"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8 glow-box">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a passionate <span className="text-primary font-semibold">AI & Machine Learning</span> engineering student focused on building intelligent, scalable, and impactful applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                I enjoy working on <span className="text-foreground">AI-powered systems</span>, real-time analytics, <span className="text-foreground">computer vision</span>, machine learning, and full-stack development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                My goal is to build futuristic AI products that solve <span className="text-primary font-semibold">real-world problems</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '100+', label: 'LeetCode Problems' },
                { value: '900+', label: 'SkillRack Solutions' },
                { value: '4+', label: 'Major Projects' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4 text-center glow-box"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Education</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-foreground font-medium">B.E. CSE (AI & ML)</p>
                    <p className="text-sm text-muted-foreground">Sri Eshwar College of Engineering</p>
                  </div>
                  <span className="text-primary font-semibold">8.4 CGPA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
