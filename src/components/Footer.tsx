import { useTranslation } from 'react-i18next';
import { Code2, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] border-t border-[#378ADD]/20 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold">
            <Code2 className="text-[#378ADD]" size={20} />
            <span>Ahmed Ben Henda</span>
          </div>

          <p className="text-gray-500 text-sm text-center">
            {t('footer.seeking')}
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ahmed-ben-henda-a98233260"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#7EB8F7] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/AhmedDeV00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#7EB8F7] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:ahmedbenhenda.dev@gmail.com"
              className="text-gray-500 hover:text-[#7EB8F7] transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#378ADD]/10 text-center">
          <p className="text-gray-600 text-xs">
            © {year} Ahmed Ben Henda · {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
