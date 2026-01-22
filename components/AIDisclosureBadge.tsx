'use client';

import { AIDisclosure } from '@/types/creator';
import { motion } from 'framer-motion';

interface AIDisclosureBadgeProps {
  disclosure: AIDisclosure;
}

const badgeConfig = {
  'AI-Generated': {
    color: 'from-purple-500 to-pink-500',
    icon: '🤖',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-900',
  },
  'AI-Enhanced': {
    color: 'from-blue-500 to-cyan-500',
    icon: '✨',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-900',
  },
  'Hybrid (Human + AI)': {
    color: 'from-indigo-500 to-purple-500',
    icon: '🤝',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-900',
  },
  'Human-Created': {
    color: 'from-green-500 to-emerald-500',
    icon: '👤',
    bgColor: 'bg-green-50',
    textColor: 'text-green-900',
  },
};

export default function AIDisclosureBadge({ disclosure }: AIDisclosureBadgeProps) {
  const config = badgeConfig[disclosure];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${config.bgColor} border-2 border-white shadow-lg`}
    >
      <span className="text-lg">{config.icon}</span>
      <span className={`font-semibold text-sm ${config.textColor}`}>
        {disclosure}
      </span>
    </motion.div>
  );
}
