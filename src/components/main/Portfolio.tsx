'use client';
import Image from 'next/image';
import type { FC } from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    src: '/images/portfolio_1.png',
    alt: 'Project 1',
    href: 'https://github.com/runtimefox/Bird',
    name: 'Bird - platform for posting',
  },
  {
    src: '/images/portfolio_2.png',
    alt: 'Project 2',
    href: 'https://github.com/runtimefox/Todolist',
    name: 'TodoList',
  },
  {
    src: '/images/portfolio_3.png',
    alt: 'Project 3',
    href: 'https://github.com/runtimefox/Ymove',
    name: 'Ymove',
  },
  {
    src: '/images/portfolio_4.png',
    alt: 'Project 4',
    href: 'https://github.com/runtimefox/CryptoDash',
    name: 'CryptoDash',
  },
];

export const Portfolio: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 px-4 bg-gray-100" id="Projects">
      <div className="max-w-5xl mx-auto text-center flex flex-col gap-6 md:gap-8">
        <motion.h2
          className="font-gilroy font-bold text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          Portfolio
        </motion.h2>

        <div className="flex flex-col gap-12 md:gap-24">
          {PROJECTS.map(({ src, alt, href, name }) => (
            <motion.div
              key={name}
              className="flex flex-col items-center gap-3 md:gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}>
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}>
                <Image
                  src={src}
                  alt={alt}
                  width={1000}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </motion.div>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base md:text-xl underline">
                {name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
