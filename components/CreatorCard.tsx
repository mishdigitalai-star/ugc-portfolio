'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Creator } from '@/types/creator';

interface CreatorCardProps {
  creator: Creator;
  index: number;
}

export default function CreatorCard({ creator, index }: CreatorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link href={`/${creator.slug}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={creator.profilePhoto}
              alt={creator.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-sm font-light line-clamp-2">
                {creator.bio}
              </p>
            </div>
          </div>
          
          <div className="p-6 bg-white">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#ff006e] to-[#8338ec] bg-clip-text text-transparent">
              {creator.name}
            </h3>
            <p className="text-gray-600 font-medium">{creator.niche}</p>
            
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <span className="text-[#ff006e]">●</span>
                <span>{creator.stats.followers}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#8338ec]">●</span>
                <span>{creator.stats.engagementRate} ER</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
