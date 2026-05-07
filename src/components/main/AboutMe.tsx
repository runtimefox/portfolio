'use client';
import type { FC } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const text = [
  "Hello! I'm Ivan Yuzov - frontend developer from Finland. I love creating beautiful and functional web applications.",
  'In my free time, I enjoy exploring new technologies, contributing to open-source projects and sharing my knowledge through blogging and speaking at tech events.',
  "I'm passionate about building user-friendly interfaces and continuously improving my skills.",
  'Ready to implement excellent projects and solve complex problems.',
];

export const AboutMe: FC = () => {
  return (
    <section className="bg-gray-100 w-full py-24 px-4" id="about">
      <div className="max-w-xl mx-auto text-center flex flex-col gap-8">
        <motion.h2
          className="font-gilroy font-bold text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          About Me
        </motion.h2>

        {text.map((text, i) => (
          <motion.p
            key={i}
            className="font-gilroy font-medium text-base leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}>
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};
