'use client';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';

const CONTACTS = [
  { href: 'mailto:yuzovivan@icloud.com', icon: MdAlternateEmail, label: 'Email' },
  { href: 'https://github.com/runtimefox', icon: FaGithub, label: 'GitHub' },
  { href: 'https://t.me/Tot_tot_samii', icon: FaTelegram, label: 'Telegram' },
];

export const Contacts: FC = () => {
  return (
    <section className="w-full py-12 md:py-24 px-4" id="Contact">
      <div className="max-w-xl mx-auto text-center flex flex-col gap-6 md:gap-8">
        <motion.h2
          className="font-gilroy font-bold text-3xl md:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          Contacts
        </motion.h2>
        <motion.p
          className="font-gilroy font-medium text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          You can find me on GitHub, Telegram or send me an email
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 items-center">
          {CONTACTS.map(({ href, icon: Icon, label }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-base md:text-xl underline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}>
              <Icon className="text-xl md:text-2xl" />
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
