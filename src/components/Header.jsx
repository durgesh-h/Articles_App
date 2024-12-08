import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search } from 'lucide-react';

export function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full"
      >
        <BookOpen className="w-10 h-10 text-blue-600" />
      </motion.div>
      <h1 className="text-5xl font-bold text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
        Discover Articles
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Explore our curated collection of insightful articles across various topics
      </p>
      <div className="flex justify-center gap-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <Search className="w-4 h-4" />
          Advanced Search
        </span>
      </div>
    </motion.div>
  );
}