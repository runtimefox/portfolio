'use client';
import Image from 'next/image';
import type { FC } from 'react';
import { motion } from 'framer-motion';

export const Hero: FC = () => {
  return (
    <section className="max-w-full px-4 md:px-8 py-6" id="Home">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            className="font-gilroy font-bold text-4xl md:text-6xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            Ivan <br /> Yuzov
          </motion.h1>

          <motion.p
            className="font-gilroy font-medium text-base md:text-xl leading-relaxed text-right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            Front-end Developer
            <br />
            21 years old
          </motion.p>
        </div>

        <motion.div
          className="relative w-full h-64 sm:h-96 md:h-150 mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}>
          <Image
            src="/images/Ivan Yuzov.JPG"
            alt="Ivan Yuzov"
            fill
            className="object-cover sm:object-center rounded-sm"
            style={{ objectPosition: 'center 40%' }}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};
