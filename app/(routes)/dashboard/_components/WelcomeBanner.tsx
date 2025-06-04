'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

function WelcomeBanner() {
  return (
    <div className=" ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" bg-gradient-to-r from-[#0b2e4e] via-[#123b63] to-[#1c4979]  text-white  bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl lg:p-8 p-4 py-6"
      >
        <h2 className="lg:text-5xl text-3xl text-center lg:text-start font-semibold text-white mb-4">
          Welcome to Career Axis
        </h2>
        <p className="text-white text-center lg:text-start  lg:text-lg lg:mb-6 mb-4">
          Discover your path to success with Career Axis. We guide your journey with expert advice,
          growth opportunities, and personalized career support.
        </p>
        <motion.div className="flex justify-center lg:justify-start">
          <Button  variant={"outline"} className="bg-[#0b2e4e]  hover:bg-[white] hover:scale-105 text-white text-lg px-8 py-3 rounded-full shadow-lg transition">
            Get Started
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default WelcomeBanner
