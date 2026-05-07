'use client';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import {
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const SKILLS = [
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-black' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'HTML & CSS', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
];

export const Skills: FC = () => {
  return (
    <section className="w-full py-24 px-4" id="skills">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">
        <motion.h2
          className="font-gilroy font-bold text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          Skills
        </motion.h2>

        <motion.p
          className="font-gilroy font-medium text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          I work with
        </motion.p>

        <div className="grid grid-cols-4 gap-6">
          {SKILLS.map(({ name, icon: Icon, color }, i) => (
            <motion.div
              key={name}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.15 }}>
              <Icon className={`text-5xl ${color}`} />
              <span className="font-gilroy font-medium text-lg">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
