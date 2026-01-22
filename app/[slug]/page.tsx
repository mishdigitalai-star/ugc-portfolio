'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { creators } from '@/data/creators';
import AIDisclosureBadge from '@/components/AIDisclosureBadge';
import Gallery from '@/components/Gallery';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function CreatorPage() {
  const params = useParams();
  const creator = creators.find((c) => c.slug === params.slug);

  if (!creator) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Creator Not Found</h1>
          <Link href="/" className="text-[#ff006e] hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-[#ff006e] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Creators</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-br from-white via-pink-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Creator Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={creator.profilePhoto}
                  alt={creator.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* AI Disclosure Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <AIDisclosureBadge disclosure={creator.aiDisclosure} />
              </div>
            </motion.div>

            {/* Creator Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <p className="text-[#ff006e] font-semibold text-lg mb-2">
                  {creator.niche}
                </p>
                <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-[#ff006e] to-[#8338ec] bg-clip-text text-transparent">
                  {creator.name}
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {creator.bio}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <p className="text-3xl font-bold text-[#ff006e]">
                    {creator.stats.followers}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Followers</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <p className="text-3xl font-bold text-[#8338ec]">
                    {creator.stats.engagementRate}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Engagement</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <p className="text-3xl font-bold text-[#06ffa5]">
                    {creator.stats.brandsWorkedWith}+
                  </p>
                  <p className="text-sm text-gray-600 mt-1">Brands</p>
                </div>
              </div>

              {/* Contact Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto bg-gradient-to-r from-[#ff006e] to-[#8338ec] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Contact {creator.name.split(' ')[0]}
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-[#ff006e] opacity-10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#8338ec] opacity-10 blur-3xl" />
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Samples</h2>
          <p className="text-gray-600 text-lg">
            Explore {creator.name.split(' ')[0]}&apos;s portfolio of stunning content
          </p>
        </motion.div>

        <Gallery items={creator.gallery} />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Love</h2>
          <p className="text-gray-600 text-lg">
            What brands say about working with {creator.name.split(' ')[0]}
          </p>
        </motion.div>

        <TestimonialsCarousel testimonials={creator.testimonials} />
      </section>

      {/* Brand Logos Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted By Leading Brands
            </h2>
            <p className="text-gray-600 text-lg">
              Collaborations with industry leaders
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {creator.brandLogos.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-700 transition-colors"
              >
                {brand}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#ff006e] to-[#8338ec]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Create Together
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Ready to bring your brand vision to life?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#ff006e] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start a Collaboration
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 UGC Creators. Crafted with passion for authentic content.
          </p>
        </div>
      </footer>
    </main>
  );
}
