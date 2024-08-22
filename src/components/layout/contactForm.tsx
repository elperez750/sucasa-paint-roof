import { useState } from "react";
import Button from "@/components/ui/button";
import { useForm, ValidationError } from '@formspree/react';
import ThankYouMessage from "./thankYouMessage";
export default function ContactForm(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");
  
    const [submitted, setSubmitted] = useState(false);
  
    const [state, handleSubmit] = useForm("mqazlleo");
    if (state.succeeded ) { 
        return <ThankYouMessage />
      }
  


return(
<div className="flex flex-col justify-center items-center bg-blue shadow-2xl rounded-lg p-6 sm:p-8 lg:p-10 m-4 sm:m-6 lg:m-10">
        <h1 className="font-poppins text-3xl sm:text-4xl mb-4 sm:mb-6 text-red text-center">Tell us about your project</h1>
        <h3 className="mb-6 sm:mb-8 text-center font-poppins text-gray text-sm sm:text-base lg:text-lg">
          We are happy to assist you with a free estimate of your project. Fill out the secure form below, and we will be in contact with you within one business day.
        </h3>
        
        <form className="grid grid-cols-2 sm:grid-cols-2 gap-4 font-poppins w-full" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="first-name" className="block text-white mb-2">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first Name"
              placeholder="First Name"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-white mb-2">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last Name"
              placeholder="Last Name"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white mb-2">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-white mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-white mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-white mb-2">ZIP Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="ZIP Code"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setZip(e.target.value)}
              value={zip}
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-white mb-2">Service Type</label>
            <input
              type="text"
              id="service"
              name="service"
              placeholder="Service Type"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setService(e.target.value)}
              value={service}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              className="block w-full p-3 sm:p-4 bg-gray-200 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className="col-span-2 flex justify-center mt-6">
            <Button buttonType="primary" label="Submit" backgroundColor="red" textColor="white" type="submit" />
          </div>
        </form>
      </div>
)
}