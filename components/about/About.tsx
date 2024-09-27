"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Draggable from 'react-draggable'
import Image, { StaticImageData } from 'next/image'
import profile from "../../public/bg.jpg"
import logo from "../../public/logo.svg"
import Title from '../Title'
import Link from 'next/link'
import Footer from '../Footer'

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
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
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
  const [isHover, setIsHover] = useState<boolean>(true)
  return (
    <div className='px-3 pt-4'>
      <div className="hidden md:flex lg:flex  container mx-auto px-8 pb-[50px]">
        <div className=" flex flex-row justify-center items-center space-x-4">
          {images.map(image => (
            <FlipCard key={image.key} image={image.src} pattern={image.pattern} />
          ))}
        </div>
      </div>
      <div>
        <Link href={'/'} className="flex md:hidden lg:hidden pb-6">
          <Image alt="logo" width={24} height={24} src={logo} />
        </Link>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-[100px]'>
        <div className='items-end'>
          <Title isPrimary={false} props={'About'} />
        </div>
        <div>
          <span className='font-medium'>
            Hi, I’m Gaurav—a designer and frontend developer hybrid passionate about building products with delightful interfaces. <br /><br />
            I enjoy collaborating with startups that care deeply about their users, ensuring both functionality and a polished look and feel for the product. <br /><br />
            Originally from the beautiful plains of Nepal, near the Himalayas, I also spent part of my life in Kathmandu. <br /><br />
            Outside of design and code, I explore behavioral economics and am deeply invested in fitness, particularly running. <br />   <br />
          </span>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-[100px]'>
        <div className='items-end'>
          <Title isPrimary={false} props={'Projects'} />
        </div>
        <div className="flex flex-col gap-5">

          <div
            className='flex flex-row gap-6'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <div className='border-1 rounded-full items-end'>
              <Image src={profile} width={40} height={40} className="rounded-full aspect-square object-cover" alt='what'></Image>
            </div>
            <div className='flex flex-col gap-3 *:item-start'>
              <div className='font-bold text-gray-500'>Tathya Ecommerce Project</div>
              <span className='font-medium text-gray-500'>Worked on it from this to that.</span>
            </div>
            <div>
            </div>
          </div>

        </div>

      </div>
          <Footer></Footer>
    </div>
  )
}
