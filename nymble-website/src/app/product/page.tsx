'use client';

import { motion } from 'framer-motion';
import { Brain, CheckCircle, ArrowRight, Play, BarChart3, MessageSquare, Zap, TrendingUp, Users, Clock, DollarSign, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductPage() {
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
      {/* Product Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="gradient-text bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  NymbleSense
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-light mb-4 text-blue-100">
                Interaction Intelligence Platform
              </p>
              <p className="text-xl text-blue-200 mb-8 max-w-lg">
                Transform Every Conversation into Growth. Our AI platform analyzes your team's interactions, delivers actionable feedback, and automates critical workflows to boost performance and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  Request Personalized Demo
                </button>
                <button className="btn-secondary border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900">
                  <Play size={20} />
                  Watch Platform Tour
                </button>
              </div>
            </motion.div>
            
            {/* AI Core Animation */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative">
                <div className="ai-core mx-auto">
                  <div className="neural-lines">
                    <svg width="200" height="200" className="absolute inset-0">
                      <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,107,0,0.6)" />
                          <stop offset="100%" stopColor="rgba(0,128,128,0.6)" />
                        </linearGradient>
                      </defs>
                      {[...Array(8)].map((_, i) => (
                        <line
                          key={i}
                          x1="100"
                          y1="100"
                          x2={100 + 80 * Math.cos((i * Math.PI * 2) / 8)}
                          y2={100 + 80 * Math.sin((i * Math.PI * 2) / 8)}
                          stroke="url(#lineGrad)"
                          strokeWidth="2"
                          opacity="0.5"
                        />
                      ))}
                    </svg>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute inset-0 pointer-events-none">
                  {[
                    { icon: '📞', x: -60, y: -40, delay: 0 },
                    { icon: '👥', x: 60, y: -40, delay: 0.5 },
                    { icon: '💬', x: 0, y: 80, delay: 1 }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-3xl"
                      style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: item.delay
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The Challenge: Untapped Potential in Every Conversation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Every interaction contains valuable insights, but manually reviewing them is impossible. Critical opportunities slip through the cracks.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                emoji: "😰",
                title: "Inconsistent Performance",
                description: "Team members follow different approaches, leading to varied results"
              },
              {
                emoji: "⏰",
                title: "Time-Consuming Reviews",
                description: "Managers spend hours listening to calls instead of coaching"
              },
              {
                emoji: "📉",
                title: "Missed Opportunities",
                description: "Important follow-ups fall through the cracks, losing potential deals"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How NymbleSense Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How NymbleSense Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform transforms your interactions into actionable insights through a simple three-step process.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Capture & Transcribe",
                description: "Automatically record and transcribe all customer interactions across channels - calls, meetings, chats.",
                features: ["Real-time transcription", "Multi-channel support", "Speaker identification", "Custom vocabularies"]
              },
              {
                step: "02",
                icon: Brain,
                title: "Analyze & Extract",
                description: "Our AI extracts key information, sentiment, and identifies coaching opportunities in real-time.",
                features: ["Sentiment analysis", "Key topic extraction", "Compliance monitoring", "Performance scoring"]
              },
              {
                step: "03",
                icon: Zap,
                title: "Act & Automate",
                description: "Generate automated follow-ups, coaching insights, and trigger workflows based on conversation outcomes.",
                features: ["Automated follow-ups", "CRM integration", "Coaching recommendations", "Custom workflows"]
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 mb-16"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-xl text-gray-600 mb-6">{item.description}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Features & Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your team's performance and customer interactions.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BarChart3,
                title: "Real-time Analytics",
                description: "Get instant insights into conversation quality, performance metrics, and team effectiveness."
              },
              {
                icon: Brain,
                title: "AI-Powered Coaching",
                description: "Receive personalized coaching recommendations based on conversation analysis and best practices."
              },
              {
                icon: Zap,
                title: "Automated Workflows",
                description: "Trigger actions based on conversation outcomes - follow-ups, CRM updates, and more."
              },
              {
                icon: Users,
                title: "Team Performance",
                description: "Track and improve team performance with detailed analytics and coaching insights."
              },
              {
                icon: MessageSquare,
                title: "Multi-Channel Support",
                description: "Analyze conversations across phone calls, video meetings, and chat interactions."
              },
              {
                icon: TrendingUp,
                title: "ROI Tracking",
                description: "Measure the impact of improved interactions on your business outcomes and revenue."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card group"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the measurable impact NymbleSense delivers for businesses like yours.
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
                icon: TrendingUp,
                metric: "75%",
                label: "Reduction in call review time",
                description: "Managers focus on coaching, not listening"
              },
              {
                icon: CheckCircle,
                metric: "25%",
                label: "Increase in follow-up rate",
                description: "No qualified leads fall through cracks"
              },
              {
                icon: Users,
                metric: "40%",
                label: "Improvement in script adherence",
                description: "Consistent quality across all agents"
              },
              {
                icon: DollarSign,
                metric: "$2,000",
                label: "Monthly value delivered",
                description: "Clear ROI that justifies investment"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-200"
                variants={fadeInUp}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <div className="font-semibold text-gray-900 mb-2">{item.label}</div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Perfect For</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NymbleSense is designed for businesses that rely on customer interactions for growth.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Sales Teams",
              "Customer Success",
              "Support Centers",
              "Real Estate",
              "Healthcare",
              "Financial Services"
            ].map((industry, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold">{industry}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Interactions?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the businesses already using NymbleSense to boost performance and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4">
                Request Personalized Demo
                <ArrowRight size={20} />
              </button>
              <Link href="/success-story" className="btn-secondary border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 text-lg px-8 py-4">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 