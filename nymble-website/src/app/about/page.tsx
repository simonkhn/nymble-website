import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About NymbleAI - Building the Future of Intelligent Business',
  description: 'Learn about NymbleAI\'s mission to make sophisticated AI accessible and transformative for businesses of all sizes. Meet our team and discover our story.',
  keywords: 'about NymbleAI, AI company, team, mission, vision, AI innovation, business transformation',
  openGraph: {
    title: 'About NymbleAI - Building the Future of Intelligent Business',
    description: 'Learn about NymbleAI\'s mission to make sophisticated AI accessible and transformative for businesses of all sizes.',
    type: 'website',
    url: 'https://nymbleai.com/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About NymbleAI Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About NymbleAI - Building the Future of Intelligent Business',
    description: 'Learn about NymbleAI\'s mission to make sophisticated AI accessible and transformative for businesses of all sizes.',
    images: ['/og-about.jpg'],
  },
};

'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Zap, 
  Users, 
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Rocket,
  Shield,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
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

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "We don't chase technology for its own sake. Every solution we build serves a real business need.",
      color: "orange"
    },
    {
      icon: Heart,
      title: "Client Success First", 
      description: "Your wins are our wins. We measure our success by the tangible results we deliver for your business.",
      color: "red"
    },
    {
      icon: MessageSquare,
      title: "Transparent Partnership",
      description: "No black boxes or tech mystique. We explain what we're building and why it matters to you.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Agile Excellence",
      description: "Startup speed with enterprise standards. We move fast without breaking things.",
      color: "green"
    }
  ];

  const getValueColor = (color: string) => {
    switch (color) {
      case 'orange': return 'from-orange-500 to-orange-600';
      case 'red': return 'from-red-500 to-red-600';
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'green': return 'from-green-500 to-green-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const getValueBg = (color: string) => {
    switch (color) {
      case 'orange': return 'bg-orange-100';
      case 'red': return 'bg-red-100';
      case 'blue': return 'bg-blue-100';
      case 'green': return 'bg-green-100';
      default: return 'bg-blue-100';
    }
  };

  const getValueIcon = (color: string) => {
    switch (color) {
      case 'orange': return 'text-orange-600';
      case 'red': return 'text-red-600';
      case 'blue': return 'text-blue-600';
      case 'green': return 'text-green-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building the Future of{' '}
              <span className="gradient-text bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Intelligent Business
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're on a mission to make sophisticated AI accessible, practical, and transformative for businesses of all sizes
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            </motion.div>

            <motion.div 
              className="prose prose-lg max-w-none text-gray-600"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="text-xl leading-relaxed mb-6">
                Founded just three months ago by a team passionate about bridging the gap between cutting-edge AI technology and real-world business needs, NymbleAI has already made significant strides. We saw businesses struggling to harness the power of AI - drowning in buzzwords but lacking practical solutions. We decided to change that.
              </p>
              <p className="text-xl leading-relaxed">
                In our short time, we've already delivered transformative results for our clients, proving that with the right approach, AI can deliver immediate, measurable value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              className="text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower businesses of all sizes by making sophisticated AI solutions accessible, practical, and transformative.
              </p>
            </motion.div>

            <motion.div 
              className="text-center"
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the trusted partner in AI-driven business innovation, helping companies work smarter and achieve more through intelligent automation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and partners.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 ${getValueBg(value.color)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <value.icon className={`w-8 h-8 ${getValueIcon(value.color)}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Team</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8">
                We're a passionate group of AI engineers, business strategists, and product experts united by a common goal: making AI work for you. Our diverse backgrounds in enterprise software, machine learning research, and business operations give us unique insights into building practical AI solutions.
              </p>
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Growing Team</h3>
                </div>
                <p className="text-gray-600">
                  As a young company, we're actively building our team with top talent who share our vision of making AI accessible and impactful for businesses everywhere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Us in Building an Intelligent Future
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Whether you're looking to transform your business with AI or want to be part of our growing team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4">
                Partner with NymbleAI
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 text-lg px-8 py-4">
                Explore Career Opportunities
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 