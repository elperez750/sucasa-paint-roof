"use client"
import React, { useState } from 'react';

export interface FAQ {
    question: string;
    answer: string;
  }




export interface FAQItemProps {
  object: FAQ;
}

export default function FAQItem({object}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray ">
      <button
        className="py-4 px-6 w-full font-poppins text-left text-lg flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {object.question}
        <span className="text-gray">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 px-6 pt-2 text-gray font-poppins">
          {object.answer}
        </div>
      )}
    </div>
  );
};

  