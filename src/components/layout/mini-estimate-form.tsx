"use client"

import React, { useState } from "react"
import TextHeader from "../ui/text-header"
import FormInput from "../ui/form-input"
import Button from "../ui/button"
import { useForm, ValidationError } from '@formspree/react'
import ThankYouMessage from "@/components/layout/thankYouMessage"

export default function MiniEstimateForm() {
  const [state, handleSubmit] = useForm("mqazlleo")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  if (state.succeeded) {
    return <ThankYouMessage />
  }

  return (
    <div className="bg-gradient-to-br from-blue to-blue shadow-xl rounded-lg p-8 text-white max-w-2xl mx-auto mb-10">
      <TextHeader 
        headerText="Get An Estimate!" 
        headerTextColor="text-white" 
        className="mb-6"
        underlineColor="bg-red"
        underlineAlignment="center"
      />
      <p className="text-sm md:text-base mb-8 font-poppins text-center">
        Take the next step to improving your home today! Our team offers free estimates for all of your needs!
      </p>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            header="Name"
            name="name"
            inputSize="regular"
            placeholder="Enter your name"
            borderColor="white"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <FormInput
            header="Email"
            name="email"
            inputSize="regular"
            placeholder="Enter your email"
            borderColor="white"
            onChange={handleChange}
            value={formData.email}
            required
            type="email"
          />
          <FormInput
            header="Phone Number"
            name="phone"
            inputSize="regular"
            placeholder="(000)-000-0000"
            borderColor="white"
            onChange={handleChange}
            value={formData.phone}
            required
          />
          <FormInput
            header="Address"
            name="address"
            inputSize="regular"
            placeholder="Street, City, State, Zip"
            borderColor="white"
            onChange={handleChange}
            value={formData.address}
            required
          />
        </div>
        <FormInput
          header="Project Description"
          name="description"
          inputSize="large"
          placeholder="Provide a brief project description..."
          borderColor="white"
          className="h-32"
          onChange={handleChange}
          value={formData.description}
          required
        />
        <ValidationError 
          prefix="Form" 
          field="description"
          errors={state.errors}
          className="text-red-300 text-sm"
        />
        <div className="flex justify-center">
          <Button
            buttonType="primary"
            label="Submit Estimate Request"
            backgroundColor="red"
            textColor="white"
            className="w-full max-w-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            type="submit"
            disabled={state.submitting}
          />
        </div>
      </form>
    </div>
  )
}