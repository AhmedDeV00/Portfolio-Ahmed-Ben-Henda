import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

interface LighthouseScore {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

interface Project {
  title: string;
  description: string;
  descriptionDE: string;
  tech: string[];
  lighthouse?: LighthouseScore;
  live: string;
  github: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Amine Meubles',
    description: 'Luxury furniture e-commerce — real freelance client. Built with React + TypeScript. Achieved 100/100 Best Practices Lighthouse score.',
    descriptionDE: 'Luxus-Möbel E-Commerce für einen echten Freelance-Kunden. Mit React + TypeScript entwickelt. Erreichte 100/100 Best Practices im Lighthouse-Score.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    lighthouse: { performance: 93, accessibility: 96, bestPractices: 100, seo: 92 },
    live: 'https://e-commerce-furniture-nine.vercel.app',
    github: 'https://github.com/AhmedDeV00',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
  },
  {
    title: 'Full Stack E-Commerce',
    description: 'Complete MERN stack e-commerce platform with full admin panel, product management, orders, and user authentication. Deployed on Render.',
    descriptionDE: 'Vollständige MERN-Stack E-Commerce-Plattform mit Admin-Panel, Produktverwaltung, Bestellungen und Benutzerauthentifizierung. Deployed auf Render.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT Auth'],
    live: 'https://github.com/AhmedDeV00/full_stack_ecommerce',
    github: 'https://github.com/AhmedDeV00/full_stack_ecommerce',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Travel Agency Website',
    description: 'Full stack travel agency platform with user authentication, tour listings, filtering, and pagination. Complete booking flow.',
    descriptionDE: 'Full-Stack-Reiseagentur-Plattform mit Benutzerauthentifizierung, Touren-Listings, Filterung und Seitennavigation.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    live: 'https://github.com/AhmedDeV00',
    github: 'https://github.com/AhmedDeV00',
    image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Social Media App',
    description: 'MERN full stack social media application with real-time features, post creation, likes, comments, and user profiles.',
    descriptionDE: 'MERN Full-Stack Social-Media-App mit Echtzeit-Funktionen, Beiträgen, Likes, Kommentaren und Benutzerprofilen.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
    live: 'https://github.com/AhmedDeV00',
    github: 'https://github.com/AhmedDeV00',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function ScoreBadge({ label, value }: { label: string; value: number }) {
  const color =
    value >= 90 ? 'text-green-400 border-green-400/30 bg-green-400/10' :
    value >= 70 ? 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10' :
    'text-red-400 border-red-400/30 bg-red-400/10';

  return (
    <div className={`flex flex-col items-center px-2 py-1.5 rounded-lg border ${color}`}>
      <span className="text-xs font-medium opacity-80">{label}</span>
      <span className="text-base font-bold">{value}</span>
    </div>
  );
}

export default function Projects() {
  const { t, i18n } = useTranslation();

  return (
    <section id="projects" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-[#1a3260]/50 border rounded-2xl overflow-hidden shadow-lg hover:shadow-[#378ADD]/15 transition-all hover:-translate-y-1 group ${
                project.featured ? 'border-[#378ADD]/50' : 'border-[#378ADD]/20'
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F3D]/80 to-transparent" />
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-[#378ADD] text-white text-xs font-bold rounded-full">
                    <Star size={10} fill="white" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {i18n.language === 'de' ? project.descriptionDE : project.description}
                </p>

                {/* Lighthouse */}
                {project.lighthouse && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">
                      {t('projects.lighthouse')}
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      <ScoreBadge label="Perf" value={project.lighthouse.performance} />
                      <ScoreBadge label="A11y" value={project.lighthouse.accessibility} />
                      <ScoreBadge label="Best" value={project.lighthouse.bestPractices} />
                      <ScoreBadge label="SEO" value={project.lighthouse.seo} />
                    </div>
                  </div>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm py-2 px-4"
                  >
                    <ExternalLink size={14} />
                    {t('projects.liveDemo')}
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm py-2 px-4"
                  >
                    <Github size={14} />
                    {t('projects.github')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
