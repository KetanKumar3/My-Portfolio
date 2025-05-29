'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.6, ease: 'easeInOut' },
        }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] "
      >
        {/* Floating Image */}
        <motion.div
          animate={{
            y: [0, -50, 0], // Float up then back
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0" 
        >
          <Image
            src="/ketan1.jpg"
            alt="Profile photo of Ketan Kumar"
            priority
            quality={100}
            fill
            className="object-contain rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Photo
