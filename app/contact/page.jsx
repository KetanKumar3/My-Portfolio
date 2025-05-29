'use client'

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import Header from "@/components/Header";


export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace this with your actual backend/email logic (e.g. using EmailJS or Nodemailer API)
    try {
      // Simulate sending email
      await new Promise((res) => setTimeout(res, 1000));
      toast.success("Please sent message through mail!");

      // Reset form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <>
    <Header />
    <div className="min-h-screen text-gray-200 md:p-4">
      <Toaster />
      <div className=" md:max-w-7xl grid md:grid-cols-2 gap-10">
        <form
          onSubmit={handleSubmit}
          className="bg-[#2a2a2e] p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-emerald-500 mb-4">
            Let's work together
          </h2>
         

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Firstname"
              className="p-3 bg-[#1f1f22] border border-emerald-500 rounded"
              required
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Lastname"
              className="p-3 bg-[#1f1f22] border border-emerald-500 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="p-3 bg-[#1f1f22] border border-emerald-500 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number"
              className="p-3 bg-[#1f1f22] border border-emerald-500 rounded"
            />
          </div>

          

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here."
            rows="5"
            className="w-full mb-4 p-3 bg-[#1f1f22] border border-emerald-500 rounded"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-500 text-black font-semibold px-6 py-2 rounded-full hover:bg-emerald-500"
          >
            Send message
          </button>
        </form>

        <div className="flex flex-col justify-center space-y-6 mb-12 md:mb-0">
          <div className="flex items-center space-x-4">
            <div className="bg-[#2a2a2e] p-3 rounded">
              <Phone className="text-emerald-500" />
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <p>(+91) 9546355659</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-[#2a2a2e] p-3 rounded">
              <Mail className="text-emerald-500" />
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <p>ketanaryan2004@gmail.com</p>
            </div>
          </div>

          {/* <div className="flex items-center space-x-4">
            <div className="bg-[#2a2a2e] p-3 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                />
              </svg>
            </div>
            <div>
              <p className="text-gray-400">Address</p>
              <p>Code Corner, Tech Town 13579</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    </>
  );
}
