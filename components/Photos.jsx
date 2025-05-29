'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Photos = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      {/* Floating container animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          y: [0, -50, 0], // Outer float
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden shadow-lg"
      >
        {/* Inner image animation */}
        <motion.div
          
          className="absolute inset-0"
        >
          <Image
            src="/ketan2.png"
            alt="Profile photo of Ketan Kumar"
            priority
            quality={100}
            fill
            className=" rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photos
