import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Flag, Languages, Code2, Target, Linkedin, Github, Download } from 'lucide-react';

const badges = [
  { icon: Flag, key: 'origin' },
  { icon: Languages, key: 'language' },
  { icon: Code2, key: 'experience' },
  { icon: Target, key: 'goal' },
];

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#378ADD]/30 to-[#7EB8F7]/10 rounded-2xl blur-xl scale-110" />
              <img
                src="./image-about.png"
                alt="Ahmed Ben Henda"
                className="relative w-72 h-85 object-cover rounded-2xl shadow-2xl border-2 border-[#378ADD]/30"
              />
              <div className="absolute -bottom-2 -right-4 bg-[#378ADD] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg">
                Available 2027
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <motion.h2
              className="section-title text-left text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t('about.title')}
            </motion.h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              {t('about.bio')}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              {badges.map(({ icon: Icon, key }) => (
                <span key={key} className="badge-primary">
                  <Icon size={14} />
                  {t(`about.badges.${key}`)}
                </span>
              ))}
            </div>

            {/* Why Germany */}
            <div className="bg-[#1a3260]/50 border border-[#378ADD]/20 rounded-xl p-4 mb-6">
              <p className="text-sm font-semibold text-[#378ADD] mb-2">Why Germany?</p>
              <p className="text-gray-400 text-sm italic leading-relaxed">
                {t('about.whyGermany')}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Download size={16} />
                {t('about.downloadCV')}
              </a>
              <a
                href="https://linkedin.com/in/ahmed-ben-henda-a98233260"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/AhmedDeV00"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
