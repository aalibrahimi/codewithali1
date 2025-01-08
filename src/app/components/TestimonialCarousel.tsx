// components/TestimonialCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  content: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials = [
  {
    id: 1,
    content: "CodeWithAli has been an amazing experience! The lessons are clear and easy to follow.",
    author: "Student A"
  },
  {
    id: 2,
    content: "I've learned so much from the seminars. Highly recommend for anyone looking to improve their coding skills!",
    author: "Student B"
  },
  {
    id: 3,
    content: "The personalized attention and detailed explanations made learning complex concepts much easier.",
    author: "Student C"
  }
];

const TestimonialCarousel = ({ testimonials = defaultTestimonials }: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
        >
          <div className="text-gray-600 dark:text-gray-300 text-lg italic mb-6">
            "{testimonials[currentIndex].content}"
          </div>
          <div className="text-gray-800 dark:text-gray-200 font-semibold">
            - {testimonials[currentIndex].author}
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex 
                ? 'bg-primary-500' 
                : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;