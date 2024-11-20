import React from 'react'
import Button from '../ui/button'

export default function CallToAction() {
  return (
    <section className="w-full bg-gradient-to-r from-gray to-blue py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-white font-poppins text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
              Book a free consultation today!
            </h2>
            <p className="text-white text-opacity-90 font-poppins text-sm md:text-base lg:text-lg max-w-2xl">
              Take the first step towards transforming your space. Our experts are ready to bring your vision to life.
            </p>
          </div>
          <Button 
            backgroundColor='white' 
            buttonType='secondary' 
            textColor='blue' 
            label='Get a Free Quote' 
            link="/contact"
            className="w-full md:w-auto text-lg py-3 px-8 font-semibold transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}