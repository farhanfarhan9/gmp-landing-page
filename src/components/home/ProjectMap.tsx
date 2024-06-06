"use client";
import Translator from '@/utils/Translator';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React from 'react'

function ProjectMap() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className='mx-4 my-10 mt-10 md:mx-auto max-w-7xl'>
        <div className='text-[#0E4F94] text-xl md:text-5xl text-center font-bold'>
            Location
        </div>
        <Image className='object-scale-down mt-7' src={"/img/home/map.png"} alt="" width={2000} height={400} />
    </div>
  )
}

export default ProjectMap