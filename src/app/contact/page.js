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
    phone: "",
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
        message: "",
      });
      setSubmitted(false);
    }, 3000);
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
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-emerald-600 mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-700 mb-2">
                  Your message has been sent successfully.
                </p>
                <p className="text-gray-600">We&rsquo;ll get back to you soon.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-lg p-8 shadow-lg"
              >
                <div className="mb-6">
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

                <div className="mb-6">
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

                <div className="mb-6">
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

                <div className="mb-6">
                  <label className="block text-gray-900 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Send Message
                </Button>

                <p className="text-gray-600 text-sm text-center mt-4">
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
              <Card hover={false}>
                <div className="flex gap-4">
                  <MdPhone className="text-3xl text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Emergency Hotline
                    </h3>
                    <a
                      href={`tel:${SITE_CONFIG.emergencyNumber}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                    >
                      {SITE_CONFIG.emergencyNumber}
                    </a>
                    <h3 className="font-bold text-gray-900 mt-4 mb-2">
                      General Inquiries
                    </h3>
                    <a
                      href={`tel:${SITE_CONFIG.generalPhone}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      {SITE_CONFIG.generalPhone}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card hover={false}>
                <div className="flex gap-4">
                  <MdEmail className="text-3xl text-emerald-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card hover={false}>
                <div className="flex gap-4">
                  <MdLocationOn className="text-3xl text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-700">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </Card>

              {/* Hours */}
              <Card hover={false}>
                <div className="flex gap-4">
                  <MdAccessTime className="text-3xl text-purple-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Working Hours
                    </h3>
                    <p className="text-gray-700">
                      Weekdays: {SITE_CONFIG.workingHours.weekday}
                    </p>
                    <p className="text-gray-700">
                      Weekends: {SITE_CONFIG.workingHours.weekend}
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a href={`tel:${SITE_CONFIG.emergencyNumber}`} className="block">
                <Button variant="primary" size="lg" className="w-full">
                  Call Now
                </Button>
              </a>
              <a
                href={SITE_CONFIG.googleMapsAddress}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="secondary" size="lg" className="w-full">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Find Us on the Map
          </h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
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
