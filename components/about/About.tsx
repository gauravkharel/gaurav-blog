"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Draggable from 'react-draggable'
import Image, { StaticImageData } from 'next/image'
import profile from "../../public/bg.jpg"

type FlipCardType = {
  image: string | StaticImageData,
  pattern: string,
}

const images = [
  { key: 1, src: profile, pattern: 'pattern1' },
  { key: 2, src: profile, pattern: 'pattern2' },
  { key: 3, src: profile, pattern: 'pattern3' },
  { key: 4, src: profile, pattern: 'pattern4' },
]

const FlipCard = ({ image, pattern }: FlipCardType) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const nodeRef = useRef(null)

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="w-64 h-64 perspective"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <Image
              src={image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Card Front"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          <div
            className={`absolute inset-0 w-full h-full rounded-lg shadow-lg flex items-center justify-center ${pattern}`}
            style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          >
          </div>
        </motion.div>
      </div>
    </Draggable>
  )
}

export default function Portfolio() {
  return (
    <div className="container mx-auto px-8 ">
      <div className="flex flex-row justify-center items-center space-x-4">
        {images.map(image => (
          <FlipCard key={image.key} image={image.src} pattern={image.pattern} />
        ))}
      </div>
    </div>
  )
}
