'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

function WelcomeBanner() {
  return (
    <div className="bg-gradient-to-r from-[#0b2e4e] via-[#123b63] to-[#1c4979] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-10"
      >
        <h2 className="text-4xl font-extrabold text-[#0b2e4e] mb-4">
          Welcome to Career Axis
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Discover your path to success with Career Axis. We guide your journey with expert advice,
          growth opportunities, and personalized career support.
        </p>
        <motion.div >
          <Button className="bg-[#0b2e4e] hover:bg-[#0a2642] hover:scale-105 text-white text-lg px-8 py-3 rounded-full shadow-lg transition">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WelcomeBanner
