"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  { name: 'Python', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Flutter', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'FastAPI', category: 'Frameworks' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'Deep Learning', category: 'AI/ML' },
  { name: 'Computer Vision', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'GitHub', category: 'Tools' },
]

const categories = ['Languages', 'Frameworks', 'AI/ML', 'Database', 'Cloud', 'Backend', 'Tools']

const categoryColors: Record<string, string> = {
  'Languages': 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30',
  'Frameworks': 'from-blue-500/20 to-blue-600/10 border-blue-500/30',
  'AI/ML': 'from-primary/20 to-accent/10 border-primary/30',
  'Database': 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30',
  'Cloud': 'from-orange-500/20 to-orange-600/10 border-orange-500/30',
  'Backend': 'from-pink-500/20 to-pink-600/10 border-pink-500/30',
  'Tools': 'from-slate-500/20 to-slate-600/10 border-slate-500/30',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
            Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category)
            if (categorySkills.length === 0) return null
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-4 py-2 rounded-xl bg-gradient-to-br ${categoryColors[category]} border backdrop-blur-sm cursor-default transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
                    >
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Floating skill badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['Python', 'Machine Learning', 'React', 'Flutter', 'FastAPI'].map((skill, index) => (
            <motion.div
              key={skill}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 3,
                delay: index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="px-6 py-3 rounded-full glass glow-box"
            >
              <span className="text-primary font-semibold">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
