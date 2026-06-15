import { useState, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { from_name: form.name, from_email: form.email, message: form.message },
        'YOUR_PUBLIC_KEY'
      );
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch {
      setError('Failed to send. Please email me directly at ahmedbenhenda.dev@gmail.com');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-white">{t('contact.title')}</h2>
          <p className="text-center text-gray-400 mb-2">{t('contact.location')}</p>
          <p className="text-center text-[#7EB8F7] mb-12 flex items-center justify-center gap-2 text-sm font-medium">
            <Clock size={14} />
            {t('contact.response')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Let's work together</h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 bg-[#378ADD]/15 rounded-lg">
                  <Mail size={16} className="text-[#378ADD]" />
                </div>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="hover:text-[#7EB8F7] transition-colors"
                >
                  {t('contact.email')}
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 bg-[#378ADD]/15 rounded-lg">
                  <MapPin size={16} className="text-[#378ADD]" />
                </div>
                <span>Tunisia · Available in Germany from 2027</span>
              </div>
            </div>

            <div className="flex gap-3">
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
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
                <CheckCircle size={48} className="text-green-400" />
                <h3 className="text-xl font-bold text-white">{t('contact.sent')}</h3>
                <p className="text-gray-400 text-center">I'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder={t('contact.namePlaceholder')}
                  required
                  className="input-field"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  className="input-field"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <textarea
                  rows={5}
                  placeholder={t('contact.messagePlaceholder')}
                  required
                  className="input-field resize-none"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
