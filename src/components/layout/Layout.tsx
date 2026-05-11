import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  Instagram,
  MessageCircle,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { clinicList, getClinicByPath } from '@/data/clinics';
import Logo from '@/components/Logo';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnitsOpen, setIsUnitsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const clinic = getClinicByPath(location.pathname);
  const { theme } = clinic;

  useEffect(() => {
    setIsMenuOpen(false);
    setIsUnitsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col text-gray-900"
      style={{ backgroundColor: theme.surface, fontFamily: 'Noto Sans, system-ui, sans-serif' }}
    >
      {/* Top bar */}
      <div
        className="text-white py-2 px-4 text-xs md:text-sm hidden md:flex justify-between items-center"
        style={{ backgroundColor: theme.primaryDark }}
      >
        <div className="flex items-center gap-5">
          <a
            href={`tel:+${clinic.whatsapp}`}
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Phone size={13} strokeWidth={2.2} /> {clinic.phoneDisplay}
          </a>
          <a
            href={`mailto:${clinic.email}`}
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer"
          >
            <Mail size={13} strokeWidth={2.2} /> {clinic.email}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="opacity-90 flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: theme.accent }}
            />
            Atendimento 24h em todo o Brasil
          </span>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="Instagram"
          >
            <Instagram size={15} />
          </a>
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={15} />
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'sticky-header-blur shadow-elevation-1' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <Link
              to={clinic.path}
              className="flex items-center gap-3 cursor-pointer focus:outline-none rounded-lg"
            >
              <Logo size={isScrolled ? 40 : 48} className="transition-all duration-300" />
              <div className="leading-tight">
                <span
                  className="font-extrabold text-lg md:text-xl block tracking-tight"
                  style={{ color: theme.primary, fontFamily: 'Figtree, sans-serif' }}
                >
                  {clinic.brand}
                </span>
                <span className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-wider hidden sm:block">
                  {clinic.region}
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className="px-3 py-2 rounded-md font-semibold transition-colors text-sm cursor-pointer hover:bg-gray-50"
                style={{
                  color: clinic.slug === 'evolucao' ? theme.primary : '#475569',
                }}
              >
                Início
              </Link>

              {/* Unidades dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsUnitsOpen(true)}
                onMouseLeave={() => setIsUnitsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-3 py-2 rounded-md font-semibold transition-colors text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setIsUnitsOpen((v) => !v)}
                  aria-expanded={isUnitsOpen}
                >
                  Unidades
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${isUnitsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isUnitsOpen && (
                  <div className="absolute top-full left-0 pt-2 w-[320px] z-50">
                    <div className="bg-white rounded-2xl shadow-elevation-3 border border-gray-100 overflow-hidden">
                      <div className="px-4 pt-4 pb-2 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                        Nossas unidades
                      </div>
                      {clinicList.map((c) => {
                        const isActive = c.slug === clinic.slug;
                        return (
                          <Link
                            key={c.slug}
                            to={c.path}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-50 first:border-0 group cursor-pointer"
                            style={isActive ? { backgroundColor: `${c.theme.primary}08` } : undefined}
                          >
                            <div
                              className="w-10 h-10 rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm"
                              style={{ backgroundColor: c.theme.primary }}
                            >
                              {c.theme.initial}
                            </div>
                            <div className="flex-grow">
                              <div className="font-bold text-sm text-gray-900">{c.shortName}</div>
                              <div className="text-xs text-gray-500">{c.region}</div>
                            </div>
                            <ArrowRight
                              size={14}
                              className="text-gray-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {[
                { href: '#triagem', label: 'Triagem' },
                { href: '#youtube', label: 'Vídeos' },
                { href: '#estruturas', label: 'Estrutura' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-2 rounded-md font-semibold transition-colors text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}

              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-200 text-sm cursor-pointer"
                style={{ backgroundColor: theme.accent, color: '#1A4D2E' }}
              >
                <MessageCircle size={15} strokeWidth={2.4} />
                FALE CONOSCO
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-gray-700 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-elevation-2 max-h-[85vh] overflow-y-auto">
            <div className="px-4 pt-4 pb-6 space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 pb-2">
                Nossas unidades
              </p>
              {clinicList.map((c) => {
                const isActive = c.slug === clinic.slug;
                return (
                  <Link
                    key={c.slug}
                    to={c.path}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer"
                    style={{
                      backgroundColor: isActive ? `${c.theme.primary}15` : 'transparent',
                      color: isActive ? c.theme.primary : '#1E293B',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0"
                      style={{ backgroundColor: c.theme.primary }}
                    >
                      {c.theme.initial}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold">{c.shortName}</span>
                      <span className="text-xs text-gray-500 font-normal">{c.region}</span>
                    </div>
                  </Link>
                );
              })}

              <div className="border-t border-gray-100 my-3" />

              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 pb-2">
                Navegação
              </p>
              {[
                { href: '#triagem', label: 'Triagem' },
                { href: '#youtube', label: 'Vídeos' },
                { href: '#estruturas', label: 'Estrutura' },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block px-3 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  {l.label}
                </a>
              ))}

              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-4 px-6 py-3.5 rounded-full font-bold shadow-md cursor-pointer"
                style={{ backgroundColor: theme.accent, color: '#1A4D2E' }}
              >
                <MessageCircle size={18} />
                FALE CONOSCO
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Floating action buttons - WhatsApp + Instagram */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={clinic.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full text-white flex items-center justify-center shadow-elevation-3 transition-all duration-200 hover:shadow-2xl hover:scale-105 cursor-pointer group"
          style={{
            background:
              'linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)',
          }}
          aria-label="Seguir no Instagram"
        >
          <Instagram size={24} className="transition-transform duration-200 group-hover:scale-110" />
        </a>
        <a
          href={clinic.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-elevation-3 transition-all duration-200 hover:shadow-2xl hover:scale-105 cursor-pointer group"
          aria-label="Falar pelo WhatsApp"
        >
          <MessageCircle size={26} className="transition-transform duration-200 group-hover:scale-110" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full" />
        </a>
      </div>

      {/* Footer */}
      <footer
        className="text-white pt-20 pb-8 relative overflow-hidden"
        style={{ backgroundColor: theme.primary }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"
          style={{ backgroundColor: theme.accent }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white rounded-2xl p-2 shadow-md flex items-center justify-center">
                  <Logo size={40} />
                </div>
                <div>
                  <span className="font-extrabold text-2xl block tracking-tight" style={{ fontFamily: 'Figtree, sans-serif' }}>
                    {clinic.brand}
                  </span>
                  <span className="text-xs text-white/70 uppercase tracking-widest font-medium">
                    {clinic.region}
                  </span>
                </div>
              </div>
              <p className="text-white/85 mb-6 max-w-md leading-relaxed">
                Aqui, você não está sozinho. Cuidamos de você e da sua história com empatia,
                profissionalismo e total dedicação. Atendimento 24h em todo o Brasil.
              </p>
              <div className="flex gap-3">
                <a
                  href={clinic.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer"
                  style={{ backgroundColor: theme.primaryDark }}
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer"
                  style={{ backgroundColor: theme.primaryDark }}
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold mb-5 uppercase tracking-widest text-white/70">
                Nossas Unidades
              </h3>
              <ul className="space-y-3 text-white/90">
                {clinicList.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={c.path}
                      className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <ArrowRight
                        size={12}
                        className="opacity-60 group-hover:translate-x-1 transition-transform"
                      />
                      <span>{c.shortName}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="#triagem"
                    className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-60 group-hover:translate-x-1 transition-transform"
                    />
                    Triagem online
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold mb-5 uppercase tracking-widest text-white/70">
                Contato
              </h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: theme.primaryDark }}
                  >
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="font-semibold">{clinic.phoneDisplay}</p>
                    <p className="text-xs opacity-80">Atendimento 24h</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: theme.primaryDark }}
                  >
                    <Mail size={15} />
                  </div>
                  <p className="break-all text-sm">{clinic.email}</p>
                </li>
              </ul>
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full font-bold transition-shadow shadow-md hover:shadow-lg text-sm cursor-pointer"
                style={{ backgroundColor: theme.accent, color: '#1A4D2E' }}
              >
                <MessageCircle size={15} />
                LIGUE AGORA
              </a>
            </div>
          </div>

          <div
            className="pt-8 text-white/75 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center gap-4 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.15)' }}
          >
            <p>
              &copy; {new Date().getFullYear()} {clinic.shortName}. Todos os direitos reservados.
            </p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
