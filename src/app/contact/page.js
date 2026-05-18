"use client";

import { useState } from "react";
import PageHeading from "@/components/common/PageHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { MdPhone, MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { SITE_CONFIG } from "@/data/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          type: "contact",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.message || "Failed to send message.");
      }
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeading
        title="Contact Us"
        description="Get in touch with us for inquiries and support"
      />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h2>
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center shadow-lg animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">
                  Message Sent!
                </h3>
                <p className="text-emerald-700 mb-6">
                  Thank you for contacting us. We&rsquo;ll get back to you as soon as possible.
                </p>
                <Button variant="primary" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
              >
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {error}
                  </div>
                )}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full py-4 rounded-xl text-lg shadow-blue-200 shadow-lg disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-gray-500 text-sm text-center mt-4">
                  * Required fields
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>

            {/* Info Cards */}
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <Card hover={false} className="border-none shadow-md bg-white">
                <div className="flex gap-4 p-2">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdPhone className="text-2xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Emergency Hotline
                    </h3>
                    <a
                      href={`tel:${SITE_CONFIG.emergencyNumber}`}
                      className="text-blue-600 hover:text-blue-700 font-bold text-xl block mb-3"
                    >
                      {SITE_CONFIG.emergencyNumber}
                    </a>
                    <h3 className="font-bold text-gray-900 mb-1">
                      General Inquiries
                    </h3>
                    <a
                      href={`tel:${SITE_CONFIG.generalPhone}`}
                      className="text-gray-700 hover:text-blue-600 font-semibold"
                    >
                      {SITE_CONFIG.generalPhone}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card hover={false} className="border-none shadow-md bg-white">
                <div className="flex gap-4 p-2">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdEmail className="text-2xl text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card hover={false} className="border-none shadow-md bg-white">
                <div className="flex gap-4 p-2">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdLocationOn className="text-2xl text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-700 leading-relaxed">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </Card>

              {/* Hours */}
              <Card hover={false} className="border-none shadow-md bg-white">
                <div className="flex gap-4 p-2">
                  <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MdAccessTime className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      Working Hours
                    </h3>
                    <div className="text-gray-700 space-y-1">
                      <p><span className="font-medium">Weekdays:</span> {SITE_CONFIG.workingHours.weekday}</p>
                      <p><span className="font-medium">Weekends:</span> {SITE_CONFIG.workingHours.weekend}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a href={`tel:${SITE_CONFIG.emergencyNumber}`}>
                <Button variant="primary" size="lg" className="w-full py-4 rounded-xl shadow-lg shadow-blue-100">
                  Call Now
                </Button>
              </a>
              <a
                href={SITE_CONFIG.googleMapsAddress}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg" className="w-full py-4 rounded-xl border-2">
                  Directions
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Find Us on the Map
            </h2>
            <p className="text-gray-600">Located in the heart of Tangail for your convenience</p>
          </div>
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={SITE_CONFIG.googleMapsEmbed}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
