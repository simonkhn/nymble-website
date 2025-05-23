import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom AI Solutions & Development Services | NymbleAI',
  description: 'Transform your business with bespoke AI solutions. NymbleAI designs and develops custom AI-driven software to solve complex challenges and unlock new opportunities.',
  keywords: 'custom AI development, AI solutions, machine learning, AI consulting, business automation, AI integration',
  openGraph: {
    title: 'Custom AI Solutions & Development Services | NymbleAI',
    description: 'Transform your business with bespoke AI solutions. Expert AI development services for complex business challenges.',
    type: 'website',
    url: 'https://nymbleai.com/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'NymbleAI Custom AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Solutions & Development Services | NymbleAI',
    description: 'Transform your business with bespoke AI solutions. Expert AI development services for complex business challenges.',
    images: ['/og-services.jpg'],
  },
};

'use client';

import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  BarChart3, 
  Eye, 
  Cog, 
  Users, 
  Clock,
  Target,
  Lightbulb,
  Code,
  Database
} from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
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

  const getStepGradient = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'orange': return 'from-orange-500 to-orange-600';
      case 'teal': return 'from-teal-500 to-teal-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      case 'green': return 'from-green-500 to-green-600';
      default: return 'from-blue-500 to-blue-600';
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-100';
      case 'orange': return 'bg-orange-100';
      case 'teal': return 'bg-teal-100';
      case 'purple': return 'bg-purple-100';
      case 'green': return 'bg-green-100';
      default: return 'bg-blue-100';
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case 'blue': return 'text-blue-600';
      case 'orange': return 'text-orange-600';
      case 'teal': return 'text-teal-600';
      case 'purple': return 'text-purple-600';
      case 'green': return 'text-green-600';
      default: return 'text-blue-600';
    }
  };

  const approachSteps = [
    {
      number: "01",
      title: "Consultation & Discovery",
      description: "We begin by deeply understanding your unique challenges and objectives",
      details: "Collaborative workshops to map your current processes and identify AI opportunities",
      icon: MessageSquare,
      color: "blue"
    },
    {
      number: "02", 
      title: "Strategic Design",
      description: "Architecting the optimal AI solution for your specific use case",
      details: "Selecting the right models, technologies, and integration points",
      icon: Target,
      color: "orange"
    },
    {
      number: "03",
      title: "Agile Development", 
      description: "Iterative development with regular demonstrations and feedback loops",
      details: "Rapid prototyping to validate concepts before full implementation",
      icon: Code,
      color: "teal"
    },
    {
      number: "04",
      title: "Seamless Integration",
      description: "Ensuring our solutions work harmoniously with your existing systems", 
      details: "API-first design for maximum flexibility and scalability",
      icon: Cog,
      color: "purple"
    },
    {
      number: "05",
      title: "Ongoing Partnership",
      description: "Continuous optimization and support as your business evolves",
      details: "Regular performance reviews and enhancement opportunities", 
      icon: Users,
      color: "green"
    }
  ];

  const expertiseAreas = [
    {
      icon: MessageSquare,
      title: "Natural Language Processing & Understanding",
      description: "Advanced text analysis, sentiment detection, and language understanding"
    },
    {
      icon: Brain,
      title: "Machine Learning Model Development", 
      description: "Custom ML models trained on your specific data and use cases"
    },
    {
      icon: Zap,
      title: "Process Automation with AI",
      description: "Intelligent workflow automation that adapts and learns"
    },
    {
      icon: BarChart3,
      title: "Data Analysis & Predictive Analytics",
      description: "Transform your data into actionable insights and forecasts"
    },
    {
      icon: Code,
      title: "Custom LLM Application Development",
      description: "Tailored large language model applications for your business"
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Image and video analysis for quality control and automation"
    },
    {
      icon: Lightbulb,
      title: "AI-Powered Decision Support Systems",
      description: "Intelligent systems that enhance human decision-making"
    },
    {
      icon: Database,
      title: "Data Pipeline & Infrastructure",
      description: "Robust data architecture to power your AI initiatives"
    }
  ];

  const whyChooseReasons = [
    {
      title: "Deep AI expertise combined with business acumen",
      description: "Our team understands both cutting-edge AI technology and real-world business challenges"
    },
    {
      title: "Startup agility with enterprise reliability", 
      description: "We move fast without compromising on quality or security standards"
    },
    {
      title: "Transparent development process with clear milestones",
      description: "Regular updates, demos, and collaborative feedback throughout the project"
    },
    {
      title: "Focus on measurable business outcomes, not just technology",
      description: "Every solution is designed to deliver clear ROI and business value"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Vision, Powered by Our{' '}
              <span className="gradient-text bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                AI Expertise
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              NymbleAI designs and develops bespoke AI-driven software solutions to solve your most complex business challenges and unlock new opportunities.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4">
                Schedule Technical Consultation
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 text-lg px-8 py-4">
                View AI Capabilities Deck
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Proven Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a structured methodology that ensures your AI solution delivers real business value from day one.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {approachSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0"
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br ${getStepGradient(step.color)} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.number}
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-700 mb-2">{step.description}</p>
                  <p className="text-gray-600">{step.details}</p>
                </div>

                <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${getIconBg(step.color)} flex items-center justify-center`}>
                  <step.icon className={`w-8 h-8 ${getIconColor(step.color)}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings deep expertise across the full spectrum of AI technologies and applications.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {expertiseAreas.map((area, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                variants={fadeInUp}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <area.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose NymbleAI */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose NymbleAI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical excellence with business understanding to deliver AI solutions that truly transform your operations.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseReasons.map((reason, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Let's Build Your AI-Powered Future Together
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with custom AI solutions? Our team is here to help you navigate the possibilities and build something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg px-8 py-4">
                Schedule a Technical Consultation
                <ArrowRight size={20} />
              </Link>
              <button className="btn-secondary border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 text-lg px-8 py-4">
                View Our AI Capabilities Deck
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 