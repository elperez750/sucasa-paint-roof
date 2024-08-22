"use client"
import React, { useState } from "react";
import TextHeader from "../ui/text-header";
import FormInput from "../ui/form-input";
import Button from "../ui/button";
import { useForm, ValidationError } from '@formspree/react';
import ThankYouMessage from "@/components/layout/thankYouMessage";



export default function MiniEstimateForm() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [state, handleSubmit] = useForm("mqazlleo");



  if (state.succeeded ) { 
    return <ThankYouMessage />
  }


  return (
    <div className="bg-blue
     shadow-lg rounded-lg p-6 text-white">
      <TextHeader headerText="Get An Estimate!" headerTextColor="white" />
      <p className="text-sm md:text-base p-4 font-poppins">
        Take the next step to improving your home today! Our team offers free estimates for all of your needs!
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4" onSubmit={handleSubmit}>
        <FormInput
          header="Name"
          name="name"
          inputSize="regular"
          placeholder="Enter your name here..."
          borderColor="black"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <FormInput
          header="Email"
          name="email"
          inputSize="regular"
          placeholder="Enter your email here..."
          borderColor="black"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <FormInput
          header="Phone Number"
          inputSize="regular"
          name="phone"
          placeholder="(000)-000-0000"
          borderColor="black"
          className="md:col-span-1"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <FormInput
          header="Address"
          inputSize="regular"
          name="address"
          placeholder="Street, City, State, Zip Code"
          borderColor="black"
          className="md:col-span-1"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />

        <FormInput
          header="Project Description"
          name="description"
          inputSize="large"
          colSpan={2}
          rowSpan={3}
          placeholder="Provide a brief project description..."
          borderColor="black"
          className="md:col-span-2 h-32"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <Button
          buttonType="primary"
          label="Submit"
          backgroundColor="red"
          textColor="white"
          className="mt-4 max-w-md  md:col-start-1 md:col-span-2"
          type="submit"
        />
      </form>
    </div>
  );
}
