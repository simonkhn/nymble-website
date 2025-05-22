'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, Zap, Users, TrendingUp, Star, Play, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Amplify Your Business with{' '}
              <span className="gradient-text">Intelligent Automation</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We build custom AI solutions and offer NymbleSense, our platform to transform your team's interactions into actionable insights and automated workflows.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/product" className="btn-primary text-lg px-8 py-4">
                Explore NymbleSense
                <ArrowRight size={20} />
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                Discuss Custom AI Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transform Pain Points into Competitive Advantages
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Every day, businesses face challenges with inconsistent processes, time-consuming manual tasks, and missed opportunities hidden in their data. NymbleAI transforms these pain points into competitive advantages through intelligent automation and AI-powered insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Offerings - Two Paths */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Choose Your AI Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a ready-to-deploy solution or custom-built AI, we have the perfect path for your business.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Path 1 - NymbleSense */}
            <motion.div 
              className="feature-card group"
              variants={fadeInUp}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">NymbleSense: AI-Powered Interaction Intelligence</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Transform every conversation into actionable insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Automate follow-ups and routine tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>Ensure consistent performance across your team</span>
                </li>
              </ul>
              <Link href="/product" className="btn-primary w-full">
                Discover NymbleSense
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Path 2 - Custom AI Solutions */}
            <motion.div 
              className="feature-card group"
              variants={fadeInUp}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tailored AI to Meet Your Unique Business Needs</h3>
              </div>
              <p className="text-gray-600 mb-6">
                From natural language processing to predictive analytics, we design and build custom AI solutions that solve your specific challenges.
              </p>
              <Link href="/services" className="btn-secondary w-full">
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Success Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                "25% boost in follow-up efficiency with NymbleSense"
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                See how we helped a senior living provider achieve measurable results with our AI-powered interaction intelligence platform.
              </p>
              <Link href="/success-story" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Read The Full Case Study
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why NymbleAI Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose NymbleAI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI company. We're your partners in transformation.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Brain,
                title: "Innovation First",
                description: "Leveraging cutting-edge AI to solve real business problems"
              },
              {
                icon: Users,
                title: "Client-Centric",
                description: "Your success is our primary measure of achievement"
              },
              {
                icon: Zap,
                title: "Agile & Adaptive",
                description: "Fast-moving startup energy with enterprise-grade delivery"
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Measurable ROI from day one"
              }
            ].map((item, index) => (
              <motion.div key={index} className="text-center" variants={fadeInUp}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to transform your business with AI?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join forward-thinking companies who are already leveraging AI to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                <Calendar size={20} />
                Schedule a Consultation
              </Link>
              <button className="btn-secondary text-lg px-8 py-4">
                <Play size={20} />
                Download Our AI Readiness Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
