import Image from 'next/image'
import React from 'react'

function ProjectMap() {
  return (
    <div className='mx-auto max-w-7xl my-10'>
        <div className='text-[#0E4F94] text-5xl text-center font-bold'>
            Project Map
        </div>
        <Image className='mt-7' src={"/img/home/projectmap.png"} alt="" width={2000} height={400} />
    </div>
  )
}

export default ProjectMap