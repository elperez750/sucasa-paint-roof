import React, { useState } from "react";
import TextHeader from "../ui/text-header";
import FormInput from "../ui/form-input";
import Button from "../ui/button";


export default function MiniEstimateForm() {
  // Add your component logic here
  return (
    <div className="bg-gradient-to-r from-gray to-blue shadow-md">
      <div className="flex justify-start">
        <TextHeader headerText="Get An Estimate!" headerTextColor="white" />
      </div>
      <p className="p-5 font-poppins text-sm md:text-base text-white">
        Take the next step to improving your home today! Our team offers free
        estimates for all of your needs!
      </p>

      <div className="flex flex-col p-5 md:grid md:grid-rows-4 md:grid-cols-4 md:gap-8 w-full md:h-96 md:p-4">
       
          <FormInput
            header="Name"
            inputSize="regular"
            placeholder="Enter your name here..."
            borderColor="black"
           
          />

          <FormInput
            header="Email"
            inputSize="regular"
            placeholder="Enter your email here..."
            borderColor="black"
            
          />
         
       
         <FormInput
            
            header="Project Description"
            inputSize="large"
            colSpan={2}
            rowSpan={3}
            placeholder="Provide a brief project description..."
            borderColor="black"
        />

     

          <FormInput
            header="Phone Number"
            inputSize="regular"
            placeholder="(000)-000-0000"
            borderColor="black"
          
          />
          <FormInput
            header="Address"
            inputSize="regular"
            placeholder="Street, City, State, Zip Code"
            borderColor="black"
          />
          
         
      
        
          <Button 
            buttonType="primary"
            label="Submit"
            backgroundColor="blue"
            textColor="white"
          
            />


      
  

        </div>
       
       
      </div>
  
  );
}
