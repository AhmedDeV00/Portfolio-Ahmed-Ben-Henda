import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award, ExternalLink, CheckCircle, Clock } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  hours?: string;
  credentialId?: string;
  verifyUrl?: string;
  note?: string;
  inProgress?: boolean;
}

const certificates: Certificate[] = [
  {
    title: 'The Complete 2024 Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'November 2024',
    hours: '61.5 hours',
    credentialId: 'UC-486766d9-62ee-40e7-90f8-44eed9199df7',
    verifyUrl: 'https://ude.my/UC-486766d9-62ee-40e7-90f8-44eed9199df7',
  },
  {
    title: 'TQ 1 — Teilqualifikation IT-Services',
    issuer: 'Upskilling4Germany',
    date: '2025',
    inProgress: true,
  },
  {
    title: 'Hochschulreife Recognition',
    issuer: 'Bayerisches Landesamt für Schule',
    date: 'March 2026',
    note: 'Tunisian Baccalaureat recognized as equivalent to German Abitur',
  },
];

const issuerColors: Record<string, string> = {
  Udemy: '#EC5252',
  Upskilling4Germany: '#378ADD',
  'Bayerisches Landesamt für Schule': '#4CAF50',
};

export default function Certificates() {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">{t('certificates.title')}</h2>
          <p className="section-subtitle">
            Official credentials — each one verifiable and linked.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a3260]/50 border border-[#378ADD]/20 rounded-2xl p-6 hover:border-[#378ADD]/40 transition-all hover:shadow-lg hover:shadow-[#378ADD]/10 flex flex-col"
            >
              {/* Icon & Issuer */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${issuerColors[cert.issuer] || '#378ADD'}20` }}
                >
                  <Award
                    size={20}
                    style={{ color: issuerColors[cert.issuer] || '#378ADD' }}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: issuerColors[cert.issuer] || '#378ADD' }}
                  >
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 text-xs">{cert.date}</p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-sm leading-snug mb-3 flex-1">
                {cert.title}
              </h3>

              {/* Meta */}
              <div className="space-y-2">
                {cert.hours && (
                  <p className="text-gray-400 text-xs flex items-center gap-1.5">
                    <Clock size={12} className="text-[#378ADD]" />
                    {cert.hours}
                  </p>
                )}

                {cert.credentialId && (
                  <p className="text-gray-500 text-xs font-mono truncate">
                    ID: {cert.credentialId}
                  </p>
                )}

                {cert.inProgress && (
                  <span className="inline-flex items-center gap-1.5 text-yellow-400 text-xs font-medium">
                    <Clock size={12} />
                    {t('certificates.inProgress')}
                  </span>
                )}

                {cert.note && (
                  <p className="flex items-start gap-1.5 text-green-400 text-xs">
                    <CheckCircle size={12} className="mt-0.5 flex-shrink-0" />
                    {cert.note}
                  </p>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#378ADD] text-xs font-medium hover:text-[#7EB8F7] transition-colors mt-2"
                  >
                    <ExternalLink size={12} />
                    {t('certificates.verify')}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
