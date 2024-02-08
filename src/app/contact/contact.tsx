// "use client";
import React, { useState, useEffect } from "react";
import SubmitBtn from "./submit-button";
import { Inter } from "next/font/google";
import { sendEmail } from "./send-email";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import "./local-css/contact.css";

const inter = Inter({ subsets: ["latin"] });
export default function Contact() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    contactType: "",
    message: "",
  });

  const handleContactTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // Get the selected value from the <select> element
    const selectedContactType = event.target.value;

    // Update the formData with the selected value
    setFormData((prevData) => ({
      ...prevData,
      contactType: selectedContactType,
    }));
  };
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="m-8 sm:mb-4 w-[min(93%,38rem)]">
      <Toaster
        position="top-right"
        toastOptions={{
          // Define default options
          className: "",
          duration: 6000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          // Default options for specific types
          success: {
            duration: 6000,
          },
        }}
      />

      <section>
        <form
          className="mt-2 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success(
              "We got your message, and will get back to you within a day."
            );
            // Clear the form if clearForm is true
            setFormData((prevData) => ({
              senderName: "",
              senderEmail: "",
              contactType: "",
              message: "",
            }));
          }}
        >
          <div className="flex flex-col sm:flex-row mb-4">
            <input
              className="flex-1 h-8 sm:h-10 sm:w-1/2 p-4 text-white bg-transparent rounded-md outline transition-all dark:outline-none focus:outline-white placeholder-emerald-50 card"
              name="senderName"
              type="text"
              required
              maxLength={81}
              placeholder="Your name"
              aria-label="Enter name"
              value={formData.senderName}
              onChange={handleInputChange}
            />
            <input
              className="flex-1 h-8 sm:h-10 sm:w-1/2 sm:ml-4 mt-5 sm:mt-0 p-4 text-white bg-transparent rounded-md outline transition-all dark:outline-none focus:outline-white placeholder-emerald-50 card"
              name="senderEmail"
              type="email"
              required
              maxLength={100}
              placeholder="Your email"
              aria-label="Enter email"
              value={formData.senderEmail}
              onChange={handleInputChange}
            />
          </div>
          {/* Options dropdown list => can use better styling, bg color does not look right */}
          <select
            className="h-10 my-1 px-4 text-white bg-transparent active:bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 focus:bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 hover:bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 rounded-md outline transition-all dark:outline-none focus:outline-white placeholder-emerald-50 card dropdown"
            name="contactType"
            onChange={handleContactTypeChange}
            value={formData.contactType}
            required
          >
            <option value="" disabled className="dropwdown dropdown-disabled">
              What brings you here?
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Order Help">Help with an order</option>
            <option value="Collaboration">Let&#39;s work together</option>
            <option value="Feedback">Feedback</option>
            <option value="Report an issue">
              Report an issue (performance, accessibility, content, etc.)
            </option>
            <option value="Other">Other (describe below)</option>
            {/* Add more options as needed */}
          </select>
          <textarea
            className="h-44 p-4 my-5 mb-4 text-white bg-transparent rounded-md outline transition-all placeholder-emerald-50 focus:outline-white card"
            name="message"
            placeholder="Tell us more..."
            required
            maxLength={5000}
            aria-label="Enter message"
            value={formData.message}
            onChange={handleInputChange}
          />
          <SubmitBtn aria-label="Send message" />
        </form>
      </section>
    </div>
  );
}
