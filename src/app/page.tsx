'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from './components/ui/card';
import TestimonialCarousel from './components/TestimonialCarousel';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ff6f61] to-[#d7263d]"
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Welcome to CodeWithAli!
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our services and start learning today!
            </p>
            <Link
              href="#services"
              className="inline-block px-8 py-3 bg-white text-[#ff6f61] rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Introduction to Python</h3>
              <p>Learn the basics of Python programming in this comprehensive course.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Web Development Bootcamp</h3>
              <p>Master the fundamentals of web development with HTML, CSS, and JavaScript.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Data Science with Python</h3>
              <p>Get started with data science and learn how to analyze data using Python.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <p className="text-center mb-4">Email: unfold@codewithali.com</p>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 bg-[#ff6f61] text-white rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Send Message
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}