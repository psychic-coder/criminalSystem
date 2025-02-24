"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

import React from 'react'

const Home = () => {

  const router=useRouter();

const goToLogin=()=>{
  router.push("/login");
}

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black ">
          <Button className="hover:border-white hover:border-2 hover:bg-gray-900 " onClick={goToLogin}>GET STARTED</Button>
    </div>
  )
}

export default Home