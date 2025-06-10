'use client'

import React from 'react'
import AiToolCard from './AiToolCard'
import { MonitorSmartphone, FileText, Route, FileSignature } from 'lucide-react'
import { motion } from 'framer-motion'

const aiToolsList = [
  {
    name: 'AI Career Q&A Chat',
    desc: 'Chat with AI Agent',
    icon: <MonitorSmartphone size={40} />,
    button: "Let's Chat",
    path: '/ai-tools/ai-chat',
  },
  {
    name: 'AI Resume Analyzer',
    desc: 'Chat with AI Agent',
    icon: <FileText size={40} />,
    button: 'Analyze now',
    path: '/ai-resume-analyzer',
  },
  {
    name: 'Learning Roadmap',
    desc: 'Chat with AI Agent',
    icon: <Route size={40} />,
    button: 'Get Started',
    path: '/career-roadmap-generator',
  },
  {
    name: 'Cover Letter Generator',
    desc: 'Chat with AI Agent',
    icon: <FileSignature size={40} />,
    button: 'Create now',
    path: '/cover-letter-generator',
  },
]

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

function AiTools() {
  return (
    <div className="py-10  px-4 max-w-8xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl text-center lg:text-start text-[#0b2e4e] font-bold">Available AI Tools</h2>
        <p className="text-gray-600 mt-2 text-center lg:text-start">
          Start Building and Shape Your Career with this exclusive AI Tools
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center"
      >
        {aiToolsList.map((tool, index) => (
          <motion.div key={index} variants={item}>
            <AiToolCard
              icon={tool.icon}
              title={tool.name}
              subtitle={tool.desc}
              buttonText={tool.button}
              path={tool.path}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default AiTools
