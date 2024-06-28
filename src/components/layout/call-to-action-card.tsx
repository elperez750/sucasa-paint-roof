import React from 'react'
import Button from '../ui/button'

export default function CallToActionCard() {
  return (
    <div className="2xl:w-96 2xl:h-56 bg-blue rounded-md">
      <div className="flex flex-col justify-between items-center h-full p-10">
        <h1 className="text-red font-poppins text-xl md:text-2xl bold mb-2">Get a Free Estimate</h1>
        <p className="text-white font-poppins text-lg">Book your free consultation today and let us bring your vision to life!</p>
        <Button backgroundColor='red' buttonType='primary' textColor='white' label='Get a Quote Today!' />
      </div>
    </div>
  )
}
