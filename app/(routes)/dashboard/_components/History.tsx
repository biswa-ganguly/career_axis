'use client'

import React, { useState } from 'react'
import { LightbulbIcon } from 'lucide-react'
import { motion } from 'framer-motion'

function History() {
  const [userHistory, setUserHistory] = useState<string[]>([]) // Add type for clarity

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-10 text-center lg:text-start px-4 max-w-8xl mx-auto"
    >
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b2e4e]">Previous History</h2>
        <p className="text-gray-600 mt-1">What you previously worked on, you can find here</p>
      </div>

      {userHistory.length === 0 ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center py-16 bg-white rounded-xl shadow-md border"
        >
          <LightbulbIcon size={50} className="text-gray-400" />
          <p className="text-center text-gray-600 text-sm mt-4">You do not have any history</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-black text-white px-6 py-2 rounded-md text-sm transition"
          >
            Explore Now
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {userHistory.map((item, index) => (
            <motion.div
              key={index}
              className="p-4 border-b"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}

export default History
