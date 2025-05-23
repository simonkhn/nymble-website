import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact NymbleAI - Let\'s Start a Conversation',
  description: 'Get in touch with NymbleAI to discuss your AI needs. Schedule a demo, explore custom solutions, or learn more about our services.',
  keywords: 'contact NymbleAI, AI consultation, demo request, custom AI solutions, business automation',
  openGraph: {
    title: 'Contact NymbleAI - Let\'s Start a Conversation',
    description: 'Get in touch with NymbleAI to discuss your AI needs. Schedule a demo, explore custom solutions, or learn more about our services.',
    type: 'website',
    url: 'https://nymbleai.com/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact NymbleAI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact NymbleAI - Let\'s Start a Conversation',
    description: 'Get in touch with NymbleAI to discuss your AI needs. Schedule a demo, explore custom solutions, or learn more about our services.',
    images: ['/og-contact.jpg'],
  },
};

'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  source: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  interest?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    source: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your area of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        source: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <motion.div 
          className="max-w-2xl mx-auto text-center px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              We've received your message and will get back to you within 24 business hours.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Whether you're ready to transform your business or just exploring possibilities, we're here to help
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-3xl font-bold mb-6">Quick Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                          errors.company ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Your company"
                      />
                      {errors.company && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in: *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
                        errors.interest ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Please select...</option>
                      <option value="nymblsense-demo">NymbleSense Demo</option>
                      <option value="custom-ai">Custom AI Solutions</option>
                      <option value="partnership">General Partnership</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.interest && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors resize-vertical"
                      placeholder="Tell us about your project or questions..."
                    />
                  </div>

                  <div>
                    <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      value={formData.source}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Please select...</option>
                      <option value="google">Google Search</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="referral">Referral</option>
                      <option value="social-media">Social Media</option>
                      <option value="conference">Conference/Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary flex items-center justify-center gap-3 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-8">
                {/* Schedule Meeting */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <Calendar className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">Schedule a Meeting</h3>
                  </div>
                  <p className="text-blue-100 mb-6">
                    Book time directly with our team for a personalized discussion about your AI needs.
                  </p>
                  <button className="btn-secondary border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 w-full">
                    Book a Call
                  </button>
                </div>

                {/* Direct Contact */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">hello@nymbleai.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-gray-600">Within 24 business hours</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">Distributed team serving clients globally</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternative CTA */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200">
                  <h3 className="text-2xl font-bold mb-4">Not ready to reach out yet?</h3>
                  <p className="text-gray-600 mb-6">
                    Download our resources to learn more about AI implementation and readiness.
                  </p>
                  <div className="space-y-3">
                    <button className="btn-secondary w-full">
                      Download AI Readiness Assessment
                    </button>
                    <button className="btn-secondary w-full">
                      Subscribe to AI Insights Newsletter
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about NymbleAI and our solutions.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question: "How quickly can NymbleSense be implemented?",
                answer: "Most implementations are completed within 2-4 weeks, including setup, integration, and team training."
              },
              {
                question: "What kind of ROI can we expect?",
                answer: "Our clients typically see 25-75% efficiency improvements within the first month, with clear ROI justification."
              },
              {
                question: "Do you offer custom AI development?",
                answer: "Yes! In addition to NymbleSense, we build custom AI solutions tailored to your specific business needs."
              },
              {
                question: "What integrations do you support?",
                answer: "We integrate with most major CRM platforms, phone systems, and business tools. If you don't see yours listed, we can likely build a custom integration."
              },
              {
                question: "Is there ongoing support included?",
                answer: "Absolutely. We provide comprehensive support, regular optimization sessions, and continuous platform improvements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
} 