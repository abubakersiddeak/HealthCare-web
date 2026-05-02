"use client";

import { useState } from "react";
import PageHeading from "@/components/common/PageHeading";
import Button from "@/components/ui/Button";
import { SERVICES } from "@/data/services";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        department: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <PageHeading
        title="Book an Appointment"
        description="Schedule your visit with our expert doctors"
      />
      <div className="max-w-2xl mx-auto px-4 py-16">
        {submitted ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-emerald-600 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 mb-2">
              Your appointment request has been received.
            </p>
            <p className="text-gray-600">
              We will contact you shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-lg p-8 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">
                Department/Service *
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
              >
                <option value="">Select a department</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-900 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Tell us about your health concerns (optional)"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Book Appointment
            </Button>

            <p className="text-gray-600 text-sm text-center mt-4">
              * Required fields. We will contact you to confirm your
              appointment.
            </p>
          </form>
        )}
      </div>
    </>
  );
}
