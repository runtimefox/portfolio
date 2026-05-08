'use client';
import { TABS, type Tabs } from '@/types/tabs.types';
import { useState, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

export const NavigationTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(TABS.Home);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (tab: Tabs) => {
    setActiveTab(tab);
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(tab);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.div
      className="w-full border-b border-gray-200 px-8 sticky top-0 bg-white z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <nav className="hidden md:flex justify-between py-4 max-w-5xl mx-auto">
        {Object.values(TABS).map((tab) => (
          <button
            key={tab}
            className={`relative font-gilroy font-medium text-lg transition-colors duration-200 ${
              activeTab === tab ? 'text-black font-bold' : 'text-gray-400 hover:text-gray-600'
            }`}
            onClick={() => handleTabClick(tab)}>
            {tab}
            {activeTab === tab && (
              <motion.div
                className="absolute -bottom-4.25 left-0 right-0 h-0.5 bg-black"
                layoutId="underline"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </nav>

      <div className="flex md:hidden justify-between items-center py-4">
        <span className="font-gilroy font-bold text-lg">{activeTab}</span>
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <IoMdClose size={24} /> : <CiMenuBurger size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="flex md:hidden flex-col gap-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}>
            {Object.values(TABS).map((tab) => (
              <button
                key={tab}
                className={`text-left font-gilroy font-medium text-lg transition-colors duration-200 ${
                  activeTab === tab ? 'text-black font-bold' : 'text-gray-400'
                }`}
                onClick={() => handleTabClick(tab)}>
                {tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
