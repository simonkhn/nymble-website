'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, CheckCircle, Users, ArrowRight, Quote, Star } from 'lucide-react';
import Link from 'next/link';

export default function SuccessStoryPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
              From Manual Reviews to{' '}
              <span className="gradient-text">Automated Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              How NymbleSense helped a forward-thinking senior living provider transform their sales process
            </p>
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Client */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">The Client</h2>
              <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                A progressive senior living provider managing multiple communities across the region, 
                committed to delivering exceptional service while scaling their operations efficiently.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like many growing businesses, they faced significant operational challenges that were impacting their growth potential.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Clock,
                title: "15+ Hours Weekly",
                description: "Sales managers spent countless hours reviewing call recordings instead of coaching their team"
              },
              {
                icon: TrendingUp,
                title: "Inconsistent Follow-ups",
                description: "Valuable leads were falling through the cracks due to manual processes and human oversight"
              },
              {
                icon: Users,
                title: "Inconsistent Quality",
                description: "Difficulty ensuring all agents followed best practices consistently across interactions"
              },
              {
                icon: CheckCircle,
                title: "Limited Visibility",
                description: "No clear way to measure conversation quality and outcomes systematically"
              }
            ].map((challenge, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implemented NymbleSense with custom configuration tailored specifically for the senior living industry.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Custom Implementation Included:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Integration with their existing phone system",
                  "Custom best practices and sales scripts specific to senior living",
                  "Automated email templates for various inquiry types",
                  "Direct CRM integration for seamless data flow"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Within just weeks of implementation, the results were dramatic and measurable.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                metric: "75%",
                title: "Reduction in call review time",
                description: "Managers now focus on coaching instead of listening to recordings",
                icon: Clock,
                color: "blue"
              },
              {
                metric: "25%",
                title: "Increase in lead follow-up rate",
                description: "No qualified lead falls through the cracks",
                icon: TrendingUp,
                color: "green"
              },
              {
                metric: "40%",
                title: "Improvement in script adherence",
                description: "Consistent, high-quality interactions across all agents",
                icon: Users,
                color: "purple"
              },
              {
                metric: "$2,000",
                title: "Monthly value delivered",
                description: "Clear ROI that justified the ongoing investment",
                icon: CheckCircle,
                color: "orange"
              }
            ].map((result, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
                variants={fadeInUp}
              >
                <div className={`w-16 h-16 bg-${result.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <result.icon className={`w-8 h-8 text-${result.color}-600`} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{result.metric}</div>
                <h3 className="font-bold text-lg mb-2">{result.title}</h3>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center relative">
              <Quote className="w-16 h-16 text-blue-300 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light mb-8 italic">
                "NymbleSense has fundamentally changed how we operate. What used to take our managers hours now happens automatically, and the quality of our customer interactions has never been better. The AI feedback helps our agents improve daily, and we're converting more inquiries into tours than ever before."
              </blockquote>
              <div className="border-t border-blue-400 pt-6">
                <cite className="text-xl font-semibold not-italic">Director of Sales Operations</cite>
                <p className="text-blue-200 mt-2">Senior Living Provider</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Success Factors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Several factors contributed to the remarkable success of this implementation.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Rapid Implementation",
                description: "Complete setup and training completed in just 3 weeks",
                icon: Clock
              },
              {
                title: "Personalized Training",
                description: "Comprehensive training sessions for all team members",
                icon: Users
              },
              {
                title: "Continuous Optimization",
                description: "Ongoing refinement based on real-world results and feedback",
                icon: TrendingUp
              },
              {
                title: "White-glove Support",
                description: "Dedicated support team throughout the entire journey",
                icon: CheckCircle
              }
            ].map((factor, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                <p className="text-gray-600">{factor.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to achieve similar results?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join the businesses already transforming their operations with NymbleSense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/product" className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                Schedule Your Demo
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary border-orange-200 text-orange-200 hover:bg-orange-200 hover:text-orange-600">
                Download the Full Case Study
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 