"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Scam Defender',
    subtitle: 'AI-Based Fraud Detection System',
    description: 'Developed a machine learning fraud detection system using Random Forest and Logistic Regression to identify fraudulent activities in real time using synthetic and real-world datasets.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Random Forest'],
    liveUrl: 'https://shield-x-alpha.vercel.app/',
    githubUrl: '',
    image: '/scam-defender.png',
    featured: true,
  },
  {
    title: 'AI-Powered Fitness Tracker',
    subtitle: 'Sports Performance Analysis',
    description: 'Developed an AI-powered cross-platform mobile app that enables athletes to record sports performance videos, analyze them using on-device AI for pose estimation and accuracy, and securely submit verified performance data for official evaluation.',
    tech: ['Flutter', 'AI', 'Pose Estimation', 'Machine Learning'],
    liveUrl: '',
    githubUrl: '',
    image: null,
    featured: true,
  },
  {
    title: 'Carpooling Mobile App',
    subtitle: 'Real-time Ride Matching',
    description: 'Developed a carpooling mobile application using Flutter with real-time ride matching between drivers and passengers. Integrated AI-powered safety verification and efficient route planning with a clean UI.',
    tech: ['Flutter', 'Firebase', 'AI', 'Maps API'],
    liveUrl: '',
    githubUrl: '',
    image: null,
    featured: false,
  },
  {
    title: 'AI Lead Collection System',
    subtitle: 'Automated Business Intelligence',
    description: 'Developed an AI-powered lead collection system using FastAPI, Google Maps API, Groq AI, PostgreSQL, and APScheduler for automated business lead generation and REST API integration.',
    tech: ['FastAPI', 'Groq AI', 'PostgreSQL', 'APScheduler'],
    liveUrl: '',
    githubUrl: '',
    image: null,
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20 mb-6">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of AI-powered applications and innovative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group ${project.featured ? 'md:col-span-1' : ''}`}
            >
              <div className="h-full glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 border border-border hover:border-primary/30">
                {/* Project Image/Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/5 overflow-hidden">
                  {project.image ? (
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${project.image})` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl bg-primary/20 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">{project.title[0]}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Hover overlay with links */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-primary text-primary-foreground hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-secondary text-foreground hover:scale-110 transition-transform"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <span className="text-muted-foreground text-sm">Links coming soon</span>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary/80">{project.subtitle}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary/50 text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            More projects and deployment links coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
