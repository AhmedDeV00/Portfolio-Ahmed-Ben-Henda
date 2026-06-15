import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Monitor, Server, Wrench, Network, Globe } from 'lucide-react';

const skillGroups = [
  {
    category: 'Frontend',
    icon: Monitor,
    skills: ['React', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Figma'],
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
    color: 'from-emerald-500/20 to-emerald-600/5',
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Vite', 'Postman', 'VS Code'],
    color: 'from-orange-500/20 to-orange-600/5',
  },
  {
    category: 'IT Foundation (TQ 1)',
    icon: Network,
    skills: ['Networks', 'Linux', 'Virtualization', 'IT Security', 'Cloud Computing'],
    color: 'from-purple-500/20 to-purple-600/5',
  },
  {
    category: 'Languages',
    icon: Globe,
    skills: ['Arabic (Native)', 'Deutsch B2 → C1', 'English B1', 'French B1'],
    color: 'from-rose-500/20 to-rose-600/5',
  },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 bg-[#0F1F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">{t('skills.title')}</h2>
          <p className="section-subtitle">Organized by category — showing structured thinking.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#1a3260]/60 border border-[#378ADD]/20 rounded-2xl p-6 hover:border-[#378ADD]/50 transition-all hover:shadow-lg hover:shadow-[#378ADD]/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#378ADD]/15 rounded-lg">
                    <Icon size={18} className="text-[#378ADD]" />
                  </div>
                  <h3 className="text-[#7EB8F7] font-bold text-base">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
