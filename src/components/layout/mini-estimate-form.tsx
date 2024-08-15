import React from "react";
import TextHeader from "../ui/text-header";
import FormInput from "../ui/form-input";
import Button from "../ui/button";

export default function MiniEstimateForm() {
  return (
    <div className="bg-blue
     shadow-lg rounded-lg p-6 text-white">
      <TextHeader headerText="Get An Estimate!" headerTextColor="white" />
      <p className="text-sm md:text-base p-4 font-poppins">
        Take the next step to improving your home today! Our team offers free estimates for all of your needs!
      </p>

      <form className=" grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
          header="Phone Number"
          inputSize="regular"
          placeholder="(000)-000-0000"
          borderColor="black"
          className="md:col-span-1"
        />

        <FormInput
          header="Address"
          inputSize="regular"
          placeholder="Street, City, State, Zip Code"
          borderColor="black"
          className="md:col-span-1"
        />

        <FormInput
          header="Project Description"
          inputSize="large"
          colSpan={2}
          rowSpan={3}
          placeholder="Provide a brief project description..."
          borderColor="black"
          className="md:col-span-2 h-32"
        />

        <Button
          buttonType="primary"
          label="Submit"
          backgroundColor="red"
          textColor="white"
          className="mt-4 max-w-md  md:col-start-1 md:col-span-2"
          link="/contact"
        />
      </form>
    </div>
  );
}
