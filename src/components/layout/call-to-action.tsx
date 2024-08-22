import React from 'react'
import Button from '../ui/button'

export default function CallToAction() {
  return (
    <div className="w-full h-48 bg-gradient-to-r from-gray to-blue">
      <div className="flex flex-col md:flex md:flex-row justify-between items-center h-full p-10">
        <h1 className="text-white font-poppins text-xl md:text-2xl bold">Book a free consultation today!</h1>
        <Button backgroundColor='white' buttonType='secondary' textColor='white' label='Get a Quote' link="/contact" />
      </div>
    </div>
  )
}
