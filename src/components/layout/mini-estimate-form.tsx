"use client"

import type React from "react"
import { useState } from "react"
import TextHeader from "../ui/text-header"
import FormInput from "../ui/form-input"
import Button from "../ui/button"
import { useForm, ValidationError } from "@formspree/react"
import ThankYouMessage from "@/components/layout/thankYouMessage"

export default function MiniEstimateForm() {
  const [state, handleSubmit] = useForm("mqazlleo")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  if (state.succeeded) {
    return <ThankYouMessage />
  }

  return (
    <div className="bg-gradient-to-br from-blue via-blue to-blue/90 shadow-2xl rounded-2xl p-6 md:p-8 text-white max-w-2xl mx-auto mb-10 border border-white/10">
      <div className="mb-8">
        <TextHeader
          headerText="Get An Estimate!"
          headerTextColor="text-white"
          className="mb-4"
          underlineColor="bg-red"
          underlineAlignment="center"
        />
        <p className="text-sm md:text-base font-poppins text-center text-white/90 max-w-md mx-auto">
          Take the next step to improving your home today! Our team offers free estimates for all of your needs!
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="transition-all duration-200">
            <FormInput
              header="Name"
              name="name"
              inputSize="regular"
              placeholder="Enter your name"
              borderColor="white"
              onChange={handleChange}
              value={formData.name}
              required
              className="bg-blue/40"
            />
          </div>

          <div className="transition-all duration-200">
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
              className="bg-blue/40"
            />
          </div>

          <div className="transition-all duration-200">
            <FormInput
              header="Phone Number"
              name="phone"
              inputSize="regular"
              placeholder="(000)-000-0000"
              borderColor="white"
              onChange={handleChange}
              value={formData.phone}
              required
              className="bg-blue/40"
            />
          </div>

          <div className="transition-all duration-200">
            <FormInput
              header="Address"
              name="address"
              inputSize="regular"
              placeholder="Street, City, State, Zip"
              borderColor="white"
              onChange={handleChange}
              value={formData.address}
              required
              className="bg-blue/40"
            />
          </div>
        </div>

        <div className="transition-all duration-200">
          <FormInput
            header="Project Description"
            name="description"
            inputSize="large"
            placeholder="Provide a brief project description..."
            borderColor="white"
            className="h-32 bg-blue/40"
            onChange={handleChange}
            value={formData.description}
            required
          />
        </div>

        <ValidationError
          prefix="Form"
          field="description"
          errors={state.errors}
          className="text-red-300 text-sm font-medium"
        />

        <div className="flex justify-center pt-2">
          <Button
            buttonType="primary"
            label={state.submitting ? "Submitting..." : "Submit Estimate Request"}
            backgroundColor="red"
            textColor="white"
            className="w-full max-w-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg rounded-xl font-medium text-base"
            type="submit"
            disabled={state.submitting}
          />
        </div>

        {state.errors && (
          <p className="text-red-300 text-sm text-center mt-2">
            There was an error submitting your form. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}

