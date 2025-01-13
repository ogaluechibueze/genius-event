"use client"
import { Button } from '@/components/ui/button'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header () {
  return (
    
      <div className='flex items-center justify-between shadow-sm bg-slate-100 font-bold text-sm'>
        <Image src='/logo4.png' alt='' width={300} height={300}
        className='w-[150px] md:w-[100px]'/>
        <h1 className='hidden md:flex text-red-500 font-bold'>GENIUS-EVENT SCHEDULE</h1>
      <div className='flex gap-5'>
      <SignInButton/>
      <SignUpButton/>
      </div>
    </div>
  )
}

export default Header
