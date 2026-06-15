import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  location: string;
  type: 'work' | 'education';
  note?: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: 'March 2026 – Present',
    title: 'Student Intern',
    company: 'hub4africa',
    location: 'Bavaria, Germany · Remote',
    type: 'work',
  },
  {
    date: 'Sep 2024 – Present',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'Tunisia',
    type: 'work',
  },
  {
    date: 'Jul – Aug 2024',
    title: 'Full Stack Developer Intern',
    company: 'Travel Agency',
    location: 'Tunisia',
    type: 'work',
  },
  {
    date: '2025 – Present',
    title: 'TQ 1 — IT Services',
    company: 'Upskilling4Germany',
    location: 'Remote',
    type: 'education',
  },
  {
    date: 'Jan – Jun 2024',
    title: 'Web Development Apprenticeship',
    company: 'Skills Pro',
    location: 'Tunisia',
    type: 'education',
  },
  {
    date: '2019 – 2022',
    title: 'Abitur — recognized as Hochschulreife',
    company: 'Gymnasium Bir Tayeb',
    location: 'Jemmel, Tunisia',
    note: 'Officially recognized by Bayerisches Landesamt für Schule',
    type: 'education',
  },
];

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 bg-[#0F1F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">{t('experience.title')}</h2>
          <p className="section-subtitle">Structured timeline — proving consistent growth.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-[#378ADD]/40 ml-4 sm:ml-8">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mb-10 pl-8 relative"
              >
                {/* Dot */}
                <div
                  className={`timeline-dot ${
                    item.type === 'work' ? 'bg-[#378ADD]' : 'bg-[#7EB8F7]'
                  }`}
                />

                {/* Card */}
                <div className="bg-[#1a3260]/40 border border-[#378ADD]/20 rounded-xl p-5 hover:border-[#378ADD]/40 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <span className="text-[#378ADD] text-xs font-mono font-medium">
                        {item.date}
                      </span>
                      <h3 className="font-bold text-white text-base mt-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-0.5">
                        {item.company} · {item.location}
                      </p>
                      {item.note && (
                        <p className="flex items-center gap-1.5 text-green-400 text-xs mt-2 font-medium">
                          <CheckCircle size={12} />
                          {item.note}
                        </p>
                      )}
                    </div>
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 ${
                        item.type === 'work'
                          ? 'bg-[#378ADD]/15 text-[#378ADD]'
                          : 'bg-[#7EB8F7]/15 text-[#7EB8F7]'
                      }`}
                    >
                      {item.type === 'work' ? (
                        <Briefcase size={16} />
                      ) : (
                        <GraduationCap size={16} />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
