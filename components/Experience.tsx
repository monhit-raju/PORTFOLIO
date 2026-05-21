"use client"

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Machine Learning Intern',
    company: 'Nextbrain Technologies',
    location: 'India',
    period: '2026',
    description: 'Working on VisionFacts.ai, an AI-powered real-time video analytics platform involving PPE compliance, crowd analytics, fall detection, and computer vision applications. Developed an AI-powered lead collection system using FastAPI, Google Maps API, Groq AI, PostgreSQL, and APScheduler.',
    highlights: ['Computer Vision', 'Real-time Analytics', 'FastAPI', 'AI Systems'],
    current: true,
  },
  {
    title: 'MERN Stack Developer Intern',
    company: 'EduCentro Private Limited',
    location: 'India',
    period: '2024',
    description: 'Built a Charity Fund Collector POC using the MERN stack (ReactJS, Node.js, Express.js, MongoDB). Deployed frontend and backend components on AWS and gained hands-on experience in full-stack development, testing, troubleshooting, and SDLC practices.',
    highlights: ['React', 'Node.js', 'MongoDB', 'AWS'],
    current: false,
  },
]

const achievements = [
  { title: 'Third Place - CREATEATHON Hackathon', org: 'Sri Eshwar College of Engineering', year: '2024' },
  { title: 'Fourth Place - HACK-O-HERTZ Hackathon', org: 'New Prince Sri Bhavani', year: '2026' },
  { title: '100+ LeetCode Problems Solved', org: 'LeetCode', year: 'Ongoing' },
  { title: '900+ SkillRack Problems Solved', org: 'SkillRack', year: 'Ongoing' },
]

const certifications = [
  { name: 'Salesforce Certified Agentforce Specialist', issuer: 'Salesforce', year: '2025' },
  { name: 'Complete Guide to C Programming Foundations', issuer: 'LinkedIn', year: '2025' },
  { name: 'Data Structures & Algorithms using C and C++', issuer: 'Udemy', year: '2025' },
  { name: '100 Days: The Complete Python Pro Bootcamp', issuer: 'Udemy', year: '2025' },
  { name: 'Programming in Java', issuer: 'NPTEL', year: '2025' },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
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
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & <span className="text-primary">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </motion.h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-[11px] top-12 h-full w-0.5 bg-border" />
                  )}
                  
                  <div className="flex gap-4">
                    {/* Timeline dot */}
                    <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center ${exp.current ? 'bg-primary animate-pulse-glow' : 'bg-secondary border-2 border-primary/30'}`}>
                      <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-primary-foreground' : 'bg-primary'}`} />
                    </div>

                    <div className="flex-1 glass rounded-2xl p-6 hover:border-primary/30 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 text-xs font-medium bg-secondary/50 text-foreground rounded-full border border-border"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="space-y-12">
            {/* Achievements */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl font-bold text-foreground mb-6"
              >
                🏆 Achievements
              </motion.h3>

              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass rounded-xl p-4 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{achievement.org}</p>
                      </div>
                      <span className="text-xs text-primary font-medium">{achievement.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl font-bold text-foreground mb-6"
              >
                📜 Certifications
              </motion.h3>

              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                    className="glass rounded-xl p-4 hover:border-primary/30 transition-colors group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <span className="text-xs text-primary font-medium whitespace-nowrap">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
