'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

interface AiToolCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  buttonText: string
  path: string
}

function AiToolCard({ icon, title, subtitle, buttonText, path }: AiToolCardProps) {
  const router = useRouter()

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="border rounded-xl shadow-md lg:w-[300px] w-[400px] bg-white flex flex-col text-center gap-4 p-6" // consistent height
    >
      <div className="w-14 h-14 mx-auto">{icon}</div>

      <div className="flex-1 flex flex-col justify-center">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>

      <button
        onClick={() => router.push(path)}
        className="mt-auto bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:scale-105 transition"
      >
        {buttonText}
      </button>
    </motion.div>
  )
}

export default AiToolCard
