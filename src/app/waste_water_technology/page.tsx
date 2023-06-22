import React from 'react'
import Banner from '@/components/page/banner'

const page = () => {
    const data = {
        path: "Home / Waste Water Technology"
    }
  return (
    <>
    <Banner path={data.path} title='' image='' />
    </>
  )
}

export default page