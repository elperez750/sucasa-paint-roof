import React from 'react'
import { FAQ } from './faq-item'
import FAQItem from "./faq-item"

interface FAQListProps {
  header: string
  faqs: FAQ[]
}

export default function FAQList({ header, faqs }: FAQListProps) {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins text-red-600 mb-8 md:mb-12 text-center">
          {header}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} object={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}