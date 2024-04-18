import React from 'react';
import { FAQ } from './faq-item';
import FAQItem from "./faq-item";

interface FAQListProps {
    header: string;
    object: FAQ[];
  }

export default function FAQList({header,object}: FAQListProps){
  return (
    <div className="flex flex-col mx-auto mt-10 p-10">
        <h2 className="text-4xl font-bold font-poppins text-red">{header}</h2>
      {object.map((item, index) => (
        <FAQItem key={index} object={item} />
      ))}
    </div>
  );
};
