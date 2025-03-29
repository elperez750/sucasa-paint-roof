import React from 'react'
import Button from '../ui/button'

export default function CallToAction() {
  return (
    <section className="w-full relative py-16 md:py-20 lg:py-24 font-poppins overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 z-0" />

      {/* Optional overlay for better readability */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Text */}
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
              Ready to refresh your home?
            </h2>
            <p className="text-white text-base md:text-lg text-opacity-95">
              Let Sucasa Paint and Roofcare bring your vision to life. Whether it’s a full exterior repaint or a touch-up, we’re here to deliver results that last.
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            backgroundColor='red' 
            buttonType='primary' 
            textColor='white' 
            label='Request a Free Estimate' 
            link="/contact"
            className="w-full md:w-auto text-lg py-3 px-8 font-semibold transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
