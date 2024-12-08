import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ThumbsUp, MessageCircle, Bookmark, Share2 } from 'lucide-react';

export function ArticleCard({ article, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-blue-500 transition-colors"
          >
            <Bookmark className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-blue-500 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-12 h-12 rounded-full border-2 border-white shadow-md"
          />
          <div>
            <h4 className="font-medium text-gray-900">{article.author.name}</h4>
            <p className="text-sm text-gray-500">{article.date}</p>
          </div>
        </div>

        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
            {article.category}
          </span>
          
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h3>
          
          <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
          
          <div className="pt-4 flex items-center justify-between text-sm text-gray-500 border-t">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <ThumbsUp className="w-4 h-4" />
                {article.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {article.comments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}