import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'certificates', href: '#certificates' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F1F3D]/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-white font-bold text-lg">
            <Code2 className="text-[#378ADD]" size={22} />
            <span className="text-[#378ADD]">Ahmed</span>
            <span className="text-white hidden sm:inline">Ben Henda</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className="text-gray-300 hover:text-[#7EB8F7] text-sm font-medium transition-colors"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-[#378ADD]/40 text-[#7EB8F7] text-sm font-semibold hover:bg-[#378ADD]/10 transition-colors"
            >
              <span className={i18n.language === 'en' ? 'text-white' : 'text-gray-500'}>EN</span>
              <span className="text-gray-500">/</span>
              <span className={i18n.language === 'de' ? 'text-white' : 'text-gray-500'}>DE</span>
            </button>

            <button
              className="lg:hidden text-gray-300 hover:text-white transition-colors"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0F1F3D]/98 border-t border-[#378ADD]/20"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2.5 text-gray-300 hover:text-[#7EB8F7] hover:bg-[#378ADD]/10 rounded-lg text-sm font-medium transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
