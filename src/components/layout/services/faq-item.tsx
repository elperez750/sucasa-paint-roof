"use client"

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export interface FAQ {
  question: string
  answer: string
}

export interface FAQItemProps {
  object: FAQ
}

export default function FAQItem({ object }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md">
      <button
        className="py-4 px-6 w-full font-poppins text-left text-lg flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${object.question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-semibold text-gray-800">{object.question}</span>
        <span className="text-blue-600 flex-shrink-0 ml-4">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </span>
      </button>
      <div
        id={`faq-answer-${object.question.replace(/\s+/g, '-').toLowerCase()}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 bg-gray-50 text-gray-700 font-poppins">
          {object.answer}
        </div>
      </div>
    </div>
  )
}