"use client";
import Translator from '@/utils/Translator';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React from 'react'

function ProjectMap() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className='mx-auto max-w-7xl my-10 mt-10'>
        <div className='text-[#0E4F94] text-5xl text-center font-bold'>
            {Translator.t("project-map", lang)}
        </div>
        <Image className='mt-7' src={"/img/home/projectmap.png"} alt="" width={2000} height={400} />
    </div>
  )
}

export default ProjectMap